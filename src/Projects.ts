import ProjectCardDetails from "./Project";

export const projects = [
  // new ProjectCardDetails(
  //   "/proj-thumbnails/celeste.webp",
  //   "Webshot",
  //   "Port of OneShot to WebAssembly",
  //   2024,
  //   "Webshot is a port of OneShot: World Machine Edition to WebAssembly. Like fez-wasm and Webleste, it leverages WebAssembly support in .NET and FNA to run the game in a web browser. Unlike Webleste, I led the porting efforts."
  //   [
  //     {
  //       name: "GitHub",
  //       url: "https://github.com/MercuryWorkshop/webshot",
  //       icon: "code",
  //     },
  //     {
  //       name: "Demo",
  //       url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  //       icon: "stadia_controller",
  //     },
  //   ],
  // ),
  new ProjectCardDetails(
    undefined,
    "MergeFlow",
    "Gemini-powered Git merge conflict resolution",
    2025,
    "In 2025, me and a small team created MergeFlow, a smart Git merge conflict resolution tool powered by Gemini. It uses advanced AI algorithms to automatically resolve merge conflicts, making the process faster and more efficient. This was created for Hack Canada 2025.",
    [
      {
        name: "GitHub",
        url: "https://github.com/BomberFish/MergeFlow",
        icon: "code",
      },
      {
        name: "Demo Video",
        url: "https://www.youtube.com/watch?v=EkSgNgF8pcU",
        icon: "play_circle",
      },
    ],
  ),
  new ProjectCardDetails(
    undefined,
    "Voltaire",
    "Snazzy local LLM inference app for iOS",
    2025,
    "Voltaire runs popular LLMs, including DeepSeek R1, LLaMa 3, and others, locally on iOS devices.",
    [
      {
        name: "GitHub",
        url: "https://github.com/BomberFish/Voltaire",
        icon: "code",
      },
      {
        name: "Demo Video",
        url: "https://youtube.com/watch?v=MipHd-EP9ok",
        icon: "play_circle",
      },
    ],
  ),
  new ProjectCardDetails(
    undefined,
    "fez-wasm",
    "Port of Fez (2012) to WebAssembly",
    2025,
    "fez-wasm is a WebAssembly port of Fez, a puzzle-platformer first released in 2012. It is a heavy work in progress, with many portions non-functional.",
    [
      {
        name: "GitHub",
        url: "https://github.com/BomberFish/fez-wasm",
        icon: "code",
      },
      {
        name: "Demo",
        url: "https://fez.bomberfish.ca",
        icon: "stadia_controller",
      },
    ],
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/Twitter Banner.png",
    "QuickSign",
    "iOS Codesigning App",
    2025,
    "In late 2024 I joined the development of QuickSign, an app to sign sideloaded iOS apps. A private beta program is slated to begin in May 2025, with a full public release in July.",
    [
      {
        name: "Website",
        url: "https://quicksignteam.github.io",
      },
      {
        name: "Official Twitter",
        url: "https://twitter.com/QuickSigniOS",
        icon: "alternate_email",
      },
    ],
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/celeste.webp",
    "Webleste",
    "Port of Celeste (2018) to WebAssembly",
    2024,
    "Webleste (formerly celeste-wasm) is a port of the popular platformer game Celeste to WebAssembly. I helped out with it during its initial development in May 2024, and with the development of version 2.0 in April 2025. It is a complete port of the game, using experimental WASM support in .NET and the FNA game engine. I worked with my fellow colleagues at Mercury Workshop to help with porting the game.",
    [
      {
        name: "Play",
        url: "https://celeste.r58playz.dev",
        icon: "stadia_controller",
      },
      {
        name: "Writeup",
        url: "https://velzie.rip/blog/celeste-wasm",
        icon: "article",
      },
      {
        name: "GitHub",
        url: "https://github.com/MercuryWorkshop/celeste-wasm",
        icon: "code",
      },
    ],
    true,
    2,
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/anura.webp",
    "AnuraOS",
    "Contributor to webOS since v2.x",
    2024,
    "AnuraOS is the next-gen webOS and development environment with full Linux emulation. That is to say, a full desktop environment running locally in your browser, with x86 Linux emulation. I've been making various contributions since March 2024, most of which reworked various parts of the UI. AnuraOS 2.0, which contains my contributions, was released in November 2024.",
    [
      {
        name: "Use Anura",
        url: "https://anura.pro",
      },
    ],
    true,
    3,
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/mandelapro.webp",
    "Mandela Pro",
    "Cancelled customization app",
    2024,
    "Mandela Pro was a cancelled iOS customization app I created solo in early 2024. It was intended for iOS 16.0-17.0, but was cancelled due to the release of Dopamine 2.0 for 16.x versions and the lack of interest for iOS 17.0.",
    [],
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/SSC2024_Social_Static_16x9.jpg",
    "Swift Student Challenge",
    "2024 Competition Winner",
    2024,
    "In early 2024, I won the Swift Student Challenge, a programming competition run by Apple. My winning submission was a carbon footprint calculator.",
    [],
    true,
    1,
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
        url: "https://bomberfish.ca/dssOS/"
      },
    ],
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/picasso.webp",
    "Picasso",
    "iOS customization app with 100k+ peak MAU",
    2023,
    "Picasso was a customization app for iOS 15.0-17.0, taking advantage of various security vulnerabilities to allow for deep customization. At its peak, it had over 100,000 active users. I worked with sourcelocation to develop it, and it was first released in August 2023 on our own third-party marketplace separate from Apple's App Store.",
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
    ],
    true,
    0,
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/appcommander.webp",
    "AppCommander",
    "App Manager for iOS 15.0-18.4",
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
    ],
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
    ],
  ),
];
