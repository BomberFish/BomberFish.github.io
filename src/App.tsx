import "dreamland";

const sharedCSS = css`
  a:not(nav a, :has(img)) {
    text-decoration: none;
    border-bottom: 1px dotted var(--accent);
    transition: 0.2s border;
  }

  a,
  a:visited:hover {
    color: var(--accent);
    transition: color 0.1s;
  }

  a:visited {
    color: color-mix(in srgb, var(--accent) 70%, var(--base) 30%) !;
  }

  h1,
  h2 {
    font-family: var(--font-display);
    font-weight: 550;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-weight: 700;
  }

  p,li {
    margin-block: 0.25rem;
    line-height: 1.5;
  }

  @media (prefers-reduced-motion: reduce) {
    .card:hover,
    .card:focus,
    .card:focus-visible,
    .card:active,
    .card:active:focus,
    nav a {
      transform: scale(1) !important;
    }

    .popup .inner {
      transition: opacity 0.4s !important;
    }
  }

  @keyframes borderPulse {
    0% {
      border-color: var(--crust);
    }
    10% {
      border-color: var(--accent);
    }
    85% {
      border-color: var(--crust);
    }
    100% {
      border-color: var(--crust);
    }
  }

  ::selection {
    background: var(--accent);
    color: var(--base);
  }

  ::-webkit-scrollbar,
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track,
  *::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb,
  *::-webkit-scrollbar-thumb {
    background: var(--surface0);
    border-radius: 9999px;
    margin: 0 2px;
    transition: background 0.2s;
  }

  ::-webkit-scrollbar-thumb:hover,
  *::-webkit-scrollbar-thumb:hover {
    background: var(--base);
    transition: background 0.2s;
  }

  ::-webkit-scrollbar-button,
  *::-webkit-scrollbar-button,
  ::-webkit-scrollbar-corner,
  *::-webkit-scrollbar-corner {
    display: none;
    background: transparent;
  }

  .card:focus kbd,
  .card:focus-visible kbd {
    opacity: 1;
    transition: opacity 0.2s;
  }

  :focus,
  :focus-visible {
    outline: 2px solid #cba6f7;
    outline-offset: 2px;
    border-radius: 0.1rem;
  }

  subt {
    color: var(--subtext0);
  }

  kbd {
    font-size: 0.85rem;
    /* margin: 0.5rem; */
    font-family: var(--font-mono);
    color: var(--subtext0);
    border: 1px solid var(--subtext0);
    padding: 0.15rem 0.6rem;
    border-radius: 0.3rem;
  }

  .popup.transparent .inner {
    top: 100vw;
    transition: 0.2s ease-in-out;
  }

  .popup.transparent,
  .popup {
    transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);
  }

  .popup .inner {
    transition: 0.4s cubic-bezier(0.3, 1.2, 0.4, 1);
  }

  .popup.transparent {
    opacity: 0;
  }

  .popup.transparent .popup-bg {
    transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    background: rgba(0, 0, 0, 0);
  }

  @media (orientation: portrait) {
    display: initial !important;
    width: 100vw;

    #theme-name {
      display: none;
    }

    #content,
    nav {
      width: calc(100vw - 1em) !important;
    }

    .popup .inner {
      width: max(100%, 100vw) !important;
      height: max(100%, 100vh) !important;
      transition: 0.4s cubic-bezier(0.3, 1.2, 0.4, 1);
    }

    .popup .inner article {
      height: max(100%, 100vh);
    }

    .popup .inner .article-inner {
      flex-direction: column;
      align-items: center;
    }

    .popup .inner article img {
      width: 90vw;
      max-width: initial;
      height: auto;
      justify-self: center;
    }
  }
`;

// MARK: THEMING
let store = $store(
  {
    theme: {
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
    },
    playMusic: true,
  },
  { ident: "userOptions", backing: "localstorage", autosave: "auto" }
);

function updatePage() {
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

const ThemePicker: Component<{}, {}> = function () {
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

// MARK: PROJECTS
class ProjectCardDetails {
  img: string;
  title: string;
  blurb: string;
  year: number;
  largeDesc: string;
  links?: { name: string; url: string; icon?: string }[];

  constructor(
    imgURL: string,
    title: string,
    blurb: string,
    year: number,
    largeDesc: string,
    links?: { name: string; url: string; icon?: string }[]
  ) {
    this.img = imgURL;
    this.title = title;
    this.blurb = blurb;
    this.year = year;
    this.largeDesc = largeDesc;
    this.links = links;
  }
}

const projects = [
  new ProjectCardDetails(
    "/proj-thumbnails/anura.webp",
    "AnuraOS",
    "Contributor to webOS since v2.x",
    2024,
    "AnuraOS is the next-gen webOS and development environment with full Linux emulation. I've been making various contributions since March 2024, most of which reworked various parts of the UI. AnuraOS 2.0 beta, which contains my contributions, is currently slated for release in Q2 2024, with a full release planned for later this year.",
    [
      {
        name: "v1.x (production instance)",
        url: "https://anura.pro",
      },
      {
        name: "v2.0 (preview instance, no v86)",
        url: "https://anura.bomberfish.ca",
      },
    ]
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/mandelapro.webp",
    "Mandela Pro",
    "Cancelled customization app",
    2024,
    "Mandela Pro was a cancelled iOS customization app I created solo in early 2024. It was intended for iOS 16.0-17.0, but was cancelled due to the release of Dopamine 2.0 for 16.x versions and the lack of interest for iOS 17.0.",
    []
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/dssos.webp",
    "dssOS",
    "Live dev environment for ChromeOS devices",
    2023,
    "dssOS was one of my first projects involving ChromeOS, and was a live development environment for ChromeOS devices. It used a modified diagnostic tool to boot into a Linux chroot, which you could use for programming. dssOS was created in November 2023.",
    [
      {
        name: "Website",
        url: "https://dssos.nineeleven.tech",
      },
    ]
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/picasso.webp",
    "Picasso",
    "iOS customization app with 100k+ users",
    2023,
    "Picasso is a customization app for iOS 15.0-17.0, using various security vulnerabilities to allow for deep customization. At its peak, it had over 100,000 active users. I worked with sourcelocation to develop it, and it was first released in August 2023.",
    [
      {
        name: "Source Release",
        url: "https://github.com/sourcelocation/Picasso-v3",
        icon: "code",
      },
      {
        name: "Discord",
        url: "https://discord.gg/b6bwaDK2VZ",
        icon: "chat",
      },
    ]
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/appcommander.webp",
    "AppCommander",
    "App Manager for iOS 15.0-16.1.2",
    2023,
    "AppCommander (v1.x) was an app manager for iOS 15.0-16.1.2, and allowed the user to perform advanced app management using a sandbox escape that utilized the MacDirtyCow vunerability. Some key features included creating app backups, exporting IPA files, clearing app caches, and more. AppCommander 1.0.0 was released in July 2023.",
    [
      {
        name: "Source Code (v1)",
        url: "https://github.com/BomberFish/AppCommander-legacy",
        icon: "code",
      },
      {
        name: "Source Code (v2)",
        url: "https://github.com/BomberFish/AppCommander",
        icon: "code",
      },
    ]
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/cowabunga.webp",
    "Cowabunga MDC",
    "Major contributor to customization app",
    2023,
    "Cowabunga was a major project I contributed to in 2023. It was a customization app for iOS 14.0-16.1.2, using the MacDirtyCow vunerability to allow for deep customization. My contributions included adding tools such as an enterprise certificate blacklist remover, and a tool to remove the three-app limit on developer-signed apps.",
    [
      {
        name: "Source Code",
        url: "https://github.com/leminlimez/Cowabunga",
        icon: "code",
      },
      {
        name: "Website",
        url: "https://cowabun.ga",
      },
      {
        name: "Discord",
        url: "https://discord.gg/cowabunga",
        icon: "chat",
      },
    ]
  ),
];

const ProjectCard: Component<{ detail: ProjectCardDetails }, {}> = function () {
  this.css = `
    background: var(--surface0);
    width: 320px;
    height: 265px;
    border-radius: 1rem!important;
    padding-bottom: 0.2rem;
    // margin: 1.5rem;

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
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .title {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      font-family: var(--font-display);
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
      <div class="img-container">
        <img
          loading="lazy"
          src={this.detail.img}
          alt={this.detail.blurb}
          referrerpolicy="no-referrer"
          crossorigin="anonymous"
        />
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

// MARK: LARGE PROJECT

const LargeProjectView: Component<{ project: ProjectCardDetails }, {}> =
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
        color: var(--text);
        background: var(--surface0);
        text-decoration: none;
        cursor: pointer

        font-size: 1.2rem;

        border-radius: 0.5rem;
        padding: 0.5rem;

        .material-symbols-outlined {
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
    `;

    return (
      <div class="popup transparent">
        <div
          class="popup-bg"
          on:pointerdown={() => {
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
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <article>
            <div class="article-inner">
              <img
                loading="lazy"
                src={this.project.img}
                on:pointerup={() => {
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
                        <span class="material-symbols-outlined">link_off</span>
                        No links available
                      </span>
                    </p>
                  )}

                  {this.project.links?.map((link) => (
                    <a href={link.url} target="_blank" class="link">
                      <span class="link-inner">
                        <span class="material-symbols-outlined">
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

// MARK: MAIN BODY
const Intro: Component<{}, {}> = function () {
  this.css = `
    width: 100%;
    ul {
      list-style-type: circle;
      padding-inline-start: 2rem;
    }
    
    ul ul {
      list-style-type: "→ ";
      padding-inline-start: 2rem;
    }
  `;
  return (
    <article>
      <h1>Hi 👋</h1>
      <p>
        I'm Hariz, a high school student from Canada. I'm a wannabe "software
        engineer" and I sometimes do cool things.
      </p>
      <p>
        I'm into webdev, native iOS development, and a bit of security research.
      </p>
      <h2>About me</h2>
      <ul>
        <li>I was one of the winners of the 2024 Swift Student Challenge</li>
        <li>
          I know the following programming languages (well):
          <ul>
            <li>Swift (the GOAT)</li>
            <li>JavaScript/TypeScript</li>
            <li>C/C++/Objective-C</li>
            <li>Bash</li>
            <li>Python</li>
          </ul>
        </li>
        <li>
          I'm a member of{" "}
          <a href="https://mercurywork.shop" target="blank">
            Mercury Workshop
          </a>
        </li>
        <li>I play the guitar (!!)</li>
        <li>I use Arch (btw)</li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://fosstodon.org/@BomberFish" target="blank" rel="me">
            Fediverse
          </a>
          &nbsp;(@BomberFish@fosstodon.org)
        </li>
        <li>
          <a href="https://reddit.com/u/DALEK_77" target="blank" rel="me">
            Reddit
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bomberfish77" target="blank" rel="me">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/BomberFish" target="blank" rel="me">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:hariz@bomberfish.ca">Email</a> (hariz@bomberfish.ca)
          <ul>
            <li>I might be slow to respond, I don't check my email often.</li>
          </ul>
        </li>
        <li>
          Discord
          <ul>
            <li>
              @bomberfish <strong>(Main account)</strong>
            </li>
            <li>@hanz_was_here</li>
            <li>@pageprotectionlayer</li>
            <li>@securepagetablemonitor</li>
          </ul>
        </li>
        <li>
          <span>Signal: @bomberfish.77</span>
          <ul>
            <li>Please only use this if all else fails.</li>
          </ul>
        </li>
      </ul>

      <h2>Other things on this site</h2>
      <ul>
        <li>
          <a href="https://bomberfish.ca/games">/games</a>
        </li>
        <li>
          <a href="./coolthings/index.html">/coolthings</a>
        </li>
        <li>
          <a href="./tools/index.html">/tools</a>
        </li>
      </ul>
    </article>
  );
};

const Footer: Component<{}, {}> = function () {
  this.css = `
    #konami > kbd {
      margin-right: 0.65rem;
    }

    #konami > a {
      opacity: 0;
      pointer-events: none;
      transition: 0.2s;
    }

    #konami:hover > a,
    #konami:focus-within > a {
      opacity: 1;
      pointer-events: auto;
      transition: 0.2s;
    }

    #webbtns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(31px, 1.9375rem), 0fr));
      grid-gap: calc(max(31px, 1.9375rem) * 3.5);
    }
  `;
  return (
    <footer>
      <subt>
        Website made with &lt;3 in{" "}
        <a href="https://dreamland.js.org" target="blank">
          DreamlandJS
        </a>
        <br></br>
        <span>
          This website is licenced under the GNU Affero GPL Version 3.{" "}
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            target="_blank"
          >
            Learn more.
          </a>
        </span>
        <br></br>
        {$if(
          new URL(window.location.href).searchParams.get("higherdimension") ===
            null,
          <div>
            <div>
              Pro tip: you can navigate this site with your keyboard! Press{" "}
              <kbd>tab</kbd> to start.
              <br></br>
              <br></br>
            </div>
            <div id="konami">
              <kbd>↑</kbd>
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              <kbd>↓</kbd>
              <kbd>←</kbd>
              <kbd>→</kbd>
              <kbd>←</kbd>
              <kbd>→</kbd>
              <kbd>b</kbd>
              <kbd>a</kbd>
              <a href="/?higherdimension">I'm lazy</a>
            </div>
          </div>
        )}
        <br></br>
        <div id="webbtns">
          <WebButton
            src="https://simpleanalyticsbadges.com/bomberfish.ca?logo=cba6f7&text=cdd6f4&background=181825&radius=8"
            title="Privacy-respecting analytics, because I kinda want to see if anyone is actually viewing my site."
            href="https://dashboard.simpleanalytics.com/bomberfish.ca"
          />
          <WebButton
            src="/dlbadge.webp"
            title="Built with dreamland.js"
            href="https://dreamland.js.org"
          />
        </div>
        <p>
          bomberfish.ca is a <strong>blink-free zone</strong>.
        </p>
      </subt>
    </footer>
  );
};

const Nav: Component<
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

const WebButton: Component<
  {
    src: string;
    href: string;
    alt?: string;
    title?: string;
    rounded?: boolean;
    radius?: string;
  },
  {}
> = function () {
  this.css = `
  width: max-content;
  height: max(31px, 1.9375rem);
  img {
    width: auto;
    height: max(31px, 1.9375rem);
    border-radius: ${
      this.rounded ? (this.radius ? this.radius : "0.5rem") : "0px"
    }
  }
  `;

  return (
    <a href={this.href} target="_blank">
      <img
        loading="lazy"
        src={this.src}
        alt={this.alt || this.title || ""}
        title={this.title || this.alt || ""}
        referrerpolicy="no-referrer"
        crossorigin="anonymous"
      />
    </a>
  );
};

const App: Component<
  {},
  {
    rotation: number;
    projects: ProjectCardDetails[];
    prevMouseX: number;
    prevMouseY: number;
    prevX: number;
    prevY: number;
    timeout: boolean;
  }
> = function () {
  this.prevMouseX = 0;
  this.prevMouseY = 0;
  this.prevX = 0;
  this.prevY = 0;
  this.projects = projects;
  this.rotation = 0;
  this.timeout = false;
  this.css = `
    // background: var(--crust);
    color: var(--text);
    font-family: var(--font-body);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1,
    h2,
    h3 {
      font-family: var(--font-display)
    }

    h2 {
      font-size: 1.6rem;
      margin-bottom: 0;
      margin-top: 1rem;
    }

    nav h2 {
      font-size: 1.5rem;
    }

    #projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 0fr));
      grid-gap: 2rem;
      place-items: center;
      place-content: center;
    }

    #content {
      background: var(--base);
      padding: 1em;
      width: 80vw;
    }

    .card {
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
    }

    subt {
      color: var(--subtext0);
    }
  `;

  setTimeout(() => {
    document.querySelector("main")?.dispatchEvent(
      new MouseEvent("move", {
        clientX: window.innerWidth,
        clientY: window.innerHeight,
      })
    );
  }, 2);

  return (
    <main
      on:mousemove={(e: MouseEvent) => {
        // i feel like this is way more complicated than it needs to be
        // console.debug(e.clientX, e.clientY);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          console.info("user prefers less motion");
          return;
        }
        const offsetX = this.prevMouseX - e.clientX;
        const offsetY = this.prevMouseY - e.clientY;
        // console.debug(offsetX, offsetY);
        const x = this.prevX - offsetX * 0.06;
        const y = this.prevY - offsetY * 0.06;
        // console.debug(x, y);
        document.documentElement.style.setProperty("--bgmoveX", x + "px");
        document.documentElement.style.setProperty("--bgmoveY", y + "px");
        this.prevMouseX = e.clientX;
        this.prevMouseY = e.clientY;
        this.prevX = x;
        this.prevY = y;
      }}
      class={sharedCSS}
    >
      <Nav />
      <div id="content">
        <Intro />
        <h2 style="margin-bottom: 0.83em!important;">My work</h2>
        <div id="projects-container">
          {use(this.projects, (projects) =>
            projects.map((project) => <ProjectCard detail={project} />)
          )}
        </div>
        <h2>Website Design Philosophy</h2>
        <ul>
          <li>Be as keyboard-accessible as possible.</li>
          <li>
            JavaScript is not the enemy. Take advantage of all the latest
            gizmos.
          </li>
          <li>Optimize for size. Some people use Canadian cellular data.</li>
          <li>Have some fun. Don't be too bland.</li>
        </ul>
        <br></br>
        <Footer />
      </div>
    </main>
  );
};

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// MARK: COOL 3D SHIT
// thanks cooleletronis (writabl)
const Screen: Component<
  {
    x?: number;
    y?: number;
    z?: number;
    rx?: number;
    ry?: number;
    rz?: number;
    width?: number;
    height?: number;
    autoHeight?: boolean;
  },
  {
    children: Element;
  }
> = function () {
  this.css = `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  
    width: ${this.width + "px" || "auto"};
    height: ${this.height + "px" || "auto"};

    transition: 0.75s transform cubic-bezier(0.37, 0, 0.63, 1);

    transform-origin: 50% 0;
    transform: rotateX(calc(var(--rX))) rotateY(calc(var(--rY))) rotateZ(calc(var(--rZ))) translate3d(calc(var(--pX)*var(--gridsize)),calc(var(--pY)*var(--gridsize)),calc(var(--pZ)*var(--gridsize)));

    article {
      background: #11111baa;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.75em;
      border-radius: 1rem;
      border: 1px solid var(--surface0);
      transition: 0.3s;
      overflow: auto;
      height: ${this.autoHeight ? "auto" : "100%"};
    
      &:hover {
        border-color: var(--accent);
        transition: border-color 0.3s;
      }
    
      width: 100%;
    }
  `;

  this.x ||= 0;
  this.y ||= 0;
  this.z ||= 0;
  this.rx ||= 0;
  this.ry ||= 0;
  this.rz ||= 0;

  this.mount = () => {
    // works around a bug i will fix later
    handle(
      use`--pX: ${this.x || 0}; --pY: ${this.y || 0}; --pZ: ${
        this.z || 0
      }; --rX: ${this.rx || 0}deg; --rY: ${this.ry || 0}deg; --rZ: ${
        this.rz || 0
      }deg`,
      (v) => ((this.root as HTMLElement).style.cssText = v)
    );
  };

  return (
    <div
      on:mouseenter={() => {
        if (this.rz !== undefined) {
          this.z! += 0.3;
        }
      }}
      on:mouseleave={() => {
        if (this.rz !== undefined) {
          this.z! -= 0.3;
        }
      }}
      on:dblclick={() => {
        if (this.rz !== undefined) {
          this.rz! += 360;
        }
      }}
    >
      {this.children}
    </div>
  );
};

function numberInput(text: string, initialValue: number): number {
  let ans = prompt(text, initialValue.toString());
  if (ans) {
    if (isNaN(+ans)) {
      alert("Invalid input");
      return initialValue;
    }
    return +ans;
  }
  return initialValue;
}

const SuperCoolAndEpicDanceFloor: Component<{}, {}> = function () {
  this.css = `
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(7, 1fr);

  .tile {
    background: var(--base);
    border: 10px solid var(--mantle);
    animation: 1s linear infinite forwards borderPulse;
    width: 150px;
    height: 150px;
  }
  `;

  return (
    <div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
    </div>
  );
};

const ThreeDeeInfo: Component<{}, {}> = function () {
  return (
    <article>
      <h2>About the 3D view</h2>
      <h3>Quick Start</h3>
      <ul>
        <li>Use WASD to move</li>
        <li>Use the left and right arrow keys to rotate the camera</li>
        <li>Use the up and down arrow keys to move up/down</li>
      </ul>
      <p>Check behind you to see my blog.</p>
      <h3>How I did it</h3>
      <p>
        The 3D effects are done purely with CSS transforms. No WebGL, canvas
        elements, smoke, or mirrors. I use a JavaScript framework called{" "}
        <a href="https://dreamland.js.org/?kawaii" target="_blank">
          DreamlandJS
        </a>{" "}
        for basic reactivity, and to make development easier. You can check out
        the source of this page{" "}
        <a
          href="https://github.com/BomberFish/BomberFish.github.io/blob/master/src/App.tsx"
          target="_blank"
        >
          here
        </a>
        . (warning: spaghetti code)
      </p>
      <h3>FAQ</h3>
      <div>Q: Why?</div>
      <div>A: Because it's cool :3</div>
      <br></br>
      <div>Q: Why can't I click any links?</div>
      <div>
        A: You are using Firefox. The Firefox devs (in their infinite wisdom)
        refuse to implement modern standards correctly.
      </div>
      <br></br>
      <div>Q: This is so cool, why isn't it the default view?</div>
      <div>
        A: It's an accessibility nightmare, and doesn't even work right on most
        browsers (thanks Mozilla). Also, it's completely broken on phones! (I'm
        just too lazy to implement mobile controls :P)
      </div>
      <br></br>
      <div>Q: GRRR!! Why did you use a JS framework!! So bloated!!</div>
      <div>
        A: Calm down Mr.Vanilla-purist. I'm sure you're great fun at parties.
      </div>
      <br></br>
      <div>Q: Where did you get the idea?</div>
      <div>
        I was mainly inspired by{" "}
        <a href="https://dev.coolelectronics.me" target="_blank">
          coolelectronics' website
        </a>
        , which pulls off something similar. I actually used some of his code
        for this site (cooleletronis {/* yes this is mispelled on purpose */} if
        you are reading this thank you), so it wouldn't be possible without him.
      </div>
    </article>
  );
};

const ThreeDeeApp: Component<
  {},
  {
    projects: ProjectCardDetails[];
    rotation: number;
    x: number;
    y: number;
    z: number;
    r: number;
    speed: number;
    mult: number;
  }
> = function () {
  this.projects = projects;
  this.rotation = 0;
  this.speed = 5;
  this.mult = 2;

  this.css = `
    width: 100%;
    height: 100%;
    perspective: var(--perspective);
  
    camera {
      position: absolute;
      inset: 0;
      pointer-events: all;
      perspective: var(--perspective);
      backface-visibility: hidden;
      contain: layout style size;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      will-change: transform;
    }
  
    stage {
      position: fixed;
      top: 50%!important;
      left: 50%!important;
      inset: 0;
      backface-visibility: shown;
      transform-style: preserve-3d;
    }

    debug {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      position: fixed;
      top: 0.5rem;
      left: 0.8rem;
      width: 200px;

      a {
        display: flex;
        text-decoration: none;
        font-size: 100%!important;
      }
    }
    input {
      accent-color: var(--accent);
    }

    }
  `;

  this.x = window.innerWidth / -40;
  this.y = window.innerHeight / -16;
  this.z = -200;
  this.r = -10;

  this.mount = () => {
    // alert(window.innerWidth)
    function easeOutCirc(x: number) {
      return Math.sqrt(1 - Math.pow(x - 1, 2));
    }

    console.debug("mount");
    const c = Math.abs(
      -(1000 + (2188 /* god this is so jank */ / window.innerWidth) * 200) -
        this.z
    );
    console.debug(c);
    for (let i = 0; i < c; i++) {
      setTimeout(() => {
        console.debug("z anim tick");
        this.z -= 1;
      }, easeOutCirc(i / c) * 500);
    }

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        console.debug("rot anim tick");
        this.r += 1;
      }, easeOutCirc(i / 10) * 500);
    }
  };

  setInterval(() => {
    // console.debug("polling inputs", keys)

    if (keydown("ArrowRight")) {
      this.r += 0.5;
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveX")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveX",
        `${+orig - 2.5}px`
      );
    }
    if (keydown("ArrowLeft")) {
      this.r -= 0.5;
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveX")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveX",
        `${+orig + 2.5}px`
      );
    }

    if (keydown("ArrowUp")) {
      this.y += keydown("Shift") ? this.speed * this.mult : this.speed;
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveY")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveY",
        `${+orig + 0.35}px`
      );
    }
    if (keydown("ArrowDown")) {
      this.y -= keydown("Shift") ? this.speed * this.mult : this.speed;
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveY")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveY",
        `${+orig - 0.35}px`
      );
    }

    if (keydown("w")) {
      let speed = keydown("Shift") ? this.speed * this.mult : this.speed;
      move(0, speed);
      // too buggy
      // let orig =
      //   document.documentElement.style.getPropertyValue("--bgscale") || "1";
      // document.documentElement.style.setProperty(
      //   "--bgscale",
      //   `${+orig + speed * 0.00015}`
      // );
    }

    if (keydown("s")) {
      let speed = -(keydown("Shift") ? this.speed * this.mult : this.speed);
      move(0, speed);
      // let orig =
      //   document.documentElement.style.getPropertyValue("--bgscale") || "1";
      // document.documentElement.style.setProperty(
      //   "--bgscale",
      //   `${+orig + speed * 0.00015}`
      // );
    }

    if (keydown("a")) {
      let speed = -(keydown("Shift") ? this.speed * this.mult : this.speed);
      move(speed, 0);
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveX")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveX",
        `${+orig - speed * 0.35}px`
      );
    }

    if (keydown("d")) {
      let speed = keydown("Shift") ? this.speed * this.mult : this.speed;
      move(speed, 0);
      let orig = document.documentElement.style
        .getPropertyValue("--bgmoveX")
        .replace("px", "");
      document.documentElement.style.setProperty(
        "--bgmoveX",
        `${+orig - speed * 0.35}px`
      );
    }
  });

  const move = (x: number, z: number) => {
    // a bit more complex than neccesary because i'm bad at math
    const vel = -Math.hypot(x, z);
    const r = Math.atan2(z, x);
    const ang = this.r * -(Math.PI / 180) + r + Math.PI / 2;

    this.z += Math.cos(ang) * vel;
    this.x += Math.sin(ang) * vel;
  };

  return (
    <main class={sharedCSS}>
      <debug>
        <a href="./" style="color: var(--accent)">
          <span class="material-symbols-outlined">arrow_back</span> Back to
          sanity
        </a>
        <br></br>
        <input
          type="range"
          min="0.1"
          max="200"
          id="speed"
          value={use(this.speed, (v) => v * 10)}
          on:change={() => {
            this.speed =
              +(document.getElementById("speed") as HTMLInputElement).value /
              10;
          }}
        />
        <label
          for="speed"
          on:pointerdown={() => {
            this.speed = numberInput("Enter new speed", this.speed);
          }}
        >
          {use`Speed (${this.speed})`}
        </label>
        <div
          on:pointerdown={() => {
            this.x = numberInput("Enter new position", this.x);
          }}
        >
          x: {use(this.x, (v) => v.toFixed(2))}
        </div>
        <div
          on:pointerdown={() => {
            this.y = numberInput("Enter new position", this.y);
          }}
        >
          y: {use(this.y, (v) => v.toFixed(2))}
        </div>
        <div
          on:pointerdown={() => {
            this.z = numberInput("Enter new position", this.z);
          }}
        >
          z: {use(this.z, (v) => v.toFixed(2))}
        </div>
        <div
          on:pointerdown={() => {
            this.r = numberInput("Enter new position", this.r);
          }}
        >
          r: {use(this.r, (v) => v.toFixed(2))}
        </div>
        <br></br>
        {use(store.playMusic, (v) => (
          <div
            on:click={() => {
              store.playMusic = !store.playMusic;
              store.playMusic !== false
                ? document.dispatchEvent(new Event("music-restart"))
                : document.dispatchEvent(new Event("end-music"));
            }}
          >
            <span class="material-symbols-outlined">
              {v !== false ? "volume_up" : "volume_off"}
            </span>
          </div>
        ))}
      </debug>
      <camera
        style={{
          transform: use`translate3d(0px,0px, var(--perspective)) rotateX(0deg) rotateY(${this.r}deg) rotateZ(0deg) perspective(var(--perspective))`,
        }}
      >
        <stage
          style={{
            transform: use`translate3d(${this.x}px, ${this.y}px, ${this.z}px)`,
          }}
        >
          <Screen
            ry={10}
            rx={10}
            x={-12}
            y={-12}
            z={-15}
            width={400}
            height={320 * 4}
          >
            <article>
              <h2>My work</h2>
              <div id="projects-container">
                {use(this.projects, (projects) =>
                  projects.map((project) => (
                    <div>
                      <ProjectCard detail={project} />
                      <br></br>
                      <br></br>
                    </div>
                  ))
                )}
              </div>
            </article>
          </Screen>
          <Screen
            ry={-20}
            x={-4}
            y={-6}
            z={-5}
            width={window.innerWidth * 0.4}
            height={window.innerHeight * 0.5}
          >
            <Intro />
          </Screen>
          <Screen
            // ry={30}
            rx={30}
            x={2}
            y={5}
            z={-4}
            autoHeight={true}
          >
            <article>
              <Footer />
            </article>
          </Screen>
          <Screen
            ry={-40}
            rz={10}
            rx={-2}
            x={14}
            y={-6}
            z={-10}
            width={window.innerWidth * 0.2}
            height={window.innerHeight * 0.5}
          >
            <ThreeDeeInfo />
          </Screen>
          <Screen
            ry={200}
            x={-5}
            y={-5}
            z={-20}
            width={window.innerWidth * 0.4}
            height={window.innerHeight * 0.5}
          >
            <article>
              <h2>Blog</h2>
              <iframe
                style="width: 100%; height: 100%;"
                src="https://blog.bomberfish.ca"
                frameborder="0"
              ></iframe>
            </article>
          </Screen>
          <Screen
            ry={-5}
            x={4}
            y={-8.5}
            z={-7}
            width={window.innerWidth * 0.4}
            height={convertRemToPixels(3.5)}
          >
            <div
              style={{
                background: "var(--mantle)",
                margin: "0",
                padding: "0",
                fontSize: "1.5rem",
                fontWeight: "600",
                fontFamily: "var(--font-mono)",
              }}
            >
              <marquee
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  loading="lazy"
                  src="/favicon.ico"
                  style="width: 1.5rem;height:1.5rem;border-radius:50%;margin-right:5px;"
                  referrerpolicy="no-referrer"
                  crossorigin="anonymous"
                ></img>
                BomberFish
              </marquee>
            </div>
          </Screen>
          <Screen
            rx={-90}
            rz={2}
            width={1050}
            height={1350}
            x={-4}
            y={-15}
            z={10}
          >
            <SuperCoolAndEpicDanceFloor />
          </Screen>
        </stage>
      </camera>
    </main>
  );
};

const ClickWall: Component<{}, {}> = function () {
  this.css = `
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
        this.root.classList.add("transparent");
        setTimeout(() => {
          this.root.remove();
        }, 400);
        document.dispatchEvent(new Event("music-restart"));
      }}
    >
      <h1>Click to continue</h1>
    </div>
  );
};

let keys = new Map();
document.addEventListener("keydown", (e) => {
  keys.set(e.key, true);
});
document.addEventListener("keyup", (e) => {
  keys.delete(e.key);
});
function keydown(key: string) {
  return keys.has(key);
}

const DarkReaderWarning: Component<{}, {}> = function () {
  this.mount = () => {
    setInterval(() => {
      if (
        !document.documentElement.getAttribute("data-darkreader-mode") ||
        !document.documentElement.getAttribute("data-darkreader-scheme")
      ) {
        this.root.remove();
      }
    });
  };

  function ctpRed(): string {
    switch (document.body.classList[0]) {
      case "Mocha":
        return "#f38ba8";
      case "Macchiato":
        return "#ed8796";
      case "Frappe":
        return "#e78284";
      case "Latte":
        return "#d20f39";
      default:
        return "#f00";
    }
  }

  this.css = `
    position: fixed;
    bottom: 0;
    right: 0;
    background: var(--surface0);
    color: var(--text);
    padding: 0.5rem 1rem;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-top-left-radius: 0.75rem;

    span {
      color: ${ctpRed()};
    }

  `;

  return (
    <div id="darkreader-warning">
      <span class="material-symbols-outlined">warning</span>{" "}
      <p>Dark Reader breaks this site.</p>
      <p>Please disable it.</p>
    </div>
  );
};

// MARK: WINDOW LOAD
window.addEventListener("load", () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      document.querySelectorAll(".popup").forEach((popup) => {
        popup.classList.add("transparent");
        setTimeout(() => {
          popup.remove();
        }, 200);
      });
    }
  });

  let params = new URL(window.location.href).searchParams;
  console.debug(params);
  if (params.has("higherdimension")) {
    let audio: HTMLAudioElement = new Audio("/epic.ogg");
    audio.loop = true;

    document.addEventListener("end-music", () => {
      audio.pause();
    });

    document.addEventListener("music-restart", () => {
      audio.play();
    });

    // const audioCtx = new AudioContext();
    // const analyser = audioCtx.createAnalyser();

    // const source = audioCtx.createMediaElementSource(audio);
    // console.debug(source);
    // source.connect(analyser).connect(audioCtx.destination);
    // console.debug(source);

    if (store.playMusic !== false) {
      console.info("music start");
      audio.play().catch((e) => {
        console.error("could not start audio: " + e);
        document.body.appendChild(<ClickWall />);
        return;
      });
      // audioCtx.resume();
    }

    document.getElementById("app")!.replaceWith(<ThreeDeeApp />);
    document.body.classList.add("cool");
  } else {
    let sc = document.createElement("script");
    sc.src = "/oneko.js";
    document.body.appendChild(sc);
    updatePage();
    document.getElementById("app")!.replaceWith(<App />);

    var konamiCurrent = 0;
    var konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    document.documentElement.addEventListener("keydown", (e: KeyboardEvent) => {
      console.debug(e.key);

      if (e.key === konamiCode[konamiCurrent]) {
        console.debug("match");
        e.preventDefault();
        konamiCurrent++;

        if (konamiCurrent === konamiCode.length) {
          konamiCurrent = 0;
          window.location.href =
            new URL(window.location.href).origin + "/?higherdimension";
        }
      } else {
        konamiCurrent = 0;
      }
    });
  }

  setInterval(() => {
    if (
      document.documentElement.getAttribute("data-darkreader-mode") ||
      document.documentElement.getAttribute("data-darkreader-scheme")
    ) {
      document.body.appendChild(<DarkReaderWarning />);
    }
  }, 1000);
});
