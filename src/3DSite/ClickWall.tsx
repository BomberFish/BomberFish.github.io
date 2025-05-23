import { Component, scope, h } from "dreamland/core";

export const ClickWall: Component<{}, {}> = function (cx) {
  cx.css = scope`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: grid;
    place-items: center;
    font-size: 3rem;
    transition: 0.4s;


    &.transparent {
      background: rgba(255, 255, 255, 0);
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      opacity: 0;
      transition: 0.4s;
      pointer-events: none;
    }
  `;

  return (
    <div
      on:click={() => {
        cx.root.classList.add("transparent");
        setTimeout(() => {
          cx.root.remove();
        }, 400);
        document.dispatchEvent(new Event("music-restart"));
      }}
    >
      <h1>Click to continue</h1>
    </div>
  );
};
