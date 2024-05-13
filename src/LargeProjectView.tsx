import "dreamland";
import ProjectCardDetails from "./Project.ts";

export const LargeProjectView: Component<{ project: ProjectCardDetails }, {}> =
  function () {
    this.mount = () => {
      setTimeout(() => {
        this.root.classList.remove("transparent");
      }, 1);
    };

    this.css = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      width: 100vw;
      height: 100vh;
      transform: translateZ(100px);

      transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);

      .inner {
        background: var(--base);
        min-width: 400px;
        width: 60vw;
        height: 60vh;
        padding: 1rem;
        padding-top: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 1.25rem;
        transform: translateX(-50%) translateY(-50%);
        z-index: 100;
        border: 0.25px solid var(--surface0);
        overflow: hidden;
      }

      img {
        width: auto;
        max-width: 35vw;
        height: 100%;
        border-radius: 1.25rem;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        object-fit: cover;
        cursor: pointer;
      }

      #title {
        font-size: 2.25rem;
        margin-block: 0;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      button {
        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
      }

      article {
        overflow: scroll;
        display: grid;
        place-items: center;
        height: 60vh;
      }

      .article-inner {
        overflow: scroll;
        position: relative;
        width: 100%;
        height: calc(100% - 7rem);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        overflow: scroll;
        align-self: flex-end;
        justify-self: center
      }

      .head {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 6rem;
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        background: var(--mantle);
        border-radius: 1.25rem 1.25rem 0 0;
        margin: 0;
        z-index: 1000;
      }

      .head > * {
        margin: 1.5rem;
      }

      .desc {
        align-self: flex-start;
        font-size: 1.25rem;
        margin-inline: 1rem;
      }

      .desc p {
        margin-left: 0.5rem;
      }

      button {
        appearance: none;
        background: none;
        border: none;
        // width: 25px;
        // height: 25px;
        color: var(--text);
        display: flex;
        align-items: center;
      }

      .popup-bg {
        transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);
        background: rgba(17, 17, 27, 0.4);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 90;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(1.5px);
        -webkit-backdrop-filter: blur(1.5px);
      }

      kbd {
        margin-right: 0.65rem;
      }

      .link {
        color: var(--text)!important;
        background: var(--surface0);
        text-decoration: none;
        cursor: pointer

        font-size: 1.2rem;

        border-radius: 0.5rem;
        padding: 0.5rem;

        .material-symbols-rounded {
          font-size: 1.6rem;
          margin-right: 0.5rem;
        }

        .link-inner {
          display: flex;
          align-items: center;
        }

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0.1px solid var(--overlay1);

        transition: color 0.2s;
      }

      .link:hover {
        transition: color 0.2s;
        color: var(--accent);
      }

      p.link {
        color: var(--subtext0);
        //font-style: italic;
        border-style: dashed;
        cursor: not-allowed;
      }

      p.link:hover {
        color: var(--subtext0);
      }

      .links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
        gap: 0.5rem;
      }

      &.transparent .inner {
          top: 100vw;
          transition: 0.2s ease-in-out;
        }

        &.transparent
         {
          transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);
        }

        .inner {
          transition: 0.4s cubic-bezier(0.3, 1.2, 0.4, 1);
        }

        &.transparent {
          opacity: 0;
          pointer-events: none;
        }

        &.transparent .popup-bg {
          transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          background: rgba(0, 0, 0, 0);
        }
    `;

    return (
      <div class="popup transparent">
        <div
          class="popup-bg"
          on:click={() => {
            this.root.classList.add("transparent");
            setTimeout(() => {
              this.root.remove();
            }, 200);
          }}
        ></div>
        <div class="inner">
          <div class="head">
            <span id="title">{this.project.title}</span>

            <button
              on:click={() => {
                this.root.classList.add("transparent");
                setTimeout(() => {
                  this.root.remove();
                }, 200);
              }}
            >
              <kbd>esc</kbd>
              <span class="material-symbols-rounded">close</span>
            </button>
          </div>
          <article>
            <div class="article-inner">
              <img
                loading="lazy"
                src={this.project.img}
                on:click={() => {
                  window.open(this.project.img, "_blank");
                }}
                referrerpolicy="no-referrer"
                crossorigin="anonymous"
              />
              <div class="desc">
                <p>{this.project.largeDesc}</p>

                <div class="links">
                  {$if(
                    this.project.links?.length === 0,
                    <p class="link">
                      <span class="link-inner">
                        <span class="material-symbols-rounded">link_off</span>
                        No links available
                      </span>
                    </p>,
                  )}

                  {this.project.links?.map((link) => (
                    <a href={link.url} target="_blank" class="link">
                      <span class="link-inner">
                        <span class="material-symbols-rounded">
                          {link.icon ?? "globe"}
                        </span>
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  };
