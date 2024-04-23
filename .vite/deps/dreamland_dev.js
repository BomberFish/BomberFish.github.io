// node_modules/dreamland/dist/dev.js
var DLFEATURES = ["css", "jsxLiterals", "usestring", "stores"];
(function(exports) {
  const VERSION = "0.0.9";
  const [USE_MAPFN, TARGET, PROXY, STEPS, LISTENERS, IF, STATEHOOK] = Array.from(Array(7), Symbol);
  class DreamlandError extends Error {
    constructor(message) {
      super("[dreamland-js/dev] " + message);
      this.name = "DreamlandDevError";
    }
  }
  function log(message) {
    console.log("[dreamland-js/dev] " + message);
  }
  function panic(message) {
    throw new DreamlandError("fatal: " + message);
  }
  function assert(condition, message) {
    if (!condition) {
      panic(message);
    }
  }
  let doc = document;
  const Fragment = Symbol();
  let __use_trap = false;
  Object.defineProperty(window, "use", {
    get: () => {
      __use_trap = true;
      return (ptr, mapping, ...rest) => {
        if (ptr instanceof Array)
          return usestr(ptr, mapping, ...rest);
        assert(
          isDLPtr(ptr),
          "a value was passed into use() that was not part of a stateful context"
        );
        __use_trap = false;
        if (mapping)
          ptr[USE_MAPFN] = mapping;
        return ptr;
      };
    }
  });
  const usestr = (strings, ...values) => {
    __use_trap = false;
    let state = $state({});
    const flattened_template = [];
    for (const i in strings) {
      flattened_template.push(strings[i]);
      if (values[i]) {
        const prop = values[i];
        if (isDLPtr(prop)) {
          const current_i = flattened_template.length;
          let oldparsed;
          handle(prop, (val) => {
            flattened_template[current_i] = String(val);
            let parsed = flattened_template.join("");
            if (parsed != oldparsed)
              state.string = parsed;
            oldparsed = parsed;
          });
        } else {
          flattened_template.push(String(prop));
        }
      }
    }
    state.string = flattened_template.join("");
    return use(state.string);
  };
  let TRAPS = /* @__PURE__ */ new Map();
  function $state(target) {
    assert(isobj(target), "$state() requires an object");
    target[LISTENERS] = [];
    target[TARGET] = target;
    let TOPRIMITIVE = Symbol.toPrimitive;
    let proxy = new Proxy(target, {
      get(target2, property, proxy2) {
        if (__use_trap) {
          let sym = Symbol();
          let trap = new Proxy(
            {
              [TARGET]: target2,
              [PROXY]: proxy2,
              [STEPS]: [property],
              [TOPRIMITIVE]: (_) => sym
            },
            {
              get(target3, property2) {
                if ([
                  TARGET,
                  PROXY,
                  STEPS,
                  USE_MAPFN,
                  TOPRIMITIVE
                ].includes(property2))
                  return target3[property2];
                property2 = TRAPS.get(property2) || property2;
                target3[STEPS].push(property2);
                return trap;
              }
            }
          );
          TRAPS.set(sym, trap);
          return trap;
        }
        return Reflect.get(target2, property, proxy2);
      },
      set(target2, property, val) {
        let trap = Reflect.set(target2, property, val);
        for (let listener of target2[LISTENERS]) {
          listener(target2, property, val);
        }
        if (target2[STATEHOOK])
          target2[STATEHOOK](target2, property, target2[property]);
        return trap;
      }
    });
    return proxy;
  }
  let isobj = (o) => o instanceof Object;
  let isfn = (o) => typeof o === "function";
  function isStateful(obj) {
    return isobj(obj) && LISTENERS in obj;
  }
  function isDLPtr(arr) {
    return isobj(arr) && STEPS in arr;
  }
  function $if(condition, then, otherwise) {
    otherwise ?? (otherwise = doc.createTextNode(""));
    if (!isDLPtr(condition))
      return condition ? then : otherwise;
    return { [IF]: condition, then, otherwise };
  }
  function handle(ptr, callback) {
    assert(isDLPtr(ptr), "handle() requires a stateful object");
    assert(isfn(callback), "handle() requires a callback function");
    let step, resolvedSteps = [];
    function update() {
      let val = ptr[TARGET];
      for (step of resolvedSteps) {
        val = val[step];
        if (!isobj(val))
          break;
      }
      let mapfn = ptr[USE_MAPFN];
      if (mapfn)
        val = mapfn(val);
      callback(val);
    }
    let curry = (target, i) => function subscription(tgt, prop, val) {
      if (prop === resolvedSteps[i] && target === tgt) {
        update();
        if (isobj(val)) {
          let v = val[LISTENERS];
          if (v && !v.includes(subscription)) {
            v.push(curry(val[TARGET], i + 1));
          }
        }
      }
    };
    for (let i in ptr[STEPS]) {
      let step2 = ptr[STEPS][i];
      if (isobj(step2) && step2[TARGET]) {
        handle(step2, (val) => {
          resolvedSteps[i] = val;
          update();
        });
        continue;
      }
      resolvedSteps[i] = step2;
    }
    let sub = curry(ptr[TARGET], 0);
    ptr[TARGET][LISTENERS].push(sub);
    sub(ptr[TARGET], resolvedSteps[0], ptr[TARGET][resolvedSteps[0]]);
  }
  function JSXAddFixedWrapper(ptr, cb, $if2) {
    let before, appended, first, flag;
    handle(ptr, (val) => {
      first = appended == null ? void 0 : appended[0];
      if (first)
        before = first.previousSibling || (flag = first.parentNode);
      if (appended)
        appended.forEach((a) => a.remove());
      appended = JSXAddChild(
        $if2 ? val ? $if2.then : $if2.otherwise : val,
        (el) => {
          if (before) {
            if (flag) {
              before.prepend(el);
              flag = null;
            } else
              before.after(el);
            before = el;
          } else
            cb(el);
        }
      );
    });
  }
  let curryset = (ptr) => (val) => {
    let next = ptr[PROXY];
    let steps = ptr[STEPS];
    let i = 0;
    for (; i < steps.length - 1; i++) {
      next = next[steps[i]];
      if (!isobj(next))
        return;
    }
    next[steps[i]] = val;
  };
  function h(type, props, ...children) {
    if (type == Fragment)
      return children;
    if (typeof type == "function") {
      let newthis = $state(Object.create(type.prototype));
      for (let name in props) {
        let ptr = props[name];
        if (name.startsWith("bind:")) {
          assert(
            isDLPtr(ptr),
            "bind: requires a reference pointer from use"
          );
          let set = curryset(ptr);
          let propname = name.substring(5);
          if (propname == "this") {
            set(newthis);
          } else {
            let isRecursive = false;
            handle(ptr, (value) => {
              if (isRecursive) {
                isRecursive = false;
                return;
              }
              isRecursive = true;
              newthis[propname] = value;
            });
            handle(use(newthis[propname]), (value) => {
              if (isRecursive) {
                isRecursive = false;
                return;
              }
              isRecursive = true;
              set(value);
            });
          }
          delete props[name];
        }
      }
      Object.assign(newthis, props);
      newthis.children = [];
      for (let child of children) {
        JSXAddChild(child, newthis.children.push.bind(newthis.children));
      }
      let elm2 = type.apply(newthis);
      elm2.$ = newthis;
      newthis.root = elm2;
      if (newthis.css) {
        let cl = elm2.classList;
        cl.add(newthis.css);
        cl.add("dl-boundary");
      }
      elm2.setAttribute("data-component", type.name);
      if (typeof newthis.mount === "function")
        newthis.mount();
      return elm2;
    }
    let xmlns = props == null ? void 0 : props.xmlns;
    let elm = xmlns ? doc.createElementNS(xmlns, type) : doc.createElement(type);
    for (let child of children) {
      let cond = child && !isDLPtr(child) && child[IF];
      let bappend = elm.append.bind(elm);
      if (cond) {
        JSXAddFixedWrapper(cond, bappend, child);
      } else
        JSXAddChild(child, bappend);
    }
    if (!props)
      return elm;
    let useProp = (name, callback) => {
      if (!(name in props))
        return;
      let prop = props[name];
      callback(prop);
      delete props[name];
    };
    for (let name in props) {
      let ptr = props[name];
      if (name.startsWith("bind:")) {
        assert(isDLPtr(ptr), "bind: requires a reference pointer from use");
        let propname = name.substring(5);
        let set = curryset(ptr);
        if (propname == "this") {
          set(elm);
        } else if (propname == "value") {
          handle(ptr, (value) => elm.value = value);
          elm.addEventListener("change", () => set(elm.value));
        } else if (propname == "checked") {
          handle(ptr, (value) => elm.checked = value);
          elm.addEventListener("click", () => set(elm.checked));
        }
        delete props[name];
      }
      if (name == "style" && isobj(ptr)) {
        for (let key in ptr) {
          let prop = ptr[key];
          if (isDLPtr(prop)) {
            handle(prop, (value) => elm.style[key] = value);
          } else {
            elm.style[key] = prop;
          }
        }
        delete props[name];
      }
    }
    useProp("class", (classlist) => {
      assert(
        typeof classlist === "string" || classlist instanceof Array,
        "class must be a string or array"
      );
      if (typeof classlist === "string") {
        elm.setAttribute("class", classlist);
        return;
      }
      if (isDLPtr(classlist)) {
        handle(
          classlist,
          (classname) => elm.setAttribute("class", classname)
        );
        return;
      }
      for (let name of classlist) {
        if (isDLPtr(name)) {
          let oldvalue = null;
          handle(name, (value) => {
            if (typeof oldvalue === "string") {
              elm.classList.remove(oldvalue);
            }
            elm.classList.add(value);
            oldvalue = value;
          });
        } else {
          elm.classList.add(name);
        }
      }
    });
    for (let name in props) {
      let prop = props[name];
      if (isDLPtr(prop)) {
        handle(prop, (val) => {
          JSXAddAttributes(elm, name, val);
        });
      } else {
        JSXAddAttributes(elm, name, prop);
      }
    }
    if (xmlns)
      elm.innerHTML = elm.innerHTML;
    return elm;
  }
  function JSXAddChild(child, cb) {
    let childchild, elms, node;
    if (isDLPtr(child)) {
      JSXAddFixedWrapper(child, cb);
    } else if (child instanceof Node) {
      cb(child);
      return [child];
    } else if (child instanceof Array) {
      elms = [];
      for (childchild of child) {
        elms = elms.concat(JSXAddChild(childchild, cb));
      }
      if (!elms[0])
        elms = JSXAddChild("", cb);
      return elms;
    } else {
      node = doc.createTextNode(child);
      cb(node);
      return [node];
    }
  }
  function JSXAddAttributes(elm, name, prop) {
    if (name.startsWith("on:")) {
      assert(typeof prop === "function", "on: requires a function");
      let names = name.substring(3);
      for (let name2 of names.split("$")) {
        elm.addEventListener(name2, (...args) => {
          self.$el = elm;
          prop(...args);
        });
      }
      return;
    }
    elm.setAttribute(name, prop);
  }
  const cssmap = {};
  function css(strings, ...values) {
    let str = "";
    for (let f of strings) {
      str += f + (values.shift() || "");
    }
    let cached = cssmap[str];
    if (cached)
      return cached;
    const uid = `dl${Array(5).fill(0).map(() => {
      return Math.floor(Math.random() * 36).toString(36);
    }).join("")}`;
    cssmap[str] = uid;
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    let newstr = "";
    let selfstr = "";
    str += "\n";
    for (; ; ) {
      let [first, ...rest] = str.split("\n");
      if (first.trim().endsWith("{"))
        break;
      selfstr += first + "\n";
      str = rest.join("\n");
      if (!str)
        break;
    }
    styleElement.textContent = str;
    for (const rule of styleElement.sheet.cssRules) {
      rule.selectorText = `.${uid} ${rule.selectorText}`;
      newstr += rule.cssText + "\n";
    }
    styleElement.textContent = `.${uid} {${selfstr}}
` + newstr;
    return uid;
  }
  function html(strings, ...values) {
    let flattened = "";
    let markers = {};
    for (const i in strings) {
      let string = strings[i];
      let value = values[i];
      flattened += string;
      if (i < values.length) {
        let dupe = Object.values(markers).findIndex((v) => v == value);
        if (dupe !== -1) {
          flattened += Object.keys(markers)[dupe];
        } else {
          let marker = "m" + Array(16).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join("");
          markers[marker] = value;
          flattened += marker;
        }
      }
    }
    let dom = new DOMParser().parseFromString(flattened, "text/html");
    if (dom.body.children.length !== 1)
      throw "html builder needs exactly one child";
    function wraph(elm) {
      let nodename = elm.nodeName.toLowerCase();
      if (nodename === "#text")
        return elm.textContent;
      if (nodename in markers)
        nodename = markers[nodename];
      let children = [...elm.childNodes].map(wraph);
      for (let i = 0; i < children.length; i++) {
        let text = children[i];
        if (typeof text !== "string")
          continue;
        for (const [marker, value] of Object.entries(markers)) {
          if (!text)
            break;
          if (!text.includes(marker))
            continue;
          let before;
          [before, text] = text.split(marker);
          children = [
            ...children.slice(0, i),
            before,
            value,
            text,
            ...children.slice(i + 1)
          ];
          i += 2;
        }
      }
      let attributes = {};
      for (const attr of [...elm.attributes]) {
        let val = attr.nodeValue;
        if (val in markers)
          val = markers[val];
        attributes[attr.name] = val;
      }
      return h(nodename, attributes, children);
    }
    return wraph(dom.body.children[0]);
  }
  const delegates = [];
  function $store(target, { ident, backing, autosave }) {
    let read, write;
    if (typeof backing === "string") {
      switch (backing) {
        case "localstorage":
          read = () => localStorage.getItem(ident);
          write = (ident2, data) => {
            localStorage.setItem(ident2, data);
          };
          break;
        default:
          assert("Unknown store type: " + backing);
      }
    } else {
      ({ read, write } = backing);
    }
    let save = () => {
      console.info("[dreamland.js]: saving " + ident);
      let serstack = {};
      let vpointercount = 0;
      let ser = (tgt) => {
        let obj = {
          stateful: isStateful(tgt),
          values: {}
        };
        let i = vpointercount++;
        serstack[i] = obj;
        for (let key in tgt) {
          let value = tgt[key];
          if (isDLPtr(value))
            continue;
          switch (typeof value) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              obj.values[key] = JSON.stringify(value);
              break;
            case "object":
              if (value instanceof Array) {
                obj.values[key] = value.map((v) => {
                  if (typeof v === "object") {
                    return ser(v);
                  } else {
                    return JSON.stringify(v);
                  }
                });
                break;
              } else {
                assert(
                  value.__proto__ === Object.prototype,
                  "Only plain objects are supported"
                );
                obj.values[key] = ser(value);
              }
              break;
            case "symbol":
            case "function":
            case "bigint":
              assert("Unsupported type: " + typeof value);
              break;
          }
        }
        return i;
      };
      ser(target);
      let string = JSON.stringify(serstack);
      write(ident, string);
    };
    let autohook = (target2, prop, value) => {
      if (isStateful(value))
        value[TARGET][STATEHOOK] = autohook;
      save();
    };
    let destack = JSON.parse(read(ident));
    if (destack) {
      let objcache = {};
      let de = (i) => {
        if (objcache[i])
          return objcache[i];
        let obj = destack[i];
        let tgt = {};
        for (let key in obj.values) {
          let value = obj.values[key];
          if (typeof value === "string") {
            tgt[key] = JSON.parse(value);
          } else {
            if (value instanceof Array) {
              tgt[key] = value.map((v) => {
                if (typeof v === "string") {
                  return JSON.parse(v);
                } else {
                  return de(v);
                }
              });
            } else {
              tgt[key] = de(value);
            }
          }
        }
        if (obj.stateful && autosave == "auto")
          tgt[STATEHOOK] = autohook;
        let newobj = obj.stateful ? $state(tgt) : tgt;
        objcache[i] = newobj;
        return newobj;
      };
      target = de(0);
    }
    delegates.push(save);
    switch (autosave) {
      case "beforeunload":
        addEventListener("beforeunload", save);
        break;
      case "manual":
        break;
      case "auto":
        target[STATEHOOK] = autohook;
        break;
      default:
        assert("Unknown autosave type: " + autosave);
    }
    return $state(target);
  }
  function saveAllStores() {
    delegates.forEach((cb) => cb());
  }
  log("Version: " + VERSION);
  console.warn(
    "This is a DEVELOPER build of dreamland.js. It is not suitable for production use."
  );
  console.info("Enabled features:", DLFEATURES.join(", "));
  exports.$if = $if;
  exports.$state = $state;
  exports.$store = $store;
  exports.DLVERSION = VERSION;
  exports.Fragment = Fragment;
  exports.css = css;
  exports.h = h;
  exports.handle = handle;
  exports.html = html;
  exports.isDLPtr = isDLPtr;
  exports.isStateful = isStateful;
  exports.saveAllStores = saveAllStores;
  exports.stateful = $state;
})(window);
//# sourceMappingURL=dreamland_dev.js.map
