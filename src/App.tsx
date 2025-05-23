console.log(
  "%c\n hello! :3c  ",
  'font-family: "IBM Plex Mono", ui-monospace, monospace;font-weight: 900; font-size: 50px;color: #f38ba8; text-shadow: -2px -2px 0 #fab387 , -4px -4px 0 #f9e2af , -6px -6px 0 #a6e3a1 , -8px -8px 0 #94e2d5 , -10px -10px 0 #89b4fa , -12px -12px 0 #b4befe , -14px -14px 0 #cba6f7',
);

import { Component, scope, h, createStore, createState } from "dreamland/core";
import { ThreeDeeApp } from "./3DSite/ThreeDeeApp.tsx";
import ProjectCardDetails from "./Project.ts";
import { ProjectList } from "./ProjectCard.tsx";
import { projects } from "./Projects.ts";
import { ClickWall } from "./3DSite/ClickWall.tsx";
import { DarkReaderWarning } from "./DarkReaderWarning.tsx";
import { sharedCSS, articleCSS } from "./CommonCSS.tsx";
import { updatePage } from "./Themes";
import { Intro, SiteMap, DesignPhilosophy } from "./SiteContent.tsx";
import { convertRemToPixels } from "./Utils.ts";
import { Footer } from "./Footer.tsx";
import { Nav, TabBar } from "./Navigation.tsx";
import { LatestToot } from "./LatestToot.tsx";
import { oled } from "./Themes";
// import { Cursor } from "./Cursor.tsx";

// MARK: THEMING
export let store = createStore(
  {
    theme: oled,
    playMusic: false,
  },
  { ident: "siteOptions", backing: "localstorage", autosave: "auto" },
);

export let globalState = createState({
  freakyMode: false,
});

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
    selectedTab: number;
    elements: Element[];
  }
> = function (cx) {
  this.prevMouseX = 0;
  this.prevMouseY = 0;
  this.prevX = 0;
  this.prevY = 0;
  this.projects = projects;
  this.rotation = 0;
  this.timeout = false;
  this.selectedTab = 0;
  this.elements = [
    <Intro />,
    <div>
      <h1 style="margin-bottom: 0.7em!important;">my work</h1>
      <ProjectList projects={this.projects} />
    </div>,
    // <Contact />,
    <div>
      <h1 style="margin-bottom: 0.7em!important;">latest post</h1>
      <LatestToot />
    </div>,
    <SiteMap />,
    <DesignPhilosophy />,
  ];
  cx.css = scope`
    // background: var(--crust);
    color: var(--text);
    font-family: var(--font-body);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    // height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    margin-bottom: 1.5rem;

    #content {
      background: var(--crust);
      width: min(100vw, max(60vw, 800px));
      height: 60vh;
      height: min-content;
      border-radius: 0 0 1.2rem 1.2rem;
    }

    #mainarticle {
      height: 100%;
      overflow: hidden;
      transition: 0.35s, opacity 0.15s;
      transition-timing-function: ease;
    }

    #content > *:not(#tabs) {
      padding-inline: 1rem;
    }

    #mainarticle.transparent {
      opacity: 0;
      transition: 0.35s, opacity 0.15s;
      transition-timing-function: ease;
    }

    footer {
      padding-bottom: 1rem;
    }
  `;

  function updateSize() {
    document.getElementById("mainarticle")!.style.height =
      document
        .getElementById("mainarticle")!
        .children[0]!.getBoundingClientRect().height +
      convertRemToPixels(1) +
      "px";
  }

  setTimeout(() => {
    // console.warn(document.getElementById("content")!.getBoundingClientRect().height);
    // console.warn(document.getElementById("mainarticle")!.getBoundingClientRect().height);
    updateSize();

    document.querySelector("main")?.dispatchEvent(
      new MouseEvent("move", {
        clientX: window.innerWidth,
        clientY: window.innerHeight,
      }),
    );
    // console.warn(document.getElementById("content")!.getBoundingClientRect().height);
    // console.warn(document.getElementById("mainarticle")!.getBoundingClientRect().height);
  }, 1);

  window.addEventListener("resize", () => {
    updateSize();
  });

  document.addEventListener("force-tab-resize", () => {
    updateSize();
  });

  document.addEventListener("pointermove", (e: PointerEvent) => {
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
  });

  return (
    <main
      class={sharedCSS}
      // style={{
      //   fontFamily: use(globalState.freakyMode ? "Papyrus, cursive!important" : "var(--font-body)",
      //   ),
      // }}
    >
      <Nav />
      <div id="content">
        <TabBar
          tabs={[
            "about me",
            "my work",
            "yapping",
            "sitemap",
            "about this site",
          ]}
          tab={use(this.selectedTab).bind()}
        />
        <article id="mainarticle" class={articleCSS}>
          {use(this.elements[this.selectedTab])}
        </article>
        <br></br>
        <Footer />
      </div>
    </main>
  );
};

// MARK: WINDOW LOAD
window.addEventListener("load", async () => {
  console.debug("onload");

  try {
    const fnt = new FontFace(
      "Material Symbols Rounded",
      "url(https://fonts.gstatic.com/s/materialsymbolsrounded/v181/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDB_Qb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOcbTCVpeRL2w5rwZu2rIelXxc.woff2)",
    );
    document.fonts.add(fnt);
    fnt.load(); // async load the font to prevent really wanky shit when something that uses it first appears
  } catch {
    // ignore
  }

  let params = new URL(window.location.href).searchParams;
  console.debug(params);
  let app;
  if (params.has("higherdimension")) {
    try {
      app = <ThreeDeeApp />;
    } catch (e) {
      console.error("Error rendering page:", e);
      (document.querySelector(".no-js")! as HTMLElement).style.display =
        "block";
      document.body.style.margin = "2%";
      return;
    }
    let audio: HTMLAudioElement = new Audio("/epic.ogg");
    audio.loop = true;

    document.addEventListener("end-music", () => {
      audio.pause();
    });

    document.addEventListener("music-restart", () => {
      audio.play();
    });

    if (store.playMusic !== false) {
      console.info("music start");
      audio.play().catch((e) => {
        console.error("could not start audio: " + e);
        document.body.appendChild(<ClickWall />);
        return;
      });
    }

    document.getElementById("app")!.replaceWith(app);
    document.body.classList.add("cool");
  } else {
    try {
      app = <App />;
    } catch (e) {
      console.error("Error rendering page:", e);
      (document.querySelector(".no-js")! as HTMLElement).style.display =
        "block";
      document.body.style.margin = "2%";
      return;
    }
    let sc = document.createElement("script");
    sc.src = "/oneko.js";
    document.body.appendChild(sc);
    document.getElementById("app")!.replaceWith(app);

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
        document.getElementById("k" + konamiCurrent)?.classList.add("active");
        e.preventDefault();
        konamiCurrent++;

        if (konamiCurrent === konamiCode.length) {
          konamiCurrent = 0;
          window.location.href =
            new URL(window.location.href).origin + "/?higherdimension";
        }
      } else {
        konamiCurrent = 0;
        for (let i = 0; i < konamiCode.length; i++) {
          document.getElementById("k" + i)?.classList.remove("active");
        }
      }
    });
  }

  updatePage();

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

  setInterval(() => {
    if (
      document.documentElement.getAttribute("data-darkreader-mode") ||
      document.documentElement.getAttribute("data-darkreader-scheme")
    ) {
      document.body.appendChild(<DarkReaderWarning />);
    }
  }, 1000);

});
