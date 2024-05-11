import "dreamland";
import { store } from "./App";

export function updatePage() {
  var root = document.documentElement;
  console.debug(store.theme);
  if (
    store.theme.name == undefined ||
    store.theme.shortName == undefined ||
    store.theme.text == undefined ||
    store.theme.overlay1 == undefined ||
    store.theme.surface0 == undefined ||
    store.theme.subtext0 == undefined ||
    store.theme.base == undefined ||
    store.theme.crust == undefined ||
    store.theme.accent == undefined
  ) {
    console.warn("theme is corrupted or out of date, resetting");
    store.theme = {
      name: "Mocha",
      shortName: "Mocha",
      text: "#cdd6f4",
      overlay1: "#7f849c",
      surface0: "#313244",
      subtext0: "#a6adc8",
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",
      accent: "#cba6f7",
    };
    updatePage();
  }

  document.head
    .querySelector("meta[name=theme-color]")!
    .setAttribute("content", store.theme.mantle);
  root.style.setProperty("--text", store.theme.text);
  root.style.setProperty("--overlay1", store.theme.overlay1);
  root.style.setProperty("--surface0", store.theme.surface0);
  root.style.setProperty("--subtext0", store.theme.subtext0);
  root.style.setProperty("--base", store.theme.base);
  root.style.setProperty("--mantle", store.theme.mantle);
  root.style.setProperty("--crust", store.theme.crust);
  root.style.setProperty("--accent", store.theme.accent);
  document.body.classList.forEach((el) => {
    document.body.classList.remove(el);
  });
  document.body.classList.add(store.theme.shortName);
}

export const ThemePicker: Component<{}, {}> = function () {
  const mocha = {
    name: "Catppuccin Mocha",
    shortName: "Mocha",
    text: "#cdd6f4",
    overlay1: "#7f849c",
    surface0: "#313244",
    subtext0: "#a6adc8",
    base: "#1e1e2e",
    mantle: "#181825",
    crust: "#11111b",
    accent: "#cba6f7",
  };

  const macchiato = {
    name: "Catppuccin Macchiato",
    shortName: "Macchiato",
    text: "#cad3f5",
    overlay1: "#8087a2",
    surface0: "#363a4f",
    subtext0: "#a5adcb",
    base: "#24273a",
    mantle: "#1e2030",
    crust: "#181926",
    accent: "#c6a0f6",
  };

  const frappe = {
    name: "Catppuccin Frappé",
    shortName: "Frappe",
    text: "#c6d0f5",
    overlay1: "#838ba7",
    surface0: "#414559",
    subtext0: "#a5adce",
    base: "#303446",
    mantle: "#292c3c",
    crust: "#232634",
    accent: "#ca9ee6",
  };

  const latte = {
    name: "Catppuccin Latte",
    shortName: "Latte",
    text: "#4c4f69",
    overlay1: "#8c8fa1",
    surface0: "#ccd0da",
    subtext0: "#6c6f85",
    base: "#eff1f5",
    mantle: "#e6e9ef",
    crust: "#dce0e8",
    accent: "#8839ef",
  };

  const themes = [mocha, macchiato, frappe, latte];

  this.css = `
      background: transparent;
      border-radius: 0.4rem;
      border: none;
      color: var(--text);
      font-family: var(--font-body);
      font-size: 1rem;
      // padding: 0.75rem;
      cursor: pointer;
      // position: fixed;
      // bottom: 0;
      // right: 0;
      // z-index: 1000;
  
      display: flex;
      align-items: center;
  
      user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
  
      .material-symbols-outlined {
        font-size: 1.5rem;
      }
    `;

  return (
    <button
      on:click={(e: MouseEvent) => {
        e.preventDefault();
        let index = themes.indexOf(store.theme);
        store.theme = themes[(index + 1) % themes.length];

        updatePage();
      }}
      title={use(store.theme.name)}
      // on:contextMenu={(e: PointerEvent) => {
      //   e.preventDefault();
      //   let index = themes.indexOf(store.theme);
      //   store.theme = themes[(index - 1) % themes.length];
      //   updatePage();
      // }}
    >
      <span class="material-symbols-outlined">palette</span>&nbsp;&nbsp;
      <span id="theme-name">{use(store.theme.shortName)}</span>
    </button>
  );
};
