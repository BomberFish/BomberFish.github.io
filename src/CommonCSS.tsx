import "dreamland";

export const articleCSS = css`
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

export const sharedCSS = css`
  a {
    text-decoration: none!important;
  }

  a:not(nav a, :has(img)) {
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
  h2:not(nav h2) {
    font-family: var(--font-display);
    font-weight: 550;
    margin-top: 0.1rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
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
    width: 4px;
    height: 2px;
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
      width: 100vw !important;
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

  subt {
    color: var(--subtext0);
    font-size: 0.8rem;
    line-height: 1rem;
  }

  subt kbd {
    font-size: 0.7rem;
  }

  //   h1,
  //   h2,
  //   h3 {
  //     font-family: var(--font-display);
  //   }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 1rem;
  }

  nav h2 {
    font-size: 1.5rem;
  }

  #content {
    padding-inline: 1rem;
  }
`;