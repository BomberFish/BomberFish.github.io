import "dreamland";
import ProjectCardDetails from "./Project";
import { LargeProjectView } from "./LargeProjectView";

export const ProjectCard: Component<{ detail: ProjectCardDetails }, {}> =
  function () {
    this.css = `
      background: var(--surface0);
      width: 320px;
      height: 265px;
      border-radius: 1rem!important;
      padding-bottom: 0.2rem;
      cursor: pointer;
        transform: scale(1);
        transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        box-shadow: 0 0 0px rgba(24, 24, 37, 0);
        border: 0.1px dashed var(--overlay1);

        &:hover {
          transform: scale(1.02);
          transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
          box-shadow: 0 0 20px rgba(24, 24, 37, 0.8);
          border: 0.1px dashed var(--accent);
        }

        &:focus,
        &:focus-visible {
          outline: none;
          border-color: var(--accent)!important;
          border-style: solid!important;
          transform: scale(1.05);
          transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
          box-shadow: 0 0 20px rgba(24, 24, 37, 0.8);
        }

        &.active,
        &:active:focus {
          transform: scale(0.95);
          transition: 0.1s cubic-bezier(0, 0.55, 0.45, 1);
        }

      transform: translateZ(50px);

      .img-container {
        width: 318px;
        height: auto;
        aspect-ratio: 512 / 277;
      }

      img {
        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        border-radius: 0.9rem;
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        object-fit: cover;
      }

      .img-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        border-radius: 0.9rem;
        background: var(--base);
        color: var(--subtext0);
        span {
          font-size: 3rem;
        }
      }

      .title {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        font-family: var(--font-display);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        margin: 0!important;
        margin-top: 0.025rem!important;
      }

      .title > span {
        font-size: 1.3rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }

      .detail {
        margin: 1rem;
        margin-top: 0.1rem;
      }

      p {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }

      kbd {
        position: absolute;
        right: 1rem;
        top: 75%;
        opacity: 0;
        transition: opacity 0.2s;
      }
    `;

    return (
      <div
        class="card"
        on:pointerup={() => {
          document
            .querySelector("main")!
            .appendChild(<LargeProjectView project={this.detail} />);
          (document.activeElement as HTMLElement)?.blur();
        }}
        on:keydown={(e: KeyboardEvent) => {
          if (e.key === "Enter") {
            this.root.classList.add("active");
            setTimeout(() => {
              var ptr = new PointerEvent("pointerup", {
                bubbles: true,
                cancelable: true,
              });
              this.root.dispatchEvent(ptr);

              this.root.classList.remove("active");
            }, 200);
          }
        }}
        tabindex="0"
      >
        <div class="img-container" style={{
          width: "318px",
          height: "auto",
          aspectRatio: "512 / 277",
        }}>
          {$if(this.detail.img != undefined,
            (<img
              loading="lazy"
              src={this.detail.img}
              alt={this.detail.blurb}
              referrerpolicy="no-referrer"
              crossorigin="anonymous"
            />),
            (
              <div class="img-placeholder">
                <span class="material-symbols-rounded">broken_image</span>
              </div>
            ))
          }
        </div>
        <div class="detail">
          <div class="title">
            <span>{this.detail.title}</span>
            <subt> • ({this.detail.year})</subt>
          </div>
          <p>{this.detail.blurb}</p>
          <kbd>↩</kbd>
        </div>
      </div>
    );
  };

export const ProjectList: Component<{ projects: ProjectCardDetails[] }, {}> =
  function () {
    this.css = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 0fr));
        grid-gap: 2rem;
        place-items: center;
        place-content: center;
        justify-content: space-evenly;
      `;
    return (
      <div id="projects-container">
        {use(this.projects, (projects) =>
          projects.map((project) => <ProjectCard detail={project} />)
        )}
      </div>
    );
  };
