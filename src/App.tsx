import "dreamland/dev";

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

      @media (pointer: coarse) {
        .inner {
          width: 100%;
        }
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
        margin: 1rem;
        margin-top: 9rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        align-self: flex-start;
        font-size: 1.25rem;
      }

      button {
        appearance: none;
        background: none;
        border: none;
        width: 25px;
        height: 25px;
      }

      .crossmark {
        margin-top: -7.5px;
        margin-right: 10px;
        position: relative;
        display: inline-block;
        &:after {
          position: absolute;
          content: "";
          display: block;
          width: 15px;
          height: 0px;
          border: solid #fff;
          border-width: 0 0px 2.5px 0;
          transform: rotate(45deg);
          left: 0;
          top: 0;
        }
        &:before {
          position: absolute;
          content: "";
          display: block;
          width: 15px;
          height: 0px;
          border: solid #fff;
          border-width: 0 0px 2.5px 0;
          transform: rotate(-45deg);
          left: 0;
          top: 0;
        }
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
              <div class="crossmark" />
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
    background: #313244;
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
      color: #7f849c;
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
    background: #181825;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1em 0;
    width: 100vw;
    height: 2.5rem;
    margin: 0;
    padding: 5px;
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

    h2 {
      justify-self: flex-start;
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

    span {
      justify-self: flex-end;
      margin-left: auto;
      padding-right: 1em;
    }
  `;
  return (
    <nav>
      <img
        id="logo"
        src="misc/pfps/bomberfish.png"
        alt="Me!"
        width="32"
        height="32"
        style={use`transform: rotate(${this.rotation}deg)`} // MARK: FIXME: ROTATION
        on:click={() => {
          this.rotation += 1440; 
          document.getElementById(
            "logo"
          )!.style.transform = `rotate(${this.rotation}deg)`;
        }}
      />
      <h2 style="display: inline">BomberFish</h2>
      <span>
        <a href="https://blog.bomberfish.ca">Go to Blog</a>
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
    // types for internal state
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
      "Major contributions since v2.x"
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/mandelapro.jpg",
      "Mandela Pro",
      "Cancelled customization app",
      2024,
      "Cancelled customization app"
    ),
    new ProjectCardDetails(
      "/proj-thumbnails/picasso.jpg",
      "Picasso",
      "Co-developer, worked with @sourceloc",
      2023,
      "Co-developer, worked with @sourceloc"
    ),
  ];

  this.rotation = 0;
  this.css = css`
    background: #1e1e2e;
    color: #cdd6f4;
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
    }

    nav h2 {
      font-size: 1.5rem;
    }

    a,
    a:visited:hover {
      color: #cba6f7;
    }

    a:visited {
      color: rgb(163, 132, 199);
    }

    @media (prefers-color-scheme: light) {
      background: #eff1f5;
      color: #4c4f69;

      a,
      a:visited:hover {
        color: #8839ef;
      }

      a:visited {
        color: #a16be6;
      }

      nav {
        background: #e6e9ef;
      }
    }

    #projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 0fr));
      grid-gap: 2rem;
    }

    #content {
      margin-top: 2rem;
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
      <Nav />
      <div id="content">
        <Intro />
        <h2>Projects</h2>
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
