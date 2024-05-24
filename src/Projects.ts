import ProjectCardDetails from "./Project";

export const projects = [
  new ProjectCardDetails(
    "/proj-thumbnails/celeste.webp",
    "celeste-wasm",
    "WebAssembly port of Celeste",
    2024,
    "celeste-wasm is a port of the popular platformer Celeste to WebAssembly. I helped out with it during its development in May 2024. It is a complete port of the game, using experimental WASM support in .NET and the FNA game engine. I worked with other members of Mercury Workshop to port the game.",
    [
      {
        name: "GitHub",
        url: "https://github.com/MercuryWorkshop/celeste-wasm",
        icon: "code",
      },
      {
        name: "Demo",
        url: "https://celeste.r58playz.dev",
      }
    ]
  ),
  new ProjectCardDetails(
    "/proj-thumbnails/anura.webp",
    "AnuraOS",
    "Contributor to webOS since v2.x",
    2024,
    "AnuraOS is the next-gen webOS and development environment with full Linux emulation. I've been making various contributions since March 2024, most of which reworked various parts of the UI. AnuraOS 2.0 beta, which contains my contributions, is currently slated for release in Q2 2024, with a full release planned for later this year.",
    [
      {
        name: "v1.x (production)",
        url: "https://anura.pro",
      },
      {
        name: "v2.0 (preview)",
        url: "https://beta.anura.pro",
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
