import "dreamland";
import { ThemePicker } from "./Themes";
import { convertRemToPixels } from "./Utils";

export const Nav: Component<
  {},
  { rotation: number; name: string; nameState: boolean }
> = function () {
  this.rotation = 0;
  this.name = "BomberFish";
  this.nameState = false;
  this.css = `
    background: var(--mantle);
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    justify-self: flex-start;
    z-index: 100;
    padding: 0.25em 1em;
    width: 80vw;
    height: 3.5rem;
    margin: 0;
    // padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    // border-radius: 0 0 1em 1em;

    h2 {
      justify-self: flex-start;
      margin: 0;
      cursor: pointer;
    }

    img {
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border-radius: 100%;
      display: inline;
      margin-left: 0;
      margin-right: 0.4em;
      -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      transition: -webkit-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      -o-transition: -o-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      -moz-transition: transform 0.5s cubic-bezier(0.3, 0, 0.6, 1),
        -moz-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      transition: transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      transition: transform 0.5s cubic-bezier(0.3, 0, 0.6, 1),
        -webkit-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1),
        -moz-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1),
        -o-transform 0.5s cubic-bezier(0.3, 0, 0.6, 1);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      background: black;
      padding: 2px;

      user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
    }

    #title {
      display: flex;
      align-items: center;
      justify-self: flex-start;
      font-family: var(--font-mono);
    }

    h2 {
      display: flex;
      align-items: flex-start;
      margin: 0!important;
      gap: 0.25rem;
    }

    subt {
      font-size: 0.7rem;
      color: var(--subtext0)
    }

    #right {
      justify-self: flex-end;
      margin-left: auto;
      // padding-right: 1.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > a {
        text-decoration: none;
        transform: scale(1);
        transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        color: var(--accent);
        font-size: 1.1rem;
        display: flex;
        align-items: center;

        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;

        &:hover {
          transform: scale(1.025);
          transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        }
      }
    }
  `;
  return (
    <nav>
      <span id="title">
        <img
          loading="lazy"
          src="/favicon.ico"
          alt="My profile picture"
          width="32"
          height="32"
          style={{ transform: use`rotate(${this.rotation}deg)` }}
          on:pointerdown={() => {
            this.rotation -= 1440;
          }}
        />
        <h2>
          BomberFish
          <subt>(he/him)</subt>
        </h2>
      </span>
      <span id="right">
        <a href="https://blog.bomberfish.ca" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--accent)"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h200q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z"/></svg>
          &nbsp;&nbsp;Blog
        </a>
        <ThemePicker />
      </span>
    </nav>
  );
};

export const TabBar: Component<
  { tabs: string[]; tab?: number },
  { tabInternal: number }
> = function () {
  this.tab = 0;
  this.tabInternal = 0;
  this.css = `
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    overflow-x: auto;

    div {
        display: flex;
        justify-content: flex-start;
        gap: 1.5rem;
        width: 100%;
        margin-block: 0.25rem;
        // padding-inline: 0.5rem;
    }
    
    button, button.active, button:hover, button:focus, button:active {
        transition: all 0.35s cubic-bezier(0, 0.55, 0.45, 1)!important;
    }

    button {
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 1.2rem;
        
        white-space: nowrap;

        background: transparent;
        color: var(--text);
        padding: 0;
        padding-bottom: 1px;
        border: none;
        outline: none!important;
        cursor: pointer;

        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;

        border-bottom: 1px solid transparent;

        font-weight: 475;

        &.active {
        padding-bottom: 1px;
        border-bottom-color: var(--accent);
        font-weight: 700;
        }

        &:hover:not(.active),
        &:focus:not(.active) {
        padding-bottom: 1px;
        border-bottom-color: var(--overlay1);
        }

        &:hover:not(.active) {
        font-weight: 900;
        }

        &:active {
        transform: scale(0.95);
        }
    }
  `;

  return (
    <div id="tabs">
      <div>
        {this.tabs.map((tab, index) => (
          <button
            class={use(this.tabInternal, (tab) => [
              tab === index ? "active" : "",
            ])}
            on:click={() => {
              if (this.tabInternal === index) return;
              this.tabInternal = index;
              document
                .getElementById("mainarticle")!
                .classList.add("transparent");
              if (
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                document.getElementById("mainarticle")!.style.height = "0px";
              }
              setTimeout(
                () => {
                  this.tab = index;
                  document.getElementById("mainarticle")!.style.height =
                    document
                      .getElementById("mainarticle")!
                      .children[0]!.getBoundingClientRect().height +
                    convertRemToPixels(1) +
                    "px";
                  document
                    .getElementById("mainarticle")!
                    .classList.remove("transparent");
                },
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? 150
                  : 470
              );
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
