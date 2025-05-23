import { cascade } from "dreamland/core";

export const articleCSS = cascade`
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

export const sharedCSS = cascade`
  a {
    text-decoration: none!important;
  }

  a:not(:has(img)) {
    filter: drop-shadow(0 0 0px transparent);
    transition: 0.25s ease filter;

    &:not(nav a) {
        border-bottom: 1px dotted var(--accent);
    }

    &:hover {
        /* border-bottom-style: solid; */
        filter: drop-shadow(0 0 4px var(--accent)) brightness(105%) contrast(110%);
        transition: 0.25s ease filter;
    }

    &:active {
        filter: drop-shadow(0 0 0px var(--accent)) brightness(95%) contrast(90%);
        transition: 0.25s ease filter;
    }
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
  h2:not(nav h2) {
    font-family: var(--font-serif);
    margin-top: 0.1rem;
    margin-bottom: 0.6rem;
  }

  h1 {
    font-weight: normal;
    font-size: 2rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 1.5rem;
  }

  h3 {
    font-weight: lighter;
  }

  p,
  li {
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

  .card:focus kbd,
  .card:focus-visible kbd {
    opacity: 1;
    transition: opacity 0.2s;
  }


  * {
    outline-color: #cba6f7;
    outline-offset: 2px;
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

  @media (orientation: portrait) {
    display: initial !important;
    width: 100vw;

    #theme-name {
      display: none;
    }

    #content,
    nav {
      width: 100vw !important;
    }

    .popup .inner {
      width: max(100%, 100vw) !important;
      height: max(100%, 100vh) !important;
      transition: 0.4s cubic-bezier(0.3, 1.2, 0.4, 1);
    }

    .popup .inner,
   .popup .head {
      border-radius: 0;
    }

    .popup .inner article {
      height: max(100%, 100vh);
    }

    .popup .inner .article-inner {
      flex-direction: column;
      align-items: center;
    }

    /* .popup .inner article img {
      width: 90vw;
      max-width: initial;
      height: auto;
      justify-self: center;
    } */
  }

  subt {
    color: var(--subtext0);
    font-size: 0.8rem;
    line-height: 1rem;
  }

  subt kbd {
    font-size: 0.7rem;
  }

  pre,
  code {
      font-size: 0.9rem;
      font-family: var(--font-mono);
      background: var(--base);
  }

  code {
      border-radius: 0.3rem;
      padding-inline: 0.5rem;
      padding-block: 0.15rem;
  }

  pre {
    padding: 1rem;
    border-radius: 0.6rem;
    overflow-x: auto;
  }

  //   h1,
  //   h2,
  //   h3 {
  //     font-family: var(--font-display);
  //   }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 0.1rem;
  }

  // nav h2 {
  //   font-size: 1.5rem;
  // }

  // #content {
  //   padding-inline: 1rem;
  // }
`;
