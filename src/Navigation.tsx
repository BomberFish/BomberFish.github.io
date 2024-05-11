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
      gap: 0.25rem;
    }

    subt {
      font-size: 0.7rem;
      color: var(--subtext0)
    }

    #nav {
      justify-self: flex-end;
      margin-left: auto;
      // padding-right: 1.75rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        transform: scale(1);
        transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        color: var(--accent);
        text-decoration: none;
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
      <span id="nav">
        <a href="https://blog.bomberfish.ca" target="_blank">
          <span class="material-symbols-outlined">open_in_new</span>
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
  div {
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 0.25rem;
    padding-inline: 0.5rem;
  }

  margin-bottom: 1rem;
  margin-top: 0.5rem;
    overflow-x: auto;


    button, button.active, button:hover, button:focus, button:active {
      transition: all 0.35s cubic-bezier(0, 0.55, 0.45, 1);
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

      border-bottom: 1px solid transparent;

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
                    convertRemToPixels(2) +
                    "px";
                  document
                    .getElementById("mainarticle")!
                    .classList.remove("transparent");
                },
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? 150
                  : 500
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
