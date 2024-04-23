import "dreamland/dev";

let store = $store(
  {
    theme: {
      name: "Catppuccin Mocha",
      text: "#cdd6f4",
      overlay1: "#7f849c",
      surface0: "#313244",
      base: "#1e1e2e",
      mantle: "#181825",
      accent: "#cba6f7",
    },
  },
  { ident: "my-store", backing: "localstorage", autosave: "auto" }
);

class ProjectCardDetails {
  img: string;
  title: string;
  blurb: string;
  year: number;
  largeDesc: string;

  constructor(
    imgURL: string,
    title: string,
    blurb: string,
    year: number,
    largeDesc: string
  ) {
    this.img = imgURL;
    this.title = title;
    this.blurb = blurb;
    this.year = year;
    this.largeDesc = largeDesc;
  }
}

const ThemePicker: Component<{}, {}> = function () {
  this.mount = () => {
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
  };

  const mocha = {
    name: "Catppuccin Mocha",
    text: "#cdd6f4",
    overlay1: "#7f849c",
    surface0: "#313244",
    base: "#1e1e2e",
    mantle: "#181825",
    accent: "#cba6f7",
  };

  const macchiato = {
    name: "Catppuccin Macchiato",
    text: "#cad3f5",
    overlay1: "#8087a2",
    surface0: "#363a4f",
    base: "#24273a",
    mantle: "#1e2030",
    accent: "#c6a0f6",
  };

  const frappe = {
    name: "Catppuccin Frappe",
    text: "#c6d0f5",
    overlay1: "#838ba7",
    surface0: "#414559",
    base: "#303446",
    mantle: "#292c3c",
    accent: "#ca9ee6",
  };

  const latte = {
    name: "Catppuccin Latte",
    text: "#4c4f69",
    overlay1: "#8c8fa1",
    surface0: "#ccd0da",
    base: "#eff1f5",
    mantle: "#e6e9ef",
    accent: "#8839ef",
  };

  const themes = [mocha, macchiato, frappe, latte];

  this.css = css`
    button {
      background: none;
      border: none;
      color: var(--text);
      font-family: Inter, "SF Pro Display", "SF Pro", -apple-system, system-ui;
      font-size: 1rem;
      padding: 0.5rem;
      margin: 0.5rem;
      cursor: pointer;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 1000;

      display: flex;
      align-items: center;
    }
  `;

  return (
    <div>
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
          root.style.setProperty("--base", store.theme.base);
          root.style.setProperty("--mantle", store.theme.mantle);
          root.style.setProperty("--accent", store.theme.accent);
        }}
      >
        <span class="material-symbols-outlined">palette</span>&nbsp;&nbsp;
        {use(store.theme.name)}
      </button>
    </div>
  );
};

const LargeProjectView: Component<{ project: ProjectCardDetails }, {}> =
  function () {
    this.mount = () => {
      setTimeout(() => {
        this.root.classList.remove("transparent");
      }, 10);
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
      background: rgba(17, 17, 27, 0.4);

      transition: 0.2s cubic-bezier(0.3, 0, 0.6, 1);

      .inner {
        background: #313244;
        width: 60%;
        height: 100%;
        padding: 1rem;
        padding-top: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      img {
        width: 90%;
        height: auto;
        border-radius: 2rem;
      }

      #title {
        align-self: flex-start;
        font-size: 2.25rem;
        display: inline;
        margin-top: 1rem;
        font-weight: 600;

        position: absolute;
        top: 2rem;
        left: 2rem;
      }

      button {
        position: absolute;
        top: 2rem;
        right: 2rem;
        margin-top: 1rem;
      }

      article {
        margin-top: 9rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        align-self: flex-start;
        font-size: 1.25rem;
        margin-inline: 1rem;
      }

      button {
        appearance: none;
        background: none;
        border: none;
        width: 25px;
        height: 25px;
        color: var(--text);
      }
    `;

    return (
      <div class="popup transparent">
        <div class="inner">
          <article>
            <span id="title">{this.project.title}</span>

            <button
              on:click={() => {
                this.root.classList.add("transparent");
                setTimeout(() => {
                  this.root.remove();
                }, 200);
              }}
            >
              <span class="material-symbols-outlined">close</span>
            </button>
            <img src={this.project.img} />
            <p>{this.project.largeDesc}</p>
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
      border-radius: 0.9rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    sub {
      color: var(--overlay1);
    }

    .title {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
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
  `;

  return (
    <div
      class="card"
      on:click={() => {
        document.body.appendChild(<LargeProjectView project={this.detail} />);
      }}
    >
      <div class="img-container">
        <img src={this.detail.img} />
      </div>
      <div class="detail">
        <div class="title">
          <span>{this.detail.title}</span>
          <sub> • ({this.detail.year})</sub>
        </div>
        <p>{this.detail.blurb}</p>
      </div>
    </div>
  );
};

const Intro: Component<{}, {}> = function () {
  return (
    <article>
      <h2>About me</h2>
      <p>
        I'm a 15 year old (aspiring) software developer from Canada, who loves
        tinkering with whatever devices I find.
      </p>
      <h2>Things on this site</h2>
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
      <h1>Contact</h1>
      <ul>
        <li>
          <a href="https://github.com/BomberFish">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/bomberfish77">Twitter</a>
        </li>
        <li>
          <a href="mailto:hariz@bomberfish.ca">Email</a> (I don't check my
          emails often)
        </li>
        <li>
          <span>
            Discord: @bomberfish, @hanz_was_here, @pageprotectionlayer,
            @securepagetablemonitor
          </span>
        </li>
        <li>
          <span>Signal: @bomberfish.77</span>
        </li>
      </ul>
    </article>
  );
};

const Nav: Component<{}, { rotation: number }> = function () {
  this.rotation = 0;
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
      padding: 3px;
    }

    #title {
      display: flex;
      align-items: center;
      justify-self: flex-start;
    }

    #nav {
      justify-self: flex-end;
      margin-left: auto;
      padding-right: 1.75em;

      a {
        // color: var(--text);
        text-decoration: none;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
      }
    }
  `;
  return (
    <nav>
      <span id="title">
        <img
          id="logo"
          src="misc/pfps/bomberfish.png"
          alt="Me!"
          width="32"
          height="32"
          style={{ transform: use`rotate(${this.rotation}deg)` }}
          on:click={() => {
            this.rotation += 1440;
          }}
        />
        <h2 style="display: inline">BomberFish</h2>
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
      "/proj-thumbnails/anura.jpg",
      "AnuraOS",
      "Major contributions since v2.x",
      2024,
      "AnuraOS is the next-gen webOS and development environment with full Linux emulation. I've been making various contributions since the start of v2 development, most of which reworked various parts of the UI. AnuraOS 2.0 is slated for release in September 2024."
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/mandelapro.jpg",
      "Mandela Pro",
      "Cancelled customization app",
      2024,
      "Mandela Pro was a cancelled iOS customization app I created solo in early 2024. It was intended for iOS 16.0-17.0, but was cancelled due to the release of Dopamine 2.0 for 16.x versions and the lack of interest for iOS 17.0."
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/picasso.jpg",
      "Picasso",
      "Co-developer, worked with @sourceloc",
      2023,
      "Picasso is a customization app for iOS 15.0-17.0, using security vulnerabilities to allow for deep customization. I worked with sourcelocation to develop it, and it was first released in August 2023."
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/appcommander.jpg",
      "AppCommander",
      "App Manager for iOS 15.0-16.1.2",
      2023,
      "AppCommander (v1.x) was an app manager for iOS 15.0-16.1.2, and allowed the user to perform advanced app management. Some key features included creating app backups, exporting IPA files, clearing app caches, and more. AppCommander 1.0.0 was released in July 2023."
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/cowabunga.jpg",
      "Cowabunga MDC",
      "Major contributions",
      2023,
      "Cowabunga was a major project I contributed to in 2023. It was a customization app for iOS 14.0-16.1.2, using the MacDirtyCow vunerability to allow for deep customization. My contributions included adding tools such as an enterprise certificate blacklist remover, and a tool to remove the three-app limit on developer-signed apps."
    ),
  ];

  this.rotation = 0;
  this.css = css`
    background: var(--base);
    color: var(--text);
    font-family: Inter, "SF Pro Display", "SF Pro", -apple-system, system-ui,
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;

    h1,
    h2,
    h3 {
      font-family: "Inter Tight", "Inter", "SF Pro Text", "SF Pro",
        -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
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

      &:hover {
        transform: scale(1.02);
        transition: 0.25s cubic-bezier(0, 0.55, 0.45, 1);
        box-shadow: 0 0 20px rgba(24, 24, 37, 0.8);
      }
    }
  `;

  return (
    <main>
      <ThemePicker />
      <Nav />
      <div id="content">
        <Intro />
        <h2>My work</h2>
        <div id="projects-container">
          {use(this.projects, (projects) =>
            projects.map((project) => <Card detail={project} />)
          )}
        </div>
      </div>
    </main>
  );
};

window.addEventListener("load", () => {
  document.getElementById("app")!.replaceWith(<App />);
});
