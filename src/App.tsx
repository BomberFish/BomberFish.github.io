import "dreamland";

let store = $store(
  {
    theme: {
      name: "Catppuccin Mocha",
      text: "#cdd6f4",
      overlay1: "#7f849c",
      surface0: "#313244",
      subtext0: "#a6adc8",
      base: "#1e1e2e",
      mantle: "#181825",
      accent: "#cba6f7",
    },
  },
  { ident: "theme", backing: "localstorage", autosave: "auto" }
);

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

const ThemePicker: Component<{}, {}> = function () {
  const mocha = {
    name: "Catppuccin Mocha",
    text: "#cdd6f4",
    overlay1: "#7f849c",
    surface0: "#313244",
    subtext0: "#a6adc8",
    base: "#1e1e2e",
    mantle: "#181825",
    accent: "#cba6f7",
  };

  const macchiato = {
    name: "Catppuccin Macchiato",
    text: "#cad3f5",
    overlay1: "#8087a2",
    surface0: "#363a4f",
    subtext0: "#a5adcb",
    base: "#24273a",
    mantle: "#1e2030",
    accent: "#c6a0f6",
  };

  const frappe = {
    name: "Catppuccin Frappe",
    text: "#c6d0f5",
    overlay1: "#838ba7",
    surface0: "#414559",
    subtext0: "#a5adce",
    base: "#303446",
    mantle: "#292c3c",
    accent: "#ca9ee6",
  };

  const latte = {
    name: "Catppuccin Latte",
    text: "#4c4f69",
    overlay1: "#8c8fa1",
    surface0: "#ccd0da",
    subtext0: "#6c6f85",
    base: "#eff1f5",
    mantle: "#e6e9ef",
    accent: "#8839ef",
  };

  const themes = [mocha, macchiato, frappe, latte];

  this.css = css`
    background: var(--surface0);
    border-top-left-radius: 1rem;
    border: none;
    color: var(--text);
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 0.75rem;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;

    display: flex;
    align-items: center;

    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  `;

  return (
    <button
      on:click={() => {
        let index = themes.indexOf(store.theme);
        store.theme = themes[(index + 1) % themes.length];

        var root = document.documentElement;
        document.head
          .querySelector("meta[name=theme-color]")!
          .setAttribute("content", store.theme.mantle);
        root.style.setProperty("--text", store.theme.text);
        root.style.setProperty("--overlay1", store.theme.overlay1);
        root.style.setProperty("--surface0", store.theme.surface0);
        root.style.setProperty("--subtext0", store.theme.subtext0);
        root.style.setProperty("--base", store.theme.base);
        root.style.setProperty("--mantle", store.theme.mantle);
        root.style.setProperty("--accent", store.theme.accent);
      }}
      on:contextMenu={(e: PointerEvent) => {
        e.preventDefault();
        let index = themes.indexOf(store.theme);
        store.theme = themes[(index - 1) % themes.length];

        var root = document.documentElement;
        document.head
          .querySelector("meta[name=theme-color]")!
          .setAttribute("content", store.theme.mantle);
        root.style.setProperty("--text", store.theme.text);
        root.style.setProperty("--overlay1", store.theme.overlay1);
        root.style.setProperty("--surface0", store.theme.surface0);
        root.style.setProperty("--subtext0", store.theme.subtext0);
        root.style.setProperty("--base", store.theme.base);
        root.style.setProperty("--mantle", store.theme.mantle);
        root.style.setProperty("--accent", store.theme.accent);
      }}
    >
      <span class="material-symbols-outlined">palette</span>&nbsp;&nbsp;
      {use(store.theme.name)}
    </button>
  );
};

const LargeProjectView: Component<{ project: ProjectCardDetails }, {}> =
  function () {
    this.mount = () => {
      setTimeout(() => {
        this.root.classList.remove("transparent");
      }, 1);
    };

    this.css = css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      width: 100vw;
      height: 100vh;

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
        height: 45vh;
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
        padding-left: 1rem;
        font-weight: 600;
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
        margin: 2rem 2rem;
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
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
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
                src={this.project.img}
                on:pointerdown={() => {
                  window.open(this.project.img, "_blank");
                }}
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

const Card: Component<{ detail: ProjectCardDetails }, {}> = function () {
  this.css = css`
    background: var(--surface0);
    width: 320px;
    border-radius: 0.9rem;
    padding-bottom: 0.2rem;
    margin: 1.5rem;

    .img-container {
      width: 320px;
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
      margin-top: 0.5rem;
      font-family: var(--font-display);
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
        document.body.appendChild(<LargeProjectView project={this.detail} />);
      }}
      on:keydown={(e: KeyboardEvent) => {
        if (e.key === "Enter") {
          document.body.appendChild(<LargeProjectView project={this.detail} />);
        }
      }}
      tabindex="0"
    >
      <div class="img-container">
        <img src={this.detail.img} alt={this.detail.blurb} />
      </div>
      <div class="detail">
        <div class="title">
          <span>{this.detail.title}</span>
          <sub> • ({this.detail.year})</sub>
        </div>
        <p>{this.detail.blurb}</p>
        <kbd>↩</kbd>
      </div>
    </div>
  );
};

const Intro: Component<{}, {}> = function () {
  return (
    <article>
      <h1>Hi 👋</h1>
      <p>
        I'm Hariz, a high school student from Canada. I'm a wannabe software engineer and I sometimes do things.
      </p>
      <h2>Some stuff about me</h2>
      <ul>
        <li>I was one of the winners of the 2024 Swift Student Challenge</li>
        <li>I know the following programming languages:</li>
        <ul>
          <li>Swift</li>
          <li>JavaScript/TypeScript</li>
          <li>C/C++/Objective-C</li>
          <li>Bash</li>
          <li>Python</li>
        </ul>
        <li>I use Arch btw</li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://github.com/BomberFish">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/bomberfish77">Twitter</a>
        </li>
        <li>
          <a href="mailto:hariz@bomberfish.ca">Email</a>
          <ul><li>I might be slow to respond, I don't check my email often.</li></ul>
        </li>
        <li>
            Discord
          <ul>
            <li>@bomberfish <strong>(MAIN)</strong></li>
            <li>@hanz_was_here</li>
            <li>@pageprotectionlayer</li>
            <li>@securepagetablemonitor</li>
          </ul>
        </li>
        <li>
          <span>Signal: @bomberfish.77</span>
          <ul><li>Please only use this if all else fails.</li></ul>
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

const Nav: Component<
  {},
  { rotation: number; name: string; nameState: boolean }
> = function () {
  this.rotation = 0;
  this.name = "BomberFish";
  this.nameState = false;
  this.css = css`
    background: var(--mantle);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1em 0;
    width: 100vw;
    height: 3.5rem;
    margin: 0;
    padding: 0;
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

    border-radius: 0 0 1em 1em;

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
      margin-left: 1em;
      margin-right: 0.5em;
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

    #nav {
      justify-self: flex-end;
      margin-left: auto;
      padding-right: 1.75em;

      a {
        color: var(--accent);
        text-decoration: none;
        font-size: 1.1rem;
        display: flex;
        align-items: center;

        user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
      }
    }
  `;
  return (
    <nav>
      <span id="title">
        <img
          src="misc/pfps/bomberfish.png"
          alt="My profile picture"
          width="32"
          height="32"
          style={{ transform: use`rotate(${this.rotation}deg)` }}
          on:pointerdown={() => {
            this.rotation -= 1440;
          }}
        />
        <h2
          style="display: inline"
          on:click={() => {
            this.nameState = !this.nameState;
            for (let i = 0; i < this.name.length; i++) {
              setTimeout(() => {}, i * 100);
            }
          }}
        >
          BomberFish
        </h2>
      </span>
      <span id="nav">
        <a href="https://blog.bomberfish.ca" target="_blank">
          <span class="material-symbols-outlined">open_in_new</span>
          &nbsp;&nbsp;Go to Blog
        </a>
      </span>
    </nav>
  );
};

// typescript syntax for defining components
const App: Component<
  {
    // component properties. if you had a component that took a property like `<Button text="..." /> you would use a type like the one in the following line
    // text: string
  },
  {
    // types for internal store
    rotation: number;
    projects: ProjectCardDetails[];
  }
> = function () {
  this.projects = [
    new ProjectCardDetails(
      "/proj-thumbnails/anura.webp",
      "AnuraOS",
      "Contributor to webOS since v2.x",
      2024,
      "AnuraOS is the next-gen webOS and development environment with full Linux emulation. I've been making various contributions since March 2024, most of which reworked various parts of the UI. AnuraOS 2.0 beta, which contains my contributions, is currently slated for release in Q2 2024, with a full release planned for later this year.",
      [
        {
          name: "AnuraOS (v1.x)",
          url: "https://anura.pro",
        },
        {
          name: "AnuraOS (v2.0, preview)",
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
        },
      ]
    ),
  ];

  this.rotation = 0;
  this.css = css`
    background: var(--base);
    color: var(--text);
    font-family: var(--font-body)
    margin: 0;
    padding: 0;

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

    a,
    a:visited:hover {
      color: var(--accent);
    }

    a:visited {
      color: rgb(163, 132, 199);
    }

    #projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 0fr));
      grid-gap: 0 2rem;
    }

    #content {
      margin-top: 2.5rem;
      padding: 1em;
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
        transform: scale(1.02);
        transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        box-shadow: 0 0 20px rgba(24, 24, 37, 0.8);
      }
    }

    ::selection {
      background: var(--accent);
      color: var(--base);
    }

    sub {
      color: var(--subtext0);
    }
  `;

  return (
    <main>
      <Nav />
      <div id="content">
        <Intro />
        <h2>My work</h2>
        <div id="projects-container">
          {use(this.projects, (projects) =>
            projects.map((project) => <Card detail={project} />)
          )}
        </div>
        <span>
          <sub>
            Website made with &lt;3 in{" "}
            <a href="https://github.com/MercuryWorkshop/DreamlandJS">
              DreamlandJS
            </a>
            <br></br>
            Pro tip: you can navigate this site with your keyboard! Press{" "}
            <kbd>tab</kbd> to start.
          </sub>
        </span>
      </div>
      <ThemePicker />
    </main>
  );
};

window.addEventListener("load", () => {
  var root = document.documentElement;
  document.head
    .querySelector("meta[name=theme-color]")!
    .setAttribute("content", store.theme.mantle);
  root.style.setProperty("--text", store.theme.text);
  root.style.setProperty("--overlay1", store.theme.overlay1);
  root.style.setProperty("--surface0", store.theme.surface0);
  root.style.setProperty("--base", store.theme.base);
  root.style.setProperty("--mantle", store.theme.mantle);
  root.style.setProperty("--accent", store.theme.accent);
  root.style.setProperty("--subtext0", store.theme.subtext0);
  document.getElementById("app")!.replaceWith(<App />);
  document.documentElement.addEventListener("keydown", (e: KeyboardEvent) => {
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
});
