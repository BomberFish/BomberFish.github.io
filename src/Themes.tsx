import { Component, scope, cascade, h } from "dreamland/core";
import { store } from "./App";

export const oled = {
  name: "OLED",
  shortName: "OLED",
  text: "#fbf9fb",
  overlay1: "#6e6b6e",
  surface2: "#413f41",
  surface0: "#1d1a1c",
  subtext0: "#a6a4a6",
  base: "#110f11",
  mantle: "#0b0a0b",
  crust: "#000000",
  accent: "#eba6ff",
};

export const mocha = {
  name: "Catppuccin Mocha",
  shortName: "Mocha",
  text: "#cdd6f4",
  overlay1: "#7f849c",
  surface2: "#585b70",
  surface0: "#313244",
  subtext0: "#a6adc8",
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
  accent: "#cba6f7",
};

export const macchiato = {
  name: "Catppuccin Macchiato",
  shortName: "Macchiato",
  text: "#cad3f5",
  overlay1: "#8087a2",
  surface2: "#5b6078",
  surface0: "#363a4f",
  subtext0: "#a5adcb",
  base: "#24273a",
  mantle: "#1e2030",
  crust: "#181926",
  accent: "#c6a0f6",
};

export const frappe = {
  name: "Catppuccin Frappé",
  shortName: "Frappe",
  text: "#c6d0f5",
  overlay1: "#838ba7",
  surface2: "#626880",
  surface0: "#414559",
  subtext0: "#a5adce",
  base: "#303446",
  mantle: "#292c3c",
  crust: "#232634",
  accent: "#ca9ee6",
};

export const latte = {
  name: "Catppuccin Latte",
  shortName: "Latte",
  text: "#4c4f69",
  overlay1: "#8c8fa1",
  surface2: "#acb0be",
  surface0: "#ccd0da",
  subtext0: "#6c6f85",
  base: "#eff1f5",
  mantle: "#e6e9ef",
  crust: "#dce0e8",
  accent: "#8839ef",
};

export function updatePage() {
  var root = document.documentElement;
  console.debug(store.theme);
  if (
    store.theme.name == undefined ||
    store.theme.shortName == undefined ||
    store.theme.text == undefined ||
    store.theme.overlay1 == undefined ||
    store.theme.surface2 == undefined ||
    store.theme.surface0 == undefined ||
    store.theme.subtext0 == undefined ||
    store.theme.base == undefined ||
    store.theme.crust == undefined ||
    store.theme.accent == undefined
  ) {
    console.warn("theme is corrupted or out of date, resetting");
    store.theme = oled;
    updatePage();
  }

  document.head
    .querySelector("meta[name=theme-color]")!
    .setAttribute("content", store.theme.base);
  root.style.setProperty("--text", store.theme.text);
  root.style.setProperty("--overlay1", store.theme.overlay1);
  root.style.setProperty("--surface2", store.theme.surface2);
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

export const ThemePicker: Component<{}, {}> = function (cx) {
  const themes = [oled, mocha, macchiato, frappe, latte];

  cx.css = scope`
      :scope {
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
        -webkit-touch-callout: none;
      }

      .material-symbols-rounded {
        font-size: 1.5rem;
      }

      @media (orientation: portrait) {
        #theme-name {
          display: none;
        }
    }
    `;

  return (
    <button
      on:click={() => {
        let index = themes.indexOf(store.theme ?? oled);
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="var(--text)"
      >
        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
      </svg>
      &nbsp;&nbsp;
      {/* <span id="theme-name">{use(store.theme.shortName)}</span> */}
    </button>
  );
};
