!function() {
    var requirejs, require, define;
    !function(e) {
        function t(e, t) {
            return v.call(e, t)
        }
        function n(e, t) {
            var n, i, r, a, o, s, l, u, c, d, p = t && t.split("/"), f = g.map, h = f && f["*"] || {};
            if (e && "." === e.charAt(0))
                if (t) {
                    for (p = p.slice(0, p.length - 1),
                    e = p.concat(e.split("/")),
                    u = 0; u < e.length; u += 1)
                        if (d = e[u],
                        "." === d)
                            e.splice(u, 1),
                            u -= 1;
                        else if (".." === d) {
                            if (1 === u && (".." === e[2] || ".." === e[0]))
                                break;
                            u > 0 && (e.splice(u - 1, 2),
                            u -= 2)
                        }
                    e = e.join("/")
                } else
                    0 === e.indexOf("./") && (e = e.substring(2));
            if ((p || h) && f) {
                for (n = e.split("/"),
                u = n.length; u > 0; u -= 1) {
                    if (i = n.slice(0, u).join("/"),
                    p)
                        for (c = p.length; c > 0; c -= 1)
                            if (r = f[p.slice(0, c).join("/")],
                            r && (r = r[i])) {
                                a = r,
                                o = u;
                                break
                            }
                    if (a)
                        break;
                    !s && h && h[i] && (s = h[i],
                    l = u)
                }
                !a && s && (a = s,
                o = l),
                a && (n.splice(0, o, a),
                e = n.join("/"))
            }
            return e
        }
        function i(t, n) {
            return function() {
                return c.apply(e, y.call(arguments, 0).concat([t, n]))
            }
        }
        function r(e) {
            return function(t) {
                return n(t, e)
            }
        }
        function a(e) {
            return function(t) {
                f[e] = t
            }
        }
        function o(n) {
            if (t(h, n)) {
                var i = h[n];
                delete h[n],
                m[n] = !0,
                u.apply(e, i)
            }
            if (!t(f, n) && !t(m, n))
                throw new Error("No " + n);
            return f[n]
        }
        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n),
            e = e.substring(n + 1, e.length)),
            [t, e]
        }
        function l(e) {
            return function() {
                return g && g.config && g.config[e] || {}
            }
        }
        var u, c, d, p, f = {}, h = {}, g = {}, m = {}, v = Object.prototype.hasOwnProperty, y = [].slice;
        d = function(e, t) {
            var i, a = s(e), l = a[0];
            return e = a[1],
            l && (l = n(l, t),
            i = o(l)),
            l ? e = i && i.normalize ? i.normalize(e, r(t)) : n(e, t) : (e = n(e, t),
            a = s(e),
            l = a[0],
            e = a[1],
            l && (i = o(l))),
            {
                f: l ? l + "!" + e : e,
                n: e,
                pr: l,
                p: i
            }
        }
        ,
        p = {
            require: function(e) {
                return i(e)
            },
            exports: function(e) {
                var t = f[e];
                return "undefined" != typeof t ? t : f[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: f[e],
                    config: l(e)
                }
            }
        },
        u = function(n, r, s, l) {
            var u, c, g, v, y, b, w = [];
            if (l = l || n,
            "function" == typeof s) {
                for (r = !r.length && s.length ? ["require", "exports", "module"] : r,
                y = 0; y < r.length; y += 1)
                    v = d(r[y], l),
                    c = v.f,
                    "require" === c ? w[y] = p.require(n) : "exports" === c ? (w[y] = p.exports(n),
                    b = !0) : "module" === c ? u = w[y] = p.module(n) : t(f, c) || t(h, c) || t(m, c) ? w[y] = o(c) : v.p && (v.p.load(v.n, i(l, !0), a(c), {}),
                    w[y] = f[c]);
                g = s.apply(f[n], w),
                n && (u && u.exports !== e && u.exports !== f[n] ? f[n] = u.exports : g === e && b || (f[n] = g))
            } else
                n && (f[n] = s)
        }
        ,
        requirejs = require = c = function(t, n, i, r, a) {
            return "string" == typeof t ? p[t] ? p[t](n) : o(d(t, n).f) : (t.splice || (g = t,
            n.splice ? (t = n,
            n = i,
            i = null) : t = e),
            n = n || function() {}
            ,
            "function" == typeof i && (i = r,
            r = a),
            r ? u(e, t, n, i) : setTimeout(function() {
                u(e, t, n, i)
            }, 4),
            c)
        }
        ,
        c.config = function(e) {
            return g = e,
            g.deps && c(g.deps, g.callback),
            c
        }
        ,
        define = function(e, n, i) {
            n.splice || (i = n,
            n = []),
            t(f, e) || t(h, e) || (h[e] = [e, n, i])
        }
        ,
        define.amd = {
            jQuery: !0
        }
    }(),
    define("almond", function() {}),
    this.JSON || (this.JSON = {}),
    function() {
        function f(e) {
            return 10 > e ? "0" + e : e
        }
        function quote(e) {
            return escapable.lastIndex = 0,
            escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, i, r, a, o, s = gap, l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)),
            "function" == typeof rep && (l = rep.call(t, e, l)),
            typeof l) {
            case "string":
                return quote(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l)
                    return "null";
                if (gap += indent,
                o = [],
                "[object Array]" === Object.prototype.toString.apply(l)) {
                    for (a = l.length,
                    n = 0; a > n; n += 1)
                        o[n] = str(n, l) || "null";
                    return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]",
                    gap = s,
                    r
                }
                if (rep && "object" == typeof rep)
                    for (a = rep.length,
                    n = 0; a > n; n += 1)
                        i = rep[n],
                        "string" == typeof i && (r = str(i, l),
                        r && o.push(quote(i) + (gap ? ": " : ":") + r));
                else
                    for (i in l)
                        Object.hasOwnProperty.call(l, i) && (r = str(i, l),
                        r && o.push(quote(i) + (gap ? ": " : ":") + r));
                return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}",
                gap = s,
                r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
        );
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var i;
            if (gap = "",
            indent = "",
            "number" == typeof n)
                for (i = 0; n > i; i += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = t,
            t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, i, r = e[t];
                if (r && "object" == typeof r)
                    for (n in r)
                        Object.hasOwnProperty.call(r, n) && (i = walk(r, n),
                        void 0 !== i ? r[n] = i : delete r[n]);
                return reviver.call(e, t, r)
            }
            var j;
            if (text = String(text),
            cx.lastIndex = 0,
            cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    }(),
    define("easyXDM/json2", function() {}),
    function() {
        var e = this
          , t = e._
          , n = {}
          , i = Array.prototype
          , r = Object.prototype
          , a = Function.prototype
          , o = i.push
          , s = i.slice
          , l = i.concat
          , u = r.toString
          , c = r.hasOwnProperty
          , d = Array.isArray
          , p = Object.keys
          , f = a.bind
          , h = function(e) {
            return e instanceof h ? e : this instanceof h ? void (this._wrapped = e) : new h(e)
        };
        h.VERSION = "1.6.0",
        h.each = h.forEach = function(e, t, i) {
            if (null == e)
                return e;
            if (e.length === +e.length) {
                for (var r = 0, a = e.length; a > r; r++)
                    if (t.call(i, e[r], r, e) === n)
                        return
            } else
                for (var o = h.keys(e), r = 0, a = o.length; a > r; r++)
                    if (t.call(i, e[o[r]], o[r], e) === n)
                        return;
            return e
        }
        ,
        h.map = h.collect = function(e, t, n) {
            var i = [];
            return null == e ? i : (h.each(e, function(e, r, a) {
                i.push(t.call(n, e, r, a))
            }),
            i)
        }
        ;
        var g = "Reduce of empty array with no initial value";
        h.reduce = h.foldl = h.inject = function(e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []),
            h.each(e, function(e, a, o) {
                r ? n = t.call(i, n, e, a, o) : (n = e,
                r = !0)
            }),
            !r)
                throw new TypeError(g);
            return n
        }
        ,
        h.reduceRight = h.foldr = function(e, t, n, i) {
            var r = arguments.length > 2;
            null == e && (e = []);
            var a = e.length;
            if (a !== +a) {
                var o = h.keys(e);
                a = o.length
            }
            if (h.each(e, function(s, l, u) {
                l = o ? o[--a] : --a,
                r ? n = t.call(i, n, e[l], l, u) : (n = e[l],
                r = !0)
            }),
            !r)
                throw new TypeError(g);
            return n
        }
        ,
        h.find = h.detect = function(e, t, n) {
            var i;
            return h.some(e, function(e, r, a) {
                return t.call(n, e, r, a) ? (i = e,
                !0) : void 0
            }),
            i
        }
        ,
        h.filter = h.select = function(e, t, n) {
            var i = [];
            return null == e ? i : (h.each(e, function(e, r, a) {
                t.call(n, e, r, a) && i.push(e)
            }),
            i)
        }
        ,
        h.reject = function(e, t, n) {
            return h.filter(e, h.negate(t), n)
        }
        ,
        h.every = h.all = function(e, t, i) {
            t || (t = h.identity);
            var r = !0;
            return null == e ? r : (h.each(e, function(e, a, o) {
                return (r = r && t.call(i, e, a, o)) ? void 0 : n
            }),
            !!r)
        }
        ,
        h.some = h.any = function(e, t, i) {
            t || (t = h.identity);
            var r = !1;
            return null == e ? r : (h.each(e, function(e, a, o) {
                return r || (r = t.call(i, e, a, o)) ? n : void 0
            }),
            !!r)
        }
        ,
        h.contains = h.include = function(e, t) {
            return null == e ? !1 : e.length === +e.length ? h.indexOf(e, t) >= 0 : h.some(e, function(e) {
                return e === t
            })
        }
        ,
        h.invoke = function(e, t) {
            var n = s.call(arguments, 2)
              , i = h.isFunction(t);
            return h.map(e, function(e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }
        ,
        h.pluck = function(e, t) {
            return h.map(e, h.property(t))
        }
        ,
        h.where = function(e, t) {
            return h.filter(e, h.matches(t))
        }
        ,
        h.findWhere = function(e, t) {
            return h.find(e, h.matches(t))
        }
        ,
        h.max = function(e, t, n) {
            var i, r, a = -1 / 0, o = -1 / 0;
            if (!t && h.isArray(e))
                for (var s = 0, l = e.length; l > s; s++)
                    i = e[s],
                    i > a && (a = i);
            else
                h.each(e, function(e, i, s) {
                    r = t ? t.call(n, e, i, s) : e,
                    (r > o || r === -1 / 0 && a === -1 / 0) && (a = e,
                    o = r)
                });
            return a
        }
        ,
        h.min = function(e, t, n) {
            var i, r, a = 1 / 0, o = 1 / 0;
            if (!t && h.isArray(e))
                for (var s = 0, l = e.length; l > s; s++)
                    i = e[s],
                    a > i && (a = i);
            else
                h.each(e, function(e, i, s) {
                    r = t ? t.call(n, e, i, s) : e,
                    (o > r || 1 / 0 === r && 1 / 0 === a) && (a = e,
                    o = r)
                });
            return a
        }
        ,
        h.shuffle = function(e) {
            var t, n = 0, i = [];
            return h.each(e, function(e) {
                t = h.random(n++),
                i[n - 1] = i[t],
                i[t] = e
            }),
            i
        }
        ,
        h.sample = function(e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = h.values(e)),
            e[h.random(e.length - 1)]) : h.shuffle(e).slice(0, Math.max(0, t))
        }
        ;
        var m = function(e, t) {
            return null == e ? h.identity : h.isFunction(e) ? t ? function() {
                return e.apply(t, arguments)
            }
            : e : h.property(e)
        };
        h.sortBy = function(e, t, n) {
            return t = m(t, n),
            h.pluck(h.map(e, function(e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria
                  , i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n)
                        return 1;
                    if (i > n || void 0 === i)
                        return -1
                }
                return e.index - t.index
            }), "value")
        }
        ;
        var v = function(e) {
            return function(t, n, i) {
                var r = {};
                return n = m(n, i),
                h.each(t, function(i, a) {
                    var o = n(i, a, t);
                    e(r, i, o)
                }),
                r
            }
        };
        h.groupBy = v(function(e, t, n) {
            h.has(e, n) ? e[n].push(t) : e[n] = [t]
        }),
        h.indexBy = v(function(e, t, n) {
            e[n] = t
        }),
        h.countBy = v(function(e, t, n) {
            h.has(e, n) ? e[n]++ : e[n] = 1
        }),
        h.sortedIndex = function(e, t, n, i) {
            n = m(n, i);
            for (var r = n(t), a = 0, o = e.length; o > a; ) {
                var s = a + o >>> 1;
                n(e[s]) < r ? a = s + 1 : o = s
            }
            return a
        }
        ,
        h.toArray = function(e) {
            return e ? h.isArray(e) ? s.call(e) : e.length === +e.length ? h.map(e, h.identity) : h.values(e) : []
        }
        ,
        h.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
        }
        ,
        h.first = h.head = h.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : s.call(e, 0, t)
        }
        ,
        h.initial = function(e, t, n) {
            return s.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }
        ,
        h.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }
        ,
        h.rest = h.tail = h.drop = function(e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }
        ,
        h.compact = function(e) {
            return h.filter(e, h.identity)
        }
        ;
        var y = function(e, t, n, i) {
            if (t && h.every(e, h.isArray))
                return l.apply(i, e);
            for (var r = 0, a = e.length; a > r; r++) {
                var s = e[r];
                h.isArray(s) || h.isArguments(s) ? t ? o.apply(i, s) : y(s, t, n, i) : n || i.push(s)
            }
            return i
        };
        h.flatten = function(e, t) {
            return y(e, t, !1, [])
        }
        ,
        h.without = function(e) {
            return h.difference(e, s.call(arguments, 1))
        }
        ,
        h.partition = function(e, t, n) {
            t = m(t, n);
            var i = []
              , r = [];
            return h.each(e, function(e, n, a) {
                (t(e, n, a) ? i : r).push(e)
            }),
            [i, r]
        }
        ,
        h.uniq = h.unique = function(e, t, n, i) {
            if (null == e)
                return [];
            h.isFunction(t) && (i = n,
            n = t,
            t = !1);
            for (var r = [], a = [], o = 0, s = e.length; s > o; o++) {
                var l = e[o];
                n && (l = n.call(i, l, o, e)),
                (t ? o && a === l : h.contains(a, l)) || (t ? a = l : a.push(l),
                r.push(e[o]))
            }
            return r
        }
        ,
        h.union = function() {
            return h.uniq(y(arguments, !0, !0, []))
        }
        ,
        h.intersection = function(e) {
            if (null == e)
                return [];
            for (var t = [], n = arguments.length, i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                if (!h.contains(t, a)) {
                    for (var o = 1; n > o && h.contains(arguments[o], a); o++)
                        ;
                    o === n && t.push(a)
                }
            }
            return t
        }
        ,
        h.difference = function(e) {
            var t = y(s.call(arguments, 1), !0, !0, []);
            return h.filter(e, function(e) {
                return !h.contains(t, e)
            })
        }
        ,
        h.zip = function() {
            for (var e = h.max(h.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++)
                t[n] = h.pluck(arguments, "" + n);
            return t
        }
        ,
        h.object = function(e, t) {
            if (null == e)
                return {};
            for (var n = {}, i = 0, r = e.length; r > i; i++)
                t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }
        ,
        h.indexOf = function(e, t, n) {
            if (null == e)
                return -1;
            var i = 0
              , r = e.length;
            if (n) {
                if ("number" != typeof n)
                    return i = h.sortedIndex(e, t),
                    e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            for (; r > i; i++)
                if (e[i] === t)
                    return i;
            return -1
        }
        ,
        h.lastIndexOf = function(e, t, n) {
            if (null == e)
                return -1;
            for (var i = null == n ? e.length : n; i--; )
                if (e[i] === t)
                    return i;
            return -1
        }
        ,
        h.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0,
            e = 0),
            n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, a = new Array(i); i > r; )
                a[r++] = e,
                e += n;
            return a
        }
        ;
        var b = function() {};
        h.bind = function(e, t) {
            var n, i;
            if (f && e.bind === f)
                return f.apply(e, s.call(arguments, 1));
            if (!h.isFunction(e))
                throw new TypeError("Bind must be called on a function");
            return n = s.call(arguments, 2),
            i = function() {
                if (!(this instanceof i))
                    return e.apply(t, n.concat(s.call(arguments)));
                b.prototype = e.prototype;
                var r = new b;
                b.prototype = null;
                var a = e.apply(r, n.concat(s.call(arguments)));
                return Object(a) === a ? a : r
            }
        }
        ,
        h.partial = function(e) {
            var t = s.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), r = 0, a = i.length; a > r; r++)
                    i[r] === h && (i[r] = arguments[n++]);
                for (; n < arguments.length; )
                    i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }
        ,
        h.bindAll = function(e) {
            var t = s.call(arguments, 1);
            if (0 === t.length)
                throw new Error("bindAll must be passed function names");
            return h.each(t, function(t) {
                e[t] = h.bind(e[t], e)
            }),
            e
        }
        ,
        h.memoize = function(e, t) {
            var n = {};
            return t || (t = h.identity),
            function() {
                var i = t.apply(this, arguments);
                return h.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
            }
        }
        ,
        h.delay = function(e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }
        ,
        h.defer = function(e) {
            return h.delay.apply(h, [e, 1].concat(s.call(arguments, 1)))
        }
        ,
        h.throttle = function(e, t, n) {
            var i, r, a, o = null, s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : h.now(),
                o = null,
                a = e.apply(i, r),
                i = r = null
            };
            return function() {
                var u = h.now();
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return i = this,
                r = arguments,
                0 >= c || c > t ? (clearTimeout(o),
                o = null,
                s = u,
                a = e.apply(i, r),
                i = r = null) : o || n.trailing === !1 || (o = setTimeout(l, c)),
                a
            }
        }
        ,
        h.debounce = function(e, t, n) {
            var i, r, a, o, s, l = function() {
                var u = h.now() - o;
                t > u && u > 0 ? i = setTimeout(l, t - u) : (i = null,
                n || (s = e.apply(a, r),
                a = r = null))
            };
            return function() {
                a = this,
                r = arguments,
                o = h.now();
                var u = n && !i;
                return i || (i = setTimeout(l, t)),
                u && (s = e.apply(a, r),
                a = r = null),
                s
            }
        }
        ,
        h.once = function(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0,
                t = e.apply(this, arguments),
                e = null,
                t)
            }
        }
        ,
        h.wrap = function(e, t) {
            return h.partial(t, e)
        }
        ,
        h.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }
        ,
        h.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, n = e.length - 1; n >= 0; n--)
                    t = [e[n].apply(this, t)];
                return t[0]
            }
        }
        ,
        h.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }
        ,
        h.keys = function(e) {
            if (!h.isObject(e))
                return [];
            if (p)
                return p(e);
            var t = [];
            for (var n in e)
                h.has(e, n) && t.push(n);
            return t
        }
        ,
        h.values = function(e) {
            for (var t = h.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
                i[r] = e[t[r]];
            return i
        }
        ,
        h.pairs = function(e) {
            for (var t = h.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++)
                i[r] = [t[r], e[t[r]]];
            return i
        }
        ,
        h.invert = function(e) {
            for (var t = {}, n = h.keys(e), i = 0, r = n.length; r > i; i++)
                t[e[n[i]]] = n[i];
            return t
        }
        ,
        h.functions = h.methods = function(e) {
            var t = [];
            for (var n in e)
                h.isFunction(e[n]) && t.push(n);
            return t.sort()
        }
        ,
        h.extend = function(e) {
            return h.isObject(e) ? (h.each(s.call(arguments, 1), function(t) {
                for (var n in t)
                    e[n] = t[n]
            }),
            e) : e
        }
        ,
        h.pick = function(e, t, n) {
            var i = {};
            if (h.isFunction(t))
                for (var r in e) {
                    var a = e[r];
                    t.call(n, a, r, e) && (i[r] = a)
                }
            else
                for (var o = l.apply([], s.call(arguments, 1)), u = 0, c = o.length; c > u; u++) {
                    var r = o[u];
                    r in e && (i[r] = e[r])
                }
            return i
        }
        ,
        h.omit = function(e, t, n) {
            var i;
            return h.isFunction(t) ? t = h.negate(t) : (i = h.map(l.apply([], s.call(arguments, 1)), String),
            t = function(e, t) {
                return !h.contains(i, t)
            }
            ),
            h.pick(e, t, n)
        }
        ,
        h.defaults = function(e) {
            return h.isObject(e) ? (h.each(s.call(arguments, 1), function(t) {
                for (var n in t)
                    void 0 === e[n] && (e[n] = t[n])
            }),
            e) : e
        }
        ,
        h.clone = function(e) {
            return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
        }
        ,
        h.tap = function(e, t) {
            return t(e),
            e
        }
        ;
        var w = function(e, t, n, i) {
            if (e === t)
                return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof h && (e = e._wrapped),
            t instanceof h && (t = t._wrapped);
            var r = u.call(e);
            if (r != u.call(t))
                return !1;
            switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            for (var a = n.length; a--; )
                if (n[a] == e)
                    return i[a] == t;
            var o = e.constructor
              , s = t.constructor;
            if (o !== s && !(h.isFunction(o) && o instanceof o && h.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                return !1;
            n.push(e),
            i.push(t);
            var l = 0
              , c = !0;
            if ("[object Array]" == r) {
                if (l = e.length,
                c = l == t.length)
                    for (; l-- && (c = w(e[l], t[l], n, i)); )
                        ;
            } else {
                for (var d in e)
                    if (h.has(e, d) && (l++,
                    !(c = h.has(t, d) && w(e[d], t[d], n, i))))
                        break;
                if (c) {
                    for (d in t)
                        if (h.has(t, d) && !l--)
                            break;
                    c = !l
                }
            }
            return n.pop(),
            i.pop(),
            c
        };
        h.isEqual = function(e, t) {
            return w(e, t, [], [])
        }
        ,
        h.isEmpty = function(e) {
            if (null == e)
                return !0;
            if (h.isArray(e) || h.isString(e) || h.isArguments(e))
                return 0 === e.length;
            for (var t in e)
                if (h.has(e, t))
                    return !1;
            return !0
        }
        ,
        h.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }
        ,
        h.isArray = d || function(e) {
            return "[object Array]" == u.call(e)
        }
        ,
        h.isObject = function(e) {
            return e === Object(e)
        }
        ,
        h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            h["is" + e] = function(t) {
                return u.call(t) == "[object " + e + "]"
            }
        }),
        h.isArguments(arguments) || (h.isArguments = function(e) {
            return !(!e || !h.has(e, "callee"))
        }
        ),
        "function" != typeof /./ && (h.isFunction = function(e) {
            return "function" == typeof e
        }
        ),
        h.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }
        ,
        h.isNaN = function(e) {
            return h.isNumber(e) && e != +e
        }
        ,
        h.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
        }
        ,
        h.isNull = function(e) {
            return null === e
        }
        ,
        h.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        h.has = function(e, t) {
            return c.call(e, t)
        }
        ,
        h.noConflict = function() {
            return e._ = t,
            this
        }
        ,
        h.identity = function(e) {
            return e
        }
        ,
        h.constant = function(e) {
            return function() {
                return e
            }
        }
        ,
        h.noop = function() {}
        ,
        h.property = function(e) {
            return function(t) {
                return t[e]
            }
        }
        ,
        h.matches = function(e) {
            return function(t) {
                if (null == t)
                    return h.isEmpty(e);
                if (t === e)
                    return !0;
                for (var n in e)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }
        }
        ,
        h.times = function(e, t, n) {
            for (var i = Array(Math.max(0, e)), r = 0; e > r; r++)
                i[r] = t.call(n, r);
            return i
        }
        ,
        h.random = function(e, t) {
            return null == t && (t = e,
            e = 0),
            e + Math.floor(Math.random() * (t - e + 1))
        }
        ,
        h.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        var k = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        k.unescape = h.invert(k.escape);
        var x = {
            escape: new RegExp("[" + h.keys(k.escape).join("") + "]","g"),
            unescape: new RegExp("(" + h.keys(k.unescape).join("|") + ")","g")
        };
        h.each(["escape", "unescape"], function(e) {
            h[e] = function(t) {
                return null == t ? "" : ("" + t).replace(x[e], function(t) {
                    return k[e][t]
                })
            }
        }),
        h.result = function(e, t) {
            if (null == e)
                return void 0;
            var n = e[t];
            return h.isFunction(n) ? e[t]() : n
        }
        ,
        h.mixin = function(e) {
            h.each(h.functions(e), function(t) {
                var n = h[t] = e[t];
                h.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments),
                    C.call(this, n.apply(h, e))
                }
            })
        }
        ;
        var _ = 0;
        h.uniqueId = function(e) {
            var t = ++_ + "";
            return e ? e + t : t
        }
        ,
        h.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var T = /(.)^/
          , A = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , S = /\\|'|\r|\n|\u2028|\u2029/g
          , E = function(e) {
            return "\\" + A[e]
        };
        h.template = function(e, t, n) {
            n = h.defaults({}, n, h.templateSettings);
            var i = new RegExp([(n.escape || T).source, (n.interpolate || T).source, (n.evaluate || T).source].join("|") + "|$","g")
              , r = 0
              , a = "__p+='";
            e.replace(i, function(t, n, i, o, s) {
                return a += e.slice(r, s).replace(S, E),
                r = s + t.length,
                n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (a += "';\n" + o + "\n__p+='"),
                t
            }),
            a += "';\n",
            n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
            a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var o = new Function(n.variable || "obj","_",a)
            } catch (s) {
                throw s.source = a,
                s
            }
            if (t)
                return o(t, h);
            var l = function(e) {
                return o.call(this, e, h)
            }
              , u = n.variable || "obj";
            return l.source = "function(" + u + "){\n" + a + "}",
            l
        }
        ,
        h.chain = function(e) {
            return h(e).chain()
        }
        ;
        var C = function(e) {
            return this._chain ? h(e).chain() : e
        };
        h.mixin(h),
        h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = i[e];
            h.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments),
                "shift" != e && "splice" != e || 0 !== n.length || delete n[0],
                C.call(this, n)
            }
        }),
        h.each(["concat", "join", "slice"], function(e) {
            var t = i[e];
            h.prototype[e] = function() {
                return C.call(this, t.apply(this._wrapped, arguments))
            }
        }),
        h.extend(h.prototype, {
            chain: function() {
                return this._chain = !0,
                this
            },
            value: function() {
                return this._wrapped
            }
        }),
        "function" == typeof define && define.amd && define("underscore", [], function() {
            return h
        })
    }
    .call(this),
    define("utils/wrapper", ["underscore"], function(e) {
        return function(t) {
            if (t && t.hasOwnProperty("hasCallback"))
                return t;
            var n;
            return e.isFunction(t) ? (n = function(n) {
                var i = n;
                if (n || (i = null),
                e.isString(n))
                    try {
                        i = JSON.parse(n)
                    } catch (r) {
                        window.console && (console.log(r),
                        console.log(n))
                    }
                return t(i)
            }
            ,
            n.hasCallback = !0) : (n = function() {
                return null
            }
            ,
            n.hasCallback = !1),
            n
        }
    }),
    define("utils/dom_ready", [], function() {
        function e() {
            if (n) {
                for (var e; e = n.shift(); )
                    e();
                n = null
            }
        }
        function t(e) {
            return n ? void n.push(e) : void e()
        }
        var n, i = "readyState"in document ? /loaded|complete/.test(document.readyState) : !!document.body;
        if (!i && (n = [],
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", e, !1),
        window.addEventListener("load", e, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", e),
        window.attachEvent("onload", e)),
        document.documentElement.doScroll && window == window.top)) {
            var r = function() {
                try {
                    document.documentElement.doScroll("left")
                } catch (t) {
                    return void setTimeout(r, 0)
                }
                e()
            };
            r()
        }
        return t
    }),
    define("utils/dom_helper", {
        hasClass: function(e, t) {
            var n = " " + t + " ";
            return n.indexOf(" " + e.className + " ") >= 0
        },
        addClass: function(e, t) {
            this.hasClass(e, t) || (e.className = e.className ? e.className + " " + t : t)
        },
        removeClass: function(e, t) {
            if (this.hasClass(e, t)) {
                var n = new RegExp("(?:^|\\s)" + t + "(?!\\S)","g");
                e.className = e.className.replace(n, "").trim()
            }
        },
        on: function(e, t, n) {
            window.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1)
        },
        addEventListener: function(e, t, n) {
            e && ("addEventListener"in window ? e.addEventListener(t, n, !1) : "attachEvent"in window && e.attachEvent("on" + t, n))
        },
        removeEventListener: function(e, t, n) {
            e && ("removeEventListener"in window ? e.removeEventListener(t, n, !1) : "detachEvent"in window && e.detachEvent("on" + t, n))
        }
    }),
    define("utils/uri_helper", ["underscore"], function(e) {
        var t = function(n, i) {
            var r = [];
            if (e.isObject(i))
                for (var a in i)
                    i.hasOwnProperty(a) && r.push(t(n + "[" + a + "]", i[a]));
            else
                r.push(n + "=" + encodeURIComponent(i));
            return r.join("&")
        }
          , n = function(n) {
            if (e.isString(n))
                return n;
            var i = [];
            for (var r in n)
                e.has(n, r) && i.push(t(r, n[r]));
            return i.join("&")
        }
          , i = function(e, t) {
            var i = n(t);
            return i ? e + (e.indexOf("?") > -1 ? "&" : "?") + i : e
        };
        return {
            buildQuery: n,
            appendToUrl: i
        }
    });
    var isOldIE = void 0 !== window.attachEvent && void 0 === window.addEventListener
      , cdnUrl = isOldIE ? "https://account.y8.com" : "https://cdn.y8.com";
    define("utils/constants", {
        root_url: "https://account.y8.com",
        analytics_url: "null.html?https://t.y8.com/log",
        playtomic_url: "https://playtomic.y8.com/v1",
        login_url: "https://account.y8.com/oauth/token",
        registration_url: "https://account.y8.com/api/v1/json/account/new",
        terms_url: "https://account.y8.com/terms-of-service",
        privacy_url: "https://account.y8.com/privacy-policy",
        cdnUrl: cdnUrl,
        y8_appid: "4fbb62b133968d57c10041b0",
        languages: '[["Abkhazian", "ab"], ["Achinese", "ace"], ["Acoli", "ach"], ["Adangme", "ada"], ["Adyghe", "ady"], ["Afrihili", "afh"], ["Afrikaans", "af"], ["Afro-Asiatic Language", "afa"], ["Ainu", "ain"], ["Akan", "ak"], ["Akkadian", "akk"], ["Aleut", "ale"], ["Algonquian Language", "alg"], ["Amharic", "am"], ["Ancient Egyptian", "egy"], ["Ancient Greek", "grc"], ["Angika", "anp"], ["Apache Language", "apa"], ["Arabic", "ar"], ["Aragonese", "an"], ["Aramaic", "arc"], ["Arapaho", "arp"], ["Araucanian", "arn"], ["Arawak", "arw"], ["Armenian", "hy"], ["Aromanian", "rup"], ["Artificial Language", "art"], ["Assamese", "as"], ["Asturian", "ast"], ["Athapascan Language", "ath"], ["Atsam", "cch"], ["Australian English", "en-AU"], ["Australian Language", "aus"], ["Austrian German", "de-AT"], ["Austronesian Language", "map"], ["Avaric", "av"], ["Avestan", "ae"], ["Awadhi", "awa"], ["Aymara", "ay"], ["Azerbaijani", "az"], ["Balinese", "ban"], ["Baltic Language", "bat"], ["Baluchi", "bal"], ["Bambara", "bm"], ["Bamileke Language", "bai"], ["Banda", "bad"], ["Bantu", "bnt"], ["Basa", "bas"], ["Bashkir", "ba"], ["Basque", "eu"], ["Batak", "btk"], ["Beja", "bej"], ["Belarusian", "be"], ["Bemba", "bem"], ["Bengali", "bn"], ["Berber", "ber"], ["Bhojpuri", "bho"], ["Bihari", "bh"], ["Bikol", "bik"], ["Bini", "bin"], ["Bislama", "bi"], ["Blin", "byn"], ["Bosnian", "bs"], ["Braj", "bra"], ["Brazilian Portuguese", "pt-BR"], ["Breton", "br"], ["British English", "en-GB"], ["Buginese", "bug"], ["Bulgarian", "bg"], ["Buriat", "bua"], ["Burmese", "my"], ["Caddo", "cad"], ["Canadian English", "en-CA"], ["Canadian French", "fr-CA"], ["Carib", "car"], ["Catalan", "ca"], ["Caucasian Language", "cau"], ["Cebuano", "ceb"], ["Celtic Language", "cel"], ["Central American Indian Language", "cai"], ["Chagatai", "chg"], ["Chamic Language", "cmc"], ["Chamorro", "ch"], ["Chechen", "ce"], ["Cherokee", "chr"], ["Cheyenne", "chy"], ["Chibcha", "chb"], ["Chinese", "zh"], ["Chinook Jargon", "chn"], ["Chipewyan", "chp"], ["Choctaw", "cho"], ["Church Slavic", "cu"], ["Chuukese", "chk"], ["Chuvash", "cv"], ["Classical Newari", "nwc"], ["Coptic", "cop"], ["Cornish", "kw"], ["Corsican", "co"], ["Cree", "cr"], ["Creek", "mus"], ["Creole or Pidgin", "crp"], ["Crimean Turkish", "crh"], ["Croatian", "hr"], ["Cushitic Language", "cus"], ["Czech", "cs"], ["Dakota", "dak"], ["Danish", "da"], ["Dargwa", "dar"], ["Dayak", "day"], ["Delaware", "del"], ["Dinka", "din"], ["Divehi", "dv"], ["Dogri", "doi"], ["Dogrib", "dgr"], ["Dravidian Language", "dra"], ["Duala", "dua"], ["Dutch", "nl"], ["Dyula", "dyu"], ["Dzongkha", "dz"], ["Eastern Frisian", "frs"], ["Efik", "efi"], ["Ekajuk", "eka"], ["Elamite", "elx"], ["English", "en"], ["English-based Creole or Pidgin", "cpe"], ["Erzya", "myv"], ["Esperanto", "eo"], ["Estonian", "et"], ["Ewe", "ee"], ["Ewondo", "ewo"], ["Fang", "fan"], ["Fanti", "fat"], ["Faroese", "fo"], ["Fijian", "fj"], ["Filipino", "fil"], ["Finnish", "fi"], ["Finno-Ugrian Language", "fiu"], ["Flemish", "nl-BE"], ["Fon", "fon"], ["French", "fr"], ["French-based Creole or Pidgin", "cpf"], ["Friulian", "fur"], ["Fulah", "ff"], ["Ga", "gaa"], ["Galician", "gl"], ["Ganda", "lg"], ["Gayo", "gay"], ["Gbaya", "gba"], ["Geez", "gez"], ["Georgian", "ka"], ["German", "de"], ["Germanic Language", "gem"], ["Gilbertese", "gil"], ["Gondi", "gon"], ["Gorontalo", "gor"], ["Gothic", "got"], ["Grebo", "grb"], ["Greek", "el"], ["Guarani", "gn"], ["Gujarati", "gu"], ["Gwichʼin", "gwi"], ["Haida", "hai"], ["Haitian", "ht"], ["Hausa", "ha"], ["Hawaiian", "haw"], ["Hebrew", "he"], ["Herero", "hz"], ["Hiligaynon", "hil"], ["Himachali", "him"], ["Hindi", "hi"], ["Hiri Motu", "ho"], ["Hittite", "hit"], ["Hmong", "hmn"], ["Hungarian", "hu"], ["Hupa", "hup"], ["Iban", "iba"], ["Iberian Portuguese", "pt-PT"], ["Iberian Spanish", "es-ES"], ["Icelandic", "is"], ["Ido", "io"], ["Igbo", "ig"], ["Ijo", "ijo"], ["Iloko", "ilo"], ["Inari Sami", "smn"], ["Indic Language", "inc"], ["Indo-European Language", "ine"], ["Indonesian", "id"], ["Ingush", "inh"], ["Interlingua", "ia"], ["Interlingue", "ie"], ["Inuktitut", "iu"], ["Inupiaq", "ik"], ["Iranian Language", "ira"], ["Irish", "ga"], ["Iroquoian Language", "iro"], ["Italian", "it"], ["Japanese", "ja"], ["Javanese", "jv"], ["Jju", "kaj"], ["Judeo-Arabic", "jrb"], ["Judeo-Persian", "jpr"], ["Kabardian", "kbd"], ["Kabyle", "kab"], ["Kachin", "kac"], ["Kalaallisut", "kl"], ["Kamba", "kam"], ["Kannada", "kn"], ["Kanuri", "kr"], ["Kara-Kalpak", "kaa"], ["Karachay-Balkar", "krc"], ["Karelian", "krl"], ["Karen", "kar"], ["Kashmiri", "ks"], ["Kashubian", "csb"], ["Kawi", "kaw"], ["Kazakh", "kk"], ["Khasi", "kha"], ["Khmer", "km"], ["Khoisan Language", "khi"], ["Khotanese", "kho"], ["Kikuyu", "ki"], ["Kimbundu", "kmb"], ["Kinyarwanda", "rw"], ["Kirghiz", "ky"], ["Komi", "kv"], ["Kongo", "kg"], ["Konkani", "kok"], ["Korean", "ko"], ["Koro", "kfo"], ["Kosraean", "kos"], ["Kpelle", "kpe"], ["Kru", "kro"], ["Kuanyama", "kj"], ["Kumyk", "kum"], ["Kurdish", "ku"], ["Kurukh", "kru"], ["Kutenai", "kut"], ["Ladino", "lad"], ["Lahnda", "lah"], ["Lamba", "lam"], ["Lao", "lo"], ["Latin", "la"], ["Latvian", "lv"], ["Lezghian", "lez"], ["Limburgish", "li"], ["Lingala", "ln"], ["Lithuanian", "lt"], ["Lojban", "jbo"], ["Low German", "nds"], ["Lower Sorbian", "dsb"], ["Lozi", "loz"], ["Luba-Katanga", "lu"], ["Luba-Lulua", "lua"], ["Luiseno", "lui"], ["Lule Sami", "smj"], ["Lunda", "lun"], ["Luo", "luo"], ["Lushai", "lus"], ["Luxembourgish", "lb"], ["Macedonian", "mk"], ["Madurese", "mad"], ["Magahi", "mag"], ["Maithili", "mai"], ["Makasar", "mak"], ["Malagasy", "mg"], ["Malay", "ms"], ["Malayalam", "ml"], ["Maltese", "mt"], ["Manchu", "mnc"], ["Mandar", "mdr"], ["Mandingo", "man"], ["Manipuri", "mni"], ["Manobo Language", "mno"], ["Manx", "gv"], ["Maori", "mi"], ["Marathi", "mr"], ["Mari", "chm"], ["Marshallese", "mh"], ["Marwari", "mwr"], ["Masai", "mas"], ["Mayan Language", "myn"], ["Mende", "men"], ["Micmac", "mic"], ["Middle Dutch", "dum"], ["Middle English", "enm"], ["Middle French", "frm"], ["Middle High German", "gmh"], ["Middle Irish", "mga"], ["Minangkabau", "min"], ["Mirandese", "mwl"], ["Miscellaneous Language", "mis"], ["Mohawk", "moh"], ["Moksha", "mdf"], ["Moldavian", "mo"], ["Mon-Khmer Language", "mkh"], ["Mongo", "lol"], ["Mongolian", "mn"], ["Mossi", "mos"], ["Multiple Languages", "mul"], ["Munda Language", "mun"], ["Nahuatl", "nah"], ["Nauru", "na"], ["Navajo", "nv"], ["Ndonga", "ng"], ["Neapolitan", "nap"], ["Nepali", "ne"], ["Newari", "new"], ["Nias", "nia"], ["Niger-Kordofanian Language", "nic"], ["Niuean", "niu"], ["Nogai", "nog"], ["North American Indian Language", "nai"], ["North Ndebele", "nd"], ["Northern Frisian", "frr"], ["Northern Sami", "se"], ["Northern Sotho", "nso"], ["Norwegian", false], ["Norwegian Bokmål", "nb"], ["Norwegian Nynorsk", "nn"], ["Nubian Language", "nub"], ["Nyamwezi", "nym"], ["Nyanja", "ny"], ["Nyankole", "nyn"], ["Nyoro", "nyo"], ["Nzima", "nzi"], ["N’Ko", "nqo"], ["Occitan", "oc"], ["Ojibwa", "oj"], ["Old English", "ang"], ["Old French", "fro"], ["Old High German", "goh"], ["Old Irish", "sga"], ["Old Norse", "non"], ["Old Persian", "peo"], ["Old Provençal", "pro"], ["Oriya", "or"], ["Oromo", "om"], ["Osage", "osa"], ["Ossetic", "os"], ["Otomian Language", "oto"], ["Ottoman Turkish", "ota"], ["Pahlavi", "pal"], ["Palauan", "pau"], ["Pali", "pi"], ["Pampanga", "pam"], ["Pangasinan", "pag"], ["Papiamento", "pap"], ["Papuan Language", "paa"], ["Pashto", "ps"], ["Persian", "fa"], ["Philippine Language", "phi"], ["Phoenician", "phn"], ["Pohnpeian", "pon"], ["Polish", "pl"], ["Portuguese", "pt"], ["Portuguese-based Creole or Pidgin", "cpp"], ["Prakrit Language", "pra"], ["Punjabi", "pa"], ["Quechua", "qu"], ["Rajasthani", "raj"], ["Rapanui", "rap"], ["Rarotongan", "rar"], ["Rhaeto-Romance", "rm"], ["Romance Language", "roa"], ["Romanian", "ro"], ["Romany", "rom"], ["Rundi", "rn"], ["Russian", "ru"], ["Salishan Language", "sal"], ["Samaritan Aramaic", "sam"], ["Sami Language", "smi"], ["Samoan", "sm"], ["Sandawe", "sad"], ["Sango", "sg"], ["Sanskrit", "sa"], ["Santali", "sat"], ["Sardinian", "sc"], ["Sasak", "sas"], ["Scots", "sco"], ["Scottish Gaelic", "gd"], ["Selkup", "sel"], ["Semitic Language", "sem"], ["Serbo-Croatian", "sh"], ["Shan", "shn"], ["Shona", "sn"], ["Sichuan Yi", "ii"], ["Sicilian", "scn"], ["Sidamo", "sid"], ["Sign Language", "sgn"], ["Siksika", "bla"], ["Sindhi", "sd"], ["Sinhala", "si"], ["Sino-Tibetan Language", "sit"], ["Siouan Language", "sio"], ["Skolt Sami", "sms"], ["Slave", "den"], ["Slavic Language", "sla"], ["Slovak", "sk"], ["Slovenian", "sl"], ["Sogdien", "sog"], ["Somali", "so"], ["Soninke", "snk"], ["South American Indian Language", "sai"], ["South Ndebele", "nr"], ["Southern Altai", "alt"], ["Southern Sami", "sma"], ["Spanish", "es"], ["Swiss French", "fr-CH"], ["Swiss German", "gsw"], ["Swiss High German", "de-CH"], ["Tagalog", "tl"], ["Thai", "th"], ["Tibetan", "bo"], ["Turkish", "tr"], ["Tyap", "kcg"], ["U.S. English", "en-US"], ["Upper Sorbian", "hsb"], ["Vietnamese", "vi-VN"], ["Welsh", "cy"], ["Western Frisian", "fy"], ["Yakut", "sah"]]',
        iframe_width: 433,
        iframe_height: 300,
        name_helper_url: cdnUrl + "/Xd/name.html",
        //xd_handler_helper_url: cdnUrl + "/Xd/xd_handler.html?version=42",
        xd_handler_helper_url: "null.html?"+cdnUrl + "/Xd/xd_handler.html?version=42",
        assetsRootUrl: function() {
            return "https:" == document.location.protocol ? "https://cdn.y8.com" : "http://cdn.y8.com"
        },
        isEnv: function(e) {
            return "production" === e
        }
    }),
    define("event", [], function() {
        return {
            subscribers: function() {
                return this._subscribersMap || (this._subscribersMap = {}),
                this._subscribersMap
            },
            subscribe: function(e, t) {
                var n = this.subscribers();
                n[e] ? n[e].push(t) : n[e] = [t]
            },
            unsubscribe: function(e, t) {
                var n = this.subscribers()[e];
                if (n)
                    for (var i = 0; i < n.length; i++)
                        if (n[i] === t) {
                            n.splice(i, 1);
                            break
                        }
            },
            monitor: function(e, t) {
                if (!t()) {
                    var n = this
                      , i = function() {
                        t.apply(t, arguments) && n.unsubscribe(e, i)
                    };
                    this.subscribe(e, i)
                }
            },
            clear: function(e) {
                delete this.subscribers()[e]
            },
            fire: function(e) {
                var t, n = Array.prototype.slice.call(arguments, 1), i = this.subscribers()[e];
                if (i)
                    for (var r = 0; r < i.length; r++)
                        t = i[r],
                        t && t.apply(this, n)
            }
        }
    }),
    define("runtime", ["require", "underscore", "utils/dom_ready", "event"], function(e) {
        var t = e("underscore")
          , n = (e("utils/dom_ready"),
        e("event"));
        return {
            __options: {},
            setOptions: function(e) {
                this.__options.appId = e.appId,
                this.__options.remoteHelper = e.channelUrl,
                this.__options.meta = e.meta,
                this.__options.responseType = e.responseType || "token",
                this.__options.globalRedirectUri = e.redirectUri,
                this.__options.v2 = e.v2 || !1,
                e.authResponse && this.setAuthResponse(e.authResponse)
            },
            init: function(e) {
                this.initialized() || (this.checkOptions() || this.setOptions(e),
                this.checkOptions() && (this.__options.initialized = !0,
                n.fire("id.init")))
            },
            reset: function() {
                this.__options = {}
            },
            getAppId: function() {
                return this.__options.appId
            },
            initialized: function() {
                return !!this.__options.initialized
            },
            checkOptions: function() {
                return !!this.__options.appId
            },
            setStatus: function(e) {
                this.__options.status = e
            },
            getLoginStatus: function() {
                return {
                    status: this.__options.status,
                    authResponse: this.__options.authResponse,
                    success: "ok" == this.__options.status
                }
            },
            setAuthResponse: function(e) {
                this.__options.authResponse = e
            },
            getOAuthToken: function() {
                var e = this.getAuthResponse();
                return e && e.access_token ? e.access_token : null
            },
            getAuthResponse: function() {
                return this.__options.authResponse
            },
            getRedirectUri: function(e) {
                return t.isString(e) ? e : this.__options.globalRedirectUri || document.location.href
            },
            getDefaultMeta: function() {
                return this.__options.meta || {}
            },
            setV2: function(e) {
                this.__options.v2 = e
            },
            getV2: function() {
                return this.__options.v2 || !1
            },
            getDefaultResponseType: function() {
                return this.__options.responseType
            }
        }
    }),
    function(e, t, n, i, r, a) {
        function o(e, t) {
            var n = typeof e[t];
            return "function" == n || !("object" != n || !e[t]) || "unknown" == n
        }
        function s(e, t) {
            return !("object" != typeof e[t] || !e[t])
        }
        function l(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        function u() {
            var e = "Shockwave Flash"
              , t = "application/x-shockwave-flash";
            if (!b(navigator.plugins) && "object" == typeof navigator.plugins[e]) {
                var n = navigator.plugins[e].description;
                n && !b(navigator.mimeTypes) && navigator.mimeTypes[t] && navigator.mimeTypes[t].enabledPlugin && (C = n.match(/\d+/g))
            }
            if (!C) {
                var i;
                try {
                    i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    C = Array.prototype.slice.call(i.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1),
                    i = null
                } catch (r) {}
            }
            if (!C)
                return !1;
            var a = parseInt(C[0], 10)
              , o = parseInt(C[1], 10);
            return R = a > 9 && o > 0,
            !0
        }
        function c() {
            if (!J) {
                J = !0;
                for (var e = 0; e < W.length; e++)
                    W[e]();
                W.length = 0
            }
        }
        function d(e, t) {
            return J ? void e.call(t) : void W.push(function() {
                e.call(t)
            })
        }
        function p() {
            var e = parent;
            if ("" !== H)
                for (var t = 0, n = H.split("."); t < n.length; t++)
                    e = e[n[t]];
            return e.easyXDM
        }
        function f(t) {
            return e.easyXDM = I,
            H = t,
            H && (F = "easyXDM_" + H.replace(".", "_") + "_"),
            B
        }
        function h(e) {
            return e.match(D)[3]
        }
        function g(e) {
            return e.match(D)[4] || ""
        }
        function m(e) {
            var t = e.toLowerCase().match(D)
              , n = t[2]
              , i = t[3]
              , r = t[4] || "";
            return ("http:" == n && ":80" == r || "https:" == n && ":443" == r) && (r = ""),
            n + "//" + i + r
        }
        function v(e) {
            if (e = e.replace(z, "$1/"),
            !e.match(/^(http||https):\/\//)) {
                var t = "/" === e.substring(0, 1) ? "" : n.pathname;
                "/" !== t.substring(t.length - 1) && (t = t.substring(0, t.lastIndexOf("/") + 1)),
                e = n.protocol + "//" + n.host + t + e
            }
            for (; P.test(e); )
                e = e.replace(P, "");
            return e
        }
        function y(e, t) {
            var n = ""
              , i = e.indexOf("#");
            -1 !== i && (n = e.substring(i),
            e = e.substring(0, i));
            var r = [];
            for (var o in t)
                t.hasOwnProperty(o) && r.push(o + "=" + a(t[o]));
            return e + (q ? "#" : -1 == e.indexOf("?") ? "?" : "&") + r.join("&") + n
        }
        function b(e) {
            return "undefined" == typeof e
        }
        function w(e, t, n) {
            var i;
            for (var r in t)
                t.hasOwnProperty(r) && (r in e ? (i = t[r],
                "object" == typeof i ? w(e[r], i, n) : n || (e[r] = t[r])) : e[r] = t[r]);
            return e
        }
        function k() {
            var e = t.body.appendChild(t.createElement("form"))
              , n = e.appendChild(t.createElement("input"));
            n.name = F + "TEST" + O,
            E = n !== e.elements[n.name],
            t.body.removeChild(e)
        }
        function x(e) {
            b(E) && k();
            var n;
            E ? n = t.createElement('<iframe name="' + e.props.name + '"/>') : (n = t.createElement("IFRAME"),
            n.name = e.props.name),
            n.id = n.name = e.props.name,
            delete e.props.name,
            "string" == typeof e.container && (e.container = t.getElementById(e.container)),
            e.container || (w(n.style, {
                position: "absolute",
                top: "-2000px",
                left: "0px"
            }),
            e.container = t.body);
            var i = e.props.src;
            if (e.props.src = "javascript:false",
            w(n, e.props),
            n.border = n.frameBorder = 0,
            n.allowTransparency = !0,
            e.container.appendChild(n),
            e.onLoad && N(n, "load", e.onLoad),
            e.usePost) {
                var r, a = e.container.appendChild(t.createElement("form"));
                if (a.target = n.name,
                a.action = i,
                a.method = "POST",
                "object" == typeof e.usePost)
                    for (var o in e.usePost)
                        e.usePost.hasOwnProperty(o) && (E ? r = t.createElement('<input name="' + o + '"/>') : (r = t.createElement("INPUT"),
                        r.name = o),
                        r.value = e.usePost[o],
                        a.appendChild(r));
                a.submit(),
                a.parentNode.removeChild(a)
            } else
                n.src = i;
            return e.props.src = i,
            n
        }
        function _(e, t) {
            "string" == typeof e && (e = [e]);
            for (var n, i = e.length; i--; )
                if (n = e[i],
                n = new RegExp("^" == n.substr(0, 1) ? n : "^" + n.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"),
                n.test(t))
                    return !0;
            return !1
        }
        function T(i) {
            var r, a = i.protocol;
            if (i.isHost = i.isHost || b(X.xdm_p),
            q = i.hash || !1,
            i.props || (i.props = {}),
            i.isHost)
                i.remote = v(i.remote),
                i.channel = i.channel || "default" + O++,
                i.secret = Math.random().toString(16).substring(2),
                b(a) && (a = m(n.href) == m(i.remote) ? "4" : o(e, "postMessage") || o(t, "postMessage") ? "1" : i.swf && o(e, "ActiveXObject") && u() ? "6" : "Gecko" === navigator.product && "frameElement"in e && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : i.remoteHelper ? "2" : "0");
            else if (i.channel = X.xdm_c.replace(/["'<>\\]/g, ""),
            i.secret = X.xdm_s,
            i.remote = X.xdm_e.replace(/["'<>\\]/g, ""),
            a = X.xdm_p,
            i.acl && !_(i.acl, i.remote))
                throw new Error("Access denied for " + i.remote);
            switch (i.protocol = a,
            a) {
            case "0":
                if (w(i, {
                    interval: 100,
                    delay: 2e3,
                    useResize: !0,
                    useParent: !1,
                    usePolling: !1
                }, !0),
                i.isHost) {
                    if (!i.local) {
                        for (var s, l = n.protocol + "//" + n.host, c = t.body.getElementsByTagName("img"), d = c.length; d--; )
                            if (s = c[d],
                            s.src.substring(0, l.length) === l) {
                                i.local = s.src;
                                break
                            }
                        i.local || (i.local = e)
                    }
                    var p = {
                        xdm_c: i.channel,
                        xdm_p: 0
                    };
                    i.local === e ? (i.usePolling = !0,
                    i.useParent = !0,
                    i.local = n.protocol + "//" + n.host + n.pathname + n.search,
                    p.xdm_e = i.local,
                    p.xdm_pa = 1) : p.xdm_e = v(i.local),
                    i.container && (i.useResize = !1,
                    p.xdm_po = 1),
                    i.remote = y(i.remote, p)
                } else
                    w(i, {
                        channel: X.xdm_c,
                        remote: X.xdm_e,
                        useParent: !b(X.xdm_pa),
                        usePolling: !b(X.xdm_po),
                        useResize: i.useParent ? !1 : i.useResize
                    });
                r = [new B.stack.HashTransport(i), new B.stack.ReliableBehavior({}), new B.stack.QueueBehavior({
                    encode: !0,
                    maxLength: 4e3 - i.remote.length
                }), new B.stack.VerifyBehavior({
                    initiate: i.isHost
                })];
                break;
            case "1":
                r = [new B.stack.PostMessageTransport(i)];
                break;
            case "2":
                i.isHost && (i.remoteHelper = v(i.remoteHelper)),
                r = [new B.stack.NameTransport(i), new B.stack.QueueBehavior, new B.stack.VerifyBehavior({
                    initiate: i.isHost
                })];
                break;
            case "3":
                r = [new B.stack.NixTransport(i)];
                break;
            case "4":
                r = [new B.stack.SameOriginTransport(i)];
                break;
            case "5":
                r = [new B.stack.FrameElementTransport(i)];
                break;
            case "6":
                C || u(),
                r = [new B.stack.FlashTransport(i)]
            }
            return r.push(new B.stack.QueueBehavior({
                lazy: i.lazy,
                remove: !0
            })),
            r
        }
        function A(e) {
            for (var t, n = {
                incoming: function(e, t) {
                    this.up.incoming(e, t)
                },
                outgoing: function(e, t) {
                    this.down.outgoing(e, t)
                },
                callback: function(e) {
                    this.up.callback(e)
                },
                init: function() {
                    this.down.init()
                },
                destroy: function() {
                    this.down.destroy()
                }
            }, i = 0, r = e.length; r > i; i++)
                t = e[i],
                w(t, n, !0),
                0 !== i && (t.down = e[i - 1]),
                i !== r - 1 && (t.up = e[i + 1]);
            return t
        }
        function S(e) {
            e.up.down = e.down,
            e.down.up = e.up,
            e.up = e.down = null
        }
        var E, C, R, N, j, L = this, O = Math.floor(1e4 * Math.random()), M = Function.prototype, D = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/, P = /[\-\w]+\/\.\.\//, z = /([^:])\/\//g, H = "", B = {}, I = e.easyXDM, F = "easyXDM_", q = !1;
        if (o(e, "addEventListener"))
            N = function(e, t, n) {
                e.addEventListener(t, n, !1)
            }
            ,
            j = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            }
            ;
        else {
            if (!o(e, "attachEvent"))
                throw new Error("Browser not supported");
            N = function(e, t, n) {
                e.attachEvent("on" + t, n)
            }
            ,
            j = function(e, t, n) {
                e.detachEvent("on" + t, n)
            }
        }
        var U, J = !1, W = [];
        if ("readyState"in t ? (U = t.readyState,
        J = "complete" == U || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == U || "interactive" == U)) : J = !!t.body,
        !J) {
            if (o(e, "addEventListener"))
                N(t, "DOMContentLoaded", c);
            else if (N(t, "readystatechange", function() {
                "complete" == t.readyState && c()
            }),
            t.documentElement.doScroll && e === top) {
                var V = function() {
                    if (!J) {
                        try {
                            t.documentElement.doScroll("left")
                        } catch (e) {
                            return void i(V, 1)
                        }
                        c()
                    }
                };
                V()
            }
            N(e, "load", c)
        }
        var X = function(e) {
            e = e.substring(1).split("&");
            for (var t, n = {}, i = e.length; i--; )
                t = e[i].split("="),
                n[t[0]] = r(t[1]);
            return n
        }(/xdm_e=/.test(n.search) ? n.search : n.hash)
          , G = function() {
            var e = {}
              , t = {
                a: [1, 2, 3]
            }
              , n = '{"a":[1,2,3]}';
            return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(t).replace(/\s/g, "") === n ? JSON : (Object.toJSON && Object.toJSON(t).replace(/\s/g, "") === n && (e.stringify = Object.toJSON),
            "function" == typeof String.prototype.evalJSON && (t = n.evalJSON(),
            t.a && 3 === t.a.length && 3 === t.a[2] && (e.parse = function(e) {
                return e.evalJSON()
            }
            )),
            e.stringify && e.parse ? (G = function() {
                return e
            }
            ,
            e) : null)
        };
        w(B, {
            version: "2.4.18.25",
            query: X,
            stack: {},
            apply: w,
            getJSONObject: G,
            whenReady: d,
            noConflict: f
        }),
        B.DomHelper = {
            on: N,
            un: j,
            requiresJSON: function(n) {
                s(e, "JSON") || t.write('<script type="text/javascript" src="' + n + '"></script>')
            }
        },
        function() {
            var e = {};
            B.Fn = {
                set: function(t, n) {
                    e[t] = n
                },
                get: function(t, n) {
                    var i = e[t];
                    return n && delete e[t],
                    i
                }
            }
        }(),
        B.Socket = function(e) {
            var t = A(T(e).concat([{
                incoming: function(t, n) {
                    e.onMessage(t, n)
                },
                callback: function(t) {
                    e.onReady && e.onReady(t)
                }
            }]))
              , n = m(e.remote);
            this.origin = m(e.remote),
            this.destroy = function() {
                t.destroy()
            }
            ,
            this.postMessage = function(e) {
                t.outgoing(e, n)
            }
            ,
            t.init()
        }
        ,
        B.Rpc = function(e, t) {
            if (t.local)
                for (var n in t.local)
                    if (t.local.hasOwnProperty(n)) {
                        var i = t.local[n];
                        "function" == typeof i && (t.local[n] = {
                            method: i
                        })
                    }
            var r = A(T(e).concat([new B.stack.RpcBehavior(this,t), {
                callback: function(t) {
                    e.onReady && e.onReady(t)
                }
            }]));
            this.origin = m(e.remote),
            this.destroy = function() {
                r.destroy()
            }
            ,
            r.init()
        }
        ,
        B.stack.SameOriginTransport = function(e) {
            var t, r, a, o;
            return t = {
                outgoing: function(e, t, n) {
                    a(e),
                    n && n()
                },
                destroy: function() {
                    r && (r.parentNode.removeChild(r),
                    r = null)
                },
                onDOMReady: function() {
                    o = m(e.remote),
                    e.isHost ? (w(e.props, {
                        src: y(e.remote, {
                            xdm_e: n.protocol + "//" + n.host + n.pathname,
                            xdm_c: e.channel,
                            xdm_p: 4
                        }),
                        name: F + e.channel + "_provider"
                    }),
                    r = x(e),
                    B.Fn.set(e.channel, function(e) {
                        return a = e,
                        i(function() {
                            t.up.callback(!0)
                        }, 0),
                        function(e) {
                            t.up.incoming(e, o)
                        }
                    })) : (a = p().Fn.get(e.channel, !0)(function(e) {
                        t.up.incoming(e, o)
                    }),
                    i(function() {
                        t.up.callback(!0)
                    }, 0))
                },
                init: function() {
                    d(t.onDOMReady, t)
                }
            }
        }
        ,
        B.stack.FlashTransport = function(e) {
            function r(e) {
                i(function() {
                    s.up.incoming(e, u)
                }, 0)
            }
            function o(n) {
                var i = e.swf + "?host=" + e.isHost
                  , r = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                B.Fn.set("flash_loaded" + n.replace(/[\-.]/g, "_"), function() {
                    B.stack.FlashTransport[n].swf = c = p.firstChild;
                    for (var e = B.stack.FlashTransport[n].queue, t = 0; t < e.length; t++)
                        e[t]();
                    e.length = 0
                }),
                e.swfContainer ? p = "string" == typeof e.swfContainer ? t.getElementById(e.swfContainer) : e.swfContainer : (p = t.createElement("div"),
                w(p.style, R && e.swfNoThrottle ? {
                    height: "20px",
                    width: "20px",
                    position: "fixed",
                    right: 0,
                    top: 0
                } : {
                    height: "1px",
                    width: "1px",
                    position: "absolute",
                    overflow: "hidden",
                    right: 0,
                    top: 0
                }),
                t.body.appendChild(p));
                var o = "callback=flash_loaded" + a(n.replace(/[\-.]/g, "_")) + "&proto=" + L.location.protocol + "&domain=" + a(h(L.location.href)) + "&port=" + a(g(L.location.href)) + "&ns=" + a(H);
                p.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + r + "' data='" + i + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + i + "'></param><param name='flashvars' value='" + o + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + o + "' allowScriptAccess='always' wmode='transparent' src='" + i + "' height='1' width='1'></embed></object>"
            }
            var s, l, u, c, p;
            return s = {
                outgoing: function(t, n, i) {
                    c.postMessage(e.channel, t.toString()),
                    i && i()
                },
                destroy: function() {
                    try {
                        c.destroyChannel(e.channel)
                    } catch (t) {}
                    c = null,
                    l && (l.parentNode.removeChild(l),
                    l = null)
                },
                onDOMReady: function() {
                    u = e.remote,
                    B.Fn.set("flash_" + e.channel + "_init", function() {
                        i(function() {
                            s.up.callback(!0)
                        })
                    }),
                    B.Fn.set("flash_" + e.channel + "_onMessage", r),
                    e.swf = v(e.swf);
                    var t = h(e.swf)
                      , a = function() {
                        B.stack.FlashTransport[t].init = !0,
                        c = B.stack.FlashTransport[t].swf,
                        c.createChannel(e.channel, e.secret, m(e.remote), e.isHost),
                        e.isHost && (R && e.swfNoThrottle && w(e.props, {
                            position: "fixed",
                            right: 0,
                            top: 0,
                            height: "20px",
                            width: "20px"
                        }),
                        w(e.props, {
                            src: y(e.remote, {
                                xdm_e: m(n.href),
                                xdm_c: e.channel,
                                xdm_p: 6,
                                xdm_s: e.secret
                            }),
                            name: F + e.channel + "_provider"
                        }),
                        l = x(e))
                    };
                    B.stack.FlashTransport[t] && B.stack.FlashTransport[t].init ? a() : B.stack.FlashTransport[t] ? B.stack.FlashTransport[t].queue.push(a) : (B.stack.FlashTransport[t] = {
                        queue: [a]
                    },
                    o(t))
                },
                init: function() {
                    d(s.onDOMReady, s)
                }
            }
        }
        ,
        B.stack.PostMessageTransport = function(t) {
            function r(e) {
                if (e.origin)
                    return m(e.origin);
                if (e.uri)
                    return m(e.uri);
                if (e.domain)
                    return n.protocol + "//" + e.domain;
                throw "Unable to retrieve the origin of the event"
            }
            function a(e) {
                var n = r(e);
                n == u && e.data.substring(0, t.channel.length + 1) == t.channel + " " && o.up.incoming(e.data.substring(t.channel.length + 1), n)
            }
            var o, s, l, u;
            return o = {
                outgoing: function(e, n, i) {
                    l.postMessage(t.channel + " " + e, n || u),
                    i && i()
                },
                destroy: function() {
                    j(e, "message", a),
                    s && (l = null,
                    s.parentNode.removeChild(s),
                    s = null)
                },
                onDOMReady: function() {
                    if (u = m(t.remote),
                    t.isHost) {
                        var r = function(n) {
                            n.data == t.channel + "-ready" && (l = "postMessage"in s.contentWindow ? s.contentWindow : s.contentWindow.document,
                            j(e, "message", r),
                            N(e, "message", a),
                            i(function() {
                                o.up.callback(!0)
                            }, 0))
                        };
                        N(e, "message", r),
                        w(t.props, {
                            src: y(t.remote, {
                                xdm_e: m(n.href),
                                xdm_c: t.channel,
                                xdm_p: 1
                            }),
                            name: F + t.channel + "_provider"
                        }),
                        s = x(t)
                    } else
                        N(e, "message", a),
                        l = "postMessage"in e.parent ? e.parent : e.parent.document,
                        l.postMessage(t.channel + "-ready", u),
                        i(function() {
                            o.up.callback(!0)
                        }, 0)
                },
                init: function() {
                    d(o.onDOMReady, o)
                }
            }
        }
        ,
        B.stack.FrameElementTransport = function(r) {
            var a, o, s, l;
            return a = {
                outgoing: function(e, t, n) {
                    s.call(this, e),
                    n && n()
                },
                destroy: function() {
                    o && (o.parentNode.removeChild(o),
                    o = null)
                },
                onDOMReady: function() {
                    l = m(r.remote),
                    r.isHost ? (w(r.props, {
                        src: y(r.remote, {
                            xdm_e: m(n.href),
                            xdm_c: r.channel,
                            xdm_p: 5
                        }),
                        name: F + r.channel + "_provider"
                    }),
                    o = x(r),
                    o.fn = function(e) {
                        return delete o.fn,
                        s = e,
                        i(function() {
                            a.up.callback(!0)
                        }, 0),
                        function(e) {
                            a.up.incoming(e, l)
                        }
                    }
                    ) : (t.referrer && m(t.referrer) != X.xdm_e && (e.top.location = X.xdm_e),
                    s = e.frameElement.fn(function(e) {
                        a.up.incoming(e, l)
                    }),
                    a.up.callback(!0))
                },
                init: function() {
                    d(a.onDOMReady, a)
                }
            }
        }
        ,
        B.stack.NameTransport = function(e) {
            function t(t) {
                var n = e.remoteHelper + (s ? "#_3" : "#_2") + e.channel;
                l.contentWindow.sendMessage(t, n)
            }
            function n() {
                s ? 2 !== ++c && s || o.up.callback(!0) : (t("ready"),
                o.up.callback(!0))
            }
            function r(e) {
                o.up.incoming(e, f)
            }
            function a() {
                p && i(function() {
                    p(!0)
                }, 0)
            }
            var o, s, l, u, c, p, f, h;
            return o = {
                outgoing: function(e, n, i) {
                    p = i,
                    t(e)
                },
                destroy: function() {
                    l.parentNode.removeChild(l),
                    l = null,
                    s && (u.parentNode.removeChild(u),
                    u = null)
                },
                onDOMReady: function() {
                    s = e.isHost,
                    c = 0,
                    f = m(e.remote),
                    e.local = v(e.local),
                    s ? (B.Fn.set(e.channel, function(t) {
                        s && "ready" === t && (B.Fn.set(e.channel, r),
                        n())
                    }),
                    h = y(e.remote, {
                        xdm_e: e.local,
                        xdm_c: e.channel,
                        xdm_p: 2
                    }),
                    w(e.props, {
                        src: h + "#" + e.channel,
                        name: F + e.channel + "_provider"
                    }),
                    u = x(e)) : (e.remoteHelper = e.remote,
                    B.Fn.set(e.channel, r));
                    var t = function() {
                        var r = l || this;
                        j(r, "load", t),
                        B.Fn.set(e.channel + "_load", a),
                        function o() {
                            "function" == typeof r.contentWindow.sendMessage ? n() : i(o, 50)
                        }()
                    };
                    l = x({
                        props: {
                            src: e.local + "#_4" + e.channel
                        },
                        onLoad: t
                    })
                },
                init: function() {
                    d(o.onDOMReady, o)
                }
            }
        }
        ,
        B.stack.HashTransport = function(t) {
            function n(e) {
                if (g) {
                    var n = t.remote + "#" + f++ + "_" + e;
                    (l || !v ? g.contentWindow : g).location = n
                }
            }
            function r(e) {
                p = e,
                s.up.incoming(p.substring(p.indexOf("_") + 1), y)
            }
            function a() {
                if (h) {
                    var e = h.location.href
                      , t = ""
                      , n = e.indexOf("#");
                    -1 != n && (t = e.substring(n)),
                    t && t != p && r(t)
                }
            }
            function o() {
                u = setInterval(a, c)
            }
            var s, l, u, c, p, f, h, g, v, y;
            return s = {
                outgoing: function(e) {
                    n(e)
                },
                destroy: function() {
                    e.clearInterval(u),
                    (l || !v) && g.parentNode.removeChild(g),
                    g = null
                },
                onDOMReady: function() {
                    if (l = t.isHost,
                    c = t.interval,
                    p = "#" + t.channel,
                    f = 0,
                    v = t.useParent,
                    y = m(t.remote),
                    l) {
                        if (w(t.props, {
                            src: t.remote,
                            name: F + t.channel + "_provider"
                        }),
                        v)
                            t.onLoad = function() {
                                h = e,
                                o(),
                                s.up.callback(!0)
                            }
                            ;
                        else {
                            var n = 0
                              , r = t.delay / 50;
                            !function a() {
                                if (++n > r)
                                    throw new Error("Unable to reference listenerwindow");
                                try {
                                    h = g.contentWindow.frames[F + t.channel + "_consumer"]
                                } catch (e) {}
                                h ? (o(),
                                s.up.callback(!0)) : i(a, 50)
                            }()
                        }
                        g = x(t)
                    } else
                        h = e,
                        o(),
                        v ? (g = parent,
                        s.up.callback(!0)) : (w(t, {
                            props: {
                                src: t.remote + "#" + t.channel + new Date,
                                name: F + t.channel + "_consumer"
                            },
                            onLoad: function() {
                                s.up.callback(!0)
                            }
                        }),
                        g = x(t))
                },
                init: function() {
                    d(s.onDOMReady, s)
                }
            }
        }
        ,
        B.stack.ReliableBehavior = function() {
            var e, t, n = 0, i = 0, r = "";
            return e = {
                incoming: function(a, o) {
                    var s = a.indexOf("_")
                      , l = a.substring(0, s).split(",");
                    a = a.substring(s + 1),
                    l[0] == n && (r = "",
                    t && t(!0)),
                    a.length > 0 && (e.down.outgoing(l[1] + "," + n + "_" + r, o),
                    i != l[1] && (i = l[1],
                    e.up.incoming(a, o)))
                },
                outgoing: function(a, o, s) {
                    r = a,
                    t = s,
                    e.down.outgoing(i + "," + ++n + "_" + a, o)
                }
            }
        }
        ,
        B.stack.QueueBehavior = function(e) {
            function t() {
                if (e.remove && 0 === s.length)
                    return void S(n);
                if (!l && 0 !== s.length && !o) {
                    l = !0;
                    var r = s.shift();
                    n.down.outgoing(r.data, r.origin, function(e) {
                        l = !1,
                        r.callback && i(function() {
                            r.callback(e)
                        }, 0),
                        t()
                    })
                }
            }
            var n, o, s = [], l = !0, u = "", c = 0, d = !1, p = !1;
            return n = {
                init: function() {
                    b(e) && (e = {}),
                    e.maxLength && (c = e.maxLength,
                    p = !0),
                    e.lazy ? d = !0 : n.down.init()
                },
                callback: function(e) {
                    l = !1;
                    var i = n.up;
                    t(),
                    i.callback(e)
                },
                incoming: function(t, i) {
                    if (p) {
                        var a = t.indexOf("_")
                          , o = parseInt(t.substring(0, a), 10);
                        u += t.substring(a + 1),
                        0 === o && (e.encode && (u = r(u)),
                        n.up.incoming(u, i),
                        u = "")
                    } else
                        n.up.incoming(t, i)
                },
                outgoing: function(i, r, o) {
                    e.encode && (i = a(i));
                    var l, u = [];
                    if (p) {
                        for (; 0 !== i.length; )
                            l = i.substring(0, c),
                            i = i.substring(l.length),
                            u.push(l);
                        for (; l = u.shift(); )
                            s.push({
                                data: u.length + "_" + l,
                                origin: r,
                                callback: 0 === u.length ? o : null
                            })
                    } else
                        s.push({
                            data: i,
                            origin: r,
                            callback: o
                        });
                    d ? n.down.init() : t()
                },
                destroy: function() {
                    o = !0,
                    n.down.destroy()
                }
            }
        }
        ,
        B.stack.VerifyBehavior = function(e) {
            function t() {
                i = Math.random().toString(16).substring(2),
                n.down.outgoing(i)
            }
            var n, i, r;
            return n = {
                incoming: function(a, o) {
                    var s = a.indexOf("_");
                    -1 === s ? a === i ? n.up.callback(!0) : r || (r = a,
                    e.initiate || t(),
                    n.down.outgoing(a)) : a.substring(0, s) === r && n.up.incoming(a.substring(s + 1), o)
                },
                outgoing: function(e, t, r) {
                    n.down.outgoing(i + "_" + e, t, r)
                },
                callback: function() {
                    e.initiate && t()
                }
            }
        }
        ,
        B.stack.RpcBehavior = function(e, t) {
            function n(e) {
                e.jsonrpc = "2.0",
                a.down.outgoing(o.stringify(e))
            }
            function i(e, t) {
                var i = Array.prototype.slice;
                return function() {
                    var r, a = arguments.length, o = {
                        method: t
                    };
                    a > 0 && "function" == typeof arguments[a - 1] ? (a > 1 && "function" == typeof arguments[a - 2] ? (r = {
                        success: arguments[a - 2],
                        error: arguments[a - 1]
                    },
                    o.params = i.call(arguments, 0, a - 2)) : (r = {
                        success: arguments[a - 1]
                    },
                    o.params = i.call(arguments, 0, a - 1)),
                    u["" + ++s] = r,
                    o.id = s) : o.params = i.call(arguments, 0),
                    e.namedParams && 1 === o.params.length && (o.params = o.params[0]),
                    n(o)
                }
            }
            function r(e, t, i, r) {
                if (!i)
                    return void (t && n({
                        id: t,
                        error: {
                            code: -32601,
                            message: "Procedure not found."
                        }
                    }));
                var a, o;
                t ? (a = function(e) {
                    a = M,
                    n({
                        id: t,
                        result: e
                    })
                }
                ,
                o = function(e, i) {
                    o = M;
                    var r = {
                        id: t,
                        error: {
                            code: -32099,
                            message: e
                        }
                    };
                    i && (r.error.data = i),
                    n(r)
                }
                ) : a = o = M,
                l(r) || (r = [r]);
                try {
                    var s = i.method.apply(i.scope, r.concat([a, o]));
                    b(s) || a(s)
                } catch (u) {
                    o(u.message)
                }
            }
            var a, o = t.serializer || G(), s = 0, u = {};
            return a = {
                incoming: function(e) {
                    var i = o.parse(e);
                    if (i.method)
                        t.handle ? t.handle(i, n) : r(i.method, i.id, t.local[i.method], i.params);
                    else {
                        var a = u[i.id];
                        i.error ? a.error && a.error(i.error) : a.success && a.success(i.result),
                        delete u[i.id]
                    }
                },
                init: function() {
                    if (t.remote)
                        for (var n in t.remote)
                            t.remote.hasOwnProperty(n) && (e[n] = i(t.remote[n], n));
                    a.down.init()
                },
                destroy: function() {
                    for (var n in t.remote)
                        t.remote.hasOwnProperty(n) && e.hasOwnProperty(n) && delete e[n];
                    a.down.destroy()
                }
            }
        }
        ,
        L.easyXDM = B
    }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent),
    define("easyXDM/easyXDM", function(e) {
        return function() {
            var t, n;
            return n = function() {
                return this.easyXDM.noConflict()
            }
            ,
            t = n.apply(e, arguments)
        }
    }(this)),
    define("rpc", ["utils/constants", "runtime", "easyXDM/easyXDM"], function(e, t, n) {
        var i = {
            events: {}
        }
          , r = {}
          , a = {
            local: {
                sendEvent: function(e) {
                    var t = i.events[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        t.apply({}, n)
                    }
                }
            }
        }
          , o = null;
        return t.channelUrl && (r.local = t.channelUrl),
        r.remoteHelper = e.name_helper_url,
        r.remote = e.xd_handler_helper_url,
        r.channel = "id_xd_api",
        i.config = r,
        i.jsonRpcConfig = a,
        i.xdHandler = function() {
            return null === o && (o = new n.Rpc(r,a)),
            o
        }
        ,
        i
    }),
    define("utils/guid", [], function() {
        return function() {
            return "id-" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
        }
    }),
    define("utils/user_agent", [], function() {
        function e() {
            if (!g) {
                g = !0;
                var e = navigator.userAgent
                  , m = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(e)
                  , v = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
                if (d = /\b(iPhone|iP[ao]d)/.exec(e),
                p = /\b(iP[ao]d)/.exec(e),
                u = /Android/i.exec(e),
                f = /FBAN\/\w+;/i.exec(e),
                h = /Mobile/i.exec(e),
                c = !!/Win64/.exec(e),
                m ? (t = m[1] ? parseFloat(m[1]) : 0 / 0,
                t && document.documentMode && (t = document.documentMode),
                n = m[2] ? parseFloat(m[2]) : 0 / 0,
                i = m[3] ? parseFloat(m[3]) : 0 / 0,
                r = m[4] ? parseFloat(m[4]) : 0 / 0,
                r ? (m = /(?:Chrome\/(\d+\.\d+))/.exec(e),
                a = m && m[1] ? parseFloat(m[1]) : 0 / 0) : a = 0 / 0) : t = n = i = a = r = 0 / 0,
                v) {
                    if (v[1]) {
                        var y = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                        o = y ? parseFloat(y[1].replace("_", ".")) : !0
                    } else
                        o = !1;
                    s = !!v[2],
                    l = !!v[3]
                } else
                    o = s = l = !1
            }
        }
        var t, n, i, r, a, o, s, l, u, c, d, p, f, h, g = !1, m = {
            ie: function() {
                return e() || t
            },
            ie64: function() {
                return m.ie() && c
            },
            firefox: function() {
                return e() || n
            },
            opera: function() {
                return e() || i
            },
            webkit: function() {
                return e() || r
            },
            safari: function() {
                return m.webkit()
            },
            chrome: function() {
                return e() || a
            },
            windows: function() {
                return e() || s
            },
            osx: function() {
                return e() || o
            },
            linux: function() {
                return e() || l
            },
            iphone: function() {
                return e() || d
            },
            mobile: function() {
                return e() || d || p || u || h
            },
            nativeApp: function() {
                return e() || f
            },
            android: function() {
                return e() || u
            },
            ipad: function() {
                return e() || p
            }
        };
        return m
    }),
    define("dialog/position", ["event", "utils/user_agent"], function(e, t) {
        return {
            pos: function() {
                function e(e, n, i) {
                    var r, a;
                    r = (e.docHeight() - i) / 2,
                    a = (e.docWidth() - n) / 2,
                    r = 10 > r ? 10 : r,
                    a = 0 > a ? 0 : a,
                    t.mobile() && (r += document.body.scrollTop),
                    e.setTop(r),
                    e.setLeft(a)
                }
                this.subscribe("dialog.resize", function(t, n) {
                    e(this, t, n)
                }),
                e(this, this.width(), this.height())
            },
            docTop: function() {
                return document.documentElement.scrollTop || document.body.scrollTop
            },
            docWidth: function() {
                return self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            },
            docHeight: function() {
                return self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            },
            hide: function() {
                this.hidden = !0,
                this.setTop(-1e4),
                this.hideMask(),
                e.fire("dialog.hide", this)
            },
            show: function() {
                this.hidden = !1,
                this.pos(),
                this.showMask(),
                e.fire("dialog.show", this)
            },
            resizeMask: function() {
                var e = document.body
                  , t = document.documentElement;
                this.mask.style.height = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.clientHeight, t.clientHeight)) + "px",
                this.mask.style.width = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.clientWidth, t.clientWidth)) + "px"
            },
            showMask: function() {
                this.resizeMask(),
                this.mask.style.display = "block"
            },
            hideMask: function() {
                this.mask.style.display = "none"
            }
        }
    }),
    define("dialog/resize", ["underscore", "dialog/position"], function(e, t) {
        function n(e, t, n, i, r) {
            var a = t - e
              , o = e + Math.pow(1 / n * i, r) * a;
            return Math.ceil(o)
        }
        var i = e.extend({}, t);
        return i.animate = function(t, i, r, a, o, s, l, u) {
            if (o && s && l) {
                var c = t
                  , d = i
                  , p = r
                  , f = a
                  , h = l
                  , g = l;
                this.ai && window.clearInterval(this.ai);
                var m = 0;
                this.ai = window.setInterval(e.bind(function() {
                    t > i && (h = 1 / l),
                    r > a && (g = 1 / l);
                    var e = n(c, d, o, m, h)
                      , s = n(p, f, o, m, g);
                    this.setWidth(e),
                    this.setHeight(s),
                    m++,
                    m > o && (window.clearInterval(this.ai),
                    this.inform("dialog.resize", i, a, u)),
                    this.pos()
                }, this), s)
            }
        }
        ,
        i.resize = function(e, t, n) {
            return this.animate(this.width(), e, this.height(), t, 30, 1, 2, n),
            this
        }
        ,
        i
    }),
    define("observable", ["underscore"], function(e) {
        return {
            inform: function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1), n = Array.prototype.slice.call(this.getSubscribers(e)), i = 0; i < n.length; i++)
                    if (null !== n[i])
                        try {
                            n[i].apply(this, t)
                        } catch (r) {}
                return this
            },
            getSubscribers: function(e) {
                return this.__observableEvents[e] || (this.__observableEvents[e] = [])
            },
            clearSubscribers: function(e) {
                return e && (this.__observableEvents[e] = []),
                this
            },
            clearAllSubscribers: function() {
                return this.__observableEvents = {},
                this
            },
            subscribe: function(e, t) {
                var n = this.getSubscribers(e);
                return n.push(t),
                this
            },
            unsubscribe: function(e, t) {
                for (var n = this.getSubscribers(e), i = 0; i < n.length; i++)
                    if (n[i] === t) {
                        n.splice(i, 1);
                        break
                    }
                return this
            },
            monitor: function(t, n) {
                if (!n()) {
                    var i = e.bind(function() {
                        n.apply(n, arguments) && this.unsubscribe(t, i)
                    }, this);
                    this.subscribe(t, i)
                }
                return this
            }
        }
    }),
    define("dialog", ["underscore", "easyXDM/easyXDM", "utils/guid", "utils/dom_helper", "dialog/resize", "observable", "utils/user_agent", "utils/constants"], function(e, t, n, i, r, a, o, s) {
        var l = function(e) {
            this.hidden = !0,
            this.mask = null,
            this.embedded = e.embedded || !1,
            this.id = n(),
            this.__observableEvents = {},
            this.elt = this.create(),
            this.contentWidth = null,
            this.contentHeight = null
        };
        return l.prototype = e.extend(l.prototype, r),
        l.prototype = e.extend(l.prototype, a),
        l.prototype.create = function() {
            if (this.elt)
                return this.elt;
            var t, n, r, a;
            return a = document.createElement("div"),
            i.addClass(a, "id-dialog-mask"),
            this.mask = a,
            i.on(window, "resize", e.bind(function() {
                this.resizeMask()
            }, this)),
            t = document.createElement("div"),
            i.addClass(t, "id-dialog-box"),
            n = document.createElement("div"),
            i.addClass(n, "id-dialog-inner"),
            r = document.createElement("div"),
            i.addClass(r, "id-dialog-content"),
            r.appendChild(n),
            t.appendChild(r),
            document.body.appendChild(a),
            t.style.top = "-10000px",
            t.style.display = "block",
            t.style.left = this.docWidth() / 2 + "px",
            this.innerElt = n,
            t.setAttribute("style", "position:fixed; z-index:9000; overflow:hidden; border-radius: 3px;"),
            r.style.overflow = "hidden",
            n.setAttribute("style", "background: url(" + s.assetsRootUrl() + "/assets/tinybox/preload.gif) no-repeat 50% 50%; overflow:hidden; line-height:0;"),
            this.embedded ? a.setAttribute("style", 'position:absolute; top:0px; left:0px; height:100%; width:100%; background:#000; z-index:800; opacity:0; -moz-opacity:0; filter:alpha(opacity=0); overflow:hidden; zoom:1; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; -khtml-opacity:0; pointer-events: none; ') : a.setAttribute("style", 'position:absolute; top:0px; left:0px; height:100%; width:100%; background:#000; z-index:800; opacity:0.8; -moz-opacity:0.8; filter:alpha(opacity=80); overflow:hidden; zoom:1; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"; -khtml-opacity:0.5;'),
            this.subscribe("dialog.resize", function(e, n) {
                var i = document.body
                  , r = document.documentElement
                  , a = Math.max(i.scrollHeight, i.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight)
                  , o = a - 20;
                this.contentHeight && (o = this.contentHeight);
                var s = n > o;
                t.style.width = e + "px",
                s ? (t.style.height = o + "px",
                t.style.overflowY = "scroll") : (t.style.height = n + "px",
                t.style.overflowY = "visible"),
                this.resizeMask()
            }),
            t
        }
        ,
        l.prototype.destroy = function() {
            this.hide(),
            document.body.removeChild(this.mask);
            var t = function() {
                this.__observableEvents = {},
                this.elt.parentNode.removeChild(this.elt)
            };
            return window.setTimeout(e.bind(t, this), 500),
            window.focus(),
            !0
        }
        ,
        l.prototype.findContent = function() {
            return this.innerElt
        }
        ,
        l.prototype.visible = function() {
            return this.hidden
        }
        ,
        l.prototype.replaceContent = function(t) {
            t && (e.isString(t) ? this.findContent().innerHTML = t : (this.findContent().innerHTML = "",
            this.findContent().appendChild(t)))
        }
        ,
        l.prototype.setWidth = function(e) {
            this.innerElt && (this.innerElt.style.width = e + "px")
        }
        ,
        l.prototype.setHeight = function(e) {
            this.innerElt && (this.innerElt.style.height = e + "px")
        }
        ,
        l.prototype.setTop = function(e) {
            this.elt && (this.elt.style.top = e + "px")
        }
        ,
        l.prototype.setLeft = function(e) {
            this.elt && (this.elt.style.left = e + "px")
        }
        ,
        l.prototype.width = function() {
            return this.innerElt.offsetWidth
        }
        ,
        l.prototype.height = function() {
            return this.innerElt.offsetHeight
        }
        ,
        l.prototype.top = function() {
            return this.elt.offsetTop
        }
        ,
        l.prototype.left = function() {
            return this.elt.offsetLeft
        }
        ,
        l.prototype.call = function(e) {
            return this.called ? void 0 : (this.called = !0,
            this.successFn(e))
        }
        ,
        l.prototype.error = function(e, t) {
            return this.errorFn(e, t)
        }
        ,
        l.prototype.scrollBarWidth = function() {
            return 30
        }
        ,
        l
    }),
    define("text", ["module"], function(e) {
        function t(e, t) {
            return void 0 === e || "" === e ? t : e
        }
        function n(e, n, i, r) {
            if (n === r)
                return !0;
            if (e === i) {
                if ("http" === e)
                    return t(n, "80") === t(r, "80");
                if ("https" === e)
                    return t(n, "443") === t(r, "443")
            }
            return !1
        }
        var i, r, a, o, s, l = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, c = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, d = "undefined" != typeof location && location.href, p = d && location.protocol && location.protocol.replace(/\:/, ""), f = d && location.hostname, h = d && (location.port || void 0), g = {}, m = e.config && e.config() || {};
        return i = {
            version: "2.0.15",
            strip: function(e) {
                if (e) {
                    e = e.replace(u, "");
                    var t = e.match(c);
                    t && (e = t[1])
                } else
                    e = "";
                return e
            },
            jsEscape: function(e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: m.createXhr || function() {
                var e, t, n;
                if ("undefined" != typeof XMLHttpRequest)
                    return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (t = 0; 3 > t; t += 1) {
                        n = l[t];
                        try {
                            e = new ActiveXObject(n)
                        } catch (i) {}
                        if (e) {
                            l = [n];
                            break
                        }
                    }
                return e
            }
            ,
            parseName: function(e) {
                var t, n, i, r = !1, a = e.lastIndexOf("."), o = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== a && (!o || a > 1) ? (t = e.substring(0, a),
                n = e.substring(a + 1)) : t = e,
                i = n || t,
                a = i.indexOf("!"),
                -1 !== a && (r = "strip" === i.substring(a + 1),
                i = i.substring(0, a),
                n ? n = i : t = i),
                {
                    moduleName: t,
                    ext: n,
                    strip: r
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function(e, t, r, a) {
                var o, s, l, u = i.xdRegExp.exec(e);
                return u ? (o = u[2],
                s = u[3],
                s = s.split(":"),
                l = s[1],
                s = s[0],
                !(o && o !== t || s && s.toLowerCase() !== r.toLowerCase() || (l || s) && !n(o, l, t, a))) : !0
            },
            finishLoad: function(e, t, n, r) {
                n = t ? i.strip(n) : n,
                m.isBuild && (g[e] = n),
                r(n)
            },
            load: function(e, t, n, r) {
                if (r && r.isBuild && !r.inlineText)
                    return void n();
                m.isBuild = r && r.isBuild;
                var a = i.parseName(e)
                  , o = a.moduleName + (a.ext ? "." + a.ext : "")
                  , s = t.toUrl(o)
                  , l = m.useXhr || i.useXhr;
                return 0 === s.indexOf("empty:") ? void n() : void (!d || l(s, p, f, h) ? i.get(s, function(t) {
                    i.finishLoad(e, a.strip, t, n)
                }, function(e) {
                    n.error && n.error(e)
                }) : t([o], function(e) {
                    i.finishLoad(a.moduleName + "." + a.ext, a.strip, e, n)
                }))
            },
            write: function(e, t, n) {
                if (g.hasOwnProperty(t)) {
                    var r = i.jsEscape(g[t]);
                    n.asModule(e + "!" + t, "define(function () { return '" + r + "';});\n")
                }
            },
            writeFile: function(e, t, n, r, a) {
                var o = i.parseName(t)
                  , s = o.ext ? "." + o.ext : ""
                  , l = o.moduleName + s
                  , u = n.toUrl(o.moduleName + s) + ".js";
                i.load(l, n, function() {
                    var t = function(e) {
                        return r(u, e)
                    };
                    t.asModule = function(e, t) {
                        return r.asModule(e, u, t)
                    }
                    ,
                    i.write(e, l, t, a)
                }, a)
            }
        },
        "node" === m.env || !m.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (r = require.nodeRequire("fs"),
        i.get = function(e, t, n) {
            try {
                var i = r.readFileSync(e, "utf8");
                "﻿" === i[0] && (i = i.substring(1)),
                t(i)
            } catch (a) {
                n && n(a)
            }
        }
        ) : "xhr" === m.env || !m.env && i.createXhr() ? i.get = function(e, t, n, r) {
            var a, o = i.createXhr();
            if (o.open("GET", e, !0),
            r)
                for (a in r)
                    r.hasOwnProperty(a) && o.setRequestHeader(a.toLowerCase(), r[a]);
            m.onXhr && m.onXhr(o, e),
            o.onreadystatechange = function() {
                var i, r;
                4 === o.readyState && (i = o.status || 0,
                i > 399 && 600 > i ? (r = new Error(e + " HTTP status: " + i),
                r.xhr = o,
                n && n(r)) : t(o.responseText),
                m.onXhrComplete && m.onXhrComplete(o, e))
            }
            ,
            o.send(null)
        }
        : "rhino" === m.env || !m.env && "undefined" != typeof Packages && "undefined" != typeof java ? i.get = function(e, t) {
            var n, i, r = "utf-8", a = new java.io.File(e), o = java.lang.System.getProperty("line.separator"), s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a),r)), l = "";
            try {
                for (n = new java.lang.StringBuffer,
                i = s.readLine(),
                i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)),
                null !== i && n.append(i); null !== (i = s.readLine()); )
                    n.append(o),
                    n.append(i);
                l = String(n.toString())
            } finally {
                s.close()
            }
            t(l)
        }
        : ("xpconnect" === m.env || !m.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (a = Components.classes,
        o = Components.interfaces,
        Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
        s = "@mozilla.org/windows-registry-key;1"in a,
        i.get = function(e, t) {
            var n, i, r, l = {};
            s && (e = e.replace(/\//g, "\\")),
            r = new FileUtils.File(e);
            try {
                n = a["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream),
                n.init(r, 1, 0, !1),
                i = a["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream),
                i.init(n, "utf-8", n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
                i.readString(n.available(), l),
                i.close(),
                n.close(),
                t(l.value)
            } catch (u) {
                throw new Error((r && r.path || "") + ": " + u)
            }
        }
        ),
        i
    }),
    define("text!stylesheets/default.css", [], function() {
        return "html,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  overflow: hidden;\n}\nheader {\n  width: 100%;\n  font-size: 22px;\n  text-align: center;\n  text-transform: capitalize;\n  padding-top: 12px;\n}\nfooter {\n  height: 46px;\n  width: 100%;\n  background: #fafafa;\n  overflow: hidden;\n}\nfooter .logo {\n  position: absolute;\n  bottom: 6px;\n  right: 6px;\n  z-index: 2;\n  width: 45px;\n  height: 32px;\n}\n#close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-weight: 600;\n  font-size: 28px;\n  cursor: pointer;\n  line-height: 14px;\n  -webkit-user-select: none; /* Safari */        \n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n}\n.white {\n  background: #fff;\n}\n#localization {\n  left: 20px;\n  top: 20px;\n  position: absolute;\n}\n#locale-dropdown {\n  border-radius: 4px;\n  display: none;\n  width: 160px;\n  height: 90%;\n  position: absolute;\n  top: -17px;\n  z-index: 10;\n}\n#locale-backdrop {\n  width: 100%;\n  height: 100%;\n}\n#locale-dropdown ul {\n  border-radius: 4px;\n  background: #fff;\n  margin: 0 -15px;\n  padding: 0 15px;\n  max-height: 300px;\n  overflow-y: scroll;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);\n}\n#locale-dropdown ul li {\n  cursor: pointer;\n  list-style: none;\n  margin-top: 15px;\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n  color: #999;\n}\n#locale-dropdown ul li:last-child {\n  margin-bottom: 15px;\n}\n#locale-dropdown ul li a {\n  margin-right: 4px;\n}\n.localization .locale {\n  cursor: pointer;\n}\n.#ocalization .locale img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#localization i {\n  border: solid black;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2px;\n}\n#localization .down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  margin: 0 0 3px 3px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"
    }),
    define("utils/i18n", ["require"], function() {
        var e = {};
        e.currentLocaleFallback = function() {
            return this.locale || this.defaultLocale
        }
        ;
        var t = Array.prototype.slice
          , n = function(e) {
            return ("0" + e.toString()).substr(-2)
        }
          , i = function(e, t) {
            return p("round", e, -t).toFixed(t)
        }
          , r = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t
        }
          , a = function(e) {
            var t = typeof e;
            return "function" === t
        }
          , o = function(e) {
            return "undefined" != typeof e && null !== e
        }
          , s = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        }
          , l = function(e) {
            return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e)
        }
          , u = function(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }
          , c = function(e) {
            return e === !0 || e === !1
        }
          , d = function(e) {
            return null === e
        }
          , p = function(e, t, n) {
            return "undefined" == typeof n || 0 === +n ? Math[e](t) : (t = +t,
            n = +n,
            isNaN(t) || "number" != typeof n || n % 1 !== 0 ? 0 / 0 : (t = t.toString().split("e"),
            t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n))),
            t = t.toString().split("e"),
            +(t[0] + "e" + (t[1] ? +t[1] + n : n))))
        }
          , f = function(e, t) {
            return a(e) ? e(t) : e
        }
          , h = function(e, t) {
            var n, i;
            for (n in t)
                t.hasOwnProperty(n) && (i = t[n],
                l(i) || u(i) || c(i) || s(i) || d(i) ? e[n] = i : (null == e[n] && (e[n] = {}),
                h(e[n], i)));
            return e
        }
          , g = {
            day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridian: ["AM", "PM"]
        }
          , m = {
            precision: 3,
            separator: ".",
            delimiter: ",",
            strip_insignificant_zeros: !1
        }
          , v = {
            unit: "$",
            precision: 2,
            format: "%u%n",
            sign_first: !0,
            delimiter: ",",
            separator: "."
        }
          , y = {
            unit: "%",
            precision: 3,
            format: "%n%u",
            separator: ".",
            delimiter: ""
        }
          , b = [null, "kb", "mb", "gb", "tb"]
          , w = {
            defaultLocale: "en",
            locale: "en",
            defaultSeparator: ".",
            placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
            fallbacks: !1,
            translations: {},
            missingBehaviour: "message",
            missingTranslationPrefix: ""
        };
        return e.reset = function() {
            var e;
            for (e in w)
                this[e] = w[e]
        }
        ,
        e.initializeOptions = function() {
            var e;
            for (e in w)
                o(this[e]) || (this[e] = w[e])
        }
        ,
        e.initializeOptions(),
        e.locales = {},
        e.locales.get = function(t) {
            var n = this[t] || this[e.locale] || this["default"];
            return a(n) && (n = n(t)),
            s(n) === !1 && (n = [n]),
            n
        }
        ,
        e.locales["default"] = function(t) {
            var n = []
              , i = [];
            return t && n.push(t),
            !t && e.locale && n.push(e.locale),
            e.fallbacks && e.defaultLocale && n.push(e.defaultLocale),
            n.forEach(function(t) {
                var n = t.split("-")
                  , r = null
                  , a = null;
                3 === n.length ? (r = [n[0], n[1]].join("-"),
                a = n[0]) : 2 === n.length && (r = n[0]),
                -1 === i.indexOf(t) && i.push(t),
                e.fallbacks && [r, a].forEach(function(e) {
                    "undefined" != typeof e && null !== e && e !== t && -1 === i.indexOf(e) && i.push(e)
                })
            }),
            n.length || n.push("en"),
            i
        }
        ,
        e.pluralization = {},
        e.pluralization.get = function(t) {
            return this[t] || this[e.locale] || this["default"]
        }
        ,
        e.pluralization["default"] = function(e) {
            switch (e) {
            case 0:
                return ["zero", "other"];
            case 1:
                return ["one"];
            default:
                return ["other"]
            }
        }
        ,
        e.currentLocale = function() {
            return this.locale || this.defaultLocale
        }
        ,
        e.isSet = o,
        e.lookup = function(e, t) {
            t = t || {};
            var n, i, r, a, s = this.locales.get(t.locale).slice();
            for (r = this.getFullScope(e, t); s.length; )
                if (n = s.shift(),
                i = r.split(this.defaultSeparator),
                a = this.translations[n]) {
                    for (; i.length && (a = a[i.shift()],
                    void 0 !== a && null !== a); )
                        ;
                    if (void 0 !== a && null !== a)
                        return a
                }
            return o(t.defaultValue) ? f(t.defaultValue, e) : void 0
        }
        ,
        e.pluralizationLookupWithoutFallback = function(e, t, n) {
            var i, a, s = this.pluralization.get(t), l = s(e);
            if (r(n))
                for (; l.length; )
                    if (i = l.shift(),
                    o(n[i])) {
                        a = n[i];
                        break
                    }
            return a
        }
        ,
        e.pluralizationLookup = function(e, t, n) {
            n = n || {};
            var i, a, s, l, u = this.locales.get(n.locale).slice();
            for (t = this.getFullScope(t, n); u.length; )
                if (i = u.shift(),
                a = t.split(this.defaultSeparator),
                s = this.translations[i]) {
                    for (; a.length && (s = s[a.shift()],
                    r(s)); )
                        0 === a.length && (l = this.pluralizationLookupWithoutFallback(e, i, s));
                    if ("undefined" != typeof l && null !== l)
                        break
                }
            return ("undefined" == typeof l || null === l) && o(n.defaultValue) && (l = r(n.defaultValue) ? this.pluralizationLookupWithoutFallback(e, n.locale, n.defaultValue) : n.defaultValue,
            s = n.defaultValue),
            {
                message: l,
                translations: s
            }
        }
        ,
        e.meridian = function() {
            var e = this.lookup("time")
              , t = this.lookup("date");
            return e && e.am && e.pm ? [e.am, e.pm] : t && t.meridian ? t.meridian : g.meridian
        }
        ,
        e.prepareOptions = function() {
            for (var e, n = t.call(arguments), i = {}; n.length; )
                if (e = n.shift(),
                "object" == typeof e)
                    for (var r in e)
                        e.hasOwnProperty(r) && (o(i[r]) || (i[r] = e[r]));
            return i
        }
        ,
        e.createTranslationOptions = function(e, t) {
            var n = [{
                scope: e
            }];
            return o(t.defaults) && (n = n.concat(t.defaults)),
            o(t.defaultValue) && n.push({
                message: t.defaultValue
            }),
            n
        }
        ,
        e.translate = function(e, t) {
            t = t || {};
            var n, i = this.createTranslationOptions(e, t), a = e, l = this.prepareOptions(t);
            delete l.defaultValue;
            var u = i.some(function(t) {
                return o(t.scope) ? (a = t.scope,
                n = this.lookup(a, l)) : o(t.message) && (n = f(t.message, e)),
                void 0 !== n && null !== n ? !0 : void 0
            }, this);
            return u ? ("string" == typeof n ? n = this.interpolate(n, t) : s(n) ? n = n.map(function(e) {
                return "string" == typeof e ? this.interpolate(e, t) : e
            }, this) : r(n) && o(t.count) && (n = this.pluralize(t.count, a, t)),
            n) : this.missingTranslation(e, t)
        }
        ,
        e.interpolate = function(e, t) {
            if (null == e)
                return e;
            t = t || {};
            var n, i, r, a, s = e.match(this.placeholder);
            if (!s)
                return e;
            for (; s.length; )
                n = s.shift(),
                r = n.replace(this.placeholder, "$1"),
                i = o(t[r]) ? t[r].toString().replace(/\$/gm, "_#$#_") : r in t ? this.nullPlaceholder(n, e, t) : this.missingPlaceholder(n, e, t),
                a = new RegExp(n.replace(/{/gm, "\\{").replace(/}/gm, "\\}")),
                e = e.replace(a, i);
            return e.replace(/_#\$#_/g, "$")
        }
        ,
        e.pluralize = function(e, t, n) {
            n = this.prepareOptions({
                count: String(e)
            }, n);
            var i, r;
            return r = this.pluralizationLookup(e, t, n),
            "undefined" == typeof r.translations || null == r.translations ? this.missingTranslation(t, n) : "undefined" != typeof r.message && null != r.message ? this.interpolate(r.message, n) : (i = this.pluralization.get(n.locale),
            this.missingTranslation(t + "." + i(e)[0], n))
        }
        ,
        e.missingTranslation = function(e, t) {
            if ("guess" === this.missingBehaviour) {
                var n = e.split(".").slice(-1)[0];
                return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + n.replace("_", " ").replace(/([a-z])([A-Z])/g, function(e, t, n) {
                    return t + " " + n.toLowerCase()
                })
            }
            var i = null != t && null != t.locale ? t.locale : this.currentLocale()
              , r = this.getFullScope(e, t)
              , a = [i, r].join(this.defaultSeparator);
            return '[missing "' + a + '" translation]'
        }
        ,
        e.missingPlaceholder = function(e) {
            return "[missing " + e + " value]"
        }
        ,
        e.nullPlaceholder = function() {
            return e.missingPlaceholder.apply(e, arguments)
        }
        ,
        e.toNumber = function(e, t) {
            t = this.prepareOptions(t, this.lookup("number.format"), m);
            var n, r, a = 0 > e, o = i(Math.abs(e), t.precision).toString(), s = o.split("."), l = [], u = t.format || "%n", c = a ? "-" : "";
            for (e = s[0],
            n = s[1]; e.length > 0; )
                l.unshift(e.substr(Math.max(0, e.length - 3), 3)),
                e = e.substr(0, e.length - 3);
            return r = l.join(t.delimiter),
            t.strip_insignificant_zeros && n && (n = n.replace(/0+$/, "")),
            t.precision > 0 && n && (r += t.separator + n),
            u = t.sign_first ? "%s" + u : u.replace("%n", "%s%n"),
            r = u.replace("%u", t.unit).replace("%n", r).replace("%s", c)
        }
        ,
        e.toCurrency = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.currency.format"), this.lookup("number.format"), v),
            this.toNumber(e, t)
        }
        ,
        e.localize = function(e, t, n) {
            switch (n || (n = {}),
            e) {
            case "currency":
                return this.toCurrency(t);
            case "number":
                return e = this.lookup("number.format"),
                this.toNumber(t, e);
            case "percentage":
                return this.toPercentage(t);
            default:
                var i;
                return i = e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString(),
                this.interpolate(i, n)
            }
        }
        ,
        e.parseDate = function(e) {
            var t, n, i;
            if (null == e)
                return e;
            if ("object" == typeof e)
                return e;
            if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
                for (var r = 1; 6 >= r; r++)
                    t[r] = parseInt(t[r], 10) || 0;
                t[2] -= 1,
                i = t[7] ? 1e3 * ("0" + t[7]) : null,
                n = t[8] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6], i)) : new Date(t[1],t[2],t[3],t[4],t[5],t[6],i)
            } else
                "number" == typeof e ? (n = new Date,
                n.setTime(e)) : e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (n = new Date,
                n.setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")))) : e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/) ? (n = new Date,
                n.setTime(Date.parse(e))) : (n = new Date,
                n.setTime(Date.parse(e)));
            return n
        }
        ,
        e.strftime = function(t, i) {
            var r = this.lookup("date")
              , a = e.meridian();
            if (r || (r = {}),
            r = this.prepareOptions(r, g),
            isNaN(t.getTime()))
                throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
            var o = t.getDay()
              , s = t.getDate()
              , l = t.getFullYear()
              , u = t.getMonth() + 1
              , c = t.getHours()
              , d = c
              , p = c > 11 ? 1 : 0
              , f = t.getSeconds()
              , h = t.getMinutes()
              , m = t.getTimezoneOffset()
              , v = Math.floor(Math.abs(m / 60))
              , y = Math.abs(m) - 60 * v
              , b = (m > 0 ? "-" : "+") + (v.toString().length < 2 ? "0" + v : v) + (y.toString().length < 2 ? "0" + y : y);
            return d > 12 ? d -= 12 : 0 === d && (d = 12),
            i = i.replace("%a", r.abbr_day_names[o]),
            i = i.replace("%A", r.day_names[o]),
            i = i.replace("%b", r.abbr_month_names[u]),
            i = i.replace("%B", r.month_names[u]),
            i = i.replace("%d", n(s)),
            i = i.replace("%e", s),
            i = i.replace("%-d", s),
            i = i.replace("%H", n(c)),
            i = i.replace("%-H", c),
            i = i.replace("%k", c),
            i = i.replace("%I", n(d)),
            i = i.replace("%-I", d),
            i = i.replace("%l", d),
            i = i.replace("%m", n(u)),
            i = i.replace("%-m", u),
            i = i.replace("%M", n(h)),
            i = i.replace("%-M", h),
            i = i.replace("%p", a[p]),
            i = i.replace("%P", a[p].toLowerCase()),
            i = i.replace("%S", n(f)),
            i = i.replace("%-S", f),
            i = i.replace("%w", o),
            i = i.replace("%y", n(l)),
            i = i.replace("%-y", n(l).replace(/^0+/, "")),
            i = i.replace("%Y", l),
            i = i.replace("%z", b),
            i = i.replace("%Z", b)
        }
        ,
        e.toTime = function(e, t) {
            var n = this.parseDate(t)
              , i = this.lookup(e);
            if (null == n)
                return n;
            var r = n.toString();
            return r.match(/invalid/i) ? r : i ? this.strftime(n, i) : r
        }
        ,
        e.toPercentage = function(e, t) {
            return t = this.prepareOptions(t, this.lookup("number.percentage.format"), this.lookup("number.format"), y),
            this.toNumber(e, t)
        }
        ,
        e.toHumanSize = function(e, t) {
            for (var n, i, r = 1024, a = e, o = 0; a >= r && 4 > o; )
                a /= r,
                o += 1;
            return 0 === o ? (n = this.t("number.human.storage_units.units.byte", {
                count: a
            }),
            i = 0) : (n = this.t("number.human.storage_units.units." + b[o]),
            i = a - Math.floor(a) === 0 ? 0 : 1),
            t = this.prepareOptions(t, {
                unit: n,
                precision: i,
                format: "%n%u",
                delimiter: ""
            }),
            this.toNumber(a, t)
        }
        ,
        e.getFullScope = function(e, t) {
            return t = t || {},
            s(e) && (e = e.join(this.defaultSeparator)),
            t.scope && (e = [t.scope, e].join(this.defaultSeparator)),
            e
        }
        ,
        e.extend = function(e, t) {
            return "undefined" == typeof e && "undefined" == typeof t ? {} : h(e, t)
        }
        ,
        e.t = e.translate.bind(e),
        e.l = e.localize.bind(e),
        e.p = e.pluralize.bind(e),
        e
    }),
    define("utils/translations", ["require"], function() {
        var e = {};
        return e.translations || (e.translations = {}),
        e.translations.ar = JSON.parse('{"sdk":{"default_table_title":"أعلي النتائج","language":{"ar":"العربية","cs":"التشيكية","de":"الألمانية","el":"اليونانية","en":"الإنجليزية","es":"الإسبانية","fr":"الفرنسية","he":"العبرية","hi":"الهندية","id":"الأندونيسية","it":"الإيطالية","ja":"اليابانية","ko":"الكورية","nl":"الهولندية","pl":"البولندية","pt":"البرتغالية","pt-BR":"البرتغالية البرازيلية","ro":"الرومانية","ru":"الروسية","th":"التايلاندية","tl":"التاغلوغية","tr":"التركية","vi-VN":"الفيتنامية","zh":"الصينية"},"login":{"email":"البريد الإلكتروني","footer1":"لا تمتلك حسابًا؟","footer2":"إنشاء حساب","forgot":"هل نسيت كلمة المرور؟","password":"كلمة المرور","title":"تسجيل الدخول"},"playtomic":{"achievements":"الإنجازات","alltime":"كل الوقت","new_account":"حساب جديد","newest":"الأحدث","page":"%{num} صفحة","personal_best":"أفضل نتائجك","seven_days":"7 أيام","thirty_days":"يومًا 30"},"register":"التسجيل","registration":{"apr":"أبريل","aug":"أغسطس","city":"المدينة","country":"الدولة","dec":"ديسمبر","dob":"تاريخ الميلاد","email":"البريد الإلكتروني","feb":"فبراير","female":"أنثى","first-name":"الاسم الأول","footer1":"هل لديك حساب بالفعل؟","footer2":"تسجيل الدخول","footer3":"يشير النقر فوق إنهاء إلى أنك قادر على قراءة وقرأت ووافقت على","jan":"يناير","june":"يونيه","language":"اللغة","last-name":"الاسم الأخير","male":"ذكر","mar":"مارس","may":"مايو","month":"الشهر","nickname":"اللقب","nov":"نوفمبر","oct":"أكتوبر","password":"كلمة المرور","sep":"سبتمبر","state":"الولاية أو المحافظة","street":"عنوان الشارع","title":"التسجيل","zip":"الرمز البريدي"}}}'),
        e.translations.cs = JSON.parse('{"sdk":{"default_table_title":"Tabulky playtomic","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"All Time","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"Personal best","seven_days":"7 Days","thirty_days":"30 Days"},"register":"Registrace","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.de = JSON.parse('{"sdk":{"default_table_title":"High Scores","language":{"ar":"Arabisch","cs":"Tschechisch","de":"Deutsch","el":"Griechisch","en":"Englisch","es":"Spanisch","fr":"Französisch","he":"Hebräisch","hi":"Hindi","id":"Indonesisch","it":"Italienisch","ja":"Japanisch","ko":"Koreanisch","nl":"Niederländisch","pl":"Polnisch","pt":"Portugiesisch","pt-BR":"Brazilianisches Portugeisisch","ro":"Romänisch","ru":"Russisch","th":"Thailändisch","tl":"Tagalog","tr":"Türkisch","vi-VN":"Vietnamesisch","zh":"Chinesisch"},"login":{"email":"Email","footer1":"Du hast kein Konto?","footer2":"Erstelle ein Konto","forgot":"Forgot password?","password":"Passwort","title":"Login"},"playtomic":{"achievements":"Erfolge","alltime":"Jederzeit","new_account":"Neuer Account","newest":"Neueste","page":"Seite %{num}","personal_best":"Persönliche Bestleistung","seven_days":"7 Tage","thirty_days":"30 Tage"},"register":"Registrieren","registration":{"apr":"April","aug":"August","city":"Stadt","country":"Land","dec":"Dezember","dob":"Geburtstag","email":"Email","feb":"Februar","female":"Weiblich","first-name":"Vorname","footer1":"Du hast schon ein Konto?","footer2":"Login","footer3":"Wenn Sie Beenden klicken bestätigen Sie das Lesen, die Zustimmung und die Anforderungen der","jan":"Januar","june":"Juni","language":"Sprache","last-name":"Nachname","male":"Männlich","mar":"März","may":"März","month":"Monat","nickname":"Spitzname","nov":"November","oct":"Oktober","password":"Passwort","sep":"September","state":"Provinz","street":"Adresse","title":"Registrierung","zip":"Postleitzahl"}}}'),
        e.translations.el = JSON.parse('{"sdk":{"default_table_title":"Υψηλά σκορ","language":{"ar":"Αραβικά","cs":"Τσέχικα","de":"Γερμανικά","el":"Ελληνικά","en":"Αγγλικά","es":"Ισπανικά","fr":"Γαλλικά","he":"Εβραϊκά","hi":"Χίντι","id":"Ινδονησιακά","it":"Ιταλικά","ja":"Ιαπωνικά","ko":"Κορεάτικα","nl":"Ολλανδικά","pl":"Πολωνικά","pt":"Πορτογαλικά","pt-BR":"Βραζιλιάνικα","ro":"Ρουμάνικα","ru":"Ρώσικα","th":"Ταϊλανδέζικα","tl":"Tagalog","tr":"Τούρκικα","vi-VN":"Βιετναμέζικα","zh":"Κινέζικα"},"login":{"email":"Email","footer1":"Δεν έχετε λογαριασμό;","footer2":"Δημιουργήστε λογαριασμό","forgot":"Ξεχάσατε το κωδικό;","password":"Κωδικός","title":"Σύνδεση"},"playtomic":{"achievements":"Επιτεύγματα","alltime":"Συνεχώς","new_account":"Νέος Λογαριασμός","newest":"Νεότερα","page":"Σελίδα %{num}","personal_best":"Προσωπικό ρεκόρ","seven_days":"7 Μέρες","thirty_days":"30 Μέρες"},"register":"Εγγραφείτε","registration":{"apr":"Απρίλιος","aug":"Αύγουστος","city":"Πόλη","country":"Χώρα","dec":"Δεκέμβριος","dob":"Ημερομηνία Γέννησης","email":"Email","feb":"Φεβρουάριος","female":"Γυναίκα","first-name":"Όνομα","footer1":"Έχετε ήδη λογαριασμό;","footer2":"Είσοδος","footer3":"Πατώντας ολοκλήρωση αποδέχεστε ότι έχετε διαβάσει και συμφωνείτε με τους","jan":"Ιανουάριος","june":"Ιούνιος","language":"Γλώσσα","last-name":"Επώνυμο","male":"Άνδρας","mar":"Μάρτιος","may":"Μάιος","month":"Μήνας","nickname":"Ψευδώνυμο","nov":"Νοέμβριος","oct":"Οκτώβριος","password":"Κωδικός","sep":"Σεπτέμβριος","state":"Νομός","street":"Οδός","title":"Εγγραφή","zip":"Τ.Κ."}}}'),
        e.translations.en = JSON.parse('{"sdk":{"default_table_title":"High Scores","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"All Time","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"Personal best","seven_days":"7 Days","thirty_days":"30 Days"},"register":"Register","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.es = JSON.parse('{"sdk":{"default_table_title":"Puntuaciones Altas","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"Todos los Tiempos","new_account":"New Account","newest":"Lo Más Nuevo","page":"Page %{num}","personal_best":"Record Personal","seven_days":"7 Días","thirty_days":"30 Días"},"register":"Registrarse","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.fr = JSON.parse('{"sdk":{"default_table_title":"Meilleurs scores","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"Tout le temps","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"Record personnel","seven_days":"7 Days","thirty_days":"30 Days"},"register":"S\'inscrire","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.he = JSON.parse('{"sdk":{"default_table_title":"תוצאות גבוהות","language":{"ar":"ערבית","cs":"צ\'כית","de":"גרמנית","el":"יוונית","en":"אנגלית","es":"ספרדית","fr":"צרפתית","he":"עברית","hi":"הודית","id":"אינדונזית","it":"איטלקית","ja":"יפנית","ko":"קוריאנית","nl":"הולנדית","pl":"פולנית","pt":"פורטוגזית","pt-BR":"פורטוגזית ברזילאית","ro":"רומנית","ru":"רוסית","th":"תאילנדית","tl":"טאגלוג","tr":"טורקית","vi-VN":"ויאטנמית","zh":"סינית"},"login":{"email":"אימייל","footer1":"אין לך חשבון?","footer2":"יצירת חשבון","forgot":"שכחת סיסמא?","password":"סיסמא","title":"התחברות"},"playtomic":{"achievements":"הישגים","alltime":"כל הזמנים","new_account":"חשבון חדש","newest":"הכי חדש","page":"עמוד %{num}","personal_best":"תוצאה גבוהה אישית","seven_days":"7 ימים","thirty_days":"30 ימים"},"register":"הרשמה","registration":{"apr":"אפריל","aug":"אוגוסט","city":"עיר","country":"מדינה","dec":"דצמבר","dob":"תאריך לידה","email":"אימייל","feb":"פברואר","female":"נקבה","first-name":"שם פרטי","footer1":"כבר יש לך חשבון?","footer2":"התחברות","footer3":"בלחיצה על סיום הנך מאשר/ת שקראת והסכמת ל","jan":"ינואר","june":"יוני","language":"שפה","last-name":"שם משפחה","male":"זכר","mar":"מרץ","may":"מאי","month":"חודש","nickname":"כינוי","nov":"נובמבר","oct":"אוקטובר","password":"סיסמא","sep":"ספטמבר","state":"מחוז","street":"כתובת","title":"הרשמה","zip":"מיקוד"}}}'),
        e.translations.hi = JSON.parse('{"sdk":{"default_table_title":"उच्च स्कोर","language":{"ar":"अरबी","cs":"चेक","de":"जर्मन","el":"ग्रीक","en":"अंग्रेज़ी","es":"स्पैनिश","fr":"फ्रांसीसी","he":"हिब्रू","hi":"हिन्दी","id":"इंडोनेशियाई","it":"इतालवी","ja":"जापानी","ko":"कोरियाई","nl":"डच","pl":"पोलिश","pt":"पुर्तगाली","pt-BR":"ब्राज़ीलियाई पुर्तगाली","ro":"रोमानियन","ru":"रूसी","th":"थाई","tl":"टागालोग","tr":"तुर्की","vi-VN":"वियतनामी","zh":"चीनी"},"login":{"email":"ईमेल","footer1":"खाता नहीं है?","footer2":"एक खाता बनाएं","forgot":"पासवर्ड भूल गए?","password":"पासवर्ड","title":"लॉगिन"},"playtomic":{"achievements":"उपलब्धियां","alltime":"पूरा समय","new_account":"नया खाता","newest":"नवीनतम","page":"पेज %{num}","personal_best":"व्यक्तिगत सर्वश्रेष्ठ","seven_days":"7 दिन","thirty_days":"30 दिन"},"register":"रजिस्टर करें","registration":{"apr":"अप्रैल","aug":"अगस्त","city":"शहर","country":"देश","dec":"दिसम्बर","dob":"जन्म की तारीख","email":"ईमेल","feb":"फ़रवरी","female":"स्त्री","first-name":"पहला नाम","footer1":"पहले से एक खाता है?","footer2":"लॉगिन","footer3":"समाप्त पर क्लिक करने का अर्थ है कि आपने इसे पढ़ा है और इससे सहमत हैं:","jan":"जनवरी","june":"जून","language":"भाषा","last-name":"अंतिम नाम","male":"पुरुष","mar":"मार्च","may":"मई","month":"महीना","nickname":"उपनाम","nov":"नवम्बर","oct":"अक्टूबर","password":"पासवर्ड","sep":"सितम्बर","state":"राज्य या प्रांत","street":"पता","title":"रजिस्टर करें","zip":"ज़िप कोड"}}}'),
        e.translations.id = JSON.parse('{"sdk":{"default_table_title":"Nilai tertinggi","language":{"ar":"Bahasa Arab","cs":"Bahasa Ceko","de":"Bahasa Jerman","el":"Bahasa Yunani","en":"Bahasa Inggris","es":"Bahasa Spanyol","fr":"Bahasa Perancis","he":"Bahasa Ibrani","hi":"Bahasa Hindi","id":"Bahasa Indonesia","it":"Bahasa Italia","ja":"Bahasa Jepang","ko":"Bahasa Korea","nl":"Bahasa Belanda","pl":"Bahasa Polandia","pt":"Bahasa Portugis","pt-BR":"Bahasa Portugis Brasil","ro":"Bahasa Romania","ru":"Bahasa Rusia","th":"Bahasa Thailand","tl":"Bahasa Tagalog","tr":"Bahasa Turki","vi-VN":"Bahasa Vietnam","zh":"Bahasa Mandarin"},"login":{"email":"Email","footer1":"Tidak memiliki akun?","footer2":"Buat akun","forgot":"Lupa kata sandi?","password":"Kata sandi","title":"Login"},"playtomic":{"achievements":"Prestasi","alltime":"Semua Waktu","new_account":"Akun Baru","newest":"Terbaru","page":"Halaman %{num}","personal_best":"Pribadi terbaik","seven_days":"7 Hari","thirty_days":"30 Hari"},"register":"Daftar","registration":{"apr":"April","aug":"Agustus","city":"Kota","country":"Negara","dec":"Desember","dob":"Tanggal Lahir","email":"Email","feb":"Februari","female":"Perempuan","first-name":"Nama depan","footer1":"Sudah memiliki akun?","footer2":"Login","footer3":"Menekan tombol selesai menunjukkan bahwa kamu bisa, sudah membaca, dan setuju dengan","jan":"Januari","june":"Juni","language":"Bahasa","last-name":"Nama belakang","male":"Laki-laki","mar":"Maret","may":"Mei","month":"Bulan","nickname":"Nama panggilan","nov":"Nopember","oct":"Oktober","password":"Kata sandi","sep":"September","state":"Provinsi","street":"Alamat jalan","title":"Registrasi","zip":"Kode pos"}}}'),
        e.translations.it = JSON.parse('{"sdk":{"default_table_title":"Punteggi Alti","language":{"ar":"Arabico","cs":"Ceco","de":"Tedesco","el":"Greco","en":"Inglese","es":"Spagnolo","fr":"Francese","he":"Ebraico","hi":"Hindi","id":"Indonesiano","it":"Italiano","ja":"Giapponese","ko":"Coreano","nl":"Olandese","pl":"Polacco","pt":"Portoghese","pt-BR":"Portoghese brasiliano","ro":"Rumeno","ru":"Russo","th":"Thailandese","tl":"Tagalog","tr":"Turco","vi-VN":"Vietnamita","zh":"Cinese"},"login":{"email":"Email","footer1":"Non avete un account?","footer2":"Create un account","forgot":"Hai dimenticato la password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Risultati","alltime":"I migliori in assoluto","new_account":"Nuovo Account","newest":"I più nuovi","page":"Pagina %{num}","personal_best":"I migliori per te","seven_days":"7 Giorni","thirty_days":"30 Giorni"},"register":"Registrati","registration":{"apr":"Aprile","aug":"Agosto","city":"Città","country":"Paese","dec":"Dicembre","dob":"Data di Nascita","email":"Email","feb":"Febbraio","female":"Femmina","first-name":"Nome","footer1":"Avete già un account?","footer2":"Login","footer3":"Cliccando su Fine avrete letto e accettato","jan":"Gennaio","june":"Giugno","language":"Linguaggio","last-name":"Cognome","male":"Maschio","mar":"Marzo","may":"Maggio","month":"Mese","nickname":"Nickname","nov":"Novembre","oct":"Ottobre","password":"Password","sep":"Settembre","state":"Stato o provincia","street":"Indirizzo","title":"Registrazione","zip":"CAP"}}}'),
        e.translations.ja = JSON.parse('{"sdk":{"default_table_title":"ハイスコア","language":{"ar":"アラビア語","cs":"チェコ語","de":"ドイツ語","el":"ギリシャ語","en":"英語","es":"スペイン語","fr":"フランス語","he":"ヘブライ語","hi":"ヒンディー語","id":"インドネシア語","it":"イタリア語","ja":"日本語","ko":"韓国語","nl":"オランダ語","pl":"ポーランド語","pt":"ポルトガル語","pt-BR":"ブラジル・ポルトガル語","ro":"ルーマニア語","ru":"ロシア語","th":"タイ語","tl":"タガログ語","tr":"トルコ語","vi-VN":"ベトナム語","zh":"中国語"},"login":{"email":"メールアドレス","footer1":"アカウントを持っていませんか？","footer2":"新規アカウントを作成する","forgot":"パスワードをお忘れですか？","password":"パスワード","title":"ログイン"},"playtomic":{"achievements":"実績","alltime":"すべての期間","new_account":"新規アカウント","newest":"最新","page":"%{num} ページ","personal_best":"パーソナルベスト","seven_days":"７日間","thirty_days":"30日間"},"register":"登録","registration":{"apr":"4月","aug":"8月","city":"市区町村","country":"国","dec":"12月","dob":"生年月日","email":"メールアドレス","feb":"2月","female":"女性","first-name":"名","footer1":"アカウントを持っていますか？","footer2":"ログイン","footer3":"「完了」ボタンを押すことにより、あなたはライセンス条項およびプライバシーポリシーを理解し、記載されているものを従うことが可能で、同意するものとみなされます。","jan":"1月","june":"6月","language":"言語","last-name":"姓","male":"男性","mar":"3月","may":"5月","month":"月","nickname":"ニックネーム","nov":"11月","oct":"10月","password":"パスワード","sep":"9月","state":"都道府県","street":"住所","title":"登録","zip":"郵便番号"}}}'),
        e.translations.ko = JSON.parse('{"sdk":{"default_table_title":"하이 스코어","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"항상","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"개인 최고 기록","seven_days":"7 Days","thirty_days":"30 Days"},"register":"가입하기","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.nl = JSON.parse('{"sdk":{"default_table_title":"Highscores","language":{"ar":"Arabisch","cs":"Tsjechisch","de":"Duits","el":"Grieks","en":"Engels","es":"Spaans","fr":"Frans","he":"Herbreeuws","hi":"Hindi","id":"Indonesian","it":"Italiaans","ja":"Japans","ko":"Koreaans","nl":"Nederlands","pl":"Pools","pt":"Portugees","pt-BR":"Braziliaans Portugees","ro":"Roemeens","ru":"Russisch","th":"Thais","tl":"Tagalog","tr":"Turks","vi-VN":"Vietnamees","zh":"Chinees"},"login":{"email":"E-mail","footer1":"Heb je geen account?","footer2":"Maak een account","forgot":"Wachtwoord vergeten?","password":"Wachtwoord","title":"Inloggen"},"playtomic":{"achievements":"Prestaties","alltime":"All Time","new_account":"Nieuw account","newest":"Nieuwste","page":"Pagina %{num}","personal_best":"Persoonlijk record","seven_days":"7 dagen","thirty_days":"30 dagen"},"register":"Aanmelden","registration":{"apr":"april","aug":"augustus","city":"stad","country":"Land","dec":"december","dob":"Geboortedatum","email":"E-mail","feb":"februari","female":"Vrouwelijk","first-name":"Voornaam","footer1":"Heb je al een account?","footer2":"Login","footer3":"Als u op finish klikt, geeft dit aan dat u in staat bent, hebt gelezen en akkoord gaat met de","jan":"januari","june":"juni","language":"taal","last-name":"Achternaam","male":"Mannelijk","mar":"maart","may":"mei","month":"Maand","nickname":"Bijnaam","nov":"november","oct":"oktober","password":"Wachtwoord","sep":"september","state":"Staat of provincie","street":"adres","title":"Registratie","zip":"Postcode"}}}'),
        e.translations.pl = JSON.parse('{"sdk":{"default_table_title":"Ranking","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"Ogółem","new_account":"New Account","newest":"Najnowsze","page":"Page %{num}","personal_best":"Osobiste najlepsze","seven_days":"7 dni","thirty_days":"30 dni"},"register":"Zarejestruj","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.pt = JSON.parse('{"sdk":{"default_table_title":"Pontuações Máximas","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"Todo o tempo","new_account":"New Account","newest":"Mais recentes","page":"Page %{num}","personal_best":"O seu melhor","seven_days":"7 Dias","thirty_days":"30 Dias"},"register":"Registar-se","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations["pt-BR"] = JSON.parse('{"sdk":{"default_table_title":"Pontuações mais altas","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"All Time","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"Personal best","seven_days":"7 Days","thirty_days":"30 Days"},"register":"Registrar","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.ro = JSON.parse('{"sdk":{"default_table_title":"Scoruri Mari","language":{"ar":"Arabă","cs":"Cehă","de":"Germană","el":"Greacă","en":"Engleză","es":"Spaniolă","fr":"Franceză","he":"Ebraică","hi":"Hindi","id":"Indoneziană","it":"Italiană","ja":"Japoneză","ko":"Coreană","nl":"Olandeză","pl":"Poloneză","pt":"Portugheză","pt-BR":"Portugheză Braziliană","ro":"Română","ru":"Rusă","th":"Thailandeză","tl":"Tagalog","tr":"Turcă","vi-VN":"Vietnameză","zh":"Chineză"},"login":{"email":"Email","footer1":"Nu ai un cont?","footer2":"Creează un cont","forgot":"Ai uitat parola?","password":"Parolă","title":"Autentificare"},"playtomic":{"achievements":"Realizări","alltime":"Tot Timpul","new_account":"Cont nou","newest":"Cele mai noi","page":"Pagină %{num}","personal_best":"Record personal","seven_days":"7 Zile","thirty_days":"30 Zile"},"register":"Înregistrează-te","registration":{"apr":"Aprilie","aug":"August","city":"Oraș","country":"Țară","dec":"Decembrie","dob":"Data Nașterii","email":"Email","feb":"Februarie","female":"Feminin","first-name":"Prenume","footer1":"Ai deja un cont?","footer2":"Autentificare","footer3":"Făcând click pe terminare indică că ești capabil, ai citit, și fost de acord cu","jan":"Ianuarie","june":"Iunie","language":"Limbă","last-name":"Nume","male":"Masculin","mar":"Martie","may":"Mai","month":"Lună","nickname":"Poreclă","nov":"Noiembrie","oct":"Octombrie","password":"Parolă","sep":"Septembrie","state":"Stat sau provincie","street":"Adresă stradă","title":"Înregistrare","zip":"Cod poștal"}}}'),
        e.translations.ru = JSON.parse('{"sdk":{"default_table_title":"Рекорды","language":{"ar":"Арабский","cs":"Чешский","de":"Немецкий","el":"Греческий","en":"Английский","es":"Испанский","fr":"Французский","he":"Иврит","hi":"Хинди","id":"Индонезийский","it":"Итальянский","ja":"Японский","ko":"Корейский","nl":"Нидерландский","pl":"Польский","pt":"Португальский","pt-BR":"Бразильский португальский","ro":"Румынский","ru":"Русский","th":"Тайский","tl":"Тагальский","tr":"Турецкий","vi-VN":"Вьетнамский","zh":"Китайский"},"login":{"email":"Адрес эл. почты","footer1":"У вас нет учетной записи?","footer2":"Создать учетную запись","forgot":"Забыли пароль?","password":"Пароль","title":"Войти"},"playtomic":{"achievements":"Достижения","alltime":"За все время","new_account":"Новый аккаунт","newest":"Новейшее","page":"Страница %{num}","personal_best":"Личные рекорды","seven_days":"7 дней","thirty_days":"30 дней"},"register":"Зарегистрироваться","registration":{"apr":"Апрель","aug":"Август","city":"Город","country":"Страна","dec":"Декабрь","dob":"Дата рождения","email":"Адрес эл. почты","feb":"Февраль","female":"Женщина","first-name":"Имя","footer1":"Уже есть учетная запись?","footer2":"Войти","footer3":"Нажатие на кнопку «Готово» означает, что вы готовы соблюдать, прочитали и согласны с","jan":"Январь","june":"Июнь","language":"Язык","last-name":"Фамилия","male":"Мужчина","mar":"Март","may":"Май","month":"Месяц","nickname":"Никнейм","nov":"Ноябрь","oct":"Октябрь","password":"Пароль","sep":"Сентябрь","state":"Штат или провинция","street":"Адрес","title":"Регистрация","zip":"Почтовый индекс"}}}'),
        e.translations.th = JSON.parse('{"sdk":{"default_table_title":"คะแนนสูงสุด","language":{"ar":"อาหรับ","cs":"เช็ก","de":"เยอรมัน","el":"กรีก","en":"อังกฤษ","es":"สเปน","fr":"ฝรั่งเศส","he":"ฮิบรู","hi":"ฮินดู","id":"อินโดนิเซีย","it":"อิตาเลียน","ja":"ญี่ปุ่น","ko":"เกาหลี","nl":"เนเธอร์แลนด์","pl":"โปแลนด์","pt":"โปรตุเกส","pt-BR":"บราซิล โปรตุเกส","ro":"โรมาเนีย","ru":"รัสเซีย","th":"ไทย","tl":"ตากาล็อก","tr":"ตุรกี","vi-VN":"เวียดนาม","zh":"จีน"},"login":{"email":"อีเมล","footer1":"ไม่มีบัญชี?","footer2":"สร้างบัญชี","forgot":"ลืมรหัสผ่าน?","password":"รหัสผ่าน","title":"เข้าสู่ระบบ"},"playtomic":{"achievements":"ความสำเร็จ","alltime":"ตลอดเวลา","new_account":"บัญชีใหม่","newest":"ใหม่ล่าสุด","page":"หน้า %{num}","personal_best":"ส่วนตัวดีที่สุด","seven_days":"7 วัน","thirty_days":"30 วัน"},"register":"ลงทะเบียน","registration":{"apr":"เมษายน","aug":"สิงหาคม","city":"เมือง","country":"ประเทศ","dec":"ธันวาคม","dob":"วันเกิด","email":"อีเมล","feb":"กุมภาพันธ์","female":"เพศหญิง","first-name":"ชื่อจริง","footer1":"มีบัญชีอยู่แล้ว?","footer2":"เข้าสู่ระบบ","footer3":"การคลิกเสร็จสิ้นแสดงว่าคุณสามารถ, อ่าน, และยอมรับ","jan":"มกราคม","june":"มิถุนายน","language":"ภาษา","last-name":"นามสกุล","male":"เพศชาย","mar":"มีนาคม","may":"พฤษภาคม","month":"เดือน","nickname":"ชื่อเล่น","nov":"พฤศจิกายน","oct":"ตุลาคม","password":"รหัสผ่าน","sep":"กันยายน","state":"รัฐหรือจังหวัด","street":"ที่อยู่ถนน","title":"การลงทะเบียน","zip":"รหัสไปรษณีย์"}}}'),
        e.translations.tl = JSON.parse('{"sdk":{"default_table_title":"Mga pinakamatataas na Iskor","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"Mga Pinakasikat","new_account":"New Account","newest":"Pinakabago","page":"Page %{num}","personal_best":"Ang aking pinakamagaling","seven_days":"7 Araw","thirty_days":"30 Araw"},"register":"Magrehistro","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e.translations.tr = JSON.parse('{"sdk":{"default_table_title":"Yüksek Puanlar","language":{"ar":"Arapça","cs":"Çekçe","de":"Almanca","el":"Yunanca","en":"İngilizce","es":"İspanyolca","fr":"Fransızca","he":"İbranice","hi":"Hintçe","id":"Endonezce","it":"İtalyanca","ja":"Japonca","ko":"Korece","nl":"Hollandaca","pl":"Lehçe","pt":"Portekizce","pt-BR":"Brezilya Portekizcesi","ro":"Romence","ru":"Rusça","th":"Tayca","tl":"Tagalog","tr":"Türkçe","vi-VN":"Vietnamca","zh":"Çince"},"login":{"email":"E-mail","footer1":"Bir hesabınız yok mu?","footer2":"Bir hesap oluşturun","forgot":"Parolayı unuttunuz mu?","password":"Parola","title":"Oturum Aç"},"playtomic":{"achievements":"Başarımlar","alltime":"Sürekli","new_account":"Yeni Hesap","newest":"En Yeni","page":"Sayfa %{num}","personal_best":"En iyi kişisel rekor","seven_days":"7 Gün","thirty_days":"30 Gün"},"register":"Kayıt","registration":{"apr":"Nisan","aug":"Ağustos","city":"Şehir","country":"Ülke","dec":"Aralık","dob":"Doğum Tarihi","email":"E-posta","feb":"Şubat","female":"Kadın","first-name":"Adı","footer1":"Zaten bir hesabınız var mı?","footer2":"Oturum Aç","footer3":"Bitir\'i tıkladığınızda, şunu okuduğunuz ve kabul ettiğiniz anlamına gelir","jan":"Ocak","june":"Haziran","language":"Dil","last-name":"Soyadı","male":"Erkek","mar":"Mart","may":"Mayıs","month":"Ay","nickname":"Takma Ad","nov":"Kasım","oct":"Ekim","password":"Parola","sep":"Eylül","state":"Eyalet veya İl","street":"Adres","title":"Kayıt","zip":"Posta kodu"}}}'),
        e.translations["vi-VN"] = JSON.parse('{"sdk":{"default_table_title":"Điểm cao","language":{"ar":"Tiếng Ả rập","cs":"Tiếng Séc","de":"Tiếng Đức","el":"Tiếng Hi Lạp","en":"Tiếng Anh","es":"Tiếng Tây Ban Nha","fr":"Tiếng Pháp","he":"Tiếng Hebrew","hi":"Tiếng Hindi","id":"Tiếng In đô","it":"Tiếng Ý","ja":"Tiếng Nhật","ko":"Tiếng Hàn","nl":"Tiếng Hà Lan","pl":"Tiếng Ba Lan","pt":"Tiếng Bồ Đào Nha","pt-BR":"Tiềng Bồ Đào Nha Brazil","ro":"Tiếng Rumani","ru":"Tiếng Nga","th":"Tiếng Thái","tl":"Tiếng Tagalog","tr":"Tiếng Thổ Nhĩ Kỳ","vi-VN":"Tiếng Việt","zh":"Tiếng Trung Quốc"},"login":{"email":"Thư điện tử","footer1":"Bạn không có tài khoản đúng không?","footer2":"Tạo một tài khoản","forgot":"Quên mật khẩu?","password":"Mật khẩu","title":"Đăng nhập"},"playtomic":{"achievements":"Thành tích","alltime":"Tất cả mọi thời gian","new_account":"Tài khoản mới","newest":"Mới nhất","page":"Trang %{num}","personal_best":"Cá nhân tốt nhất","seven_days":"7 ngày","thirty_days":"30 ngày"},"register":"Đăng ký","registration":{"apr":"Tháng Tư","aug":"Tháng Tám","city":"Thành phố","country":"Nước","dec":"Tháng Mười hai","dob":"Ngày sinh","email":"Thư điện tử","feb":"Tháng Hai","female":"Nữ","first-name":"Tên","footer1":"Bạn đã có tài khoản rồi phải không?","footer2":"Đăng nhập","footer3":"Nhấp vào kết thúc để cho biết là bạn đã có thể đã đọc và đồng ý với","jan":"Tháng Một","june":"Tháng Sáu","language":"Ngôn ngữ","last-name":"Họ","male":"Nam","mar":"Tháng Ba","may":"Tháng Năm","month":"Tháng","nickname":"Biệt danh","nov":"Tháng Mười một","oct":"Tháng Mười","password":"Mật khẩu","sep":"Tháng Chín","state":"Bang hoặc tỉnh","street":"Địa chỉ đường","title":"Đăng ký","zip":"Mã bưu chính"}}}'),
        e.translations.zh = JSON.parse('{"sdk":{"default_table_title":"高分榜","language":{"ar":"Arabic","cs":"Czech","de":"German","el":"Greek","en":"English","es":"Spanish","fr":"French","he":"Hebrew","hi":"Hindi","id":"Indonesian","it":"Italian","ja":"Japanese","ko":"Korean","nl":"Dutch","pl":"Polish","pt":"Portuguese","pt-BR":"Brazilian Portuguese","ro":"Romanian","ru":"Russian","th":"Thai","tl":"Tagalog","tr":"Turkish","vi-VN":"Vietnamese","zh":"Chinese"},"login":{"email":"Email","footer1":"Don\'t have an account?","footer2":"Create an account","forgot":"Forgot password?","password":"Password","title":"Login"},"playtomic":{"achievements":"Achievements","alltime":"总是","new_account":"New Account","newest":"Newest","page":"Page %{num}","personal_best":"个人最佳","seven_days":"7 Days","thirty_days":"30 Days"},"register":"注册","registration":{"apr":"April","aug":"August","city":"City","country":"Country","dec":"December","dob":"Date of Birth","email":"Email","feb":"February","female":"Female","first-name":"First name","footer1":"Already have an account?","footer2":"Login","footer3":"Clicking finish indicates you are able, have read, and agree to the","jan":"January","june":"June","language":"Language","last-name":"Last name","male":"Male","mar":"March","may":"May","month":"Month","nickname":"Nickname","nov":"November","oct":"October","password":"Password","sep":"September","state":"State or province","street":"Street address","title":"Registration","zip":"Zipcode"}}}'),
        e
    }),
    define("dialogv2", ["require", "underscore", "utils/dom_helper", "event", "utils/constants", "text!stylesheets/default.css", "utils/i18n", "utils/translations"], function(e) {
        var t = e("underscore")
          , n = e("utils/dom_helper")
          , i = e("event")
          , r = e("utils/constants")
          , a = e("text!stylesheets/default.css")
          , o = e("utils/i18n")
          , s = e("utils/translations")
          , l = window.navigator.language;
        "undefined" != typeof Storage && localStorage.getItem("locale") && (l = localStorage.getItem("locale")),
        o.translations = s.translations,
        o.locale = "pt-BR" == l || "vi-VN" == l ? l : l.slice(0, 2),
        o.fallbacks = !0;
        var u, c, d, p, f, h = {
            iframe: null,
            mask: null,
            loaded: !1,
            loadedCallback: null,
            unloadedCallback: null,
            width: 0,
            height: 0,
            i18n: o,
            create: function(e, a, o) {
                o = o || {};
                var s = {
                    cdn: r.cdnUrl,
                    i18n: h.i18n,
                    localeList: h.listLocales()
                };
                t.extend(o, s),
                d = e,
                p = a,
                f = o,
                this.iframe && this.destroy();
                var l = e(o);
                a = t.pick(a || {}, "embedded"),
                h.createFrame(l, a),
                h.centerResize(),
                u = h.document().getElementById("close") || null,
                c = h.document().getElementById("localization") || null,
                h.window().onload = function() {
                    h.centerResize(),
                    h.loaded = !0,
                    i.fire("dialog.show"),
                    setTimeout(function() {
                        h.centerResize()
                    }, 1e3),
                    h.loadedCallback && h.loadedCallback()
                }
                ,
                h.createMutationObserver(),
                a.embedded || n.addEventListener(h.mask, "click", h.destroy),
                n.addEventListener(u, "click", h.destroy),
                n.addEventListener(c, "click", h.localizationClick),
                n.addEventListener(window, "resize", h.centerResize)
            },
            destroy: function(e) {
                h.iframe && (n.removeEventListener(h.mask, "click", h.destroy),
                n.removeEventListener(u, "click", h.destroy),
                n.removeEventListener(c, "click", h.localizationClick),
                n.removeEventListener(window, "resize", h.centerResize),
                i.fire("dialog.hide"),
                document.body.removeChild(h.iframe),
                h.mask && (document.body.removeChild(h.mask),
                h.mask = null),
                h.iframe = null,
                h.loaded = !1,
                e || (h.loadedCallback = null,
                h.unloadedCallback && h.unloadedCallback(),
                h.unloadedCallback = null,
                window.focus()))
            },
            reload: function() {
                h.destroy(!0),
                h.create(d, p, f)
            },
            createFrame: function(e, t) {
                var n = document.createElement("iframe");
                h.iframe = n,
                n.setAttribute("style", "position: absolute; z-index: 10000; border: 0;"),
                n.title = "sdk menu",
                n.scrolling = "no",
                n.style.borderRadius = "3px";
                var i = '<html><head><style type="text/css">' + a + "</style></head><body>" + e + "</body></html>";
                if (!t.embedded) {
                    var r = document.createElement("div");
                    this.mask = r,
                    r.setAttribute("style", "position: absolute; z-index: 9999; border: 0; top: 0; left: 0;"),
                    r.style.background = "rgba(0, 0, 0, 0.5)",
                    r.style.width = "100%",
                    r.style.height = "100%",
                    document.body.appendChild(r)
                }
                document.body.appendChild(n),
                n.contentWindow.document.open(),
                n.contentWindow.document.write(i),
                n.contentWindow.document.close()
            },
            loadStyle: function(e) {
                if (h.iframe) {
                    var t = h.document()
                      , n = t.createElement("link");
                    n.rel = "stylesheet",
                    n.type = "text/css",
                    n.href = e,
                    h.head().appendChild(n)
                }
            },
            inlineStyle: function(e) {
                if (h.iframe) {
                    var t = h.document()
                      , n = t.createElement("style");
                    n.type = "text/css",
                    n.innerHTML = e,
                    h.head().appendChild(n)
                }
            },
            document: function() {
                return h.iframe ? h.iframe.contentWindow.document : void 0
            },
            window: function() {
                return h.iframe ? h.iframe.contentWindow : void 0
            },
            head: function() {
                return h.iframe ? h.document().getElementsByTagName("head")[0] : void 0
            },
            body: function() {
                if (h.iframe) {
                    var e = h.document();
                    return e.body
                }
            },
            centerResize: function() {
                h.resize(),
                h.center()
            },
            createMutationObserver: function() {
                if (window.hasOwnProperty("MutationObserver"))
                    var e = window.MutationObserver;
                if (window.hasOwnProperty("WebKitMutationObserver"))
                    var e = window.WebKitMutationObserver;
                if (e) {
                    var t = {
                        attributes: !0,
                        attributeOldValue: !1,
                        characterData: !0,
                        characterDataOldValue: !1,
                        childList: !0,
                        subtree: !0
                    }
                      , n = new e(function() {
                        h.centerResize()
                    }
                    );
                    n.observe(h.body(), t)
                }
            },
            center: function() {
                var e = window
                  , t = document
                  , n = t.documentElement
                  , i = t.getElementsByTagName("body")[0]
                  , r = e.innerWidth || n.clientWidth || i.clientWidth
                  , a = e.innerHeight || n.clientHeight || i.clientHeight
                  , o = (r - h.width) / 2
                  , s = (a - h.height) / 2;
                h.iframe.style.left = o + "px",
                h.iframe.style.top = s + "px"
            },
            resize: function() {
                var e = h.body().firstChild
                  , t = e.getBoundingClientRect()
                  , n = t.height
                  , i = t.width;
                i > window.innerWidth && (i = window.innerWidth,
                e.style.width = window.innerWidth),
                h.width = i,
                h.height = n,
                h.iframe.style.width = i + "px",
                h.iframe.style.height = n + "px"
            },
            listLocales: function() {
                var e = Object.keys(o.translations);
                return e = e.filter(function(e) {
                    return "en" !== e
                }),
                e.unshift("en"),
                e
            },
            localizationClick: function(e) {
                -1 != e.target.className.indexOf("locale-click") && (h.document().getElementById("locale-dropdown").style.display = "block"),
                -1 != e.target.className.indexOf("locale-language") && (h.document().getElementById("locale-dropdown").style.display = "none",
                l = e.target.id,
                "undefined" != typeof Storage && localStorage.setItem("locale", l),
                o.locale = "pt-BR" == l || "vi-VN" == l ? l : l.slice(0, 2),
                h.reload()),
                "locale-backdrop" == e.target.id && (h.document().getElementById("locale-dropdown").style.display = "none")
            }
        };
        return h
    }),
    define("sdk/ui", ["require", "utils/wrapper", "utils/dom_ready", "utils/dom_helper", "utils/uri_helper", "rpc", "dialog", "dialogv2"], function(e) {
        var t = e("utils/wrapper")
          , n = e("utils/dom_ready")
          , i = e("utils/dom_helper")
          , r = e("utils/uri_helper")
          , a = e("rpc")
          , o = e("dialog")
          , s = e("dialogv2")
          , l = {
            __dialogs: {},
            root: null,
            getRoot: function() {
                if (this.root)
                    return this.root;
                var e = document.getElementById("id-root");
                return e ? i.addClass(e, "id-reset") : (e = document.createElement("div"),
                e.id = "id-root",
                i.addClass(e, "id-reset"),
                document.body.appendChild(e)),
                this.root = e,
                this.root
            },
            createDialog: function(e, n, r) {
                this.destroyAll();
                var a = new o(r)
                  , s = this;
                return a.successFn = t(e),
                a.errorFn = t(n),
                a.subscribe("dialog.closed", a.call),
                this.__dialogs[a.id] = a,
                r.embedded ? a : (i.addEventListener(a.mask, "click", function() {
                    a.contentWidth && s.destroy(a.id)
                }),
                a)
            },
            getDialog: function(e) {
                return this.__dialogs[e]
            },
            destroy: function(e) {
                var t = this.getDialog(e);
                t.destroy(),
                delete this.__dialogs[t.id]
            },
            destroyAll: function() {
                for (var e in this.__dialogs)
                    this.__dialogs[e].destroy();
                this.__dialogs = {},
                s.destroy()
            },
            createIframeDialog: function(e, t, n, a) {
                try {
                    var o = JSON.parse(a.q)
                } catch (s) {
                    var o = {}
                }
                var l = this.createDialog(e, t, o);
                if (document.attachEvent) {
                    this.getRoot().appendChild(l.elt);
                    var u = '<iframe id="' + l.id + '" name="' + l.id + '" style="border:none; overflowX:hidden; visibility:hidden;" src="javascript:false;" title="sdk menu"></iframe>';
                    l.replaceContent('<iframe src="javascript:false" frameborder="0" scrolling="no" title="sdk menu" style="height:1px; display:none; visibility:hidden;"></iframe>'),
                    a._sdk = l.id,
                    setTimeout(function() {
                        l.replaceContent(u);
                        var e = r.buildQuery(a);
                        l.findContent().firstChild.src = r.appendToUrl(n, e)
                    }, 0)
                } else {
                    var c = document.createElement("iframe");
                    c.name = "dialog-frame-" + l.id,
                    c.id = l.id,
                    c.style.border = "none",
                    c.style.overflowX = "hidden",
                    c.style.visibility = "hidden",
                    a._sdk = l.id;
                    var d = r.buildQuery(a);
                    this.getRoot().appendChild(l.elt),
                    c.src = r.appendToUrl(n, d),
                    l.replaceContent(c)
                }
                l.subscribe("dialog.resize", function(e, t, n) {
                    if (e && t && void 0 !== n) {
                        var i = document.getElementById(l.id);
                        i.setAttribute("style", "border:none; overflowX:hidden; visibility:visible;");
                        var r = document.body
                          , a = document.documentElement
                          , o = Math.max(r.scrollHeight, r.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight)
                          , s = o - 20
                          , u = t > s;
                        i.style.overflow = "hidden",
                        i.width = e + "px",
                        i.height = u ? s + "px" : t + "px"
                    }
                });
                var p = this;
                return i.addEventListener(window, "resize", function() {
                    p.centerDialog(l);
                    var e = 1;
                    clearInterval(p.resizeDelay),
                    p.resizeDelay = setInterval(function() {
                        p.centerDialog(l),
                        e++,
                        e >= 10 && clearInterval(p.resizeDelay)
                    }, 1e3)
                }),
                l.show(),
                l
            },
            centerDialog: function(e) {
                if (!e.hidden) {
                    var t = window
                      , n = document
                      , i = n.documentElement
                      , r = n.getElementsByTagName("body")[0]
                      , a = t.innerWidth || i.clientWidth || r.clientWidth
                      , o = t.innerHeight || i.clientHeight || r.clientHeight;
                    this.sizeMask(e, a, o),
                    this.sizeFrame(e, a, o);
                    var s = (a - e.width()) / 2
                      , l = (o - e.height()) / 2;
                    e.setLeft(s),
                    e.setTop(l)
                }
            },
            sizeMask: function(e, t, n) {
                e.mask.style.width = t + "px",
                e.mask.style.height = n + "px"
            },
            sizeFrame: function(e) {
                var t = e.contentHeight > e.height();
                e.inform("dialog.resize", e.contentWidth, e.contentHeight, t)
            }
        };
        return n(function() {
            l.getRoot()
        }),
        a.events["dialog.close"] = function(e) {
            var t = l.getDialog(e.dialog_id);
            t.inform("dialog.closed", null),
            l.destroy(t.id)
        }
        ,
        l
    }),
    define("utils/time", [], function() {
        return {
            local: function(e) {
                return "unix" == e ? (Date.now || (Date.now = function() {
                    return (new Date).getTime()
                }
                ),
                Math.floor(Date.now() / 1e3)) : void 0
            }
        }
    }),
    define("logger", ["utils/time"], function(e) {
        var t = []
          , n = 0;
        return {
            history: [],
            log: function() {
                if ("undefined" != typeof console && "undefined" != typeof console.log && console.log)
                    for (var e = 0; e < arguments.length; e++)
                        console.log(arguments[e]),
                        this.history.push(arguments[e])
            },
            addCall: function() {
                t.push(e.local("unix")),
                t.length >= 50 && this.log("WANRING: Too many API calls are being made to id.net");
                for (var n = 0; n < t.length; n++)
                    t[n] + 300 < e.local("unix") && delete t[n]
            },
            getCalls: function() {
                for (var n = 0; n < t.length; n++)
                    t[n] + 300 < e.local("unix") && delete t[n];
                return t.length
            },
            setSaveSize: function(e) {
                "string" == typeof e && (n = e.length)
            },
            getSaveSize: function() {
                return n
            }
        }
    }),
    define("utils/browser-request", ["require"], function() {
        function e(r, a) {
            if ("function" != typeof a)
                throw new Error("Bad callback given: " + a);
            if (!r)
                throw new Error("No options given");
            var s = r.onResponse;
            if (r = "string" == typeof r ? {
                uri: r
            } : JSON.parse(JSON.stringify(r)),
            r.onResponse = s,
            r.verbose && (e.log = i()),
            r.url && (r.uri = r.url,
            delete r.url),
            !r.uri && "" !== r.uri)
                throw new Error("options.uri is a required argument");
            if ("string" != typeof r.uri)
                throw new Error("options.uri must be a string");
            for (var l = ["proxy", "_redirectsFollowed", "maxRedirects", "followRedirect"], u = 0; u < l.length; u++)
                if (r[l[u]])
                    throw new Error("options." + l[u] + " is not supported");
            if (r.callback = a,
            r.method = r.method || "GET",
            r.headers = r.headers || {},
            r.body = r.body || null,
            r.timeout = r.timeout || e.DEFAULT_TIMEOUT,
            r.headers.host)
                throw new Error("Options.headers.host is not supported");
            r.json && (r.headers.accept = r.headers.accept || "application/json",
            "GET" !== r.method && (r.headers["content-type"] = "application/json"),
            "boolean" != typeof r.json ? r.body = JSON.stringify(r.json) : "string" != typeof r.body && (r.body = JSON.stringify(r.body)));
            var c = function(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            };
            if (r.qs) {
                var d = "string" == typeof r.qs ? r.qs : c(r.qs);
                r.uri = -1 !== r.uri.indexOf("?") ? r.uri + "&" + d : r.uri + "?" + d
            }
            var p = function(e) {
                var t = {};
                t.boundry = "-------------------------------" + Math.floor(1e9 * Math.random());
                var n = [];
                for (var i in e)
                    e.hasOwnProperty(i) && n.push("--" + t.boundry + '\nContent-Disposition: form-data; name="' + i + '"\n\n' + e[i] + "\n");
                return n.push("--" + t.boundry + "--"),
                t.body = n.join(""),
                t.length = t.body.length,
                t.type = "multipart/form-data; boundary=" + t.boundry,
                t
            };
            if (r.form) {
                if ("string" == typeof r.form)
                    throw "form name unsupported";
                if ("POST" === r.method) {
                    var f = (r.encoding || "application/x-www-form-urlencoded").toLowerCase();
                    switch (r.headers["content-type"] = f,
                    f) {
                    case "application/x-www-form-urlencoded":
                        r.body = c(r.form).replace(/%20/g, "+");
                        break;
                    case "multipart/form-data":
                        var h = p(r.form);
                        r.body = h.body,
                        r.headers["content-type"] = h.type;
                        break;
                    default:
                        throw new Error("unsupported encoding:" + f)
                    }
                }
            }
            return r.onResponse = r.onResponse || n,
            r.onResponse === !0 && (r.onResponse = a,
            r.callback = n),
            !r.headers.authorization && r.auth && (r.headers.authorization = "Basic " + o(r.auth.username + ":" + r.auth.password)),
            t(r)
        }
        function t(t) {
            function n() {
                d = !0;
                var n = new Error("ETIMEDOUT");
                return n.code = "ETIMEDOUT",
                n.duration = t.timeout,
                e.log.error("Timeout", {
                    id: c._id,
                    milliseconds: t.timeout
                }),
                t.callback(n, c)
            }
            function i() {
                if (d)
                    return e.log.debug("Ignoring timed out state change", {
                        state: c.readyState,
                        id: c.id
                    });
                if (e.log.debug("State change", {
                    state: c.readyState,
                    id: c.id,
                    timed_out: d
                }),
                c.readyState === s.OPENED) {
                    e.log.debug("Request started", {
                        id: c.id
                    });
                    for (var n in t.headers)
                        c.setRequestHeader(n, t.headers[n])
                } else
                    c.readyState === s.HEADERS_RECEIVED ? r() : c.readyState === s.LOADING ? (r(),
                    o()) : c.readyState === s.DONE && (r(),
                    o(),
                    l())
            }
            function r() {
                if (!g.response) {
                    if (g.response = !0,
                    e.log.debug("Got response", {
                        id: c.id,
                        status: c.status
                    }),
                    clearTimeout(c.timeoutTimer),
                    c.statusCode = c.status,
                    p && 0 == c.statusCode) {
                        var n = new Error("CORS request rejected: " + t.uri);
                        return n.cors = "rejected",
                        g.loading = !0,
                        g.end = !0,
                        t.callback(n, c)
                    }
                    t.onResponse(null, c)
                }
            }
            function o() {
                g.loading || (g.loading = !0,
                e.log.debug("Response body loading", {
                    id: c.id
                }))
            }
            function l() {
                if (!g.end) {
                    if (g.end = !0,
                    e.log.debug("Request done", {
                        id: c.id
                    }),
                    c.body = c.responseText,
                    t.json)
                        try {
                            c.body = JSON.parse(c.responseText)
                        } catch (n) {
                            return t.callback(n, c)
                        }
                    t.callback(null, c, c.body)
                }
            }
            var c = new s
              , d = !1
              , p = a(t.uri)
              , f = "withCredentials"in c;
            if (u += 1,
            c.seq_id = u,
            c.id = u + ": " + t.method + " " + t.uri,
            c._id = c.id,
            p && !f) {
                var h = new Error("Browser does not support cross-origin request: " + t.uri);
                return h.cors = "unsupported",
                t.callback(h, c)
            }
            c.timeoutTimer = setTimeout(n, t.timeout);
            var g = {
                response: !1,
                loading: !1,
                end: !1
            };
            return c.onreadystatechange = i,
            c.open(t.method, t.uri, !0),
            p && (c.withCredentials = !!t.withCredentials),
            c.send(t.body),
            c
        }
        function n() {}
        function i() {
            var e, t, i = {}, a = ["trace", "debug", "info", "warn", "error"];
            for (t = 0; t < a.length; t++)
                e = a[t],
                i[e] = n,
                "undefined" != typeof console && console && console[e] && (i[e] = r(console, e));
            return i
        }
        function r(e, t) {
            function n(n, i) {
                return "object" == typeof i && (n += " " + JSON.stringify(i)),
                e[t].call(e, n)
            }
            return n
        }
        function a(e) {
            var t, n = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;
            try {
                t = location.href
            } catch (i) {
                t = document.createElement("a"),
                t.href = "",
                t = t.href
            }
            var r = n.exec(t.toLowerCase()) || []
              , a = n.exec(e.toLowerCase())
              , o = !(!a || a[1] == r[1] && a[2] == r[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (r[3] || ("http:" === r[1] ? 80 : 443)));
            return o
        }
        function o(e) {
            var t, n, i, r, a, o, s, l, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0, d = 0, p = "", f = [];
            if (!e)
                return e;
            do
                t = e.charCodeAt(c++),
                n = e.charCodeAt(c++),
                i = e.charCodeAt(c++),
                l = t << 16 | n << 8 | i,
                r = l >> 18 & 63,
                a = l >> 12 & 63,
                o = l >> 6 & 63,
                s = 63 & l,
                f[d++] = u.charAt(r) + u.charAt(a) + u.charAt(o) + u.charAt(s);
            while (c < e.length);
            switch (p = f.join(""),
            e.length % 3) {
            case 1:
                p = p.slice(0, -2) + "==";
                break;
            case 2:
                p = p.slice(0, -1) + "="
            }
            return p
        }
        var s = XMLHttpRequest;
        if (!s)
            throw new Error("missing XMLHttpRequest");
        e.log = {
            trace: n,
            debug: n,
            info: n,
            warn: n,
            error: n
        };
        var l = 18e4
          , u = 0;
        e.withCredentials = !1,
        e.DEFAULT_TIMEOUT = l,
        e.defaults = function(t) {
            var n = function(e) {
                var n = function(n, i) {
                    n = "string" == typeof n ? {
                        uri: n
                    } : JSON.parse(JSON.stringify(n));
                    for (var r in t)
                        void 0 === n[r] && (n[r] = t[r]);
                    return e(n, i)
                };
                return n
            }
              , i = n(e);
            return i.get = n(e.get),
            i.post = n(e.post),
            i.put = n(e.put),
            i.head = n(e.head),
            i
        }
        ;
        var c = ["get", "put", "post", "head"];
        return c.forEach(function(t) {
            var n = t.toUpperCase()
              , i = t.toLowerCase();
            e[i] = function(t) {
                "string" == typeof t ? t = {
                    method: n,
                    uri: t
                } : (t = JSON.parse(JSON.stringify(t)),
                t.method = n);
                var i = [t].concat(Array.prototype.slice.apply(arguments, [1]));
                return e.apply(this, i)
            }
        }),
        e.couch = function(t, i) {
            function r(e, t, n) {
                if (e)
                    return i(e, t, n);
                if ((t.statusCode < 200 || t.statusCode > 299) && n.error) {
                    e = new Error("CouchDB error: " + (n.error.reason || n.error.error));
                    for (var r in n)
                        e[r] = n[r];
                    return i(e, t, n)
                }
                return i(e, t, n)
            }
            "string" == typeof t && (t = {
                uri: t
            }),
            t.json = !0,
            t.body && (t.json = t.body),
            delete t.body,
            i = i || n;
            var a = e(t, r);
            return a
        }
        ,
        e
    }),
    define("sdk/api", ["require", "utils/constants", "utils/wrapper", "runtime", "easyXDM/easyXDM", "sdk/ui", "rpc", "logger", "utils/browser-request"], function(e) {
        var t = e("utils/constants")
          , n = e("utils/wrapper")
          , i = e("runtime")
          , r = e("easyXDM/easyXDM")
          , a = e("sdk/ui")
          , o = e("rpc")
          , s = e("logger")
          , l = e("utils/browser-request");
        r.apply(o.jsonRpcConfig, {
            remote: {
                api: {}
            },
            local: {
                postLoginInfo: function(e, t) {
                    var n, i = a.getDialog(e);
                    i && (n = JSON.parse(t),
                    i.call(n)),
                    a.destroy(e)
                },
                setSize: function(e, t, n) {
                    dialog = a.getDialog(e),
                    dialog.resize(t, n)
                }
            }
        }, !0);
        var u = {
            getXdHandler: function() {
                return o.xdHandler()
            },
            api: function(e, r, a, o) {
                var l = t.root_url + "/api/v1/json" + (e.match(/^\//) ? e : "/" + e)
                  , c = i.getOAuthToken();
                c ? (s.addCall(),
                "user_data/submit" == e && s.setSaveSize(a.value),
                u.getXdHandler().api({
                    method: r,
                    url: l,
                    data: a || {},
                    headers: {
                        Authorization: "Bearer " + c
                    }
                }, n(o), n(o))) : n(o).call({}, null)
            },
            apiOpen: function(e, i, r, a) {
                s.addCall(),
                url = t.root_url + "/api/v1/json" + (e.match(/^\//) ? e : "/" + e),
                u.getXdHandler().api({
                    method: i,
                    url: url,
                    data: r || {}
                }, n(a), n(a))
            },
            api2: function(e, n, r, a) {
                var o = t.root_url + "/api/v1/json" + (e.match(/^\//) ? e : "/" + e)
                  , u = {
                    url: o,
                    method: n,
                    json: r || {}
                }
                  , c = i.getOAuthToken();
                c && (u.headers = {
                    Authorization: "Bearer " + c
                },
                s.addCall(),
                "user_data/submit" == e && s.setSaveSize(r.value)),
                l.request(u, function(e, t, n) {
                    a(e, t, n)
                })
            }
        };
        return u
    }),
    define("sdk", ["require", "sdk/ui", "sdk/api"], function(e) {
        var t = e("sdk/ui")
          , n = e("sdk/api")
          , i = {
            init: function() {
                n.getXdHandler()
            },
            ui: t,
            api: n
        };
        return i
    }),
    define("utils/domain", ["require"], function() {
        return {
            getAddress: function() {
                var e = null;
                if (!e)
                    try {
                        e = window.top.location.href
                    } catch (t) {}
                if (!e)
                    try {
                        e = document.referrer
                    } catch (t) {}
                return e || (e = window.location.href),
                e
            },
            parsed: function(e) {
                var t = document.createElement("a");
                return t.href = e,
                t
            },
            getDomain: function() {
                return this.parsed(this.getAddress()).hostname
            },
            isFramed: window.self !== window.top
        }
    }),
    define("distribution_block", ["require", "utils/domain", "sdk/api"], function(e) {
        var t = e("utils/domain")
          , n = e("sdk/api")
          , i = t.getDomain();
        -1 == i.search("localhost") && n.apiOpen("protection-lists", "GET", null, function(e) {
            if (e.hasOwnProperty("distribution_block_urls")) {
                if (e.hasOwnProperty("distribution_exceptions_urls"))
                    for (var t = e.distribution_exceptions_urls, n = 0; n < t.length; n++)
                        if (-1 != i.search(t[n]))
                            return;
                for (var r = e.distribution_block_urls, n = 0; n < r.length; n++)
                    if (-1 != i.search(r[n]))
                        throw document.body.innerHTML = "",
                        new Error("Distribution blocked, please contact y8.com team.")
            }
        })
    }),
    define("utils/cookies", [], function() {
        return {
            setCookie: function(e, t, n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "expires=" + i.toUTCString();
                document.cookie = e + "=" + t + "; " + r
            },
            getCookie: function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var r = n[i]; " " == r.charAt(0); )
                        r = r.substring(1);
                    if (0 == r.indexOf(t))
                        return r.substring(t.length, r.length)
                }
                return ""
            }
        }
    }),
    define("options", ["require", "utils/constants", "runtime", "sdk/api", "event", "logger", "utils/cookies"], function(e) {
        var t = (e("utils/constants"),
        e("runtime"))
          , n = e("sdk/api")
          , i = e("event")
          , r = e("logger")
          , a = e("utils/cookies");
        return {
            get: {},
            update: function() {
                var e = this
                  , o = a.getCookie("co" + t.__options.appId);
                if (o)
                    try {
                        o = JSON.parse(o),
                        e.get = o,
                        i.fire("options")
                    } catch (s) {
                        r.log("options cache failed", s)
                    }
                else
                    n.apiOpen("client_options/" + t.getAppId(), "GET", null, function(n) {
                        n.success ? (e.get = n.options,
                        a.setCookie("co" + t.__options.appId, JSON.stringify(n.options), 1),
                        i.fire("options")) : r.log(n)
                    })
            },
            reset: function() {
                this.get = {},
                a.setCookie("co" + t.__options.appId, "", -1)
            }
        }
    }),
    define("analytics", ["require", "utils/constants", "utils/wrapper", "runtime", "easyXDM/easyXDM", "sdk/ui", "rpc", "options", "logger", "utils/cookies", "utils/domain"], function(e) {
        var t = e("utils/constants")
          , n = (e("utils/wrapper"),
        e("runtime"))
          , i = e("easyXDM/easyXDM")
          , r = (e("sdk/ui"),
        e("rpc"))
          , a = e("options")
          , o = e("logger")
          , s = e("utils/cookies")
          , l = e("utils/domain");
        i.apply(r.jsonRpcConfig, {
            remote: {
                api: {}
            },
            local: {
                analyticsEvent: function(e) {
                    o.log("Analytics event with params", e)
                }
            }
        }, !0);
        var u, c = !1, d = !1, p = !1, f = {
            getXdHandler: function() {
                return r.xdHandler()
            },
            ieVersion: function() {
                var e = 0;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var t = navigator.userAgent
                      , n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    null != n.exec(t) && (e = parseFloat(RegExp.$1))
                }
                return e
            },
            reset: function() {
                c = !1,
                s.setCookie(n.__options.appId, "", -1)
            },
            init: function(e) {
                f.ieVersion() > 0 && f.ieVersion() < 10 ? f.trackWithPixel("play") : f.trackWithCORS(e)
            },
            trackWithCORS: function(e) {
                e.Event.monitor("options", function() {
                    c = !1,
                    a.get.stats ? f.tracker({
                        event: "play",
                        game_id: n.__options.appId,
                        domain: l.getAddress()
                    }) : c = !0
                })
            },
            trackWithPixel: function(e) {
                var t, i = document.getElementsByTagName("body")[0], r = "//t.y8.com/px.gif?game_id=" + n.__options.appId + "&event=" + e + "&domain=" + l.getAddress();
                t = document.createElement("img"),
                t.src = r,
                t.cssText = "visibility:hidden; position:absolute",
                i.appendChild(t)
            },
            tracker: function(e) {
                if (f.ieVersion() > 0 && f.ieVersion() < 10)
                    return void f.trackWithPixel(e.event);
                if (!c) {
                    "play" != e.event || d ? "play" == e.event && d && o.log("play event already sent") : d = !0;
                    var n = function(e) {
                        try {
                            e = JSON.parse(e)
                        } catch (t) {
                            o.log("failed setting uuid" + t)
                        }
                        f.set_uuid(e.uuid)
                    }
                      , i = function(e) {
                        o.log("tracker failed", e)
                    };
                    f.get_uuid(function(r) {
                        r && (e.uuid = r),
                        e.user_agent = navigator.userAgent,
                        e.sdk = "js",
                        f.getXdHandler().api({
                            method: "POST",
                            url: t.analytics_url,
                            data: e
                        }, n, i)
                    })
                }
            },
            get_uuid: function(e) {
                u && e(u),
                f.getXdHandler().api({
                    method: "GET",
                    url: t.root_url + "/api/v1/json/tracking/get_uuid",
                    data: null
                }, function(t) {
                    try {
                        t = JSON.parse(t)
                    } catch (n) {
                        o.log("failed to parse json data", n)
                    }
                    e(t && t.hasOwnProperty("uuid") && t.uuid ? t.uuid : s.getCookie("uuid"))
                }, function(e) {
                    o.log("get uuid failed", e)
                })
            },
            set_uuid: function(e) {
                p || (this.uuid = e,
                f.getXdHandler().api({
                    method: "POST",
                    url: t.root_url + "/api/v1/json/tracking/set_uuid",
                    data: {
                        uuid: e
                    }
                }, function() {}, function(e) {
                    f.log("set_uuid error"),
                    f.log(e)
                }),
                s.setCookie("uuid", e, 365),
                p = !0)
            },
            developer: {
                custom_event: function(e, t) {
                    var i = {
                        event: "custom",
                        game_id: n.__options.appId,
                        domain: l.getDomain(),
                        custom_event: {
                            name: e,
                            value: t
                        }
                    };
                    f.tracker(i)
                }
            }
        };
        return f
    }),
    define("auth", ["require", "underscore", "utils/uri_helper", "utils/constants", "utils/wrapper", "sdk/api", "runtime", "dialog", "sdk/ui", "event", "analytics", "utils/domain", "logger"], function(e) {
        var t = e("underscore")
          , n = (e("utils/uri_helper"),
        e("utils/constants"))
          , i = e("utils/wrapper")
          , r = e("sdk/api")
          , a = e("runtime")
          , o = (e("dialog"),
        e("sdk/ui"))
          , s = e("event")
          , l = e("analytics")
          , u = e("utils/domain")
          , c = e("logger")
          , d = !1
          , p = function(e) {
            var t;
            if (!e)
                return null;
            try {
                t = e.authResponse.redirect_uri,
                t && (document.location.href = t)
            } catch (n) {
                "undefined" != typeof console && "undefined" != typeof console.log && console.log(n)
            }
            return null
        }
          , f = function(e, n) {
            return function(r) {
                var o = e(r)
                  , s = i(n);
                return o && o.authResponse && "register" == o.authResponse.event_action && l.tracker({
                    event: "reg",
                    game_id: a.__options.appId,
                    domain: u.getAddress()
                }),
                d || "postMessage"in window && "top"in window && (top.postMessage("idnetSilentLogin", "*"),
                d = !0),
                t.isFunction(s) && s.hasCallback ? s(o) : void p(o)
            }
        }
          , h = {
            login_or_register: function(e, r, s, l) {
                if (c.getCalls() >= 50)
                    return c.log("Skipping as SDK is flooded");
                e = n.root_url + "/widgets/" + (e || "login"),
                r = r || {};
                var u, d;
                u = t.clone(a.getDefaultMeta()),
                u = t.extend(u, r.meta || {}),
                u = {
                    prefill: u
                },
                d = {
                    client_id: a.getAppId(),
                    redirect_uri: a.getRedirectUri(r.redirect_uri),
                    response_type: r.response_type || a.getDefaultResponseType()
                },
                d = t.extend(d, u),
                d.scope = r.scope || "",
                r.state && (d.state = r.state),
                r.confirmAutoLogin && (d.confirm_auto_login = r.confirmAutoLogin);
                var p = o.createIframeDialog(i(f(this.storeLoginResponse, s, e)), l, e, d);
                return p
            },
            login: function(e, t, n) {
                return h.login_or_register("login", e, t, n)
            },
            register: function(e, t, n) {
                return h.login_or_register("register", e, t, n)
            },
            redirectToOauth: function(e) {
                var t, i, r = a.getAppId();
                e = e || {},
                i = a.getRedirectUri(e.redirect_uri),
                t = n.root_url + "/oauth/authorize?client_id=" + r + "&redirect_uri=" + i,
                e.register && (t += "&register=1"),
                window.location = t
            },
            redirectToOauthRegistration: function(e) {
                e = e || {},
                e.register = !0,
                h.redirectToOauth(e)
            },
            redirectToOauthLogin: function(e) {
                e = e || {},
                e.register = !1,
                h.redirectToOauth(e)
            },
            storeLoginResponse: function(e) {
                return e && (e.status = e.result,
                a.setStatus(e.status),
                delete e.result,
                a.setAuthResponse(e.authResponse),
                s.fire("auth.authResponseChange", e)),
                e
            },
            fetchLoginStatus: function(e, t, o) {
                o = o || {},
                e = e || function() {}
                ,
                t = t || function() {}
                ;
                var s = n.root_url + "/oauth/status"
                  , l = r.getXdHandler();
                l.api({
                    method: "GET",
                    url: s,
                    data: {
                        redirect_uri: o.redirect_uri || a.getRedirectUri(),
                        _sdk: 1,
                        response_type: o.response_type || a.getDefaultResponseType(),
                        client_id: a.getAppId()
                    }
                }, i(f(this.storeLoginResponse, e, "login", !1)), i(t))
            }
        };
        return h
    }),
    define("text!views/login.html", [], function() {
        return '<div class="white login">\n  <div id="localization">\n    <div class="locale locale-click" id="locale">\n      <img src="<%= cdn %>/sdk/flags/<%= i18n.locale %>.png" alt="logo" width="16" height="11" class="locale-click">\n      <i class="arrow down locale-click"></i>\n    </div>\n    <div id="locale-dropdown">\n      <ul>\n        <% for (var i = 0; i < localeList.length; i++) { %>\n        <li class="locale-language">\n          <img src="<%= cdn %>/sdk/flags/<%= localeList[i] %>.png" alt="flag" width="16" height="11" id="localeList[i]" class="locale-language">\n          <span class="locale-language" id="<%= localeList[i] %>"><%= i18n.t(\'sdk.language.\' + localeList[i]) %></span>\n        </li>\n        <% } %>\n      </ul>\n    </div>\n  </div>\n\n  <div id="close" class="close">&times;</div>\n  <header>\n    <div>\n      <span>Login</span>\n    </div>\n  </header>\n\n  <div class="status" style="display: none;">\n\n  </div>\n\n  <div class="content">\n    <div>\n      <label for="email">Email</label>\n    </div>\n    <div>\n      <input type="email" name="email" id="email" class="input">\n    </div>\n    <div>\n      <label for="password">Password</label>\n    </div>\n    <div>\n      <input type="password" name="password" id="password" class="input">\n    </div>\n    <div class="forgot">\n      <a href="" class="btn-forgot">Forgot password?</a>\n    </div>\n    <div>\n      <input type="submit" name="commit" value="Login" class="btn-login">\n    </div>\n  </div>\n\n  <footer>\n    <span class="text-footer">\n      Don\'t have an account? <a href="" class="register-link">Create an account</a>\n    </span>\n    <img src="<%= cdn %>/sdk/logo/y8-account-logo.png" class="logo" alt="logo" width="45" height="32">\n  </footer>\n</div>\n'
    }),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : "function" == typeof define && define.amd && define("utils/jquery-amd", ["require", "module"], function(e, n) {
            n.exports = function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e)
            }
        })
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e, t, n) {
            t = t || ot;
            var i, r = t.createElement("script");
            if (r.text = e,
            n)
                for (i in wt)
                    n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r)
        }
        function i(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pt[ft.call(e)] || "object" : typeof e
        }
        function r(e) {
            var t = !!e && "length"in e && e.length
              , n = i(e);
            return yt(e) || bt(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        function a(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        function o(e, t, n) {
            return yt(t) ? xt.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? xt.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? xt.grep(e, function(e) {
                return dt.call(t, e) > -1 !== n
            }) : xt.filter(t, e, n)
        }
        function s(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        function l(e) {
            var t = {};
            return xt.each(e.match(Mt) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function u(e) {
            return e
        }
        function c(e) {
            throw e
        }
        function d(e, t, n, i) {
            var r;
            try {
                e && yt(r = e.promise) ? r.call(e).done(t).fail(n) : e && yt(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        function p() {
            ot.removeEventListener("DOMContentLoaded", p),
            e.removeEventListener("load", p),
            xt.ready()
        }
        function f(e, t) {
            return t.toUpperCase()
        }
        function h(e) {
            return e.replace(Ht, "ms-").replace(Bt, f)
        }
        function g() {
            this.expando = xt.expando + g.uid++
        }
        function m(e) {
            return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : Ut.test(e) ? JSON.parse(e) : e
        }
        function v(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Jt, "-$&").toLowerCase(),
                n = e.getAttribute(i),
                "string" == typeof n) {
                    try {
                        n = m(n)
                    } catch (r) {}
                    qt.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        function y(e, t, n, i) {
            var r, a, o = 20, s = i ? function() {
                return i.cur()
            }
            : function() {
                return xt.css(e, t, "")
            }
            , l = s(), u = n && n[3] || (xt.cssNumber[t] ? "" : "px"), c = (xt.cssNumber[t] || "px" !== u && +l) && Vt.exec(xt.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2,
                u = u || c[3],
                c = +l || 1; o--; )
                    xt.style(e, t, c + u),
                    (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0),
                    c /= a;
                c = 2 * c,
                xt.style(e, t, c + u),
                n = n || []
            }
            return n && (c = +c || +l || 0,
            r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = u,
            i.start = c,
            i.end = r)),
            r
        }
        function b(e) {
            var t, n = e.ownerDocument, i = e.nodeName, r = $t[i];
            return r ? r : (t = n.body.appendChild(n.createElement(i)),
            r = xt.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === r && (r = "block"),
            $t[i] = r,
            r)
        }
        function w(e, t) {
            for (var n, i, r = [], a = 0, o = e.length; o > a; a++)
                i = e[a],
                i.style && (n = i.style.display,
                t ? ("none" === n && (r[a] = Ft.get(i, "display") || null,
                r[a] || (i.style.display = "")),
                "" === i.style.display && Gt(i) && (r[a] = b(i))) : "none" !== n && (r[a] = "none",
                Ft.set(i, "display", n)));
            for (a = 0; o > a; a++)
                null != r[a] && (e[a].style.display = r[a]);
            return e
        }
        function k(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && a(e, t) ? xt.merge([e], n) : n
        }
        function x(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                Ft.set(e[n], "globalEval", !t || Ft.get(t[n], "globalEval"))
        }
        function _(e, t, n, r, a) {
            for (var o, s, l, u, c, d, p = t.createDocumentFragment(), f = [], h = 0, g = e.length; g > h; h++)
                if (o = e[h],
                o || 0 === o)
                    if ("object" === i(o))
                        xt.merge(f, o.nodeType ? [o] : o);
                    else if (tn.test(o)) {
                        for (s = s || p.appendChild(t.createElement("div")),
                        l = (Qt.exec(o) || ["", ""])[1].toLowerCase(),
                        u = en[l] || en._default,
                        s.innerHTML = u[1] + xt.htmlPrefilter(o) + u[2],
                        d = u[0]; d--; )
                            s = s.lastChild;
                        xt.merge(f, s.childNodes),
                        s = p.firstChild,
                        s.textContent = ""
                    } else
                        f.push(t.createTextNode(o));
            for (p.textContent = "",
            h = 0; o = f[h++]; )
                if (r && xt.inArray(o, r) > -1)
                    a && a.push(o);
                else if (c = xt.contains(o.ownerDocument, o),
                s = k(p.appendChild(o), "script"),
                c && x(s),
                n)
                    for (d = 0; o = s[d++]; )
                        Zt.test(o.type || "") && n.push(o);
            return p
        }
        function T() {
            return !0
        }
        function A() {
            return !1
        }
        function S() {
            try {
                return ot.activeElement
            } catch (e) {}
        }
        function E(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n,
                n = void 0);
                for (s in t)
                    E(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
            i = void 0) : (r = i,
            i = n,
            n = void 0)),
            r === !1)
                r = A;
            else if (!r)
                return e;
            return 1 === a && (o = r,
            r = function(e) {
                return xt().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = xt.guid++)),
            e.each(function() {
                xt.event.add(this, t, r, i, n)
            })
        }
        function C(e, t) {
            return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? xt(e).children("tbody")[0] || e : e
        }
        function R(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function N(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function j(e, t) {
            var n, i, r, a, o, s, l, u;
            if (1 === t.nodeType) {
                if (Ft.hasData(e) && (a = Ft.access(e),
                o = Ft.set(t, a),
                u = a.events)) {
                    delete o.handle,
                    o.events = {};
                    for (r in u)
                        for (n = 0,
                        i = u[r].length; i > n; n++)
                            xt.event.add(t, r, u[r][n])
                }
                qt.hasData(e) && (s = qt.access(e),
                l = xt.extend({}, s),
                qt.set(t, l))
            }
        }
        function L(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Yt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
        function O(e, t, i, r) {
            t = ut.apply([], t);
            var a, o, s, l, u, c, d = 0, p = e.length, f = p - 1, h = t[0], g = yt(h);
            if (g || p > 1 && "string" == typeof h && !vt.checkClone && un.test(h))
                return e.each(function(n) {
                    var a = e.eq(n);
                    g && (t[0] = h.call(this, n, a.html())),
                    O(a, t, i, r)
                });
            if (p && (a = _(t, e[0].ownerDocument, !1, e, r),
            o = a.firstChild,
            1 === a.childNodes.length && (a = o),
            o || r)) {
                for (s = xt.map(k(a, "script"), R),
                l = s.length; p > d; d++)
                    u = a,
                    d !== f && (u = xt.clone(u, !0, !0),
                    l && xt.merge(s, k(u, "script"))),
                    i.call(e[d], u, d);
                if (l)
                    for (c = s[s.length - 1].ownerDocument,
                    xt.map(s, N),
                    d = 0; l > d; d++)
                        u = s[d],
                        Zt.test(u.type || "") && !Ft.access(u, "globalEval") && xt.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? xt._evalUrl && xt._evalUrl(u.src) : n(u.textContent.replace(cn, ""), c, u))
            }
            return e
        }
        function M(e, t, n) {
            for (var i, r = t ? xt.filter(t, e) : e, a = 0; null != (i = r[a]); a++)
                n || 1 !== i.nodeType || xt.cleanData(k(i)),
                i.parentNode && (n && xt.contains(i.ownerDocument, i) && x(k(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        function D(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || pn(e),
            n && (o = n.getPropertyValue(t) || n[t],
            "" !== o || xt.contains(e.ownerDocument, e) || (o = xt.style(e, t)),
            !vt.pixelBoxStyles() && dn.test(o) && fn.test(t) && (i = s.width,
            r = s.minWidth,
            a = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = o,
            o = n.width,
            s.width = i,
            s.minWidth = r,
            s.maxWidth = a)),
            void 0 !== o ? o + "" : o
        }
        function P(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function z(e) {
            if (e in bn)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = yn.length; n--; )
                if (e = yn[n] + t,
                e in bn)
                    return e
        }
        function H(e) {
            var t = xt.cssProps[e];
            return t || (t = xt.cssProps[e] = z(e) || e),
            t
        }
        function B(e, t, n) {
            var i = Vt.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function I(e, t, n, i, r, a) {
            var o = "width" === t ? 1 : 0
              , s = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; 4 > o; o += 2)
                "margin" === n && (l += xt.css(e, n + Xt[o], !0, r)),
                i ? ("content" === n && (l -= xt.css(e, "padding" + Xt[o], !0, r)),
                "margin" !== n && (l -= xt.css(e, "border" + Xt[o] + "Width", !0, r))) : (l += xt.css(e, "padding" + Xt[o], !0, r),
                "padding" !== n ? l += xt.css(e, "border" + Xt[o] + "Width", !0, r) : s += xt.css(e, "border" + Xt[o] + "Width", !0, r));
            return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5))),
            l
        }
        function F(e, t, n) {
            var i = pn(e)
              , r = D(e, t, i)
              , a = "border-box" === xt.css(e, "boxSizing", !1, i)
              , o = a;
            if (dn.test(r)) {
                if (!n)
                    return r;
                r = "auto"
            }
            return o = o && (vt.boxSizingReliable() || r === e.style[t]),
            ("auto" === r || !parseFloat(r) && "inline" === xt.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
            o = !0),
            r = parseFloat(r) || 0,
            r + I(e, t, n || (a ? "border" : "content"), o, i, r) + "px"
        }
        function q(e, t, n, i, r) {
            return new q.prototype.init(e,t,n,i,r)
        }
        function U() {
            kn && (ot.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, xt.fx.interval),
            xt.fx.tick())
        }
        function J() {
            return e.setTimeout(function() {
                wn = void 0
            }),
            wn = Date.now()
        }
        function W(e, t) {
            var n, i = 0, r = {
                height: e
            };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                n = Xt[i],
                r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function V(e, t, n) {
            for (var i, r = (K.tweeners[t] || []).concat(K.tweeners["*"]), a = 0, o = r.length; o > a; a++)
                if (i = r[a].call(n, t, e))
                    return i
        }
        function X(e, t, n) {
            var i, r, a, o, s, l, u, c, d = "width"in t || "height"in t, p = this, f = {}, h = e.style, g = e.nodeType && Gt(e), m = Ft.get(e, "fxshow");
            n.queue || (o = xt._queueHooks(e, "fx"),
            null == o.unqueued && (o.unqueued = 0,
            s = o.empty.fire,
            o.empty.fire = function() {
                o.unqueued || s()
            }
            ),
            o.unqueued++,
            p.always(function() {
                p.always(function() {
                    o.unqueued--,
                    xt.queue(e, "fx").length || o.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i],
                xn.test(r)) {
                    if (delete t[i],
                    a = a || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    f[i] = m && m[i] || xt.style(e, i)
                }
            if (l = !xt.isEmptyObject(t),
            l || !xt.isEmptyObject(f)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                u = m && m.display,
                null == u && (u = Ft.get(e, "display")),
                c = xt.css(e, "display"),
                "none" === c && (u ? c = u : (w([e], !0),
                u = e.style.display || u,
                c = xt.css(e, "display"),
                w([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === xt.css(e, "float") && (l || (p.done(function() {
                    h.display = u
                }),
                null == u && (c = h.display,
                u = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1;
                for (i in f)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Ft.access(e, "fxshow", {
                        display: u
                    }),
                    a && (m.hidden = !g),
                    g && w([e], !0),
                    p.done(function() {
                        g || w([e]),
                        Ft.remove(e, "fxshow");
                        for (i in f)
                            xt.style(e, i, f[i])
                    })),
                    l = V(g ? m[i] : 0, i, p),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
            }
        }
        function G(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (i = h(n),
                r = t[i],
                a = e[n],
                Array.isArray(a) && (r = a[1],
                a = e[n] = a[0]),
                n !== i && (e[i] = a,
                delete e[n]),
                o = xt.cssHooks[i],
                o && "expand"in o) {
                    a = o.expand(a),
                    delete e[i];
                    for (n in a)
                        n in e || (e[n] = a[n],
                        t[n] = r)
                } else
                    t[i] = r
        }
        function K(e, t, n) {
            var i, r, a = 0, o = K.prefilters.length, s = xt.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (r)
                    return !1;
                for (var t = wn || J(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; l > o; o++)
                    u.tweens[o].run(a);
                return s.notifyWith(e, [u, a, n]),
                1 > a && l ? n : (l || s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u]),
                !1)
            }, u = s.promise({
                elem: e,
                props: xt.extend({}, t),
                opts: xt.extend(!0, {
                    specialEasing: {},
                    easing: xt.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: wn || J(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = xt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; i > n; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]),
                    s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                    this
                }
            }), c = u.props;
            for (G(c, u.opts.specialEasing); o > a; a++)
                if (i = K.prefilters[a].call(u, e, c, u.opts))
                    return yt(i.stop) && (xt._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                    i;
            return xt.map(c, V, u),
            yt(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            xt.fx.timer(xt.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        function $(e) {
            var t = e.match(Mt) || [];
            return t.join(" ")
        }
        function Y(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function Q(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(Mt) || [] : []
        }
        function Z(e, t, n, r) {
            var a;
            if (Array.isArray(t))
                xt.each(t, function(t, i) {
                    n || Mn.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== i(t))
                r(e, t);
            else
                for (a in t)
                    Z(e + "[" + a + "]", t[a], n, r)
        }
        function et(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var i, r = 0, a = t.toLowerCase().match(Mt) || [];
                if (yt(n))
                    for (; i = a[r++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function tt(e, t, n, i) {
            function r(s) {
                var l;
                return a[s] = !0,
                xt.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                    r(u),
                    !1)
                }),
                l
            }
            var a = {}
              , o = e === Vn;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }
        function nt(e, t) {
            var n, i, r = xt.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && xt.extend(!0, e, i),
            e
        }
        function it(e, t, n) {
            for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                l.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0]in n)
                a = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        a = r;
                        break
                    }
                    o || (o = r)
                }
                a = a || o
            }
            return a ? (a !== l[0] && l.unshift(a),
            n[a]) : void 0
        }
        function rt(e, t, n, i) {
            var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1])
                for (o in e.converters)
                    u[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a; )
                if (e.responseFields[a] && (n[e.responseFields[a]] = t),
                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                l = a,
                a = c.shift())
                    if ("*" === a)
                        a = l;
                    else if ("*" !== l && l !== a) {
                        if (o = u[l + " " + a] || u["* " + a],
                        !o)
                            for (r in u)
                                if (s = r.split(" "),
                                s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0],
                                    c.unshift(s[1]));
                                    break
                                }
                        if (o !== !0)
                            if (o && e.throws)
                                t = o(t);
                            else
                                try {
                                    t = o(t)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: o ? d : "No conversion from " + l + " to " + a
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        var at = []
          , ot = e.document
          , st = Object.getPrototypeOf
          , lt = at.slice
          , ut = at.concat
          , ct = at.push
          , dt = at.indexOf
          , pt = {}
          , ft = pt.toString
          , ht = pt.hasOwnProperty
          , gt = ht.toString
          , mt = gt.call(Object)
          , vt = {}
          , yt = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , bt = function(e) {
            return null != e && e === e.window
        }
          , wt = {
            type: !0,
            src: !0,
            noModule: !0
        }
          , kt = "3.3.1"
          , xt = function(e, t) {
            return new xt.fn.init(e,t)
        }
          , _t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        xt.fn = xt.prototype = {
            jquery: kt,
            constructor: xt,
            length: 0,
            toArray: function() {
                return lt.call(this)
            },
            get: function(e) {
                return null == e ? lt.call(this) : 0 > e ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = xt.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return xt.each(this, e)
            },
            map: function(e) {
                return this.pushStack(xt.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(lt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ct,
            sort: at.sort,
            splice: at.splice
        },
        xt.extend = xt.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof o && (u = o,
            o = arguments[s] || {},
            s++),
            "object" == typeof o || yt(o) || (o = {}),
            s === l && (o = this,
            s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = o[t],
                        i = e[t],
                        o !== i && (u && i && (xt.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                        a = n && Array.isArray(n) ? n : []) : a = n && xt.isPlainObject(n) ? n : {},
                        o[t] = xt.extend(u, a, i)) : void 0 !== i && (o[t] = i));
            return o
        }
        ,
        xt.extend({
            expando: "jQuery" + (kt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return e && "[object Object]" === ft.call(e) ? (t = st(e)) ? (n = ht.call(t, "constructor") && t.constructor,
                "function" == typeof n && gt.call(n) === mt) : !0 : !1
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e) {
                n(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++)
                        ;
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(_t, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? xt.merge(n, "string" == typeof e ? [e] : e) : ct.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : dt.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++)
                    e[r++] = t[i];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++)
                    i = !t(e[a], a),
                    i !== s && r.push(e[a]);
                return r
            },
            map: function(e, t, n) {
                var i, a, o = 0, s = [];
                if (r(e))
                    for (i = e.length; i > o; o++)
                        a = t(e[o], o, n),
                        null != a && s.push(a);
                else
                    for (o in e)
                        a = t(e[o], o, n),
                        null != a && s.push(a);
                return ut.apply([], s)
            },
            guid: 1,
            support: vt
        }),
        "function" == typeof Symbol && (xt.fn[Symbol.iterator] = at[Symbol.iterator]),
        xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            pt["[object " + t + "]"] = t.toLowerCase()
        });
        var Tt = function(e) {
            function t(e, t, n, i) {
                var r, a, o, s, l, u, c, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                    return n;
                if (!i && ((t ? t.ownerDocument || t : F) !== O && L(t),
                t = t || O,
                D)) {
                    if (11 !== h && (l = vt.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(o = t.getElementById(r)))
                                    return n;
                                if (o.id === r)
                                    return n.push(o),
                                    n
                            } else if (p && (o = p.getElementById(r)) && B(t, o) && o.id === r)
                                return n.push(o),
                                n
                        } else {
                            if (l[2])
                                return Q.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName)
                                return Q.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                    if (!(!x.qsa || V[e + " "] || P && P.test(e))) {
                        if (1 !== h)
                            p = t,
                            c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(kt, xt) : t.setAttribute("id", s = I),
                            u = S(e),
                            a = u.length; a--; )
                                u[a] = "#" + s + " " + f(u[a]);
                            c = u.join(","),
                            p = yt.test(e) && d(t.parentNode) || t
                        }
                        if (c)
                            try {
                                return Q.apply(n, p.querySelectorAll(c)),
                                n
                            } catch (g) {} finally {
                                s === I && t.removeAttribute("id")
                            }
                    }
                }
                return C(e.replace(st, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > _.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[I] = !0,
                e
            }
            function r(e) {
                var t = O.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    _.attrHandle[n[i]] = t
            }
            function o(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function u(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && t.disabled === !1 ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Tt(t) === e : t.disabled === e : "label"in t ? t.disabled === e : !1
                }
            }
            function c(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--; )
                            n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function p() {}
            function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)
                    i += e[t].value;
                return i
            }
            function h(e, t, n) {
                var i = t.dir
                  , r = t.next
                  , a = r || i
                  , o = n && "parentNode" === a
                  , s = U++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || o)
                            return e(t, n, r);
                    return !1
                }
                : function(t, n, l) {
                    var u, c, d, p = [q, s];
                    if (l) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || o) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || o)
                                if (d = t[I] || (t[I] = {}),
                                c = d[t.uniqueID] || (d[t.uniqueID] = {}),
                                r && r === t.nodeName.toLowerCase())
                                    t = t[i] || t;
                                else {
                                    if ((u = c[a]) && u[0] === q && u[1] === s)
                                        return p[2] = u[2];
                                    if (c[a] = p,
                                    p[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function g(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--; )
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function m(e, n, i) {
                for (var r = 0, a = n.length; a > r; r++)
                    t(e, n[r], i);
                return i
            }
            function v(e, t, n, i, r) {
                for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)
                    (a = e[s]) && (!n || n(a, i, r)) && (o.push(a),
                    u && t.push(s));
                return o
            }
            function y(e, t, n, r, a, o) {
                return r && !r[I] && (r = y(r)),
                a && !a[I] && (a = y(a, o)),
                i(function(i, o, s, l) {
                    var u, c, d, p = [], f = [], h = o.length, g = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? g : v(g, p, e, s, l), b = n ? a || (i ? e : h || r) ? [] : o : y;
                    if (n && n(y, b, s, l),
                    r)
                        for (u = v(b, f),
                        r(u, [], s, l),
                        c = u.length; c--; )
                            (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (u = [],
                                c = b.length; c--; )
                                    (d = b[c]) && u.push(y[c] = d);
                                a(null, b = [], u, l)
                            }
                            for (c = b.length; c--; )
                                (d = b[c]) && (u = a ? et(i, d) : p[c]) > -1 && (i[u] = !(o[u] = d))
                        }
                    } else
                        b = v(b === o ? b.splice(h, b.length) : b),
                        a ? a(null, o, b, l) : Q.apply(o, b)
                })
            }
            function b(e) {
                for (var t, n, i, r = e.length, a = _.relative[e[0].type], o = a || _.relative[" "], s = a ? 1 : 0, l = h(function(e) {
                    return e === t
                }, o, !0), u = h(function(e) {
                    return et(t, e) > -1
                }, o, !0), c = [function(e, n, i) {
                    var r = !a && (i || n !== R) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null,
                    r
                }
                ]; r > s; s++)
                    if (n = _.relative[e[s].type])
                        c = [h(g(c), n)];
                    else {
                        if (n = _.filter[e[s].type].apply(null, e[s].matches),
                        n[I]) {
                            for (i = ++s; r > i && !_.relative[e[i].type]; i++)
                                ;
                            return y(s > 1 && g(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, i > s && b(e.slice(s, i)), r > i && b(e = e.slice(i)), r > i && f(e))
                        }
                        c.push(n)
                    }
                return g(c)
            }
            function w(e, n) {
                var r = n.length > 0
                  , a = e.length > 0
                  , o = function(i, o, s, l, u) {
                    var c, d, p, f = 0, h = "0", g = i && [], m = [], y = R, b = i || a && _.find.TAG("*", u), w = q += null == y ? 1 : Math.random() || .1, k = b.length;
                    for (u && (R = o === O || o || u); h !== k && null != (c = b[h]); h++) {
                        if (a && c) {
                            for (d = 0,
                            o || c.ownerDocument === O || (L(c),
                            s = !D); p = e[d++]; )
                                if (p(c, o || O, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (q = w)
                        }
                        r && ((c = !p && c) && f--,
                        i && g.push(c))
                    }
                    if (f += h,
                    r && h !== f) {
                        for (d = 0; p = n[d++]; )
                            p(g, m, o, s);
                        if (i) {
                            if (f > 0)
                                for (; h--; )
                                    g[h] || m[h] || (m[h] = $.call(l));
                            m = v(m)
                        }
                        Q.apply(l, m),
                        u && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (q = w,
                    R = y),
                    g
                };
                return r ? i(o) : o
            }
            var k, x, _, T, A, S, E, C, R, N, j, L, O, M, D, P, z, H, B, I = "sizzle" + 1 * new Date, F = e.document, q = 0, U = 0, J = n(), W = n(), V = n(), X = function(e, t) {
                return e === t && (j = !0),
                0
            }, G = {}.hasOwnProperty, K = [], $ = K.pop, Y = K.push, Q = K.push, Z = K.slice, et = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", ot = new RegExp(nt + "+","g"), st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), dt = new RegExp(at), pt = new RegExp("^" + it + "$"), ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + tt + ")$","i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
            }, ht = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), wt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, kt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xt = function(e, t) {
                return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, _t = function() {
                L()
            }, Tt = h(function(e) {
                return e.disabled === !0 && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Q.apply(K = Z.call(F.childNodes), F.childNodes),
                K[F.childNodes.length].nodeType
            } catch (At) {
                Q = {
                    apply: K.length ? function(e, t) {
                        Y.apply(e, Z.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {},
            A = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
            ,
            L = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i,
                M = O.documentElement,
                D = !A(O),
                F !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)),
                x.attributes = r(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                x.getElementsByTagName = r(function(e) {
                    return e.appendChild(O.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                x.getElementsByClassName = mt.test(O.getElementsByClassName),
                x.getById = r(function(e) {
                    return M.appendChild(e).id = I,
                    !O.getElementsByName || !O.getElementsByName(I).length
                }),
                x.getById ? (_.filter.ID = function(e) {
                    var t = e.replace(bt, wt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                _.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && D) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (_.filter.ID = function(e) {
                    var t = e.replace(bt, wt);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                _.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && D) {
                        var n, i, r, a = t.getElementById(e);
                        if (a) {
                            if (n = a.getAttributeNode("id"),
                            n && n.value === e)
                                return [a];
                            for (r = t.getElementsByName(e),
                            i = 0; a = r[i++]; )
                                if (n = a.getAttributeNode("id"),
                                n && n.value === e)
                                    return [a]
                        }
                        return []
                    }
                }
                ),
                _.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], r = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }
                ,
                _.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                }
                ,
                z = [],
                P = [],
                (x.qsa = mt.test(O.querySelectorAll)) && (r(function(e) {
                    M.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + tt + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length || P.push("~="),
                    e.querySelectorAll(":checked").length || P.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length || P.push(".#.+[+~]")
                }),
                r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = O.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                    M.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    P.push(",.*:")
                })),
                (x.matchesSelector = mt.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
                    x.disconnectedMatch = H.call(e, "*"),
                    H.call(e, "[s!='']:x"),
                    z.push("!=", at)
                }),
                P = P.length && new RegExp(P.join("|")),
                z = z.length && new RegExp(z.join("|")),
                t = mt.test(M.compareDocumentPosition),
                B = t || mt.test(M.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                X = t ? function(e, t) {
                    if (e === t)
                        return j = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === F && B(F, e) ? -1 : t === O || t.ownerDocument === F && B(F, t) ? 1 : N ? et(N, e) - et(N, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return j = !0,
                        0;
                    var n, i = 0, r = e.parentNode, a = t.parentNode, s = [e], l = [t];
                    if (!r || !a)
                        return e === O ? -1 : t === O ? 1 : r ? -1 : a ? 1 : N ? et(N, e) - et(N, t) : 0;
                    if (r === a)
                        return o(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (; s[i] === l[i]; )
                        i++;
                    return i ? o(s[i], l[i]) : s[i] === F ? -1 : l[i] === F ? 1 : 0
                }
                ,
                O) : O
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && L(e),
                n = n.replace(ct, "='$1']"),
                !(!x.matchesSelector || !D || V[n + " "] || z && z.test(n) || P && P.test(n)))
                    try {
                        var i = H.call(e, n);
                        if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (r) {}
                return t(n, O, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && L(e),
                B(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && L(e);
                var n = _.attrHandle[t.toLowerCase()]
                  , i = n && G.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                return void 0 !== i ? i : x.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(kt, xt)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (j = !x.detectDuplicates,
                N = !x.sortStable && e.slice(0),
                e.sort(X),
                j) {
                    for (; t = e[r++]; )
                        t === e[r] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return N = null,
                e
            }
            ,
            T = t.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += T(t);
                return n
            }
            ,
            _ = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(bt, wt),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(bt, wt),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(bt, wt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = J[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && J(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : n ? (a += "",
                            "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3)
                          , o = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var u, c, d, p, f, h, g = a !== o ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                            if (m) {
                                if (a) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? m.firstChild : m.lastChild],
                                o && y) {
                                    for (p = m,
                                    d = p[I] || (p[I] = {}),
                                    c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                    u = c[e] || [],
                                    f = u[0] === q && u[1],
                                    b = f && u[2],
                                    p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [q, f, b];
                                            break
                                        }
                                } else if (y && (p = t,
                                d = p[I] || (p[I] = {}),
                                c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                u = c[e] || [],
                                f = u[0] === q && u[1],
                                b = f),
                                b === !1)
                                    for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[I] || (p[I] = {}),
                                    c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                    c[e] = [q, b]),
                                    p !== t)); )
                                        ;
                                return b -= r,
                                b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[I] ? a(n) : a.length > 1 ? (r = [e, e, "", n],
                        _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = a(e, n), o = r.length; o--; )
                                i = et(e, r[o]),
                                e[i] = !(t[i] = r[o])
                        }) : function(e) {
                            return a(e, 0, r)
                        }
                        ) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                          , n = []
                          , r = E(e.replace(st, "$1"));
                        return r[I] ? i(function(e, t, n, i) {
                            for (var a, o = r(e, null, i, []), s = e.length; s--; )
                                (a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, i, a) {
                            return t[0] = e,
                            r(t, null, a, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(bt, wt),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return pt.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(bt, wt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return gt.test(e.nodeName)
                    },
                    input: function(e) {
                        return ht.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            },
            _.pseudos.nth = _.pseudos.eq;
            for (k in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                _.pseudos[k] = s(k);
            for (k in {
                submit: !0,
                reset: !0
            })
                _.pseudos[k] = l(k);
            return p.prototype = _.filters = _.pseudos,
            _.setFilters = new p,
            S = t.tokenize = function(e, n) {
                var i, r, a, o, s, l, u, c = W[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e,
                l = [],
                u = _.preFilter; s; ) {
                    (!i || (r = lt.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                    l.push(a = [])),
                    i = !1,
                    (r = ut.exec(s)) && (i = r.shift(),
                    a.push({
                        value: i,
                        type: r[0].replace(st, " ")
                    }),
                    s = s.slice(i.length));
                    for (o in _.filter)
                        !(r = ft[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(),
                        a.push({
                            value: i,
                            type: o,
                            matches: r
                        }),
                        s = s.slice(i.length));
                    if (!i)
                        break
                }
                return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
            }
            ,
            E = t.compile = function(e, t) {
                var n, i = [], r = [], a = V[e + " "];
                if (!a) {
                    for (t || (t = S(e)),
                    n = t.length; n--; )
                        a = b(t[n]),
                        a[I] ? i.push(a) : r.push(a);
                    a = V(e, w(r, i)),
                    a.selector = e
                }
                return a
            }
            ,
            C = t.select = function(e, t, n, i) {
                var r, a, o, s, l, u = "function" == typeof e && e, c = !i && S(e = u.selector || e);
                if (n = n || [],
                1 === c.length) {
                    if (a = c[0] = c[0].slice(0),
                    a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && D && _.relative[a[1].type]) {
                        if (t = (_.find.ID(o.matches[0].replace(bt, wt), t) || [])[0],
                        !t)
                            return n;
                        u && (t = t.parentNode),
                        e = e.slice(a.shift().value.length)
                    }
                    for (r = ft.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r],
                    !_.relative[s = o.type]); )
                        if ((l = _.find[s]) && (i = l(o.matches[0].replace(bt, wt), yt.test(a[0].type) && d(t.parentNode) || t))) {
                            if (a.splice(r, 1),
                            e = i.length && f(a),
                            !e)
                                return Q.apply(n, i),
                                n;
                            break
                        }
                }
                return (u || E(e, c))(i, t, !D, n, !t || yt.test(e) && d(t.parentNode) || t),
                n
            }
            ,
            x.sortStable = I.split("").sort(X).join("") === I,
            x.detectDuplicates = !!j,
            L(),
            x.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
            }),
            r(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            x.attributes && r(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            r(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(tt, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            t
        }(e);
        xt.find = Tt,
        xt.expr = Tt.selectors,
        xt.expr[":"] = xt.expr.pseudos,
        xt.uniqueSort = xt.unique = Tt.uniqueSort,
        xt.text = Tt.getText,
        xt.isXMLDoc = Tt.isXML,
        xt.contains = Tt.contains,
        xt.escapeSelector = Tt.escape;
        var At = function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && xt(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
          , St = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , Et = xt.expr.match.needsContext
          , Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        xt.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? xt.find.matchesSelector(i, e) ? [i] : [] : xt.find.matches(e, xt.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        xt.fn.extend({
            find: function(e) {
                var t, n, i = this.length, r = this;
                if ("string" != typeof e)
                    return this.pushStack(xt(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (xt.contains(r[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; i > t; t++)
                    xt.find(e, r[t], n);
                return i > 1 ? xt.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(o(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(o(this, e || [], !0))
            },
            is: function(e) {
                return !!o(this, "string" == typeof e && Et.test(e) ? xt(e) : e || [], !1).length
            }
        });
        var Rt, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, jt = xt.fn.init = function(e, t, n) {
            var i, r;
            if (!e)
                return this;
            if (n = n || Rt,
            "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Nt.exec(e),
                !i || !i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof xt ? t[0] : t,
                    xt.merge(this, xt.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ot, !0)),
                    Ct.test(i[1]) && xt.isPlainObject(t))
                        for (i in t)
                            yt(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = ot.getElementById(i[2]),
                r && (this[0] = r,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : yt(e) ? void 0 !== n.ready ? n.ready(e) : e(xt) : xt.makeArray(e, this)
        }
        ;
        jt.prototype = xt.fn,
        Rt = xt(ot);
        var Lt = /^(?:parents|prev(?:Until|All))/
          , Ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        xt.fn.extend({
            has: function(e) {
                var t = xt(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (xt.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0, r = this.length, a = [], o = "string" != typeof e && xt(e);
                if (!Et.test(e))
                    for (; r > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && xt.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? xt.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? dt.call(xt(e), this[0]) : dt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        xt.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return At(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return At(e, "parentNode", n)
            },
            next: function(e) {
                return s(e, "nextSibling")
            },
            prev: function(e) {
                return s(e, "previousSibling")
            },
            nextAll: function(e) {
                return At(e, "nextSibling")
            },
            prevAll: function(e) {
                return At(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return At(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return At(e, "previousSibling", n)
            },
            siblings: function(e) {
                return St((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return St(e.firstChild)
            },
            contents: function(e) {
                return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e),
                xt.merge([], e.childNodes))
            }
        }, function(e, t) {
            xt.fn[e] = function(n, i) {
                var r = xt.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = xt.filter(i, r)),
                this.length > 1 && (Ot[e] || xt.uniqueSort(r),
                Lt.test(e) && r.reverse()),
                this.pushStack(r)
            }
        });
        var Mt = /[^\x20\t\r\n\f]+/g;
        xt.Callbacks = function(e) {
            e = "string" == typeof e ? l(e) : xt.extend({}, e);
            var t, n, r, a, o = [], s = [], u = -1, c = function() {
                for (a = a || e.once,
                r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < o.length; )
                        o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                a && (o = n ? [] : "")
            }, d = {
                add: function() {
                    return o && (n && !t && (u = o.length - 1,
                    s.push(n)),
                    function r(t) {
                        xt.each(t, function(t, n) {
                            yt(n) ? e.unique && d.has(n) || o.push(n) : n && n.length && "string" !== i(n) && r(n)
                        })
                    }(arguments),
                    n && !t && c()),
                    this
                },
                remove: function() {
                    return xt.each(arguments, function(e, t) {
                        for (var n; (n = xt.inArray(t, o, n)) > -1; )
                            o.splice(n, 1),
                            u >= n && u--
                    }),
                    this
                },
                has: function(e) {
                    return e ? xt.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return a = s = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return a = s = [],
                    n || t || (o = n = ""),
                    this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, n) {
                    return a || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                    t || c()),
                    this
                },
                fire: function() {
                    return d.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return d
        }
        ,
        xt.extend({
            Deferred: function(t) {
                var n = [["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2], ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments),
                        this
                    },
                    "catch": function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return xt.Deferred(function(t) {
                            xt.each(n, function(n, i) {
                                var r = yt(e[i[4]]) && e[i[4]];
                                a[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && yt(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function a(t, n, i, r) {
                            return function() {
                                var s = this
                                  , l = arguments
                                  , d = function() {
                                    var e, d;
                                    if (!(o > t)) {
                                        if (e = i.apply(s, l),
                                        e === n.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        yt(d) ? r ? d.call(e, a(o, n, u, r), a(o, n, c, r)) : (o++,
                                        d.call(e, a(o, n, u, r), a(o, n, c, r), a(o, n, u, n.notifyWith))) : (i !== u && (s = void 0,
                                        l = [e]),
                                        (r || n.resolveWith)(s, l))
                                    }
                                }
                                  , p = r ? d : function() {
                                    try {
                                        d()
                                    } catch (e) {
                                        xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(e, p.stackTrace),
                                        t + 1 >= o && (i !== c && (s = void 0,
                                        l = [e]),
                                        n.rejectWith(s, l))
                                    }
                                }
                                ;
                                t ? p() : (xt.Deferred.getStackHook && (p.stackTrace = xt.Deferred.getStackHook()),
                                e.setTimeout(p))
                            }
                        }
                        var o = 0;
                        return xt.Deferred(function(e) {
                            n[0][3].add(a(0, e, yt(r) ? r : u, e.notifyWith)),
                            n[1][3].add(a(0, e, yt(t) ? t : u)),
                            n[2][3].add(a(0, e, yt(i) ? i : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? xt.extend(e, r) : r
                    }
                }
                  , a = {};
                return xt.each(n, function(e, t) {
                    var o = t[2]
                      , s = t[5];
                    r[t[1]] = o.add,
                    s && o.add(function() {
                        i = s
                    }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                    o.add(t[3].fire),
                    a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                    }
                    ,
                    a[t[0] + "With"] = o.fireWith
                }),
                r.promise(a),
                t && t.call(a, a),
                a
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , i = Array(n)
                  , r = lt.call(arguments)
                  , a = xt.Deferred()
                  , o = function(e) {
                    return function(n) {
                        i[e] = this,
                        r[e] = arguments.length > 1 ? lt.call(arguments) : n,
                        --t || a.resolveWith(i, r)
                    }
                };
                if (1 >= t && (d(e, a.done(o(n)).resolve, a.reject, !t),
                "pending" === a.state() || yt(r[n] && r[n].then)))
                    return a.then();
                for (; n--; )
                    d(r[n], o(n), a.reject);
                return a.promise()
            }
        });
        var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        xt.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Dt.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }
        ,
        xt.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        }
        ;
        var Pt = xt.Deferred();
        xt.fn.ready = function(e) {
            return Pt.then(e).catch(function(e) {
                xt.readyException(e)
            }),
            this
        }
        ,
        xt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (e === !0 ? --xt.readyWait : xt.isReady) || (xt.isReady = !0,
                e !== !0 && --xt.readyWait > 0 || Pt.resolveWith(ot, [xt]))
            }
        }),
        xt.ready.then = Pt.then,
        "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? e.setTimeout(xt.ready) : (ot.addEventListener("DOMContentLoaded", p),
        e.addEventListener("load", p));
        var zt = function(e, t, n, r, a, o, s) {
            var l = 0
              , u = e.length
              , c = null == n;
            if ("object" === i(n)) {
                a = !0;
                for (l in n)
                    zt(e, t, l, n[l], !0, o, s)
            } else if (void 0 !== r && (a = !0,
            yt(r) || (s = !0),
            c && (s ? (t.call(e, r),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(xt(e), n)
            }
            )),
            t))
                for (; u > l; l++)
                    t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
            return a ? e : c ? t.call(e) : u ? t(e[0], n) : o
        }
          , Ht = /^-ms-/
          , Bt = /-([a-z])/g
          , It = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        g.uid = 1,
        g.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                It(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t)
                    r[h(t)] = n;
                else
                    for (i in t)
                        r[h(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(h) : (t = h(t),
                        t = t in i ? [t] : t.match(Mt) || []),
                        n = t.length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    (void 0 === t || xt.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !xt.isEmptyObject(t)
            }
        };
        var Ft = new g
          , qt = new g
          , Ut = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Jt = /[A-Z]/g;
        xt.extend({
            hasData: function(e) {
                return qt.hasData(e) || Ft.hasData(e)
            },
            data: function(e, t, n) {
                return qt.access(e, t, n)
            },
            removeData: function(e, t) {
                qt.remove(e, t)
            },
            _data: function(e, t, n) {
                return Ft.access(e, t, n)
            },
            _removeData: function(e, t) {
                Ft.remove(e, t)
            }
        }),
        xt.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0], o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = qt.get(a),
                    1 === a.nodeType && !Ft.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--; )
                            o[n] && (i = o[n].name,
                            0 === i.indexOf("data-") && (i = h(i.slice(5)),
                            v(a, i, r[i])));
                        Ft.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    qt.set(this, e)
                }) : zt(this, function(t) {
                    var n;
                    if (a && void 0 === t) {
                        if (n = qt.get(a, e),
                        void 0 !== n)
                            return n;
                        if (n = v(a, e),
                        void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            qt.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    qt.remove(this, e)
                })
            }
        }),
        xt.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue",
                i = Ft.get(e, t),
                n && (!i || Array.isArray(n) ? i = Ft.access(e, t, xt.makeArray(n)) : i.push(n)),
                i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = xt.queue(e, t)
                  , i = n.length
                  , r = n.shift()
                  , a = xt._queueHooks(e, t)
                  , o = function() {
                    xt.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(),
                i--),
                r && ("fx" === t && n.unshift("inprogress"),
                delete a.stop,
                r.call(e, o, a)),
                !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Ft.get(e, n) || Ft.access(e, n, {
                    empty: xt.Callbacks("once memory").add(function() {
                        Ft.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        xt.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? xt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = xt.queue(this, e, t);
                    xt._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && xt.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    xt.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, r = xt.Deferred(), a = this, o = this.length, s = function() {
                    --i || r.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; o--; )
                    n = Ft.get(a[o], e + "queueHooks"),
                    n && n.empty && (i++,
                    n.empty.add(s));
                return s(),
                r.promise(t)
            }
        });
        var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Vt = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$","i")
          , Xt = ["Top", "Right", "Bottom", "Left"]
          , Gt = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && xt.contains(e.ownerDocument, e) && "none" === xt.css(e, "display")
        }
          , Kt = function(e, t, n, i) {
            var r, a, o = {};
            for (a in t)
                o[a] = e.style[a],
                e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t)
                e.style[a] = o[a];
            return r
        }
          , $t = {};
        xt.fn.extend({
            show: function() {
                return w(this, !0)
            },
            hide: function() {
                return w(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Gt(this) ? xt(this).show() : xt(this).hide()
                })
            }
        });
        var Yt = /^(?:checkbox|radio)$/i
          , Qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , Zt = /^$|^module$|\/(?:java|ecma)script/i
          , en = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        en.optgroup = en.option,
        en.tbody = en.tfoot = en.colgroup = en.caption = en.thead,
        en.th = en.td;
        var tn = /<|&#?\w+;/;
        !function() {
            var e = ot.createDocumentFragment()
              , t = e.appendChild(ot.createElement("div"))
              , n = ot.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            vt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            vt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var nn = ot.documentElement
          , rn = /^key/
          , an = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , on = /^([^.]*)(?:\.(.+)|)/;
        xt.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, l, u, c, d, p, f, h, g, m = Ft.get(e);
                if (m)
                    for (n.handler && (a = n,
                    n = a.handler,
                    r = a.selector),
                    r && xt.find.matchesSelector(nn, r),
                    n.guid || (n.guid = xt.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (o = m.handle) || (o = m.handle = function(t) {
                        return "undefined" != typeof xt && xt.event.triggered !== t.type ? xt.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || "").match(Mt) || [""],
                    u = t.length; u--; )
                        s = on.exec(t[u]) || [],
                        f = g = s[1],
                        h = (s[2] || "").split(".").sort(),
                        f && (d = xt.event.special[f] || {},
                        f = (r ? d.delegateType : d.bindType) || f,
                        d = xt.event.special[f] || {},
                        c = xt.extend({
                            type: f,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && xt.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, a),
                        (p = l[f]) || (p = l[f] = [],
                        p.delegateCount = 0,
                        d.setup && d.setup.call(e, i, h, o) !== !1 || e.addEventListener && e.addEventListener(f, o)),
                        d.add && (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        xt.event.global[f] = !0)
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, l, u, c, d, p, f, h, g, m = Ft.hasData(e) && Ft.get(e);
                if (m && (l = m.events)) {
                    for (t = (t || "").match(Mt) || [""],
                    u = t.length; u--; )
                        if (s = on.exec(t[u]) || [],
                        f = g = s[1],
                        h = (s[2] || "").split(".").sort(),
                        f) {
                            for (d = xt.event.special[f] || {},
                            f = (i ? d.delegateType : d.bindType) || f,
                            p = l[f] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            o = a = p.length; a--; )
                                c = p[a],
                                !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(a, 1),
                                c.selector && p.delegateCount--,
                                d.remove && d.remove.call(e, c));
                            o && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || xt.removeEvent(e, f, m.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                xt.event.remove(e, f + t[u], n, i, !0);
                    xt.isEmptyObject(l) && Ft.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, a, o, s = xt.event.fix(e), l = new Array(arguments.length), u = (Ft.get(this, "events") || {})[s.type] || [], c = xt.event.special[s.type] || {};
                for (l[0] = s,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (s.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                    for (o = xt.event.handlers.call(this, s, u),
                    t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = r.elem,
                        n = 0; (a = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            (!s.rnamespace || s.rnamespace.test(a.namespace)) && (s.handleObj = a,
                            s.data = a.data,
                            i = ((xt.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l),
                            void 0 !== i && (s.result = i) === !1 && (s.preventDefault(),
                            s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o, s = [], l = t.delegateCount, u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                            for (a = [],
                            o = {},
                            n = 0; l > n; n++)
                                i = t[n],
                                r = i.selector + " ",
                                void 0 === o[r] && (o[r] = i.needsContext ? xt(r, this).index(u) > -1 : xt.find(r, this, null, [u]).length),
                                o[r] && a.push(i);
                            a.length && s.push({
                                elem: u,
                                handlers: a
                            })
                        }
                return u = this,
                l < t.length && s.push({
                    elem: u,
                    handlers: t.slice(l)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(xt.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: yt(t) ? function() {
                        return this.originalEvent ? t(this.originalEvent) : void 0
                    }
                    : function() {
                        return this.originalEvent ? this.originalEvent[e] : void 0
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[xt.expando] ? e : new xt.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== S() && this.focus ? (this.focus(),
                        !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === S() && this.blur ? (this.blur(),
                        !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && a(this, "input") ? (this.click(),
                        !1) : void 0
                    },
                    _default: function(e) {
                        return a(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        xt.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        xt.Event = function(e, t) {
            return this instanceof xt.Event ? (e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : A,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && xt.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            void (this[xt.expando] = !0)) : new xt.Event(e,t)
        }
        ,
        xt.Event.prototype = {
            constructor: xt.Event,
            isDefaultPrevented: A,
            isPropagationStopped: A,
            isImmediatePropagationStopped: A,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = T,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = T,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = T,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        xt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && rn.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && an.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, xt.event.addProp),
        xt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            xt.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, r = e.relatedTarget, a = e.handleObj;
                    return (!r || r !== i && !xt.contains(i, r)) && (e.type = a.origType,
                    n = a.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        xt.fn.extend({
            on: function(e, t, n, i) {
                return E(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return E(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    xt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t,
                t = void 0),
                n === !1 && (n = A),
                this.each(function() {
                    xt.event.remove(this, e, n, t)
                })
            }
        });
        var sn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , ln = /<script|<style|<link/i
          , un = /checked\s*(?:[^=]|=\s*.checked.)/i
          , cn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        xt.extend({
            htmlPrefilter: function(e) {
                return e.replace(sn, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, s = e.cloneNode(!0), l = xt.contains(e.ownerDocument, e);
                if (!(vt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || xt.isXMLDoc(e)))
                    for (o = k(s),
                    a = k(e),
                    i = 0,
                    r = a.length; r > i; i++)
                        L(a[i], o[i]);
                if (t)
                    if (n)
                        for (a = a || k(e),
                        o = o || k(s),
                        i = 0,
                        r = a.length; r > i; i++)
                            j(a[i], o[i]);
                    else
                        j(e, s);
                return o = k(s, "script"),
                o.length > 0 && x(o, !l && k(e, "script")),
                s
            },
            cleanData: function(e) {
                for (var t, n, i, r = xt.event.special, a = 0; void 0 !== (n = e[a]); a++)
                    if (It(n)) {
                        if (t = n[Ft.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    r[i] ? xt.event.remove(n, i) : xt.removeEvent(n, i, t.handle);
                            n[Ft.expando] = void 0
                        }
                        n[qt.expando] && (n[qt.expando] = void 0)
                    }
            }
        }),
        xt.fn.extend({
            detach: function(e) {
                return M(this, e, !0)
            },
            remove: function(e) {
                return M(this, e)
            },
            text: function(e) {
                return zt(this, function(e) {
                    return void 0 === e ? xt.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return O(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return O(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return O(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return O(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (xt.cleanData(k(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                t = null == t ? e : t,
                this.map(function() {
                    return xt.clone(this, e, t)
                })
            },
            html: function(e) {
                return zt(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ln.test(e) && !en[(Qt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = xt.htmlPrefilter(e);
                        try {
                            for (; i > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (xt.cleanData(k(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return O(this, arguments, function(t) {
                    var n = this.parentNode;
                    xt.inArray(this, e) < 0 && (xt.cleanData(k(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        xt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            xt.fn[e] = function(e) {
                for (var n, i = [], r = xt(e), a = r.length - 1, o = 0; a >= o; o++)
                    n = o === a ? this : this.clone(!0),
                    xt(r[o])[t](n),
                    ct.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var dn = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$","i")
          , pn = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e),
            n.getComputedStyle(t)
        }
          , fn = new RegExp(Xt.join("|"),"i");
        !function() {
            function t() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    nn.appendChild(l).appendChild(u);
                    var t = e.getComputedStyle(u);
                    i = "1%" !== t.top,
                    s = 12 === n(t.marginLeft),
                    u.style.right = "60%",
                    o = 36 === n(t.right),
                    r = 36 === n(t.width),
                    u.style.position = "absolute",
                    a = 36 === u.offsetWidth || "absolute",
                    nn.removeChild(l),
                    u = null
                }
            }
            function n(e) {
                return Math.round(parseFloat(e))
            }
            var i, r, a, o, s, l = ot.createElement("div"), u = ot.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            vt.clearCloneStyle = "content-box" === u.style.backgroundClip,
            xt.extend(vt, {
                boxSizingReliable: function() {
                    return t(),
                    r
                },
                pixelBoxStyles: function() {
                    return t(),
                    o
                },
                pixelPosition: function() {
                    return t(),
                    i
                },
                reliableMarginLeft: function() {
                    return t(),
                    s
                },
                scrollboxSize: function() {
                    return t(),
                    a
                }
            }))
        }();
        var hn = /^(none|table(?!-c[ea]).+)/
          , gn = /^--/
          , mn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , vn = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , yn = ["Webkit", "Moz", "ms"]
          , bn = ot.createElement("div").style;
        xt.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = D(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = h(t), l = gn.test(t), u = e.style;
                    return l || (t = H(s)),
                    o = xt.cssHooks[t] || xt.cssHooks[s],
                    void 0 === n ? o && "get"in o && void 0 !== (r = o.get(e, !1, i)) ? r : u[t] : (a = typeof n,
                    "string" === a && (r = Vt.exec(n)) && r[1] && (n = y(e, t, r),
                    a = "number"),
                    null != n && n === n && ("number" === a && (n += r && r[3] || (xt.cssNumber[s] ? "" : "px")),
                    vt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    o && "set"in o && void 0 === (n = o.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n)),
                    void 0)
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, s = h(t), l = gn.test(t);
                return l || (t = H(s)),
                o = xt.cssHooks[t] || xt.cssHooks[s],
                o && "get"in o && (r = o.get(e, !0, n)),
                void 0 === r && (r = D(e, t, i)),
                "normal" === r && t in vn && (r = vn[t]),
                "" === n || n ? (a = parseFloat(r),
                n === !0 || isFinite(a) ? a || 0 : r) : r
            }
        }),
        xt.each(["height", "width"], function(e, t) {
            xt.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? !hn.test(xt.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Kt(e, mn, function() {
                        return F(e, t, i)
                    }) : void 0
                },
                set: function(e, n, i) {
                    var r, a = pn(e), o = "border-box" === xt.css(e, "boxSizing", !1, a), s = i && I(e, t, i, o, a);
                    return o && vt.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - I(e, t, "border", !1, a) - .5)),
                    s && (r = Vt.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                    n = xt.css(e, t)),
                    B(e, n, s)
                }
            }
        }),
        xt.cssHooks.marginLeft = P(vt.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Kt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),
        xt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            xt.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                        r[e + Xt[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            },
            "margin" !== e && (xt.cssHooks[e + t].set = B)
        }),
        xt.fn.extend({
            css: function(e, t) {
                return zt(this, function(e, t, n) {
                    var i, r, a = {}, o = 0;
                    if (Array.isArray(t)) {
                        for (i = pn(e),
                        r = t.length; r > o; o++)
                            a[t[o]] = xt.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? xt.style(e, t, n) : xt.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        xt.Tween = q,
        q.prototype = {
            constructor: q,
            init: function(e, t, n, i, r, a) {
                this.elem = e,
                this.prop = n,
                this.easing = r || xt.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = a || (xt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = q.propHooks[this.prop];
                return e && e.get ? e.get(this) : q.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = q.propHooks[this.prop];
                return this.pos = t = this.options.duration ? xt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : q.propHooks._default.set(this),
                this
            }
        },
        q.prototype.init.prototype = q.prototype,
        q.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = xt.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    xt.fx.step[e.prop] ? xt.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[xt.cssProps[e.prop]] && !xt.cssHooks[e.prop] ? e.elem[e.prop] = e.now : xt.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        xt.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        xt.fx = q.prototype.init,
        xt.fx.step = {};
        var wn, kn, xn = /^(?:toggle|show|hide)$/, _n = /queueHooks$/;
        xt.Animation = xt.extend(K, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Vt.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                yt(e) ? (t = e,
                e = ["*"]) : e = e.match(Mt);
                for (var n, i = 0, r = e.length; r > i; i++)
                    n = e[i],
                    K.tweeners[n] = K.tweeners[n] || [],
                    K.tweeners[n].unshift(t)
            },
            prefilters: [X],
            prefilter: function(e, t) {
                t ? K.prefilters.unshift(e) : K.prefilters.push(e)
            }
        }),
        xt.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? xt.extend({}, e) : {
                complete: n || !n && t || yt(e) && e,
                duration: e,
                easing: n && t || t && !yt(t) && t
            };
            return xt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in xt.fx.speeds ? xt.fx.speeds[i.duration] : xt.fx.speeds._default),
            (null == i.queue || i.queue === !0) && (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                yt(i.old) && i.old.call(this),
                i.queue && xt.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        xt.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Gt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = xt.isEmptyObject(e)
                  , a = xt.speed(t, n, i)
                  , o = function() {
                    var t = K(this, xt.extend({}, e), a);
                    (r || Ft.get(this, "finish")) && t.stop(!0)
                };
                return o.finish = o,
                r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , r = null != e && e + "queueHooks"
                      , a = xt.timers
                      , o = Ft.get(this);
                    if (r)
                        o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o)
                            o[r] && o[r].stop && _n.test(r) && i(o[r]);
                    for (r = a.length; r--; )
                        a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n),
                        t = !1,
                        a.splice(r, 1));
                    (t || !n) && xt.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = Ft.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = xt.timers, o = i ? i.length : 0;
                    for (n.finish = !0,
                    xt.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = a.length; t--; )
                        a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                        a.splice(t, 1));
                    for (t = 0; o > t; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        xt.each(["toggle", "show", "hide"], function(e, t) {
            var n = xt.fn[t];
            xt.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
            }
        }),
        xt.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            xt.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        xt.timers = [],
        xt.fx.tick = function() {
            var e, t = 0, n = xt.timers;
            for (wn = Date.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || xt.fx.stop(),
            wn = void 0
        }
        ,
        xt.fx.timer = function(e) {
            xt.timers.push(e),
            xt.fx.start()
        }
        ,
        xt.fx.interval = 13,
        xt.fx.start = function() {
            kn || (kn = !0,
            U())
        }
        ,
        xt.fx.stop = function() {
            kn = null
        }
        ,
        xt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        xt.fn.delay = function(t, n) {
            return t = xt.fx ? xt.fx.speeds[t] || t : t,
            n = n || "fx",
            this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        }
        ,
        function() {
            var e = ot.createElement("input")
              , t = ot.createElement("select")
              , n = t.appendChild(ot.createElement("option"));
            e.type = "checkbox",
            vt.checkOn = "" !== e.value,
            vt.optSelected = n.selected,
            e = ot.createElement("input"),
            e.value = "t",
            e.type = "radio",
            vt.radioValue = "t" === e.value
        }();
        var Tn, An = xt.expr.attrHandle;
        xt.fn.extend({
            attr: function(e, t) {
                return zt(this, xt.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    xt.removeAttr(this, e)
                })
            }
        }),
        xt.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return "undefined" == typeof e.getAttribute ? xt.prop(e, t, n) : (1 === a && xt.isXMLDoc(e) || (r = xt.attrHooks[t.toLowerCase()] || (xt.expr.match.bool.test(t) ? Tn : void 0)),
                    void 0 !== n ? null === n ? void xt.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = xt.find.attr(e, t),
                    null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!vt.radioValue && "radio" === t && a(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0, r = t && t.match(Mt);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++]; )
                        e.removeAttribute(n)
            }
        }),
        Tn = {
            set: function(e, t, n) {
                return t === !1 ? xt.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        xt.each(xt.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = An[t] || xt.find.attr;
            An[t] = function(e, t, i) {
                var r, a, o = t.toLowerCase();
                return i || (a = An[o],
                An[o] = r,
                r = null != n(e, t, i) ? o : null,
                An[o] = a),
                r
            }
        });
        var Sn = /^(?:input|select|textarea|button)$/i
          , En = /^(?:a|area)$/i;
        xt.fn.extend({
            prop: function(e, t) {
                return zt(this, xt.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[xt.propFix[e] || e]
                })
            }
        }),
        xt.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return 1 === a && xt.isXMLDoc(e) || (t = xt.propFix[t] || t,
                    r = xt.propHooks[t]),
                    void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = xt.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Sn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        vt.optSelected || (xt.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            xt.propFix[this.toLowerCase()] = this
        }),
        xt.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (yt(e))
                    return this.each(function(t) {
                        xt(this).addClass(e.call(this, t, Y(this)))
                    });
                if (t = Q(e),
                t.length)
                    for (; n = this[l++]; )
                        if (r = Y(n),
                        i = 1 === n.nodeType && " " + $(r) + " ") {
                            for (o = 0; a = t[o++]; )
                                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = $(i),
                            r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (yt(e))
                    return this.each(function(t) {
                        xt(this).removeClass(e.call(this, t, Y(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if (t = Q(e),
                t.length)
                    for (; n = this[l++]; )
                        if (r = Y(n),
                        i = 1 === n.nodeType && " " + $(r) + " ") {
                            for (o = 0; a = t[o++]; )
                                for (; i.indexOf(" " + a + " ") > -1; )
                                    i = i.replace(" " + a + " ", " ");
                            s = $(i),
                            r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : this.each(yt(e) ? function(n) {
                    xt(this).toggleClass(e.call(this, n, Y(this), t), t)
                }
                : function() {
                    var t, r, a, o;
                    if (i)
                        for (r = 0,
                        a = xt(this),
                        o = Q(e); t = o[r++]; )
                            a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else
                        (void 0 === e || "boolean" === n) && (t = Y(this),
                        t && Ft.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ft.get(this, "__className__") || ""))
                }
                )
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + $(Y(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Cn = /\r/g;
        xt.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)
                        return i = yt(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? e.call(this, n, xt(this).val()) : e,
                            null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = xt.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            t = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        });
                    if (r)
                        return t = xt.valHooks[r.type] || xt.valHooks[r.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                        "string" == typeof n ? n.replace(Cn, "") : null == n ? "" : n)
                }
            }
        }),
        xt.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = xt.find.attr(e, "value");
                        return null != t ? t : $(xt.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], u = s ? o + 1 : r.length;
                        for (i = 0 > o ? u : s ? o : 0; u > i; i++)
                            if (n = r[i],
                            !(!n.selected && i !== o || n.disabled || n.parentNode.disabled && a(n.parentNode, "optgroup"))) {
                                if (t = xt(n).val(),
                                s)
                                    return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = xt.makeArray(t), o = r.length; o--; )
                            i = r[o],
                            (i.selected = xt.inArray(xt.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        a
                    }
                }
            }
        }),
        xt.each(["radio", "checkbox"], function() {
            xt.valHooks[this] = {
                set: function(e, t) {
                    return Array.isArray(t) ? e.checked = xt.inArray(xt(e).val(), t) > -1 : void 0
                }
            },
            vt.checkOn || (xt.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        vt.focusin = "onfocusin"in e;
        var Rn = /^(?:focusinfocus|focusoutblur)$/
          , Nn = function(e) {
            e.stopPropagation()
        };
        xt.extend(xt.event, {
            trigger: function(t, n, i, r) {
                var a, o, s, l, u, c, d, p, f = [i || ot], h = ht.call(t, "type") ? t.type : t, g = ht.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = p = s = i = i || ot,
                3 !== i.nodeType && 8 !== i.nodeType && !Rn.test(h + xt.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."),
                h = g.shift(),
                g.sort()),
                u = h.indexOf(":") < 0 && "on" + h,
                t = t[xt.expando] ? t : new xt.Event(h,"object" == typeof t && t),
                t.isTrigger = r ? 2 : 3,
                t.namespace = g.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = i),
                n = null == n ? [t] : xt.makeArray(n, [t]),
                d = xt.event.special[h] || {},
                r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !bt(i)) {
                        for (l = d.delegateType || h,
                        Rn.test(l + h) || (o = o.parentNode); o; o = o.parentNode)
                            f.push(o),
                            s = o;
                        s === (i.ownerDocument || ot) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (a = 0; (o = f[a++]) && !t.isPropagationStopped(); )
                        p = o,
                        t.type = a > 1 ? l : d.bindType || h,
                        c = (Ft.get(o, "events") || {})[t.type] && Ft.get(o, "handle"),
                        c && c.apply(o, n),
                        c = u && o[u],
                        c && c.apply && It(o) && (t.result = c.apply(o, n),
                        t.result === !1 && t.preventDefault());
                    return t.type = h,
                    r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !It(i) || u && yt(i[h]) && !bt(i) && (s = i[u],
                    s && (i[u] = null),
                    xt.event.triggered = h,
                    t.isPropagationStopped() && p.addEventListener(h, Nn),
                    i[h](),
                    t.isPropagationStopped() && p.removeEventListener(h, Nn),
                    xt.event.triggered = void 0,
                    s && (i[u] = s)),
                    t.result
                }
            },
            simulate: function(e, t, n) {
                var i = xt.extend(new xt.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                xt.event.trigger(i, null, t)
            }
        }),
        xt.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    xt.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? xt.event.trigger(e, t, n, !0) : void 0
            }
        }),
        vt.focusin || xt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                xt.event.simulate(t, e.target, xt.event.fix(e))
            };
            xt.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , r = Ft.access(i, t);
                    r || i.addEventListener(e, n, !0),
                    Ft.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , r = Ft.access(i, t) - 1;
                    r ? Ft.access(i, t, r) : (i.removeEventListener(e, n, !0),
                    Ft.remove(i, t))
                }
            }
        });
        var jn = e.location
          , Ln = Date.now()
          , On = /\?/;
        xt.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t)
                return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return (!n || n.getElementsByTagName("parsererror").length) && xt.error("Invalid XML: " + t),
            n
        }
        ;
        var Mn = /\[\]$/
          , Dn = /\r?\n/g
          , Pn = /^(?:submit|button|image|reset|file)$/i
          , zn = /^(?:input|select|textarea|keygen)/i;
        xt.param = function(e, t) {
            var n, i = [], r = function(e, t) {
                var n = yt(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !xt.isPlainObject(e))
                xt.each(e, function() {
                    r(this.name, this.value)
                });
            else
                for (n in e)
                    Z(n, e[n], t, r);
            return i.join("&")
        }
        ,
        xt.fn.extend({
            serialize: function() {
                return xt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = xt.prop(this, "elements");
                    return e ? xt.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !xt(this).is(":disabled") && zn.test(this.nodeName) && !Pn.test(e) && (this.checked || !Yt.test(e))
                }).map(function(e, t) {
                    var n = xt(this).val();
                    return null == n ? null : Array.isArray(n) ? xt.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Dn, "\r\n")
                    }
                }).get()
            }
        });
        var Hn = /%20/g
          , Bn = /#.*$/
          , In = /([?&])_=[^&]*/
          , Fn = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Un = /^(?:GET|HEAD)$/
          , Jn = /^\/\//
          , Wn = {}
          , Vn = {}
          , Xn = "*/".concat("*")
          , Gn = ot.createElement("a");
        Gn.href = jn.href,
        xt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jn.href,
                type: "GET",
                isLocal: qn.test(jn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": xt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? nt(nt(e, xt.ajaxSettings), t) : nt(xt.ajaxSettings, e)
            },
            ajaxPrefilter: et(Wn),
            ajaxTransport: et(Vn),
            ajax: function(t, n) {
                function i(t, n, i, s) {
                    var u, p, f, w, k, x = n;
                    c || (c = !0,
                    l && e.clearTimeout(l),
                    r = void 0,
                    o = s || "",
                    _.readyState = t > 0 ? 4 : 0,
                    u = t >= 200 && 300 > t || 304 === t,
                    i && (w = it(h, _, i)),
                    w = rt(h, w, _, u),
                    u ? (h.ifModified && (k = _.getResponseHeader("Last-Modified"),
                    k && (xt.lastModified[a] = k),
                    k = _.getResponseHeader("etag"),
                    k && (xt.etag[a] = k)),
                    204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state,
                    p = w.data,
                    f = w.error,
                    u = !f)) : (f = x,
                    (t || !x) && (x = "error",
                    0 > t && (t = 0))),
                    _.status = t,
                    _.statusText = (n || x) + "",
                    u ? v.resolveWith(g, [p, x, _]) : v.rejectWith(g, [_, x, f]),
                    _.statusCode(b),
                    b = void 0,
                    d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [_, h, u ? p : f]),
                    y.fireWith(g, [_, x]),
                    d && (m.trigger("ajaxComplete", [_, h]),
                    --xt.active || xt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t,
                t = void 0),
                n = n || {};
                var r, a, o, s, l, u, c, d, p, f, h = xt.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? xt(g) : xt.event, v = xt.Deferred(), y = xt.Callbacks("once memory"), b = h.statusCode || {}, w = {}, k = {}, x = "canceled", _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Fn.exec(o); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e,
                        w[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                _.always(e[_.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t),
                        i(0, t),
                        this
                    }
                };
                if (v.promise(_),
                h.url = ((t || h.url || jn.href) + "").replace(Jn, jn.protocol + "//"),
                h.type = n.method || n.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(Mt) || [""],
                null == h.crossDomain) {
                    u = ot.createElement("a");
                    try {
                        u.href = h.url,
                        u.href = u.href,
                        h.crossDomain = Gn.protocol + "//" + Gn.host != u.protocol + "//" + u.host
                    } catch (T) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = xt.param(h.data, h.traditional)),
                tt(Wn, h, n, _),
                c)
                    return _;
                d = xt.event && h.global,
                d && 0 === xt.active++ && xt.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Un.test(h.type),
                a = h.url.replace(Bn, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Hn, "+")) : (f = h.url.slice(a.length),
                h.data && (h.processData || "string" == typeof h.data) && (a += (On.test(a) ? "&" : "?") + h.data,
                delete h.data),
                h.cache === !1 && (a = a.replace(In, "$1"),
                f = (On.test(a) ? "&" : "?") + "_=" + Ln++ + f),
                h.url = a + f),
                h.ifModified && (xt.lastModified[a] && _.setRequestHeader("If-Modified-Since", xt.lastModified[a]),
                xt.etag[a] && _.setRequestHeader("If-None-Match", xt.etag[a])),
                (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType),
                _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers)
                    _.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (h.beforeSend.call(g, _, h) === !1 || c))
                    return _.abort();
                if (x = "abort",
                y.add(h.complete),
                _.done(h.success),
                _.fail(h.error),
                r = tt(Vn, h, n, _)) {
                    if (_.readyState = 1,
                    d && m.trigger("ajaxSend", [_, h]),
                    c)
                        return _;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        _.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1,
                        r.send(w, i)
                    } catch (T) {
                        if (c)
                            throw T;
                        i(-1, T)
                    }
                } else
                    i(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return xt.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return xt.get(e, void 0, t, "script")
            }
        }),
        xt.each(["get", "post"], function(e, t) {
            xt[t] = function(e, n, i, r) {
                return yt(n) && (r = r || i,
                i = n,
                n = void 0),
                xt.ajax(xt.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, xt.isPlainObject(e) && e))
            }
        }),
        xt._evalUrl = function(e) {
            return xt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        xt.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (yt(e) && (e = e.call(this[0])),
                t = xt(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return this.each(yt(e) ? function(t) {
                    xt(this).wrapInner(e.call(this, t))
                }
                : function() {
                    var t = xt(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }
                )
            },
            wrap: function(e) {
                var t = yt(e);
                return this.each(function(n) {
                    xt(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    xt(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        xt.expr.pseudos.hidden = function(e) {
            return !xt.expr.pseudos.visible(e)
        }
        ,
        xt.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        xt.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var Kn = {
            0: 200,
            1223: 204
        }
          , $n = xt.ajaxSettings.xhr();
        vt.cors = !!$n && "withCredentials"in $n,
        vt.ajax = $n = !!$n,
        xt.ajaxTransport(function(t) {
            var n, i;
            return vt.cors || $n && !t.crossDomain ? {
                send: function(r, a) {
                    var o, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        s.setRequestHeader(o, r[o]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Kn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    i = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n)
                            throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }),
        xt.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        xt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return xt.globalEval(e),
                    e
                }
            }
        }),
        xt.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        xt.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = xt("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && r("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        ot.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Yn = []
          , Qn = /(=)\?(?=&|$)|\?\?/;
        xt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yn.pop() || xt.expando + "_" + Ln++;
                return this[e] = !0,
                e
            }
        }),
        xt.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, a, o, s = t.jsonp !== !1 && (Qn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = yt(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qn, "$1" + r) : t.jsonp !== !1 && (t.url += (On.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return o || xt.error(r + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            a = e[r],
            e[r] = function() {
                o = arguments
            }
            ,
            i.always(function() {
                void 0 === a ? xt(e).removeProp(r) : e[r] = a,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Yn.push(r)),
                o && yt(a) && a(o[0]),
                o = a = void 0
            }),
            "script") : void 0
        }),
        vt.createHTMLDocument = function() {
            var e = ot.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        xt.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
            t = !1);
            var i, r, a;
            return t || (vt.createHTMLDocument ? (t = ot.implementation.createHTMLDocument(""),
            i = t.createElement("base"),
            i.href = ot.location.href,
            t.head.appendChild(i)) : t = ot),
            r = Ct.exec(e),
            a = !n && [],
            r ? [t.createElement(r[1])] : (r = _([e], t, a),
            a && a.length && xt(a).remove(),
            xt.merge([], r.childNodes))
        }
        ,
        xt.fn.load = function(e, t, n) {
            var i, r, a, o = this, s = e.indexOf(" ");
            return s > -1 && (i = $(e.slice(s)),
            e = e.slice(0, s)),
            yt(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (r = "POST"),
            o.length > 0 && xt.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments,
                o.html(i ? xt("<div>").append(xt.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            xt.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        xt.expr.pseudos.animated = function(e) {
            return xt.grep(xt.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        xt.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, l, u, c = xt.css(e, "position"), d = xt(e), p = {};
                "static" === c && (e.style.position = "relative"),
                s = d.offset(),
                a = xt.css(e, "top"),
                l = xt.css(e, "left"),
                u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1,
                u ? (i = d.position(),
                o = i.top,
                r = i.left) : (o = parseFloat(a) || 0,
                r = parseFloat(l) || 0),
                yt(t) && (t = t.call(e, n, xt.extend({}, s))),
                null != t.top && (p.top = t.top - s.top + o),
                null != t.left && (p.left = t.left - s.left + r),
                "using"in t ? t.using.call(e, p) : d.css(p)
            }
        },
        xt.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        xt.offset.setOffset(this, e, t)
                    });
                var t, n, i = this[0];
                if (i)
                    return i.getClientRects().length ? (t = i.getBoundingClientRect(),
                    n = i.ownerDocument.defaultView,
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === xt.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === xt.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (r = xt(e).offset(),
                        r.top += xt.css(e, "borderTopWidth", !0),
                        r.left += xt.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - xt.css(i, "marginTop", !0),
                        left: t.left - r.left - xt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === xt.css(e, "position"); )
                        e = e.offsetParent;
                    return e || nn
                })
            }
        }),
        xt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            xt.fn[e] = function(i) {
                return zt(this, function(e, i, r) {
                    var a;
                    return bt(e) ? a = e : 9 === e.nodeType && (a = e.defaultView),
                    void 0 === r ? a ? a[t] : e[i] : void (a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }),
        xt.each(["top", "left"], function(e, t) {
            xt.cssHooks[t] = P(vt.pixelPosition, function(e, n) {
                return n ? (n = D(e, t),
                dn.test(n) ? xt(e).position()[t] + "px" : n) : void 0
            })
        }),
        xt.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            xt.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                xt.fn[i] = function(r, a) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                      , s = n || (r === !0 || a === !0 ? "margin" : "border");
                    return zt(this, function(t, n, r) {
                        var a;
                        return bt(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
                        Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? xt.css(t, n, s) : xt.style(t, n, r, s)
                    }, t, o ? r : void 0, o)
                }
            })
        }),
        xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            xt.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        xt.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        xt.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        xt.proxy = function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            yt(e) ? (i = lt.call(arguments, 2),
            r = function() {
                return e.apply(t || this, i.concat(lt.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || xt.guid++,
            r) : void 0
        }
        ,
        xt.holdReady = function(e) {
            e ? xt.readyWait++ : xt.ready(!0)
        }
        ,
        xt.isArray = Array.isArray,
        xt.parseJSON = JSON.parse,
        xt.nodeName = a,
        xt.isFunction = yt,
        xt.isWindow = bt,
        xt.camelCase = h,
        xt.type = i,
        xt.now = Date.now,
        xt.isNumeric = function(e) {
            var t = xt.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ;
        var Zn = e.jQuery
          , ei = e.$;
        return xt.noConflict = function(t) {
            return e.$ === xt && (e.$ = ei),
            t && e.jQuery === xt && (e.jQuery = Zn),
            xt
        }
        ,
        t || (e.jQuery = e.$ = xt),
        xt
    }),
    define("text!stylesheets/login.css", [], function() {
        return ".login {\n  width: 440px;\n}\n.content {\n  width: 300px;\n  margin: auto;\n}\n.input {\n  border-radius: 3px;\n  background-color: #f3f3f3;\n  border: 0;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 5px 0 15px;\n  padding: 8px;\n  width: 300px;\n}\nlabel {\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n}\n.btn-login {\n  border-radius: 3px;\n  background-color: #f26565;\n  border: 0;\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 15px 0;\n  padding: 10px 20px;\n  text-align: center;\n  width: 100%;\n  white-space: normal;\n}\n.forgot {\n  color: #666;\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n  text-align: right;\n}\na, a:hover, a:visited {\n  color: #666;\n}\n.text-footer {\n  color: #808080;\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n  line-height: 44px;\n  margin-left: 15px;\n}\n"
    }),
    define("login", ["require", "underscore", "utils/constants", "text!views/login.html", "utils/jquery-amd", "text!stylesheets/login.css", "logger", "dialogv2", "runtime", "auth", "utils/browser-request"], function(e) {
        var t, n, i = e("underscore"), r = e("utils/constants"), a = i.template(e("text!views/login.html")), o = e("utils/jquery-amd"), s = e("text!stylesheets/login.css"), l = e("logger"), u = e("dialogv2"), c = e("runtime"), d = e("auth"), p = e("utils/browser-request");
        e(["registration"], function(e) {
            n = e
        });
        var f, h, g = function(e, n, i) {
            var a = {
                url: r.login_url,
                form: {
                    grant_type: "password",
                    client_id: c.getAppId(),
                    username: n || t("#email").val(),
                    password: i || t("#password").val()
                },
                json: !0
            };
            p.post(a, function(n, i, r) {
                if (n)
                    return e({
                        authResponse: null,
                        success: !1,
                        status: null
                    });
                if (r.error && t(".status").html(r.error).show(),
                r.access_token) {
                    t(".status").hide();
                    var a = {
                        success: !0,
                        result: "ok",
                        authResponse: {
                            access_token: r.access_token,
                            details: {},
                            expires_in: r.expires_in,
                            token_type: r.token_type
                        }
                    }
                      , o = d.storeLoginResponse(a);
                    e(o),
                    u.destroy()
                }
            })
        }, m = function(e) {
            l.addCall(),
            f = e;
            var t = function(t) {
                t && t.status && (h = t.status),
                "ok" == h ? (e({
                    success: !0,
                    status: h,
                    authResponse: c.getAuthResponse()
                }),
                u.destroy()) : "not_linked" == h ? e({
                    success: !0,
                    status: h,
                    authResponse: c.getAuthResponse()
                }) : "uncomplete" == h ? e({
                    success: !0,
                    status: h,
                    authResponse: c.getAuthResponse()
                }) : v(e)
            };
            d.fetchLoginStatus(t, t)
        }, v = function() {
            u.create(a),
            u.loadedCallback = function() {
                u.inlineStyle(s),
                t = o(u.window()),
                t(".btn-forgot").click(function() {
                    u.destroy();
                    var e = r.root_url + "/accounts/password/new";
                    window.open(e, "_blank")
                }),
                t(".btn-login").click(function() {
                    g(f)
                }),
                t("body").on("keydown", function(e) {
                    13 == e.keyCode && g(f)
                }),
                t(".register-link").click(function() {
                    n.createMenu(f)
                })
            }
        };
        return {
            login: m,
            loginRequest: g
        }
    }),
    define("text!views/registration.html", [], function() {
        return '<div class="white registration">\n  <div id="localization">\n    <div class="locale locale-click" id="locale">\n      <img src="<%= cdn %>/sdk/flags/<%= i18n.locale %>.png" alt="logo" width="16" height="11" class="locale-click">\n      <i class="arrow down locale-click"></i>\n    </div>\n    <div id="locale-dropdown">\n      <ul>\n        <% for (var i = 0; i < localeList.length; i++) { %>\n        <li class="locale-language">\n          <img src="<%= cdn %>/sdk/flags/<%= localeList[i] %>.png" alt="flag" width="16" height="11" id="localeList[i]" class="locale-language">\n          <span class="locale-language" id="<%= localeList[i] %>"><%= i18n.t(\'sdk.language.\' + localeList[i]) %></span>\n        </li>\n        <% } %>\n      </ul>\n    </div>\n  </div>\n\n  <div id="close" class="close">&times;</div>\n  <header>\n    <div>\n      <span>Registration</span>\n    </div>\n  </header>\n\n  <div class="error_explanation" style="display: none;">\n\n  </div>\n\n  <div class="content">\n    <div class="step1">\n      <% if (permissions.indexOf(\'nickname\') != -1) { %>\n        <div>\n          <label for="nickname">Nickname</label>\n        </div>\n        <div>\n          <input type="text" name="nickname" id="nickname" class="input" minlength="3" maxlength="34">\n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'first_name\') != -1) { %>\n        <div>\n          <label for="first_name">First name</label>\n        </div>\n        <div>\n          <input type="text" name="first_name" id="first_name" class="input" minlength="2">\n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'last_name\') != -1) { %>\n        <div>\n          <label for="last_name">Last name</label>\n        </div>\n        <div>\n          <input type="text" name="last_name" id="last_name" class="input" minlength="2">\n        </div>\n      <% } %>\n    </div>\n\n    <div class="step2">\n      <div>\n        <label for="email">Email</label>\n      </div>\n      <div>\n        <input type="email" name="email" id="email" class="input" maxlength="300" autocomplete="on">\n      </div>\n      <div>\n        <label for="password">Password</label>\n      </div>\n      <div>\n        <input type="password" name="password" id="password" class="input">\n      </div>\n    </div>\n\n    <% if (permissions.indexOf(\'gender\') != -1) { %>\n      <div class="step3">\n        <div class="row">\n          <input type="hidden" name="gender" id="gender">\n          <div class="female-side">\n            <div class="female-icon"></div>\n            Female\n          </div>\n          <div class="male-side">\n            <div class="male-icon"></div>\n            Male\n          </div>\n        </div>\n      </div>\n    <% } %>\n\n    <% if (permissions.indexOf(\'date_of_birth\') != -1) { %>\n      <div class="step4">\n        <div>\n          <label for="year">Date of Brith</label>\n        </div>\n        <div>\n          <select name="year" id="year">\n            <option value="">Year</option>\n            <% for(var i = new Date().getFullYear(); i > new Date().getFullYear() - 125 ; i--){ %>\n              <option value="<%= i %>"><%= i %></option>\n            <% } %>\n          </select>\n        </div>\n\n        <div>\n          <select name="month" id="month">\n            <option value="">Month</option>\n            <option value="1">January</option>\n            <option value="2">February</option>\n            <option value="3">March</option>\n            <option value="4">April</option>\n            <option value="5">May</option>\n            <option value="6">June</option>\n            <option value="7">July</option>\n            <option value="8">August</option>\n            <option value="9">September</option>\n            <option value="10">October</option>\n            <option value="11">November</option>\n            <option value="12">December</option>\n          </select>\n        </div>\n      </div>\n    <% } %>\n\n    <% if (permissions.indexOf(\'language\') != -1) { %>\n      <div class="step5">\n        <div>\n          <label for="language">Language</label>\n        </div>\n        <div>\n          <select name="language" id="language">\n            <option value=""></option>\n            <% for(var i = 0; i < languages.length; i++){ %>\n              <option value="<%= languages[i] %>"><%= languages[i] %></option>\n            <% } %>\n          </select>\n        </div>\n      </div>\n    <% } %>\n\n    <div class="step6">\n      <% if (permissions.indexOf(\'street_address\') != -1) { %>\n        <div>\n          <label for="street_address">Street Address</label>\n        </div>\n        <div>\n          <textarea rows="1" cols="24" name="street_address" id="street_address"></textarea> \n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'city\') != -1) { %>\n        <div>\n          <label for="city">City</label>\n        </div>\n        <div>\n          <input type="text" name="city" id="city" class="input">\n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'state_or_province\') != -1) { %>\n        <div>\n          <label for="state_or_province">State or province</label>\n        </div>\n        <div>\n          <input type="text" name="state_or_province" id="state_or_province" class="input">\n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'zipcode\') != -1) { %>\n        <div>\n          <label for="zipcode">Zipcode</label>\n        </div>\n        <div>\n          <input type="text" name="zipcode" id="zipcode" class="input">\n        </div>\n      <% } %>\n\n      <% if (permissions.indexOf(\'country\') != -1) { %>\n        <div>\n          <label for="country">Country</label>\n        </div>\n        <div>\n          <select name="country" id="country">\n            <option value="">Country</option>\n            <% for(var i = 0; i < countries.length; i++){ %>\n              <option value="<%= countries[i].code %>"><%= countries[i].name %></option>\n            <% } %>\n          </select>\n        </div>\n      <% } %>\n    </div>\n\n    <div class="navigation">\n      <div class="prev">\n        <img src="<%= cdn %>/sdk/registration/prev-button-grey-2x.png" class="prev-but nav-but" style="display: none">\n      </div>\n      <div class="step-count">•••</div>\n      <div class="next">\n        <img src="<%= cdn %>/sdk/registration/next-button-red-2x.png" class="norm nav-but" style="display: none">\n        <img src="<%= cdn %>/sdk/registration/next-button-red-2x.png" class="next-disabled nav-but" style="display: none">\n        <img src="<%= cdn %>/sdk/registration/finish-button-green-2x.png" class="finish nav-but" style="display: none">\n        <img src="<%= cdn %>/sdk/registration/finish-button-green-2x.png" class="finish-disabled nav-but" style="display: none">\n      </div>\n    </div>\n  </div>\n\n\n  <footer>\n    <div class="footer footer-normal">\n      <div class="text-footer ">\n        Already have an account? <a href="" class="login-link">Login</a>\n      </div>\n      <img src="<%= cdn %>/sdk/logo/y8-account-logo.png" class="logo" alt="logo" width="45" height="32">\n    </div>\n\n    <div class="footer terms footer-terms" style="display: none;">\n      <div class="text-footer">\n        Clicking finish indicates you are able, have read, and agree to the\n        <a href="" class="terms-link">Terms</a> and <a href="" class="privacy-link">Privacy</a>.\n      </div>\n    </div>\n  </footer>\n</div>\n'
    }),
    define("text!stylesheets/registration.css", [], function() {
        return ".registration {\n  width: 440px;\n}\nheader {\n  padding-bottom: 20px;\n}\n.content {\n  width: 300px;\n  margin: auto;\n}\nselect, textarea, input {\n  border-radius: 3px;\n  background-color: #f3f3f3;\n  border: 0;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 2px 0 10px;\n  padding: 8px;\n  width: 300px;\n}\nselect:focus, textarea:focus, input:focus {\n  font-weight: bold;\n}\nselect {\n  height: 31px;\n  line-height: 31px;\n}\nlabel {\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n}\na, a:hover, a:visited {\n  color: #666;\n}\n.text-footer {\n  color: #808080;\n  font-size: 11px;\n  font-weight: bold;\n  text-rendering: optimizeLegibility;\n  margin: 15px;\n}\n.navigation {\n  height: 50px;\n  margin: 15px auto;\n  position: relative;\n  text-align: center;\n  user-select: none;\n  width: $content-width;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n}\n.step-count {\n  cursor: default;\n  display: inline-block;\n  margin: 3px 10px 0;\n  z-index: 2;\n}\n.prev {\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n.prev img {\n  height: 36px;\n  width: auto;\n}\n.next {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n.next img {\n  height: 36px;\n  width: auto;\n}\n.next-disabled,\n.finish-disabled {\n  opacity: .5;\n  cursor: default !important;\n}\n.nav-but {\n  cursor: pointer;\n}\n.dot {\n  font-size: 30px;\n  line-height: 29px;\n  margin-right: 5px;\n}\n.dot:last-child {\n  margin-right: 0;\n}\n.dot-blue {\n  color: #f26565;\n  font-size: 30px;\n  line-height: 29px;\n  margin-right: 5px;\n}\n.error_explanation {\n  color: #df890a;\n  background: #fff3d5;\n  font-size: 15px;\n  padding: 10px;\n  display: none;\n  margin: 10px 0;\n}\n.female-side {\n  cursor: pointer;\n  display: inline-block;\n  margin: 20px 50px 20px 65px;\n  text-align: center;\n}\n.female-side .female-icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto;\n  background-position: 0 0;\n}\n.female-icon .active {\n  background-position: -56px 0;\n}\n.male-side {\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n}\n.male-side .male-icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto;\n  background-position: -112px 0;\n}\n.male-icon .active {\n  background-position: -168px 0;\n}\n.terms {\n  text-align: center;\n  display: inline-block;\n  margin: 4px;\n  font-size: 12px;\n}\n"
    }),
    define("registration", ["require", "logger", "dialogv2", "runtime", "auth", "options", "utils/browser-request", "underscore", "utils/constants", "text!views/registration.html", "utils/jquery-amd", "text!stylesheets/registration.css"], function(e) {
        var t, n = e("logger"), i = e("dialogv2"), r = e("runtime"), a = (e("auth"),
        e("options")), o = e("utils/browser-request");
        e(["login"], function(e) {
            t = e
        });
        var s, l, u = 1, c = !1, d = [], p = {}, f = e("underscore"), h = e("utils/constants"), g = f.template(e("text!views/registration.html")), m = e("utils/jquery-amd"), v = e("text!stylesheets/registration.css"), y = function() {
            w();
            var e = {
                url: h.registration_url,
                body: {
                    client_id: r.getAppId(),
                    redirect_uri: r.getRedirectUri(),
                    response_type: r.getDefaultResponseType(),
                    email: l("#email").val(),
                    password: l("#password").val(),
                    terms_of_service: "1",
                    meta: {}
                },
                json: !0
            };
            if (T("nickname") && (e.body.meta.nickname = l("#nickname").val()),
            T("first_name") && (e.body.meta.first_name = l("#first_name").val()),
            T("last_name") && (e.body.meta.last_name = l("#last_name").val()),
            T("gender") && (e.body.meta.gender = l("#gender").val()),
            T("date_of_birth")) {
                var n = "" + l("#year").val() + "-" + l("#month").val() + "-1";
                e.body.meta.date_of_birth = n
            }
            T("language") && (e.body.meta.language = l("#language").val()),
            T("street_address") && (e.body.meta.street_address = l("#street_address").val()),
            T("city") && (e.body.meta.city = l("#city").val()),
            T("state_or_province") && (e.body.meta.state_or_province = l("#state_or_province").val()),
            T("zipcode") && (e.body.meta.zipcode = l("#zipcode").val()),
            T("country") && (e.body.meta.country = l("#country").val()),
            o.post(e, function(e, n, r) {
                if (r.error && b(r.error),
                r.errors)
                    for (var a in r.errors)
                        b(a + " " + r.errors[a]),
                        ("nickname" == a || "first_name" == a || "last_name" == a) && k(1),
                        ("email" == a || "password" == a) && k(2);
                r.success && (i.destroy(),
                t.loginRequest(callback, l("#email").val(), l("#password").val()))
            })
        }, b = function(e) {
            w(),
            l(".error_explanation").show(),
            l(".error_explanation").html(e),
            i.centerResize()
        }, w = function() {
            l(".error_explanation").hide(),
            l(".error_explanation").html("")
        }, k = function(e) {
            u = e,
            d = A(),
            S(),
            x(),
            l(".step" + e).show()
        }, x = function() {
            l(".step1").hide(),
            l(".step2").hide(),
            l(".step3").hide(),
            l(".step4").hide(),
            l(".step5").hide(),
            l(".step6").hide()
        };
        p.step1 = function() {
            var e = T("generated_nickname") || !T("nickname") || l("#nickname").val().length > 2
              , t = !T("first_name") || l("#first_name").val().length > 1
              , n = !T("last_name") || l("#last_name").val().length > 1;
            return e && t && n
        }
        ,
        p.step2 = function() {
            var e = E(l("#email").val())
              , t = l("#password").val().length >= 6;
            return e && t
        }
        ,
        p.step3 = function() {
            return "" != l("#gender").val()
        }
        ,
        p.step4 = function() {
            var e = "" != l("#year").val()
              , t = "" != l("#month").val();
            return e & t
        }
        ,
        p.step5 = function() {
            return "" != l("#language").val()
        }
        ,
        p.step6 = function() {
            var e = !T("street_address") || "" != l("#street_address").val()
              , t = !T("city") || "" != l("#city").val()
              , n = !T("state_or_province") || "" != l("#state_or_province").val()
              , i = !T("zipcode") || "" != l("#zipcode").val()
              , r = !T("country") || "" != l("#country").val();
            return e && t && n && i && r
        }
        ;
        var _ = function() {
            c = p[d[u - 1]](),
            c ? (l(".norm").show(),
            l(".next-disabled").hide(),
            l(".finish").hide(),
            l(".finish-disabled").hide(),
            u == d.length && (l(".norm").hide(),
            l(".finish").show())) : (l(".next-disabled").show(),
            l(".norm").hide(),
            l(".finish").hide(),
            l(".finish-disabled").hide(),
            u == d.length && (l(".next-disabled").hide(),
            l(".finish-disabled").show())),
            u > 1 ? l(".prev-but").show() : l(".prev-but").hide()
        }
          , T = function(e) {
            return -1 != s.indexOf(e)
        }
          , A = function() {
            var e = ["step1", "step2"];
            T("gender") && e.push("step3"),
            T("date_of_birth") && e.push("step4"),
            T("language") && e.push("step5");
            var t = T("street_address") || T("state_or_province") || T("city") || T("zipcode") || T("country");
            return t && e.push("step6"),
            e
        }
          , S = function() {
            l(".step-count").html("");
            for (var e = 0; e < d.length; e++)
                l(".step-count").append(e + 1 == u ? '<span class="dot-blue">&bull;</span>' : '<span class="dot">&bull;</span>')
        }
          , E = function(e) {
            var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
            return t.test(e)
        }
          , C = function() {
            l(".female-icon").css("background-image", 'url("' + h.cdnUrl + '/sdk/registration/gender-sheet.png")'),
            l(".male-icon").css("background-image", 'url("' + h.cdnUrl + '/sdk/registration/gender-sheet.png")')
        }
          , R = function(e) {
            s = a.get.permissions;
            var r = {
                permissions: s,
                languages: h.languages
            };
            i.create(g, null, r),
            i.loadedCallback = function() {
                i.inlineStyle(v),
                l = m(i.window()),
                n.addCall(),
                k(1),
                C();
                var r = setInterval(_, 100);
                i.unloadedCallback = function() {
                    clearInterval(r)
                }
                ,
                l(".prev").click(function() {
                    x(),
                    u--,
                    l(".step" + u).show(),
                    S(),
                    u != d.length && (l(".footer-terms").hide(),
                    l(".footer-normal").show()),
                    i.centerResize()
                }),
                l(".next").click(function() {
                    c && (w(),
                    u < d.length && (x(),
                    u++,
                    l(".step" + u).show(),
                    S(),
                    u == d.length && (l(".footer-terms").show(),
                    l(".footer-normal").hide()),
                    i.centerResize()))
                }),
                l("body").on("keydown", function(e) {
                    13 == e.keyCode && (u == d.length ? l(".finish").trigger("click") : l(".next").trigger("click"),
                    e.preventDefault())
                }),
                l(".terms-link").click(function() {
                    window.open(h.terms_url, "_blank")
                }),
                l(".privacy-link").click(function() {
                    window.open(h.privacy_url, "_blank")
                }),
                l(".login-link").click(function() {
                    i.destroy(),
                    t.login(e)
                }),
                l(".male-icon").click(function() {
                    l(".male-icon").css("background-position", "-168px 0"),
                    l(".female-icon").css("background-position", "0 0"),
                    l("#gender").val("male")
                }),
                l(".female-icon").click(function() {
                    l(".male-icon").css("background-position", "-112px 0"),
                    l(".female-icon").css("background-position", "-56px 0"),
                    l("#gender").val("female")
                }),
                l("#nickname").blur(function() {
                    l("#nickname").val().length < 3 ? b("<li>Nickname must be 3 or more letters</li>") : w()
                }),
                l("#first_name").blur(function() {
                    l("#first_name").val().length < 2 ? b("<li>First name must have at least 2 letters</li>") : w()
                }),
                l("#last_name").blur(function() {
                    l("#last_name").val().length < 2 ? b("<li>Last name must have at least 2 letters</li>") : w()
                }),
                l("#password").blur(function() {
                    l("#password").val().length < 5 ? b("<li>Password must be 6 or more long</li>") : w()
                }),
                l(".finish").click(function() {
                    c && y()
                })
            }
        };
        return {
            setFlowStep: k,
            createMenu: R
        }
    }),
    define("dialogs_manager", ["underscore", "utils/constants", "utils/wrapper", "runtime", "sdk/ui", "rpc"], function(e, t, n, i, r, a) {
        var o = function(e) {
            return t.root_url + "/dialogs/" + e
        }
          , s = {
            open: function(t, n, a) {
                switch (t = t || {},
                t.app_id = i.getAppId(),
                t.method) {
                case "apprequests":
                    r.createIframeDialog(n, a, o("app_requests/new"), e.pick(t, "message", "redirect_uri", "data", "app_id", "to"));
                    break;
                case "friends":
                    r.createIframeDialog(n, a, o("friends/new"), e.pick(t, "redirect_uri", "app_id", "id"));
                    break;
                case "leaderboard":
                    r.createIframeDialog(n, a, o("leaderboard"), e.pick(t, "redirect_uri", "app_id"));
                    break;
                case "points_leaderboard":
                    r.createIframeDialog(n, a, o("leaderboard/points"), t)
                }
            }
        };
        return a.events["dialog.finished"] = function(e) {
            var t = r.getDialog(e.dialog_id);
            t.inform("dialog.finished", null),
            t.call(e.data)
        }
        ,
        a.events["dialog.error"] = function(e) {
            var t = r.getDialog(e.dialog_id);
            t.inform("dialog.error", null),
            t.error(e.error, e.data)
        }
        ,
        a.events["dialog.resize"] = function(e) {
            var t = r.getDialog(e.dialog_id);
            t.inform("dialog.resize", e.width, e.height, e.overflow),
            t.contentWidth = e.width,
            t.contentHeight = e.height,
            r.centerDialog(t)
        }
        ,
        s
    }),
    define("app_image", ["sdk/api"], function(e) {
        return {
            submit: function(t, n) {
                e.api("/profile/app_image", "POST", {
                    picture: t
                }, function(e) {
                    n && n(e)
                })
            }
        }
    }),
    function(e) {
        function t(e, t, n) {
            var u, c, d, p, f, h, g, m, v, y = 0, k = [], x = 0, _ = !1, T = [], A = [], S = !1;
            if (n = n || {},
            u = n.encoding || "UTF8",
            v = n.numRounds || 1,
            v !== parseInt(v, 10) || 1 > v)
                throw Error("numRounds must a integer >= 1");
            if (0 !== e.lastIndexOf("SHA-", 0))
                throw Error("Chosen SHA variant is not supported");
            if (h = function(t, n) {
                return w(t, n, e)
            }
            ,
            g = function(t, n, i, r) {
                var a, o;
                if ("SHA-224" !== e && "SHA-256" !== e)
                    throw Error("Unexpected error in SHA-2 implementation");
                for (a = (n + 65 >>> 9 << 4) + 15,
                o = 16; t.length <= a; )
                    t.push(0);
                for (t[n >>> 5] |= 128 << 24 - n % 32,
                n += i,
                t[a] = 4294967295 & n,
                t[a - 1] = n / 4294967296 | 0,
                i = t.length,
                n = 0; i > n; n += o)
                    r = w(t.slice(n, n + o), r, e);
                if ("SHA-224" === e)
                    t = [r[0], r[1], r[2], r[3], r[4], r[5], r[6]];
                else {
                    if ("SHA-256" !== e)
                        throw Error("Unexpected error in SHA-2 implementation");
                    t = r
                }
                return t
            }
            ,
            m = function(e) {
                return e.slice()
            }
            ,
            "SHA-224" === e)
                f = 512,
                p = 224;
            else {
                if ("SHA-256" !== e)
                    throw Error("Chosen SHA variant is not supported");
                f = 512,
                p = 256
            }
            d = l(t, u),
            c = b(e),
            this.setHMACKey = function(t, n, i) {
                var r;
                if (!0 === _)
                    throw Error("HMAC key already set");
                if (!0 === S)
                    throw Error("Cannot set HMAC key after calling update");
                if (u = (i || {}).encoding || "UTF8",
                n = l(n, u)(t),
                t = n.binLen,
                n = n.value,
                r = f >>> 3,
                i = r / 4 - 1,
                t / 8 > r) {
                    for (n = g(n, t, 0, b(e)); n.length <= i; )
                        n.push(0);
                    n[i] &= 4294967040
                } else if (r > t / 8) {
                    for (; n.length <= i; )
                        n.push(0);
                    n[i] &= 4294967040
                }
                for (t = 0; i >= t; t += 1)
                    T[t] = 909522486 ^ n[t],
                    A[t] = 1549556828 ^ n[t];
                c = h(T, c),
                y = f,
                _ = !0
            }
            ,
            this.update = function(e) {
                var t, n, i, r = 0, a = f >>> 5;
                for (t = d(e, k, x),
                e = t.binLen,
                n = t.value,
                t = e >>> 5,
                i = 0; t > i; i += a)
                    e >= r + f && (c = h(n.slice(i, i + a), c),
                    r += f);
                y += r,
                k = n.slice(r >>> 5),
                x = e % f,
                S = !0
            }
            ,
            this.getHash = function(t, n) {
                var l, u, d, f;
                if (!0 === _)
                    throw Error("Cannot call getHash after setting HMAC key");
                switch (d = s(n),
                t) {
                case "HEX":
                    l = function(e) {
                        return i(e, p, d)
                    }
                    ;
                    break;
                case "B64":
                    l = function(e) {
                        return r(e, p, d)
                    }
                    ;
                    break;
                case "BYTES":
                    l = function(e) {
                        return a(e, p)
                    }
                    ;
                    break;
                case "ARRAYBUFFER":
                    try {
                        u = new ArrayBuffer(0)
                    } catch (h) {
                        throw Error("ARRAYBUFFER not supported by this environment")
                    }
                    l = function(e) {
                        return o(e, p)
                    }
                    ;
                    break;
                default:
                    throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
                }
                for (f = g(k.slice(), x, y, m(c)),
                u = 1; v > u; u += 1)
                    f = g(f, p, 0, b(e));
                return l(f)
            }
            ,
            this.getHMAC = function(t, n) {
                var l, u, d, v;
                if (!1 === _)
                    throw Error("Cannot call getHMAC without first setting HMAC key");
                switch (d = s(n),
                t) {
                case "HEX":
                    l = function(e) {
                        return i(e, p, d)
                    }
                    ;
                    break;
                case "B64":
                    l = function(e) {
                        return r(e, p, d)
                    }
                    ;
                    break;
                case "BYTES":
                    l = function(e) {
                        return a(e, p)
                    }
                    ;
                    break;
                case "ARRAYBUFFER":
                    try {
                        l = new ArrayBuffer(0)
                    } catch (w) {
                        throw Error("ARRAYBUFFER not supported by this environment")
                    }
                    l = function(e) {
                        return o(e, p)
                    }
                    ;
                    break;
                default:
                    throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
                }
                return u = g(k.slice(), x, y, m(c)),
                v = h(A, b(e)),
                v = g(u, p, f, v),
                l(v)
            }
        }
        function n() {}
        function i(e, t, n) {
            var i = "";
            t /= 8;
            var r, a;
            for (r = 0; t > r; r += 1)
                a = e[r >>> 2] >>> 8 * (3 + r % 4 * -1),
                i += "0123456789abcdef".charAt(a >>> 4 & 15) + "0123456789abcdef".charAt(15 & a);
            return n.outputUpper ? i.toUpperCase() : i
        }
        function r(e, t, n) {
            var i, r, a, o = "", s = t / 8;
            for (i = 0; s > i; i += 3)
                for (r = s > i + 1 ? e[i + 1 >>> 2] : 0,
                a = s > i + 2 ? e[i + 2 >>> 2] : 0,
                a = (e[i >>> 2] >>> 8 * (3 + i % 4 * -1) & 255) << 16 | (r >>> 8 * (3 + (i + 1) % 4 * -1) & 255) << 8 | a >>> 8 * (3 + (i + 2) % 4 * -1) & 255,
                r = 0; 4 > r; r += 1)
                    o += t >= 8 * i + 6 * r ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - r) & 63) : n.b64Pad;
            return o
        }
        function a(e, t) {
            var n, i, r = "", a = t / 8;
            for (n = 0; a > n; n += 1)
                i = e[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255,
                r += String.fromCharCode(i);
            return r
        }
        function o(e, t) {
            var n, i, r = t / 8, a = new ArrayBuffer(r);
            for (i = new Uint8Array(a),
            n = 0; r > n; n += 1)
                i[n] = e[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255;
            return a
        }
        function s(e) {
            var t = {
                outputUpper: !1,
                b64Pad: "=",
                shakeLen: -1
            };
            if (e = e || {},
            t.outputUpper = e.outputUpper || !1,
            !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad),
            "boolean" != typeof t.outputUpper)
                throw Error("Invalid outputUpper formatting option");
            if ("string" != typeof t.b64Pad)
                throw Error("Invalid b64Pad formatting option");
            return t
        }
        function l(e, t) {
            var n;
            switch (t) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
            }
            switch (e) {
            case "HEX":
                n = function(e, t, n) {
                    var i, r, a, o, s, l = e.length;
                    if (0 !== l % 2)
                        throw Error("String of HEX type must be in byte increments");
                    for (t = t || [0],
                    n = n || 0,
                    s = n >>> 3,
                    i = 0; l > i; i += 2) {
                        if (r = parseInt(e.substr(i, 2), 16),
                        isNaN(r))
                            throw Error("String of HEX type contains invalid characters");
                        for (o = (i >>> 1) + s,
                        a = o >>> 2; t.length <= a; )
                            t.push(0);
                        t[a] |= r << 8 * (3 + o % 4 * -1)
                    }
                    return {
                        value: t,
                        binLen: 4 * l + n
                    }
                }
                ;
                break;
            case "TEXT":
                n = function(e, n, i) {
                    var r, a, o, s, l, u, c, d, p = 0;
                    if (n = n || [0],
                    i = i || 0,
                    l = i >>> 3,
                    "UTF8" === t)
                        for (d = 3,
                        o = 0; o < e.length; o += 1)
                            for (r = e.charCodeAt(o),
                            a = [],
                            128 > r ? a.push(r) : 2048 > r ? (a.push(192 | r >>> 6),
                            a.push(128 | 63 & r)) : 55296 > r || r >= 57344 ? a.push(224 | r >>> 12, 128 | r >>> 6 & 63, 128 | 63 & r) : (o += 1,
                            r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(o)),
                            a.push(240 | r >>> 18, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r)),
                            s = 0; s < a.length; s += 1) {
                                for (c = p + l,
                                u = c >>> 2; n.length <= u; )
                                    n.push(0);
                                n[u] |= a[s] << 8 * (d + c % 4 * -1),
                                p += 1
                            }
                    else if ("UTF16BE" === t || "UTF16LE" === t)
                        for (d = 2,
                        a = "UTF16LE" === t && !0 || "UTF16LE" !== t && !1,
                        o = 0; o < e.length; o += 1) {
                            for (r = e.charCodeAt(o),
                            !0 === a && (s = 255 & r,
                            r = s << 8 | r >>> 8),
                            c = p + l,
                            u = c >>> 2; n.length <= u; )
                                n.push(0);
                            n[u] |= r << 8 * (d + c % 4 * -1),
                            p += 2
                        }
                    return {
                        value: n,
                        binLen: 8 * p + i
                    }
                }
                ;
                break;
            case "B64":
                n = function(e, t, n) {
                    var i, r, a, o, s, l, u, c = 0;
                    if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/))
                        throw Error("Invalid character in base-64 string");
                    if (r = e.indexOf("="),
                    e = e.replace(/\=/g, ""),
                    -1 !== r && r < e.length)
                        throw Error("Invalid '=' found in base-64 string");
                    for (t = t || [0],
                    n = n || 0,
                    l = n >>> 3,
                    r = 0; r < e.length; r += 4) {
                        for (s = e.substr(r, 4),
                        a = o = 0; a < s.length; a += 1)
                            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(s[a]),
                            o |= i << 18 - 6 * a;
                        for (a = 0; a < s.length - 1; a += 1) {
                            for (u = c + l,
                            i = u >>> 2; t.length <= i; )
                                t.push(0);
                            t[i] |= (o >>> 16 - 8 * a & 255) << 8 * (3 + u % 4 * -1),
                            c += 1
                        }
                    }
                    return {
                        value: t,
                        binLen: 8 * c + n
                    }
                }
                ;
                break;
            case "BYTES":
                n = function(e, t, n) {
                    var i, r, a, o, s;
                    for (t = t || [0],
                    n = n || 0,
                    a = n >>> 3,
                    r = 0; r < e.length; r += 1)
                        i = e.charCodeAt(r),
                        s = r + a,
                        o = s >>> 2,
                        t.length <= o && t.push(0),
                        t[o] |= i << 8 * (3 + s % 4 * -1);
                    return {
                        value: t,
                        binLen: 8 * e.length + n
                    }
                }
                ;
                break;
            case "ARRAYBUFFER":
                try {
                    n = new ArrayBuffer(0)
                } catch (i) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                n = function(e, t, n) {
                    var i, r, a, o, s;
                    for (t = t || [0],
                    n = n || 0,
                    r = n >>> 3,
                    s = new Uint8Array(e),
                    i = 0; i < e.byteLength; i += 1)
                        o = i + r,
                        a = o >>> 2,
                        t.length <= a && t.push(0),
                        t[a] |= s[i] << 8 * (3 + o % 4 * -1);
                    return {
                        value: t,
                        binLen: 8 * e.byteLength + n
                    }
                }
                ;
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
            }
            return n
        }
        function u(e, t) {
            return e >>> t | e << 32 - t
        }
        function c(e, t, n) {
            return e & t ^ ~e & n
        }
        function d(e, t, n) {
            return e & t ^ e & n ^ t & n
        }
        function p(e) {
            return u(e, 2) ^ u(e, 13) ^ u(e, 22)
        }
        function f(e) {
            return u(e, 6) ^ u(e, 11) ^ u(e, 25)
        }
        function h(e) {
            return u(e, 7) ^ u(e, 18) ^ e >>> 3
        }
        function g(e) {
            return u(e, 17) ^ u(e, 19) ^ e >>> 10
        }
        function m(e, t) {
            var n = (65535 & e) + (65535 & t);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) & 65535) << 16 | 65535 & n
        }
        function v(e, t, n, i) {
            var r = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & i);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (i >>> 16) + (r >>> 16) & 65535) << 16 | 65535 & r
        }
        function y(e, t, n, i, r) {
            var a = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & i) + (65535 & r);
            return ((e >>> 16) + (t >>> 16) + (n >>> 16) + (i >>> 16) + (r >>> 16) + (a >>> 16) & 65535) << 16 | 65535 & a
        }
        function b(e) {
            var t, i = [];
            if (0 !== e.lastIndexOf("SHA-", 0))
                throw Error("No SHA variants supported");
            switch (i = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
            t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            e) {
            case "SHA-224":
                break;
            case "SHA-256":
                i = t;
                break;
            case "SHA-384":
                i = [new n, new n, new n, new n, new n, new n, new n, new n];
                break;
            case "SHA-512":
                i = [new n, new n, new n, new n, new n, new n, new n, new n];
                break;
            default:
                throw Error("Unknown SHA variant")
            }
            return i
        }
        function w(e, t, n) {
            var i, r, a, o, s, l, u, b, w, x, _, T, A, S, E, C, R, N, j, L, O, M, D, P = [];
            if ("SHA-224" !== n && "SHA-256" !== n)
                throw Error("Unexpected error in SHA-2 implementation");
            for (x = 64,
            T = 1,
            M = Number,
            A = m,
            S = v,
            E = y,
            C = h,
            R = g,
            N = p,
            j = f,
            O = d,
            L = c,
            D = k,
            n = t[0],
            i = t[1],
            r = t[2],
            a = t[3],
            o = t[4],
            s = t[5],
            l = t[6],
            u = t[7],
            _ = 0; x > _; _ += 1)
                16 > _ ? (w = _ * T,
                b = e.length <= w ? 0 : e[w],
                w = e.length <= w + 1 ? 0 : e[w + 1],
                P[_] = new M(b,w)) : P[_] = S(R(P[_ - 2]), P[_ - 7], C(P[_ - 15]), P[_ - 16]),
                b = E(u, j(o), L(o, s, l), D[_], P[_]),
                w = A(N(n), O(n, i, r)),
                u = l,
                l = s,
                s = o,
                o = A(a, b),
                a = r,
                r = i,
                i = n,
                n = A(b, w);
            return t[0] = A(n, t[0]),
            t[1] = A(i, t[1]),
            t[2] = A(r, t[2]),
            t[3] = A(a, t[3]),
            t[4] = A(o, t[4]),
            t[5] = A(s, t[5]),
            t[6] = A(l, t[6]),
            t[7] = A(u, t[7]),
            t
        }
        var k;
        k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        "function" == typeof define && define.amd ? define("utils/jssha", [], function() {
            return t
        }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = t),
        exports = t) : e.jsSHA = t
    }(this),
    define("playtomic_helper", ["require", "utils/jssha", "logger", "runtime", "dialogs_manager", "utils/constants"], function(e) {
        function t(e, t) {
            return {
                success: e,
                errorcode: t
            }
        }
        function n(e) {
            return e && "http:" == window.location.protocol && -1 != e.search("https") && (e = e.split("https").join("http")),
            e
        }
        var i = e("utils/jssha")
          , r = e("logger")
          , a = e("runtime")
          , o = (e("dialogs_manager"),
        e("utils/constants"))
          , s = ""
          , l = !1
          , u = !1
          , c = {}
          , d = {
            loaded: l,
            apiurl: n(o.playtomic_url),
            init: function(e, t, n) {
                if (l)
                    return void (n && "function" == typeof n && n(c.data, c.response));
                var i = function(e, t, n, i) {
                    return i.success ? (c.data = n,
                    c.response = i,
                    l = !0,
                    s = n.appsession,
                    u && r.log("playtomic init"),
                    void (e && "function" == typeof e && e(n, i))) : void (e && "function" == typeof e && e(n, i))
                };
                d.sendAPIRequest("init", "start", i, n, null)
            },
            sendAPIRequest: function(e, n, o, l, u) {
                var c = this;
                u = u || {},
                u.section = e,
                u.action = n,
                u.appid || (u.appid = a.getAppId(),
                "init" != e && !this.loaded && this.debug && r.log("init has yet to be called, trying to send anyway"));
                var d = JSON.stringify(u)
                  , p = new i("SHA-256","TEXT");
                p.update(d + s);
                var f = p.getHash("HEX");
                f = f.substring(0, 20);
                var h = this.apiurl + "?hash=" + f
                  , g = d
                  , m = new XMLHttpRequest;
                m.onerror = function() {
                    o(l, u, {}, t(!1, 1))
                }
                ,
                m.onload = function() {
                    c.debug && r.log(m.responseText);
                    var e = JSON.parse(m.responseText);
                    o(l, u, e, t(e.success, e.errorcode))
                }
                
                //m.open("POST", h, !0),
                //m.send(g)
                var e = JSON.parse('{"appsession":"2b8f3125c2f5fcc029e5","appname":"Slope Y8","tos":null,"privacy":null,"link":"https://slopgame.online","errorcode":0,"success":true}');
                o(l, u, e, t(e.success, e.errorcode))
            },
            requestForwarder: function(e, t, n, r) {
                r = r || {},
                r.section = e,
                r.action = t,
                r.appid = a.getAppId();
                var l = JSON.stringify(r)
                  , u = new i("SHA-256","TEXT");
                u.update(l + s);
                var c = u.getHash("HEX");
                c = c.substring(0, 20);
                o.playtomic_url + "?hash=" + c;
                n && n(c, l)
            }
        };
        return d
    }),
    define("text!views/leaderboard.html", [], function() {
        return '<div class="white leaderboard">\n  <div id="localization">\n    <div class="locale locale-click" id="locale">\n      <img src="<%= cdn %>/sdk/flags/<%= i18n.locale %>.png" alt="logo" width="16" height="11" class="locale-click">\n      <i class="arrow down locale-click"></i>\n    </div>\n    <div id="locale-dropdown">\n      <ul>\n        <% for (var i = 0; i < localeList.length; i++) { %>\n        <li class="locale-language">\n          <img src="<%= cdn %>/sdk/flags/<%= localeList[i] %>.png" alt="flag" width="16" height="11" id="localeList[i]" class="locale-language">\n          <span class="locale-language" id="<%= localeList[i] %>"><%= i18n.t(\'sdk.language.\' + localeList[i]) %></span>\n        </li>\n        <% } %>\n      </ul>\n    </div>\n  </div>\n  <div id="close" class="close">&times;</div>\n  <header>\n    <div class="sixteen columns pl15">\n      <span><%= i18n.t(\'sdk.default_table_title\') %></span>\n    </div>\n  </header>\n  <div class="butwrap">\n    <div class="modebut alltime">\n      <%= i18n.t(\'sdk.playtomic.alltime\') %>\n    </div>\n    <div class="modebut last30days">\n      <%= i18n.t(\'sdk.playtomic.thirty_days\') %>\n    </div>\n    <div class="modebut last7days">\n      <%= i18n.t(\'sdk.playtomic.seven_days\') %>\n    </div>\n    <div class="modebut newest">\n      <%= i18n.t(\'sdk.playtomic.newest\') %>\n    </div>\n  </div>\n  <div class="nopadding playerscore">\n    <span class="gray pmsg">\n      <%= i18n.t(\'sdk.playtomic.personal_best\') %>\n    </span>\n    <span class="blueish pscore"></span>\n    <a href="#" class="regbut success button medium padding40 radius"><%= i18n.t(\'sdk.playtomic.new_account\') %></a>\n  </div>\n  <div class="scores"></div>\n\n  <footer>\n    <div class="pagination">\n      <img src="<%= cdn %>/sdk/advanced_scores/left-arrow.png" alt="left arrow" class="left-arrow">\n      <div class="page">Page 99</div>\n      <img src="<%= cdn %>/sdk/advanced_scores/right-arrow.png" alt="right arrow" class="right-arrow">\n    </div>\n\n    <img src="<%= cdn %>/sdk/logo/y8-account-logo.png" alt="logo" class="logo" width="45" height="32">\n  </footer>\n</div>\n'
    }),
    define("text!stylesheets/leaderboard.css", [], function() {
        return ".gray {\n  color: #999;\n}\n.lightgray {\n  color: #afafaf;\n}\n.blackish {\n  color: #333;\n}\n.blueish,\n.blueish a:link,\n.blueish a:visited,\n.blueish a:hover,\n.blueish a:active {\n  color: #335ea7;\n  text-decoration: none;\n}\n.leaderboard {\n  width: 400px;\n}\n.butwrap {\n  width: 100%;\n  height: 50px;\n}\n.modebut {\n  width: 21%;\n  margin: 2%;\n  height: 30px;\n  background: #335ea7;\n  float: left;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  font-weight: bold;\n}\n.activebut {\n  background: #390;\n}\n.scores {\n  padding: 5px 0 10px 15px;\n}\n.pagination {\n  padding: 8px 0 0;\n  width: 142px;\n  margin: auto;\n  overflow: hidden;\n}\n.pagination img {\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  float: left;\n}\n.page {\n  padding: 0 12px;\n  left: 28px;\n  right: 28px;\n  font-size: 15px;\n  line-height: 30px;\n  text-align: center;\n  float: left;\n}\n.toprow {\n  margin: 0 0 4px;\n}\n.scoreitem {\n  padding: 2px 0;\n  font-weight: bold;\n  height: 18px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.fullcap {\n  text-transform: uppercase;\n}\n.hidetext {\n  overflow: hidden;\n}\n.nopadding {\n  padding: 0;\n}\n.playerscore {\n  font-size: 18px;\n  text-align: center;\n  padding: 10px;\n  font-weight: bold;\n}\n.regbut {\n  display: none;\n}\n.numcol {\n  width: 8%;\n  float: left;\n}\n.namecol {\n  width: 36%;\n  float: left;\n}\n.scorecol {\n  width: 24%;\n  float: left;\n}\n.datecol {\n  width: 30%;\n  float: left;\n}\n"
    }),
    define("leaderboard", ["require", "underscore", "playtomic_helper", "logger", "dialogv2", "utils/constants", "runtime", "text!views/leaderboard.html", "utils/jquery-amd", "text!stylesheets/leaderboard.css"], function(e) {
        var t, n, i, r, a, o = e("underscore"), s = e("playtomic_helper"), l = (e("logger"),
        e("dialogv2")), u = e("utils/constants"), c = e("runtime"), d = o.template(e("text!views/leaderboard.html")), p = e("utils/jquery-amd"), f = e("text!stylesheets/leaderboard.css"), h = 1, g = function(e, r, a) {
            try {
                i = a.scores,
                n = a.mode,
                v(r.page, a.numscores, i.length),
                t(".modebut").removeClass("activebut"),
                t("." + a.mode).addClass("activebut"),
                i.length > 0 && t(".head").html("&nbsp;" + i[0].table),
                t(".scores").html("");
                for (var o = 0; o < i.length; o++) {
                    if (r.useMilli)
                        var s = w(i[o].points);
                    else
                        var s = i[o].points;
                    t(".scores").append('<div class="scoreitem blackish"><div class="numcol hidetext nopadding">' + i[o].rank + '.</div><div class="namecol blueish hidetext nopadding">  <a href="' + u.root_url + "/profiles/" + i[o].playerid + '" target="_blank">' + i[o].playername + '</a></div><div class="scorecol hidetext nopadding">' + s + '</div><div class="datecol lightgray fullcap hidetext nopadding">' + i[o].rdate + "</div></div>")
                }
                l.centerResize()
            } catch (c) {
                console.log(c),
                l.destroy()
            }
        }, m = function(e, n, i) {
            t(".pscore").html(i.hasOwnProperty("scores") && i.scores.length > 0 ? n.useMilli ? w(i.scores[0].points) : i.scores[0].points : "none yet")
        }, v = function(e, n, i) {
            t(".left-arrow").css("visibility", "visible"),
            t(".right-arrow").css("visibility", "visible"),
            1 == e && t(".left-arrow").css("visibility", "hidden"),
            10 * e >= n && t(".right-arrow").css("visibility", "hidden"),
            10 == e && t(".right-arrow").css("visibility", "hidden"),
            10 > i && t(".right-arrow").css("visibility", "hidden"),
            t(".page").html(l.i18n.t("sdk.playtomic.page", {
                num: e
            }))
        }, y = function() {
            t(".pagination").click(function(e) {
                -1 != e.target.className.search("left-arrow") ? h-- : -1 != e.target.className.search("right-arrow") && h++,
                r.page = h,
                s.sendAPIRequest("leaderboards", "list", g, null, r)
            }),
            t(".butwrap").click(function(e) {
                -1 != e.target.className.search("alltime") && (r.mode = "alltime"),
                -1 != e.target.className.search("last30days") && (r.mode = "last30days"),
                -1 != e.target.className.search("last7days") && (r.mode = "last7days"),
                -1 != e.target.className.search("newest") && (r.mode = "newest"),
                h = 1,
                n = r.mode,
                r.page = h,
                s.sendAPIRequest("leaderboards", "list", g, null, r)
            }),
            t(".regbut").click(function() {
                window.ID.register()
            })
        }, b = function() {
            c.getOAuthToken() ? (a.playerid = c.getAuthResponse().details.pid,
            t(".pmsg").show(),
            t(".pscore").show(),
            t(".regbut").hide(),
            s.sendAPIRequest("leaderboards", "list", m, null, a)) : (t(".pmsg").hide(),
            t(".pscore").hide(),
            t(".regbut").show())
        }, w = function(e) {
            var t = Math.floor(e / 1e3 % 60)
              , n = 10 > t ? "0" + String(t) : String(t)
              , i = Math.round(Math.floor(e / 1e3 / 60))
              , r = 10 > i ? "0" + String(i) : String(i)
              , a = e.toString();
            a = a.slice(a.length - 3, a.length);
            var o = r + ":" + n + ":" + a;
            return o
        }, k = function(e) {
            e.page = e.page || 1,
            e.perpage = 10,
            e.mode = e.mode || "alltime",
            r = o.clone(e),
            a = o.clone(e),
            l.create(d, e),
            l.loadedCallback = function() {
                l.inlineStyle(f),
                t = p(l.window()),
                y(),
                b(),
                s.sendAPIRequest("leaderboards", "list", g, null, e)
            }
        };
        return {
            showList: k
        }
    }),
    define("text!views/achievements.html", [], function() {
        return '<div class="white achievements">\n  <div id="localization">\n    <div class="locale locale-click" id="locale">\n      <img src="<%= cdn %>/sdk/flags/<%= i18n.locale %>.png" alt="logo" width="16" height="11" class="locale-click">\n      <i class="arrow down locale-click"></i>\n    </div>\n    <div id="locale-dropdown">\n      <ul>\n        <% for (var i = 0; i < localeList.length; i++) { %>\n        <li class="locale-language">\n          <img src="<%= cdn %>/sdk/flags/<%= localeList[i] %>.png" alt="flag" width="16" height="11" id="localeList[i]" class="locale-language">\n          <span class="locale-language" id="<%= localeList[i] %>"><%= i18n.t(\'sdk.language.\' + localeList[i]) %></span>\n        </li>\n        <% } %>\n      </ul>\n    </div>\n  </div>\n  <div id="close" class="close">&times;</div>\n  <header>\n    <div>\n      <span><%= i18n.t(\'sdk.playtomic.achievements\') %></span>\n    </div>\n  </header>\n\n  <div>\n    <div class="list"></div>\n  </div>\n  <div>\n    <div class="detail">\n      <div class="detaildata">\n        <div class="iconwrap"></div>\n        <div class="achtitle"></div>\n        <div class="achdesc"></div>\n      </div>\n    </div>\n  </div>\n\n  <footer>\n    <img src="<%= cdn %>/sdk/logo/y8-account-logo.png" alt="logo" class="logo" width="45" height="32">\n  </footer>\n</div>\n'
    }),
    define("text!stylesheets/achievements.css", [], function() {
        return ".achievements {\n  width: 410px;\n}\n\n.list {\n  margin: 14px;\n  background: #333;\n  overflow: hidden;\n  padding: 5px;\n  max-height: 218px;\n  overflow-y: auto;\n}\n\n.achitem {\n  float: left;\n  margin: 1.5px;\n  border: 2px solid #828282;\n  width: 64px;\n  height: 64px;\n  box-sizing: content-box;\n}\n\n.botrow img {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n}\n\n.botrow {\n  position: relative;\n  bottom: 13px;\n  height: 13px;\n  font-size: 11px;\n  z-index: 2;\n  background-repeat: repeat-x;\n  width: 64px;\n  color: #e7e7e7;\n}\n\n.detail {\n  margin-left: 20px;\n  background: #333;\n  height: 75px;\n  margin-right: 10px;\n}\n\n.iconwrap {\n  margin: 3px;\n  border: 2px solid #828282;\n  width: 64px;\n  height: 64px;\n  float: left;\n  margin-right: 5px;\n}\n\n.achtitle {\n  color: #fff;\n  font-size: 22px;\n  padding: 6px;\n}\n\n.achdesc {\n  color: #e6e6e6;\n  font-size: 16px;\n  padding-top: 4px;\n}\n"
    }),
    define("achievements", ["require", "underscore", "playtomic_helper", "logger", "dialogv2", "utils/constants", "runtime", "text!views/achievements.html", "utils/jquery-amd", "text!stylesheets/achievements.css"], function(e) {
        var t, n, i = e("underscore"), r = e("playtomic_helper"), a = (e("logger"),
        e("dialogv2")), o = e("utils/constants"), s = e("runtime"), l = i.template(e("text!views/achievements.html")), u = e("utils/jquery-amd"), c = e("text!stylesheets/achievements.css"), d = o.cdnUrl + "/sdk/achievements/lock.png", p = o.cdnUrl + "/sdk/achievements/gradient.png", f = function(e, i, r) {
            n = r.achievements;
            for (var a = 0; a < n.length; a++) {
                var l = n[a].hasOwnProperty("player") ? "hide" : ""
                  , u = o.cdnUrl + "/achievements/" + s.getAppId() + "/" + n[a].icon
                  , c = '<div class="achitem" data-id="' + a + '"><img src="' + u + '"><div class="botrow ' + l + '">' + n[a].difficulty + '<img src="' + d + '" class="showLock"></div></div>';
                t(".list").append(c)
            }
            t(".achitem").click(function() {
                h(t(this))
            }),
            h(t(".achitem").first()),
            t(".botrow").css("background-image", "url(" + p + ")")
        }, h = function(e) {
            var i = e.data("id")
              , r = o.cdnUrl + "/achievements/" + s.getAppId() + "/" + n[i].icon;
            t(".iconwrap").html('<img src="' + r + '">'),
            t(".achtitle").html(n[i].achievement),
            t(".achdesc").html(n[i].description)
        }, g = function(e) {
            a.create(l),
            a.loadedCallback = function() {
                a.inlineStyle(c),
                t = u(a.window()),
                r.sendAPIRequest("achievements", "list", f, null, e)
            }
        };
        return {
            showList: g
        }
    }),
    define("playtomic", ["require", "utils/jssha", "logger", "runtime", "playtomic_helper", "leaderboard", "achievements"], function(e) {
        function t(e, t, n) {
            e && e(n)
        }
        var n = (e("utils/jssha"),
        e("logger"))
          , i = e("runtime")
          , r = e("playtomic_helper")
          , a = e("leaderboard")
          , o = e("achievements")
          , s = {
            playtomicHelper: r,
            loaded: r.loaded,
            init: r.init,
            Achievements: {
                list: function(e) {
                    e || (e = {}),
                    i.getOAuthToken() && (e.playerid = i.getAuthResponse().details.pid),
                    o.showList(e)
                },
                listCustom: function(e, n) {
                    e || (e = {}),
                    i.getOAuthToken() && (e.playerid = i.getAuthResponse().details.pid),
                    r.sendAPIRequest("achievements", "list", t, n, e)
                },
                listAll: function(e, n) {
                    e || (e = {}),
                    r.sendAPIRequest("achievements", "listAll", t, n, e)
                },
                save: function(e, a) {
                    return i.getOAuthToken() ? (e.playerid = i.getAuthResponse().details.pid,
                    e.playername = i.getAuthResponse().details.nickname,
                    void r.sendAPIRequest("achievements", "save", t, a, e)) : void (this.debug && n.log("user must login before saving an achievement"))
                }
            },
            Leaderboards: {
                tables: function(e, n) {
                    r.sendAPIRequest("leaderboards", "tables", t, n, e)
                },
                list: function(e) {
                    a.showList(e)
                },
                listCustom: function(e, n) {
                    r.sendAPIRequest("leaderboards", "list", t, n, e)
                },
                save: function(e, a) {
                    if (!i.getOAuthToken())
                        return void (this.debug && n.log("user must login before saving an achievement"));
                    var o = i.getAuthResponse().details.pid;
                    e.hasOwnProperty("playerid") && e.playerid != o || (e.playerid = o,
                    e.hasOwnProperty("playername") || (e.playername = i.getAuthResponse().details.nickname),
                    r.sendAPIRequest("leaderboards", "save", t, a, e))
                }
            },
            PlayerMaps: {
                save: function(e, a, o, s) {
                    if (!i.getOAuthToken())
                        return void (this.debug && n.log("user must login before saving a map"));
                    o = o || i.getAuthResponse().details.nickname;
                    var l = {
                        name: e,
                        data: a,
                        playerid: i.getAuthResponse().details.pid,
                        playername: o
                    };
                    r.sendAPIRequest("playerlevels", "save", t, s, l)
                },
                list: function() {},
                listCustom: function(e, i, a, o, s) {
                    if (o) {
                        if (i > 10 && this.debug)
                            return n.log("perPage set too high on mapListCustom"),
                            !1
                    } else if (i > 50 && this.debug)
                        return n.log("perPage set too high on mapListCustom"),
                        !1;
                    var l = {
                        mode: e,
                        perpage: i,
                        page: a,
                        data: o
                    };
                    r.sendAPIRequest("playerlevels", "list", t, s, l)
                },
                load: function(e, n) {
                    var i = {
                        levelid: e
                    };
                    r.sendAPIRequest("playerlevels", "load", t, n, i)
                },
                rate: function(e, a, o) {
                    if (!i.getOAuthToken())
                        return void (this.debug && n.log("user must login before rating a map"));
                    var s = {
                        levelid: e,
                        rating: a,
                        playerid: i.getAuthResponse().details.pid
                    };
                    r.sendAPIRequest("playerlevels", "rate", t, o, s)
                }
            }
        };
        return s
    }),
    define("protection", ["require", "utils/domain", "sdk/api", "logger"], function(e) {
        var t = e("utils/domain")
          , n = e("sdk/api")
          , i = e("logger")
          , r = t.getDomain()
          , a = []
          , o = []
          , s = null
          , l = null
          , u = function(e) {
            var t = setTimeout(function() {
                e()
            }, 1e4);
            0 === a.length ? n.apiOpen("protection-lists", "GET", null, function(n) {
                n.hasOwnProperty("approved_domains") && (a = n.approved_domains,
                o = n.blacklisted_urls),
                clearTimeout(t),
                e()
            }) : e()
        }
          , c = function() {
            var e = null;
            if (!e)
                try {
                    e = window.top.location.href
                } catch (t) {}
            if (!e)
                try {
                    e = document.referrer
                } catch (t) {}
            return e || (e = window.location.href),
            e
        };
        return {
            isSponsor: function(e) {
                if (s)
                    return void e(s);
                i.history.push("Sponsor called");
                var t = c();
                u(function() {
                    if (-1 != t.search("y8.com/embed"))
                        return s = !1,
                        void e(!1);
                    for (var n = 0; n < a.length; n++)
                        if (-1 != r.search(a[n]))
                            return s = !0,
                            void e(!0);
                    s = !1,
                    e(!1)
                })
            },
            isBlacklisted: function(e) {
                return l ? void e(l) : (i.history.push("Blacklist called"),
                void u(function() {
                    for (var t = 0; t < o.length; t++)
                        if (-1 != r.search(o[t]))
                            return l = !0,
                            void e(!0);
                    l = !1,
                    e(!1)
                }))
            },
            debug: function() {
                var e = t.getAddress();
                i.log("address", e),
                i.log("domain", r),
                i.log("isFrame", t.isFrame),
                i.log("approved", a),
                i.log("blacklist", o),
                i.log("sponsor", s)
            }
        }
    }),
    define("text!views/secret_menu.html", [], function() {
        return '<div class="wrap">\n  <div class="innerwrap">\n    <div id="close" class="close">&times;</div>\n    <h2>Secret Menu</h2>\n    <div id="logoutput" class="logoutput"></div>\n    <div id="appid"></div>\n    <div id="callcount"></div>\n    <div id="savesize"></div>\n    <a href="#" id="deleteall">Delete all data</a>\n    <a href="#" id="enableV2">enable v2</a>\n    <a href="#" id="protection-debug">Protection Debug</a>\n  </div>\n</div>\n'
    }),
    define("text!stylesheets/secret_menu.css", [], function() {
        return ".wrap {\n  height: 420px;\n  width: 350px;\n  background: #e7ecee;\n}\n.innerwrap {\n  padding: 6px;\n}\nh2 {\n  margin: 10px 6px;\n  padding: 0;\n}\n.logoutput {\n  overflow-y: scroll;\n  height: 200px;\n  border: 1px solid #ccc;\n}\n"
    }),
    define("secret_menu", ["require", "underscore", "logger", "utils/dom_helper", "dialogv2", "runtime", "utils/constants", "protection", "sdk/api", "text!views/secret_menu.html", "text!stylesheets/secret_menu.css"], function(e) {
        var t = e("underscore")
          , n = e("logger")
          , i = e("utils/dom_helper")
          , r = e("dialogv2")
          , a = e("runtime")
          , o = e("utils/constants")
          , s = e("protection")
          , l = e("sdk/api")
          , u = t.template(e("text!views/secret_menu.html"))
          , c = e("text!stylesheets/secret_menu.css")
          , d = {
            init: function() {
                var e = this;
                o.y8_appid != a.getAppId() && i.addEventListener(window, "keydown", function(t) {
                    t.shiftKey && t.altKey && t.ctrlKey && (r.loaded ? r.destroy() : (r.loadedCallback = function() {
                        var t = r.iframe.contentWindow.document
                          , o = t.getElementById("appid")
                          , s = t.getElementById("callcount")
                          , l = t.getElementById("savesize");
                        e.deleteAll = t.getElementById("deleteall"),
                        e.v2Btn = t.getElementById("enableV2"),
                        e.protectionDebug = t.getElementById("protection-debug"),
                        i.addEventListener(e.deleteAll, "click", e.deleteAllData),
                        i.addEventListener(e.v2Btn, "click", e.enableV2),
                        i.addEventListener(e.protectionDebug, "click", e.triggerProtectionDebug),
                        e.renderLogs(),
                        o.innerHTML = a.getAppId(),
                        s.innerHTML = n.getCalls() + " call in last 5 mins",
                        l.innerHTML = n.getSaveSize() + " bytes saved last"
                    }
                    ,
                    r.create(u),
                    r.inlineStyle(c),
                    r.unloadedCallback = function() {
                        i.removeEventListener(e.deleteAll, "click", e.deleteAllData),
                        i.removeEventListener(e.v2Btn, "click", e.enableV2),
                        i.removeEventListener(e.protectionDebug, "click", e.triggerProtectionDebug)
                    }
                    ))
                })
            },
            renderLogs: function() {
                var e = r.iframe.contentWindow.document
                  , t = e.getElementById("logoutput");
                t.innerHTML = "";
                for (var i = 0; i < n.history.length; i++)
                    t.innerHTML = t.innerHTML + n.history[i] + "<br>"
            },
            deleteAllData: function() {
                l.api("user_data/remove_all", "POST", {})
            },
            enableV2: function() {
                a.setV2(!0)
            },
            triggerProtectionDebug: function() {
                s.debug(),
                d.renderLogs()
            }
        };
        return d
    }),
    define("multiplayer", ["logger"], function(e) {
        return {
            room: {},
            appid: "",
            appsession: "",
            callback: null,
            callbackScope: null,
            matchingCallback: null,
            matchingScope: null,
            session: "",
            userid: "",
            nodes: [["playtomicmp1.nl1.id.net", 3201], ["playtomicmp2.nl1.id.net", 3201]],
            host: "",
            port: 0,
            proto: "https:" === document.location.protocol ? "wss://" : "ws://",
            msgQue: [],
            socket: null,
            _message: "",
            reconnects: 0,
            reconnectDelay: 5e3,
            switchingServer: !1,
            timedout: !1,
            debugLevel: 2,
            autoReconnect: !1,
            heartbeatTimer: null,
            open: function(t, n, i, r) {
                t || e.log("SMP: missing appid"),
                n || e.log("SMP: missing Game API appsession"),
                this.appid = t,
                this.appsession = n,
                this.callback = i,
                this.callbackScope = r;
                var a = Math.floor(Math.random() * (this.nodes.length - 1 + 1)) + 1 - 1;
                this.host = this.nodes[a][0],
                this.port = this.nodes[a][1],
                this.openSocket(this.host, this.port),
                this.debugLevel > 0 && e.log("connecting to " + this.host + ":" + this.port)
            },
            openSocket: function(t, n) {
                var i = this;
                this.socket = new WebSocket("ws://" + t + ":" + n),
                this.socket.onopen = function() {
                    i.reconnects = 0;
                    var e = {
                        section: "users",
                        action: "start",
                        appid: i.appid,
                        appsession: i.appsession,
                        uid: i.userid
                    };
                    i.sendObject(e),
                    this.switchingServer = !1,
                    i.heartbeatTimer = setInterval(function() {
                        i.sendObject({
                            section: "users",
                            action: "heartbeat",
                            appid: i.appid
                        })
                    }, 15e3)
                }
                ,
                this.socket.onmessage = function(e) {
                    for (var t = e.data.split("!@"), n = 0; n < t.length; n++)
                        i._message += t[n],
                        n < t.length - 1 && (0 !== i._message.indexOf("{") && (i._message = i._message.substring(i._message.indexOf("{"), i._message.length)),
                        i.onMessage(i._message),
                        i._message = "")
                }
                ,
                this.socket.onerror = function(t) {
                    e.log("SMP: error" + t.data)
                }
                ,
                this.socket.onclose = function(t) {
                    if (i.debugLevel > 0 && (e.log("SMP: disconnected"),
                    e.log(t)),
                    clearInterval(i.heartbeatTimer),
                    0 === i.msgQue.length) {
                        var n = {
                            section: "connection",
                            action: "disconnect",
                            success: !1
                        };
                        4e3 == t.code ? (i.timedout = !0,
                        n.errorcode = 4e3,
                        n.errormessage = "Connection timed out",
                        i.callback(n, i.callbackScope)) : t.wasClean || (n.errorcode = 1,
                        n.errormessage = "Connection lost",
                        i.callback(n, i.callbackScope))
                    }
                    i.switchingServer || i.timedout || !i.autoReconnect || (i.reconnects = 1,
                    i.startReconnect())
                }
            },
            onMessage: function(t) {
                try {
                    var n = JSON.parse(t);
                    this.callback && this.callback(n, this.callbackScope),
                    this.matchingCallback && this.matchingCallback(n, this.matchingScope)
                } catch (i) {
                    return void e.log(i)
                }
                if (n.hasOwnProperty("action")) {
                    if ("users" == n.section && "start" == n.action && 0 == n.errorcode && (this.session = n.usersession,
                    this.userid = n.userid,
                    this.msgQue.length > 0)) {
                        for (var r in this.msgQue)
                            if (this.msgQue.hasOwnProperty(r)) {
                                var t = this.msgQue[r];
                                t && (this.sendObject(t),
                                this.debugLevel > 0 && e.log("sending que" + JSON.stringify(t)))
                            }
                        this.msgQue = []
                    }
                    "rooms" == n.section && "playerjoined" == n.action && (this.room.players[n.playerid] = n.meta),
                    "rooms" == n.section && "playerleft" == n.action && delete this.room.players[n.playerid],
                    "rooms" == n.section && "playerupdate" == n.action && (this.room.players[n.playerid] = n.meta),
                    "rooms" == n.section && "join" == n.action && (this.room = n.room)
                } else
                    e.log("possible error " + t)
            },
            roomList: function(e, t, n, i) {
                var r = {
                    section: "rooms",
                    action: "list",
                    appid: this.appid
                };
                e && (r.type = e),
                t && (r.roomid = t),
                n && (r.custom = n),
                i && (r.pt = i),
                this.sendObject(r)
            },
            roomJoin: function(t, n, i) {
                var r = n.split(":")
                  , a = {
                    section: "rooms",
                    action: "join",
                    appid: this.appid,
                    roomid: t
                };
                i && (a.pt = i),
                r[0] != this.host || r[1].substring(1) != this.port.toString().substring(1) ? (this.host = r[0],
                this.port = r[1],
                this.switchServer(this.host, this.port),
                this.debugLevel > 0 && e.log("switch to " + n),
                this.msgQue.push(a)) : this.sendObject(a)
            },
            roomCreate: function(e, t, n, i, r) {
                var a = {
                    section: "rooms",
                    action: "create",
                    type: e,
                    appid: this.appid
                };
                for (key in r)
                    a[key] = r[key];
                t && (a.roomid = t),
                n && (a.custom = n),
                i && (a.pt = i),
                this.sendObject(a)
            },
            roomUpdate: function(e, t, n) {
                var i = {
                    section: "rooms",
                    action: "update",
                    appid: this.appid,
                    custom: e
                };
                t && (i.pt = t);
                for (key in n)
                    i[key] = n[key];
                this.sendObject(i)
            },
            roomLeave: function(e) {
                var t = {
                    section: "rooms",
                    action: "leave",
                    appid: this.appid
                };
                e && (t.pt = e),
                this.sendObject(t)
            },
            broadcast: function(t) {
                (!t || "object" != typeof t || Array.isArray(t)) && e.log("SMP: broadcast takes an object for the argument"),
                this.sendObject({
                    section: "rooms",
                    action: "broadcast",
                    appid: this.appid,
                    message: t
                })
            },
            broadcastAll: function(t) {
                (!t || "object" != typeof t || Array.isArray(t)) && e.log("SMP: broadcast takes an object for the argument"),
                this.sendObject({
                    section: "rooms",
                    action: "broadcast",
                    appid: this.appid,
                    message: t
                });
                var n = {
                    section: "rooms",
                    action: "broadcast",
                    success: !0,
                    errorcode: 0
                };
                for (var i in t)
                    n[i] = t[i];
                this.callback(n)
            },
            sendTo: function(e, t) {
                this.sendObject({
                    section: "rooms",
                    action: "sendTo",
                    appid: this.appid,
                    userid: e,
                    message: t
                })
            },
            userMeta: function(e, t) {
                var n = {
                    section: "users",
                    action: "meta",
                    meta: e,
                    appid: this.appid
                };
                t && (n.pt = t),
                this.sendObject(n)
            },
            ping: function(e) {
                var t = {
                    section: "users",
                    action: "ping",
                    appid: this.appid
                };
                e && (t.pt = e),
                this.sendObject(t)
            },
            sendObject: function(t) {
                var n = JSON.stringify(t);
                this.socket.send(n),
                "heartbeat" != t.action && (this.debugLevel > 1 && ("broadcast" == t.action || "sendTo" == t.action) && e.log("SMP: sending " + n),
                this.debugLevel > 0 && "broadcast" != t.action && "sendTo" != t.action && e.log("SMP: sending " + n))
            },
            switchServer: function(e, t) {
                this.switchingServer = !0,
                this.socket.close(),
                this.host = e,
                this.port = t,
                this.openSocket(e, t)
            },
            startReconnect: function() {
                var t = this;
                return 1 === this.socket.readyState ? (this.reconnects = 0,
                void e.log("SMP: reconnected")) : 0 === this.socket.readyState ? (setTimeout(function() {
                    t.reconnects++,
                    t.startReconnect()
                }, 3e3 * t.reconnects * 1.5),
                void e.log("SMP: waiting for pending connection")) : void setTimeout(function() {
                    e.log("SMP: Trying to reconnect"),
                    t.openSocket(t.host, t.port),
                    t.reconnects++,
                    t.startReconnect()
                }, 3e3 * t.reconnects * 1.5)
            },
            api: function(e) {
                this.sendObject(e)
            }
        }
    }),
    define("matchmaking", ["logger", "multiplayer", "playtomic", "runtime"], function(e, t, n, i) {
        return {
            enabled: !1,
            availableRooms: [],
            playerRank: 0,
            lonleyPlayerTimeout: null,
            minPlayers: 2,
            maxPlayers: 10,
            joinAnytime: !0,
            playerRankTable: "",
            highest: !0,
            useAchievements: !1,
            randRoomTime: 1e3 * (Math.floor(5 * Math.random()) + 1),
            startMatchmaking: function() {
                return enabled = !0,
                t.appid ? n.loaded ? (t.matchingCallback = this.callback,
                void (t.matchingScope = this)) : void e.log("Matchmaking Error: The Game API must be initialized before startMatchmaking") : void e.log("Matchmaking Error: Multiplayer.open must be called before startMatchmaking")
            },
            autoJoinGame: function() {
                var e = this;
                t.roomList("game", null, {
                    mm: !0
                }, "mm-list");
                var n = setInterval(function() {
                    e.availableRooms.length > 0 && (clearInterval(n),
                    e.playerRankTable || e.useAchievements ? e.joinBestRoom() : e.joinFullestRoom())
                }, 100)
            },
            callback: function(e, t) {
                var n = t;
                "mm-list" == e.pt && n.updateRooms(e.rooms),
                "mm-make" == e.pt && this.roomList("game", null, {
                    mm: !0
                }, "mm-list"),
                "mm-join" == e.pt && this.userMeta({
                    rank: n.playerRank
                }, "mm-meta"),
                "rooms" == e.section && "leave" == e.action && (n.availableRooms = [],
                n.playerRank = 0),
                "playerjoined" == e.action && clearTimeout(n.lonleyPlayerTimeout),
                "mm-list-check" == e.pt && (e.rooms && 1 != e.rooms[0].playerCount || (clearTimeout(n.lonleyPlayerTimeout),
                this.roomLeave(),
                setTimeout(function() {
                    n.autoJoinGame()
                }, 100)))
            },
            getPlayersRank: function() {
                if (this.playerRankTable && i.getAuthResponse()) {
                    var e = {
                        table: this.playerRankTable,
                        highest: this.highest,
                        playerid: i.getAuthResponse().details.pid
                    };
                    n.Leaderboards.listCustom(e, this.setPlayerRank)
                } else
                    this.useAchievements && i.getAuthResponse() ? n.Achievements.listCustom(null, this.setPlayerRank) : this.joinFullestRoom()
            },
            setPlayerRank: function(e) {
                var t = this.ID.Matchmaking;
                if (e.hasOwnProperty("achievements")) {
                    for (var n = 0, i = 0; i < e.achievements.length; i++)
                        e.achievements[i].hasOwnProperty("player") && ("easy" == e.achievements[i].difficulty ? n += 1 : "medium" == e.achievements[i].difficulty ? n += 3 : "hard" == e.achievements[i].difficulty && (n += 9));
                    t.playerRank = n
                } else
                    t.playerRank = e.hasOwnProperty("scores") && e.scores.length > 0 ? e.scores[0].points : 1
            },
            joinBestRoom: function() {
                this.getPlayersRank();
                var e = 0
                  , t = this
                  , n = setInterval(function() {
                    e++,
                    0 != t.playerRank && (clearInterval(n),
                    t.sortRoomsByRank()),
                    e > 100 && (clearInterval(n),
                    t.playerRank = 1,
                    t.sortRoomsByRank())
                }, 100)
            },
            sortRoomsByRank: function() {
                for (var e = 0; e < this.availableRooms.length; e++) {
                    var n = 0;
                    for (var i in this.availableRooms[e].players)
                        this.availableRooms[e].players[i].hasOwnProperty("rank") && (n += availableRooms[e].players[i].rank);
                    0 != this.availableRooms[e].playerCount && (n = Math.round(n / this.availableRooms[e].playerCount)),
                    this.availableRooms[e].roomRank = n
                }
                for (var r = {
                    closeness: 1e5,
                    roomid: null,
                    node: null
                }, a = 0; a < this.availableRooms.length; a++) {
                    var o = Math.abs(this.availableRooms[a].roomRank - this.playerRank);
                    o < r.closeness && (r.closeness = o,
                    r.roomid = this.availableRooms[a].roomid,
                    r.node = this.availableRooms[a].webnode),
                    t.roomJoin(r.roomid, r.node, "mm-join"),
                    this.lonleyPlayerTimeout = setTimeout(function() {
                        t.roomList(null, r.roomid, {
                            mm: !0
                        }, "mm-list-check")
                    }, 12e3 + this.randRoomTime)
                }
            },
            joinFullestRoom: function() {
                this.availableRooms = this.availableRooms.sort(function(e, t) {
                    return e.playerCount > t.playerCount ? 1 : e.playerCount < t.playerCount ? -1 : 0
                });
                var e = this.availableRooms[this.availableRooms.length - 1];
                t.roomJoin(e.roomid, e.webnode, "mm-join")
            },
            updateRooms: function(e) {
                if (this.availableRooms = [],
                this.joinAnytime)
                    for (var n = 0; n < e.length; n++)
                        e[n].playerCount != e[n].maxPlayers && this.availableRooms.push(e[n]);
                else
                    for (var i = 0; i < e.length; i++)
                        e[i].playerCount != e[i].maxPlayers && e[i].isOpen && this.availableRooms.push(e[i]);
                0 == this.availableRooms.length && t.roomCreate("game", null, {
                    mm: !0
                }, "mm-make", {
                    maxPlayers: this.maxPlayers
                })
            }
        }
    }),
    define("social", ["require", "protection", "logger", "runtime", "utils/domain", "utils/constants"], function(e) {
        var t = (e("protection"),
        e("logger"))
          , n = e("runtime")
          , i = e("utils/domain")
          , r = e("utils/constants");
        return {
            openProfile: function() {
                if (!n.getOAuthToken())
                    return void t.log("User must be logged in to open a profile.");
                var e = n.getAuthResponse()
                  , a = e.details.pid + "/" + e.details.nickname
                  , o = r.root_url + "/profiles/" + a
                  , s = i.getDomain();
                ID.Protection.isSponsor(function(e) {
                    e && s.split(".").length < 2 && (o = "http://www." + s + "/users/" + a)
                }),
                window.open(o)
            }
        }
    }),
    function(e, t) {
        var n = "0.7.17"
          , i = ""
          , r = "?"
          , a = "function"
          , o = "undefined"
          , s = "object"
          , l = "string"
          , u = "major"
          , c = "model"
          , d = "name"
          , p = "type"
          , f = "vendor"
          , h = "version"
          , g = "architecture"
          , m = "console"
          , v = "mobile"
          , y = "tablet"
          , b = "smarttv"
          , w = "wearable"
          , k = "embedded"
          , x = {
            extend: function(e, t) {
                var n = {};
                for (var i in e)
                    n[i] = t[i] && t[i].length % 2 === 0 ? t[i].concat(e[i]) : e[i];
                return n
            },
            has: function(e, t) {
                return "string" == typeof e ? -1 !== t.toLowerCase().indexOf(e.toLowerCase()) : !1
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return typeof e === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : t
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        }
          , _ = {
            rgx: function(e, n) {
                for (var i, r, o, l, u, c, d = 0; d < n.length && !u; ) {
                    var p = n[d]
                      , f = n[d + 1];
                    for (i = r = 0; i < p.length && !u; )
                        if (u = p[i++].exec(e))
                            for (o = 0; o < f.length; o++)
                                c = u[++r],
                                l = f[o],
                                typeof l === s && l.length > 0 ? 2 == l.length ? this[l[0]] = typeof l[1] == a ? l[1].call(this, c) : l[1] : 3 == l.length ? this[l[0]] = typeof l[1] !== a || l[1].exec && l[1].test ? c ? c.replace(l[1], l[2]) : t : c ? l[1].call(this, c, l[2]) : t : 4 == l.length && (this[l[0]] = c ? l[3].call(this, c.replace(l[1], l[2])) : t) : this[l] = c ? c : t;
                    d += 2
                }
            },
            str: function(e, n) {
                for (var i in n)
                    if (typeof n[i] === s && n[i].length > 0) {
                        for (var a = 0; a < n[i].length; a++)
                            if (x.has(n[i][a], e))
                                return i === r ? t : i
                    } else if (x.has(n[i], e))
                        return i === r ? t : i;
                return e
            }
        }
          , T = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }
          , A = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [d, h], [/(opios)[\/\s]+([\w\.]+)/i], [[d, "Opera Mini"], h], [/\s(opr)\/([\w\.]+)/i], [[d, "Opera"], h], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i], [d, h], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[d, "IE"], h], [/(edge)\/((\d+)?[\w\.]+)/i], [d, h], [/(yabrowser)\/([\w\.]+)/i], [[d, "Yandex"], h], [/(puffin)\/([\w\.]+)/i], [[d, "Puffin"], h], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[d, "UCBrowser"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], h], [/(micromessenger)\/([\w\.]+)/i], [[d, "WeChat"], h], [/(QQ)\/([\d\.]+)/i], [d, h], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [d, h], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [h, [d, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [h, [d, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [h, [d, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[d, /(.+)/, "$1 WebView"], h], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[d, /(.+(?:g|us))(.+)/, "$1 $2"], h], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [h, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [d, h], [/(dolfin)\/([\w\.]+)/i], [[d, "Dolphin"], h], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[d, "Chrome"], h], [/(coast)\/([\w\.]+)/i], [[d, "Opera Coast"], h], [/fxios\/([\w\.-]+)/i], [h, [d, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [h, [d, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [h, d], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[d, "GSA"], h], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [d, [h, _.str, T.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [d, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[d, "Netscape"], h], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [d, h]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, x.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[g, /ower/, "", x.lowerize]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[g, x.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [c, f, [p, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [f, "Apple"], [p, y]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [f, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [f, c, [p, y]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [c, [f, "Amazon"], [p, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[c, _.str, T.device.amazon.model], [f, "Amazon"], [p, v]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, f, [p, v]], [/\((ip[honed|\s\w*]+);/i], [c, [f, "Apple"], [p, v]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [f, c, [p, v]], [/\(bb10;\s(\w+)/i], [c, [f, "BlackBerry"], [p, v]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [c, [f, "Asus"], [p, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[f, "Sony"], [c, "Xperia Tablet"], [p, y]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [c, [f, "Sony"], [p, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [f, c, [p, m]], [/android.+;\s(shield)\sbuild/i], [c, [f, "Nvidia"], [p, m]], [/(playstation\s[34portablevi]+)/i], [c, [f, "Sony"], [p, m]], [/(sprint\s(\w+))/i], [[f, _.str, T.device.sprint.vendor], [c, _.str, T.device.sprint.model], [p, v]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [f, c, [p, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [f, [c, /_/g, " "], [p, v]], [/(nexus\s9)/i], [c, [f, "HTC"], [p, y]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [c, [f, "Huawei"], [p, v]], [/(microsoft);\s(lumia[\s\w]+)/i], [f, c, [p, v]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [f, "Microsoft"], [p, m]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [f, "Microsoft"], [p, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [c, [f, "Motorola"], [p, v]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [f, "Motorola"], [p, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[f, x.trim], [c, x.trim], [p, b]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [f, "Samsung"], [p, b]], [/\(dtv[\);].+(aquos)/i], [c, [f, "Sharp"], [p, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[f, "Samsung"], c, [p, y]], [/smart-tv.+(samsung)/i], [f, [p, b], c], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[f, "Samsung"], c, [p, v]], [/sie-(\w+)*/i], [c, [f, "Siemens"], [p, v]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[f, "Nokia"], c, [p, v]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [c, [f, "Acer"], [p, y]], [/android.+([vl]k\-?\d{3})\s+build/i], [c, [f, "LG"], [p, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[f, "LG"], c, [p, y]], [/(lg) netcast\.tv/i], [f, c, [p, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [c, [f, "LG"], [p, v]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [f, "Lenovo"], [p, y]], [/linux;.+((jolla));/i], [f, c, [p, v]], [/((pebble))app\/[\d\.]+\s/i], [f, c, [p, w]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [f, c, [p, v]], [/crkey/i], [[c, "Chromecast"], [f, "Google"]], [/android.+;\s(glass)\s\d/i], [c, [f, "Google"], [p, w]], [/android.+;\s(pixel c)\s/i], [c, [f, "Google"], [p, y]], [/android.+;\s(pixel xl|pixel)\s/i], [c, [f, "Google"], [p, v]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i], [[c, /_/g, " "], [f, "Xiaomi"], [p, v]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i], [[c, /_/g, " "], [f, "Xiaomi"], [p, y]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [c, [f, "Meizu"], [p, y]], [/android.+a000(1)\s+build/i], [c, [f, "OnePlus"], [p, v]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [c, [f, "RCA"], [p, y]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i], [c, [f, "Dell"], [p, y]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [c, [f, "Verizon"], [p, y]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[f, "Barnes & Noble"], c, [p, y]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [c, [f, "NuVision"], [p, y]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i], [[f, "ZTE"], c, [p, y]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [c, [f, "Swiss"], [p, v]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [c, [f, "Swiss"], [p, y]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [c, [f, "Zeki"], [p, y]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i], [[f, "Dragon Touch"], c, [p, y]], [/android.+[;\/]\s*(NS-?.+)\s+build/i], [c, [f, "Insignia"], [p, y]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i], [c, [f, "NextBook"], [p, y]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[f, "Voice"], c, [p, v]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i], [[f, "LvTel"], c, [p, v]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [c, [f, "Envizen"], [p, y]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i], [f, c, [p, y]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [c, [f, "MachSpeed"], [p, y]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [f, c, [p, y]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [c, [f, "Rotor"], [p, y]], [/android.+(KS(.+))\s+build/i], [c, [f, "Amazon"], [p, y]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i], [f, c, [p, y]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[p, x.lowerize], f, c], [/(android.+)[;\/].+build/i], [c, [f, "Generic"]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [d, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [d, h], [/rv\:([\w\.]+).*(gecko)/i], [h, d]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [d, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [d, [h, _.str, T.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[d, "Windows"], [h, _.str, T.os.windows.version]], [/\((bb)(10);/i], [[d, "BlackBerry"], h], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [d, h], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[d, "Symbian"], h], [/\((series40);/i], [d], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[d, "Firefox OS"], h], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [d, h], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[d, "Chromium OS"], h], [/(sunos)\s?([\w\.]+\d)*/i], [[d, "Solaris"], h], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [d, h], [/(haiku)\s(\w+)/i], [d, h], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[h, /_/g, "."], [d, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[d, "Mac OS"], [h, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [d, h]]
        }
          , S = function(n, r) {
            if ("object" == typeof n && (r = n,
            n = t),
            !(this instanceof S))
                return new S(n,r).getResult();
            var a = n || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i)
              , o = r ? x.extend(A, r) : A;
            return this.getBrowser = function() {
                var e = {
                    name: t,
                    version: t
                };
                return _.rgx.call(e, a, o.browser),
                e.major = x.major(e.version),
                e
            }
            ,
            this.getCPU = function() {
                var e = {
                    architecture: t
                };
                return _.rgx.call(e, a, o.cpu),
                e
            }
            ,
            this.getDevice = function() {
                var e = {
                    vendor: t,
                    model: t,
                    type: t
                };
                return _.rgx.call(e, a, o.device),
                e
            }
            ,
            this.getEngine = function() {
                var e = {
                    name: t,
                    version: t
                };
                return _.rgx.call(e, a, o.engine),
                e
            }
            ,
            this.getOS = function() {
                var e = {
                    name: t,
                    version: t
                };
                return _.rgx.call(e, a, o.os),
                e
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return a
            }
            ,
            this.setUA = function(e) {
                return a = e,
                this
            }
            ,
            this
        };
        S.VERSION = n,
        S.BROWSER = {
            NAME: d,
            MAJOR: u,
            VERSION: h
        },
        S.CPU = {
            ARCHITECTURE: g
        },
        S.DEVICE = {
            MODEL: c,
            VENDOR: f,
            TYPE: p,
            CONSOLE: m,
            MOBILE: v,
            SMARTTV: b,
            TABLET: y,
            WEARABLE: w,
            EMBEDDED: k
        },
        S.ENGINE = {
            NAME: d,
            VERSION: h
        },
        S.OS = {
            NAME: d,
            VERSION: h
        },
        typeof exports !== o ? (typeof module !== o && module.exports && (exports = module.exports = S),
        exports.UAParser = S) : typeof define === a && define.amd ? define("utils/uaparser", [], function() {
            return S
        }) : e && (e.UAParser = S);
        var E = e && (e.jQuery || e.Zepto);
        if (typeof E !== o) {
            var C = new S;
            E.ua = C.getResult(),
            E.ua.get = function() {
                return C.getUA()
            }
            ,
            E.ua.set = function(e) {
                C.setUA(e);
                var t = C.getResult();
                for (var n in t)
                    E.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this),
    define("text!views/game_break.html", [], function() {
        return '<div id="afgElement" style="position:absolute; width:100%; height:100%; z-index:100; background:#000; top:0; left:0; display: none; margin: 0; height: 100%; overflow: hidden;">\n  <div id="adContainer"></div>\n</div>\n'
    }),
    define("game_break", ["require", "underscore", "logger", "options", "text!views/game_break.html"], function(e) {
        var t, n, i, r, a, o = e("underscore"), s = e("logger"), l = e("options"), u = o.template(e("text!views/game_break.html")), c = u(), d = !1, p = 0, f = function(e) {
            d && e();
            var t = document.createElement("script");
            t.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js",
            t.onload = function() {
                d = !0,
                e()
            }
            ,
            document.head.appendChild(t)
        }, h = function() {
            r || (document.body.insertAdjacentHTML("afterbegin", c),
            r = document.getElementById("afgElement"))
        }, g = function(e) {
            f(function() {
                i = new google.ima.AdDisplayContainer(document.getElementById("adContainer")),
                i.initialize(),
                e()
            })
        }, m = function() {
            var e = window
              , t = document
              , n = t.documentElement
              , i = t.getElementsByTagName("body")[0]
              , r = e.innerWidth || n.clientWidth || i.clientWidth
              , a = e.innerHeight || n.clientHeight || i.clientHeight;
            return {
                width: r,
                height: a
            }
        }, v = function() {
            r.style.display = "none",
            a()
        }, y = function(e) {
            s.log(e.getError()),
            v()
        }, b = function() {
            n.contentComplete(),
            v()
        }, w = function(e) {
            var n = new google.ima.AdsRenderingSettings;
            n.restoreCustomPlaybackStateOnAdBreakComplete = !1,
            t = e.getAdsManager(r, n),
            t.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, y),
            t.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, b);
            try {
                t.init(m().width, m().height, google.ima.ViewMode.NORMAL),
                t.start()
            } catch (i) {
                v()
            }
        }, k = function() {
            n || (n = new google.ima.AdsLoader(i),
            n.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, w, !1),
            n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, y, !1))
        }, x = function(e) {
            if (a = e,
            0 == l.get.ads_enabled)
                return a();
            var t = new Date;
            return p + 1e3 * l.get.ad_timing > t.getTime() ? a() : (h(),
            void g(function() {
                k(),
                r.style.display = "block",
                p = t.getTime();
                var e = m().width
                  , i = m().height
                  , a = new google.ima.AdsRequest(e,i)
                  , o = l.get.afg_channel_id ? "&channel=" + l.get.afg_channel_id : "";
                a.adTagUrl = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=video_text_image&client=ca-games-pub-6129580795478709&description_url=http%3A%2F%2FY8.com&videoad_start_delay=30000&hl=en&max_ad_duration=60000" + o,
                a.linearAdSlotWidth = e,
                a.linearAdSlotHeight = i,
                a.nonLinearAdSlotWidth = e,
                a.nonLinearAdSlotHeight = i,
                a.forceNonLinearFullSlot = !0,
                n.requestAds(a)
            }))
        };
        return {
            gameBreak: x
        }
    }),
    define("video_ad_settings", [], function() {
        return {
            baseUrl: "null.html?https://www.y8.com/api/v2/items/[ITEM_ID]/video_ad_settings",
            get: function(e, t) {
                var n = new XMLHttpRequest
                  , i = this;
                n.onreadystatechange = function() {
                    if (4 == n.readyState && 200 == n.status)
                        try {
                            t(JSON.parse('{"success":true,"ad_timing":180,"ad_tag_url":"","ad_provider":"ad_manager"}'));
                        } catch (e) {
                            console.log(e)
                        }
                }
                ,
                n.open("GET", i.endpoint(e), !0),
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                n.send()
            },
            endpoint: function(e) {
                return this.baseUrl.replace("[ITEM_ID]", e)
            }
        }
    }),
    define("utils/scripts_loader", [], function() {
        var e = {
            load: function(e) {
                if (this.opts = e || {},
                !this.opts.scripts)
                    throw new Error("No scripts URLs were provided");
                this.loadAllScripts()
            },
            loadAllScripts: function() {
                return 0 == this.opts.scripts.length ? void (this.opts.onLoaded && this.opts.onLoaded()) : void this.loadScript(this.opts.scripts.shift(), this.loadAllScripts.bind(this))
            },
            loadScript: function(e, t) {
                var n = document.createElement("script");
                n.src = e,
                this.opts.forEach && this.opts.forEach(n),
                n.onload = n.onreadystatechange = function() {
                    n.onreadystatechange = n.onload = null,
                    t()
                }
                ;
                // var i = document.getElementsByTagName("head")[0];
                // (i || document.body).appendChild(n)
            }
        };
        return {
            load: function(t) {
                e.load(t)
            }
        }
    }),
    define("utils/retry", [], function() {
        return function(e) {
            var t = e || {};
            return {
                init: function() {
                    this.reset(),
                    this.initialized = !0
                },
                reset: function() {
                    this.retries = t.retries || 3,
                    this.initialRetries = this.retries,
                    this.duration = t.duration || 200
                },
                retry: function(e, t, n) {
                    return !this.initialized && this.init(),
                    this.timeout && clearTimeout(this.timeout),
                    this.retries <= 0 ? (console.log("No retries left, giving up"),
                    void (t && t())) : (n && console.log(n),
                    this.timeout = setTimeout(e, this.timeoutDuration()),
                    void this.retries--)
                },
                timeoutDuration: function() {
                    return this.duration * (this.initialRetries - (this.retries - 1))
                }
            }
        }
    }),
    define("text!views/ads.html", [], function() {
        return '<div id="ad-overlay" style="display:none;width:100%;height:100%;z-index:9999;position:absolute;">\n  <div id="ad-container" style="width:100%;height:100%;z-index:9999;position:absolute;"></div>\n</div>\n'
    }),
    define("html5_ima", ["require"], function() {
        var e = {
            init: function(t) {
                e.adTagUrl = t.adTagUrl,
                e.overlayContainer = t.overlayContainer,
                e.container = t.container,
                e.callback = t.callback,
                e.adsController = new google.outstream.AdsController(e.container,e.onAdLoaded,e.onAdDone),
                e.adsController.initialize(),
                e.load()
            },
            load: function() {
                e.overlayContainer.style.display = "block",
                e.requestAds()
            },
            onAdLoaded: function() {
                e.adsController.showAd()
            },
            onAdDone: function() {
                e.overlayContainer.style.display = "none",
                e.callback()
            },
            requestAds: function() {
                e.adsController.requestAds(e.adTagUrl)
            }
        };
        return e
    }),
    define("ads_html5_ima", ["require", "underscore", "utils/constants", "utils/scripts_loader", "utils/retry", "text!views/ads.html", "html5_ima"], function(e) {
        var t = e("underscore")
          , n = e("utils/constants")
          , i = e("utils/scripts_loader")
          , r = e("utils/retry")
          , a = t.template(e("text!views/ads.html"))
          , o = a({
            cdn: n.cdnUrl
        })
          , s = e("html5_ima");
        return {
            lastAdTime: 0,
            running: !1,
            scriptsLoaded: !1,
            displayRetry: r(),
            testMode: function() {
                return this.config && this.config.hasOwnProperty("test") ? this.config.test : n.isEnv("development")
            },
            bootstratp: function(e) {
                this.config = e,
                i.load({
                    scripts: ["https://imasdk.googleapis.com/js/sdkloader/ima3.js", "https://imasdk.googleapis.com/js/sdkloader/outstream.js"],
                    onLoaded: this.onScriptsLoaded.bind(this)
                })
            },
            onScriptsLoaded: function() {
                this.drawContainer(),
                this.scriptsLoaded = !0,
                this.config.hasOwnProperty("onReady") && this.config.onReady()
            },
            drawContainer: function() {
                document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", o)
            },
            canRunAds: function() {
                return !this.running && this.adTimeoutPassed()
            },
            display: function(e) {
                var t = this;
                return this.scriptsLoaded ? this.canRunAds() ? (console.log("Y8 Ads: display"),
                s.init({
                    adTagUrl: this.config.adTagUrl,
                    overlayContainer: document.getElementById("ad-overlay"),
                    container: document.getElementById("ad-container"),
                    callback: function() {
                        t.running = !1,
                        t.lastAdTime = (new Date).getTime(),
                        t.displayRetry.reset(),
                        e && e()
                    }
                }),
                void (this.running = !0)) : (console.log("Y8 Ads: unable to run"),
                void (e && e())) : void this.displayRetry.retry(function() {
                    t.display(e)
                }, e, "Waiting for ima scripts to load")
            },
            adTimeoutPassed: function() {
                return this.testMode() ? !0 : this.lastAdTime + 1e3 * this.config.adTiming < (new Date).getTime()
            }
        }
    }),
    define("ads_adsense", ["require", "utils/constants", "utils/scripts_loader", "utils/retry"], function(e) {
        var t = e("utils/constants")
          , n = e("utils/scripts_loader")
          , i = e("utils/retry");
        return {
            running: !1,
            lastAdTime: 0,
            ready: !1,
            displayRetry: i(),
            testMode: function() {
                return this.config && this.config.hasOwnProperty("test") ? this.config.test : t.isEnv("development")
            },
            bootstratp: function(e) {
                this.config = e,
                this.testMode() && (this.config.adClient = "ca-pub-123456789"),
                console.log("Adsense: Loading adsbygoogle.js"),
                n.load({
                    scripts: ["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + this.config.adClient],
                    forEach: this.forEachScript.bind(this),
                    onLoaded: function() {
                        console.log("Adsense: adsbygoogle.js is loaded")
                    }
                }),
                window.adsbygoogle = window.adsbygoogle || [];
                var t = adConfig = function(e) {
                    adsbygoogle.push(e)
                }
                ;
                this.adBreak = t;
                var i = this
                  , r = new Date;
                console.log("Adsense: adConfig is called, measuring time until onReady callback"),
                adConfig({
                    preloadAdBreaks: "on",
                    sound: "on",
                    onReady: function() {
                        console.log("Adsense: Got onReady callback after", (new Date - r) / 1e3, "s"),
                        i.ready = !0,
                        i.config.hasOwnProperty("onReady") && i.config.onReady()
                    }
                })
            },
            forEachScript: function(e) {
                e.setAttribute("crossorigin", "anonymous"),
                e.setAttribute("async", ""),
                e.setAttribute("data-ad-client", this.config.adClient),
                this.testMode() ? e.setAttribute("data-adbreak-test", "on") : e.setAttribute("data-ad-channel", this.config.adChannel)
            },
            display: function(e) {
                var t = this;
                return this.ready ? this.running ? (console.log("Ads are already running"),
                void (e && e())) : this.adTimeoutPassed() ? (console.log("Adsense: calling adBreak (displaying an ad)"),
                void this.adBreak({
                    type: "start",
                    beforeAd: function() {
                        console.log("Adsense: beforeAd"),
                        t.running = !0
                    },
                    afterAd: function() {
                        t.running = !1,
                        t.lastAdTime = (new Date).getTime(),
                        t.displayRetry.reset(),
                        e && e()
                    },
                    adBreakDone: function(e) {
                        console.log("Adsense: ad status:", e.breakStatus)
                    }
                })) : (console.log("Pacing violation"),
                void (e && e())) : void this.displayRetry.retry(function() {
                    t.display(e)
                }, e, "Waiting for adsense to become ready")
            },
            adTimeoutPassed: function() {
                return this.testMode() ? !0 : this.lastAdTime + 1e3 * this.config.adTiming < (new Date).getTime()
            }
        }
    }),
    define("ads_strategy", ["require", "video_ad_settings", "ads_html5_ima", "ads_adsense", "utils/retry"], function(e) {
        var t = e("video_ad_settings")
          , n = e("ads_html5_ima")
          , i = e("ads_adsense")
          , r = e("utils/retry");
        return {
            strategy: null,
            displayRetry: r(),
            init: function(e, n) {
                console.log("Y8 Ads: init"),
                this.config = n || {},
                t.get(e, this.bootstratp.bind(this))
            },
            bootstratp: function(e) {
                if (e.success !== !0)
                    return void console.log("Ads can not continue: ", e);
                switch (console.log("Got video ad settings"),
                e.ad_provider) {
                case "ad_sense":
                    this.strategy = i,
                    this.strategy.bootstratp(this.merge(this.config, {
                        adTiming: e.ad_timing,
                        adClient: e.ad_client,
                        adChannel: e.ad_channel
                    }));
                    break;
                case "ad_manager":
                    this.strategy = n,
                    this.strategy.bootstratp(this.merge(this.config, {
                        adTiming: e.ad_timing,
                        adTagUrl: e.ad_tag_url
                    }));
                    break;
                default:
                    console.log("Unknown ads provider: ", e.ad_provider)
                }
            },
            merge: function(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            },
            display: function(e) {
                if (!this.strategy) {
                    var t = this;
                    return void this.displayRetry.retry(function() {
                        t.display(e)
                    }, e, "Waiting for ad strategy")
                }
                this.strategy.display(e),
                this.displayRetry.reset()
            }
        }
    }),
    define("profile", ["require", "utils/constants", "sdk/api", "logger", "runtime", "utils/jquery-amd"], function(e) {
        var t, n = e("utils/constants"), i = (e("sdk/api"),
        e("logger")), r = e("runtime"), a = e("utils/jquery-amd");
        return {
            updateAvatar: function(e, o) {
                var s = r.getOAuthToken();
                if (!s)
                    return i.log("Player must be logged in to update avatar.");
                i.addCall();
                var l = new FormData;
                e.name && "blob" != e.name ? l.append("profile_picture[attachment]", e) : "image/jpeg" == e.type ? l.append("profile_picture[attachment]", e, "image.jpg") : l.append("profile_picture[attachment]", e, "image.png");
                var u = document.createElement("iframe");
                u.style.display = "none",
                document.body.appendChild(u),
                t = a(u.contentWindow),
                t.ajax({
                    url: n.root_url + "/api/v1/json/profile/avatar",
                    type: "post",
                    data: l,
                    headers: {
                        Authorization: "Bearer " + s
                    },
                    contentType: !1,
                    processData: !1,
                    success: function() {
                        u.remove(),
                        o && o()
                    }
                })
            }
        }
    }),
    define("id", ["require", "underscore", "utils/wrapper", "utils/dom_ready", "sdk", "runtime", "distribution_block", "auth", "login", "registration", "event", "rpc", "dialogs_manager", "analytics", "options", "logger", "app_image", "playtomic", "protection", "secret_menu", "matchmaking", "multiplayer", "social", "sdk/ui", "utils/uaparser", "game_break", "ads_strategy", "dialogv2", "profile"], function(e) {
        var t = e("underscore")
          , n = e("utils/wrapper")
          , i = e("utils/dom_ready")
          , r = e("sdk")
          , a = e("runtime")
          , o = (e("distribution_block"),
        e("auth"))
          , s = e("login")
          , l = e("registration")
          , u = e("event")
          , c = e("rpc")
          , d = e("dialogs_manager")
          , p = e("analytics")
          , f = e("options")
          , h = e("logger")
          , g = e("app_image")
          , m = e("playtomic")
          , v = e("protection")
          , y = e("secret_menu")
          , b = e("matchmaking")
          , w = e("multiplayer")
          , k = e("social")
          , x = e("sdk/ui")
          , _ = e("utils/uaparser")
          , T = e("game_break")
          , A = e("ads_strategy")
          , S = e("dialogv2")
          , E = e("profile");
        return function(e) {
            var C = new _
              , R = {
                browser: C.getBrowser() || null,
                Event: u,
                track: function() {
                    h.log("Error: tracking replaced by analytics")
                },
                underscore: t,
                api: function(e, t, n, i) {
                    r.api.api(e, t, n, i)
                },
                api2: function(e, t, n, i) {
                    r.api.api2(e, t, n, i)
                },
                apiGuest: function(e, t, n, i) {
                    r.api.apiOpen(e, t, n, i)
                },
                login: function(e, t) {
                    h.addCall(),
                    a.getV2() ? s.login(function(t) {
                        e(t)
                    }) : o.login(t, n(e), n(e))
                },
                register: function(e, t) {
                    h.addCall(),
                    a.getV2() ? l.createMenu(function(t) {
                        e(t)
                    }) : o.register(t, n(e), n(e))
                },
                safariFixLogin: function(e, t) {
                    this.browser && -1 != this.browser.name.search("Safari") ? o.redirectToOauthLogin(t) : o.login(t, n(e), n(e))
                },
                safariFixRegister: function(e, t) {
                    this.browser && -1 != this.browser.name.search("Safari") ? o.redirectToOauthRegistration(t) : o.register(t, n(e), n(e))
                },
                getAuthResponse: function(e) {
                    return n(e).call({}, a.getAuthResponse())
                },
                getLoginStatus: function(e, t, i) {
                    var r = a.getLoginStatus() || {};
                    return t ? (h.addCall(),
                    o.fetchLoginStatus(e, e, i)) : r.status && r.authResponse ? n(e).call({}, r) : void o.fetchLoginStatus(e, e, i)
                },
                ui: function(e, t, n) {
                    d.open(e, t, n),
                    h.addCall()
                },
                leaderboard: function() {
                    d.open({
                        method: "leaderboard",
                        redirect_uri: a.getRedirectUri()
                    }),
                    h.addCall()
                },
                points_leaderboard: function() {
                    d.open({
                        method: "points_leaderboard",
                        redirect_uri: a.getRedirectUri()
                    })
                },
                submit_image: function(e, t) {
                    g.submit(e, t),
                    h.addCall()
                },
                closeMenu: function() {
                    x.destroyAll()
                },
                isVisible: function() {
                    return !t.isEmpty(x.__dialogs) || S.loaded
                },
                GameAPI: m,
                Protection: v,
                Matchmaking: b,
                Multiplayer: w,
                Analytics: p.developer,
                openProfile: k.openProfile,
                Profile: E,
                hidePluginElement: function() {
                    h.log("API depreciated")
                },
                showPluginElement: function() {
                    h.log("API depreciated")
                },
                initialized: a.initialized(),
                gameBreak: T.gameBreak,
                ads: A,
                init: function(e) {
                    if (e.forceInit)
                        a.reset(),
                        f.reset(),
                        p.reset();
                    else if (a.initialized())
                        return;
                    if (a.init(e),
                    a.initialized())
                        try {
                            c.xdHandler(),
                            f.update(),
                            p.init(this),
                            y.init(),
                            m.init()
                        } catch (t) {
                            h.log("Error in id " + t)
                        }
                    e && e.status && ID.getLoginStatus()
                }
            };
            e.idContainer ? e[idContainer] = R : e.ID = R,
            i(function() {
                t.isFunction(e.idAsyncInit) && e.idAsyncInit()
            })
        }
    }),
    require(["id"], function(e) {
        e(window)
    }),
    define("main", function() {})
}();
//# sourceMappingURL=sdk.js.map
