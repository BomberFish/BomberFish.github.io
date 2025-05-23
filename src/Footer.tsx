import { Component, scope, cascade, h } from "dreamland/core";
import isMobile from "./IsMobile";
import { MK64Frame } from "./N64";

const CopiedToast: Component<{}, {}> = function (cx) {
  cx.mount = () => {
    setTimeout(() => {
      cx.root.remove();
    }, 2000);
  };

  cx.css = scope`
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: var(--surface0);
    color: var(--text);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    margin: 1rem;

    animation: fadein 0.25s, fadeout 0.25s 1.75s;

    font-weight: 520;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `;

  return (
    <div>
      <span class="material-symbols-rounded">content_copy</span>
      Copied to clipboard!
    </div>
  );
};

export const WebButton: Component<
  {
    src: string;
    href?: string;
    action?: (e: MouseEvent) => void;
    alt?: string;
    title?: string;
    rounded?: boolean;
    radius?: string;
  },
  {}
> = function (cx) {
  cx.css = scope`
  width: max-content;
  height: max(31px, 1.9375rem);
  border: none!important;
  transition: 0.2s ease!important;
  &:hover {
    scale: 1.05;
    transition: 0.2s ease!important;
  }
  img {
    image-rendering: pixelated;
    -webkit-image-rendering: pixelated;
    width: auto;
    height: max(31px, 2.5rem);
    border-radius: ${
      this.rounded ? (this.radius ? this.radius : "0.5rem") : "0px"
    }
  }
  `;

  this.href = this.href || "#";
  this.action = this.action || (() => {});

  if (this.title) {
    this.alt = this.alt || "A web button with the description: " + this.title;
  }

  return (
    <a
      href={this.href}
      target="_blank"
      on:click={(event: Event) => {
        this.action!(event as MouseEvent);
      }}
    >
      <img
        loading="lazy"
        src={this.src}
        alt={this.alt || "A web button."}
        title={this.title || this.alt || ""}
        referrerpolicy="no-referrer"
        crossorigin="anonymous"
      />
    </a>
  );
};

export const Footer: Component<{}, {}> = function (cx) {
  cx.css = scope`
      #konami > kbd {
        margin-right: 0.65rem;

        &.active {
          color: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 4rem 0 color-mix(in srgb, transparent 70%, var(--accent));
        }
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

      span {
        font-size: 1.5rem;
        color: var(--text);
        margin-bottom: 0.5rem;
        font-weight: 520;
        font-family: var(--font-serif);
        display: flex;
        align-items: center;

      }

      .question {
        font-family: var(--font-display);
        color: var(--subtext0);
        display: inline-block;
        font-size: 0.9rem;
        margin-left: 0.5rem;
        cursor: help;
        padding: 0.25rem;
        border-radius: 50%;
        border: 1px solid var(--subtext0);
        width: 1rem;
        height: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-block: 0;
        user-select: none;
      }
    `;
  return (
    <footer>
      <span>
        button collection
        <span
          class="question"
          role="button"
          on:click={async () => {
            alert(
              "all of these are websites i think are cool, people i know, or tools/software i use. click on one to go to the relevant website! No website paid me to get here.",
            );
          }}
        >
          ?
        </span>
      </span>
      <subt>
        {/* Website made with &lt;3 in{" "}
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
        </span> */}
        {/* <br></br> */}
        {/* <br></br> */}
        <Buttons />
        <p
          style={{
            marginBlock: "1rem",
          }}
        >
          bomberfish.ca is a <strong>&lt;blink&gt; free zone</strong>.
        </p>
        {/* <br></br> */}
        {(new URL(window.location.href).searchParams.get("higherdimension") ===
            null && !isMobile()) ?
          <div>
            {/* <div>
                      Pro tip: you can navigate this site with your keyboard! Press{" "}
                      <kbd>tab</kbd> to start.
                      <br></br>
                      <br></br>
                    </div> */}
            <div id="konami">
              <kbd id="k0">↑</kbd>
              <kbd id="k1">↑</kbd>
              <kbd id="k2">↓</kbd>
              <kbd id="k3">↓</kbd>
              <kbd id="k4">←</kbd>
              <kbd id="k5">→</kbd>
              <kbd id="k6">←</kbd>
              <kbd id="k7">→</kbd>
              <kbd id="k8">b</kbd>
              <kbd id="k9">a</kbd>
              <a href="/?higherdimension">I'm lazy</a>
            </div>
          </div> : <div></div>
        }
      </subt>
    </footer>
  );
};

const Buttons: Component<{}, {}> = function (cx) {
  cx.css = scope`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;


  #buttons {
    height: max(50px, 4rem);
    display: flex;
    align-items: center;
    transition: transform 0.4s linear;
  }

  #buttons:hover .webbtns,
  #buttons:hover .webbtns > a {
    animation-play-state: paused;
  }


  .webbtns {
    display: inline-flex;
    flex-direction: row;
    white-space: nowrap;
    gap: 0.75rem;
    padding-right: 0.75rem;
    flex-wrap: nowrap;

    animation: move 10s linear infinite;
    animation-fill-mode: both;

    & > a {
      animation: groove 2s cubic-bezier(0.3,0,0.7,0.9) infinite;
    }

    :nth-child(2n) {
      animation-delay: 1s!important;
    }
  }

  @media (prefers-reduced-motion: reduce) or (orientation: portrait) {
    & {
    white-space: initial;
    }

    .webbtns, .webbtns > a {
      display: flex;
      flex-wrap: wrap;
      white-space: initial;
      animation: none;
    }

    .webbtns:nth-of-type(2) {
      display: none;
    }

    #buttons {
      height: initial;
    }
  }


  @keyframes move {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes groove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(max(7.75px, 0.625rem));
    }
  }
  `;
  return (
    <div
    /* on:mouseenter={()=> {
    document.querySelectorAll('.webbtns').forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'paused';
    });
    document.querySelectorAll('.webbtns > a').forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'paused';
    });
    }}
    on:mouseleave={()=> {
    document.querySelectorAll('.webbtns').forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'running';
    });
    document.querySelectorAll('.webbtns > a').forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'running';
    });
    }
    } */
    >
      <WebButton
        src="/buttons/button.gif"
        title="Click to copy my button! (HTML code)"
        action={(e: MouseEvent) => {
          e.preventDefault();
          try {
            navigator.clipboard.writeText(`
          <a href="https://bomberfish.ca">
            <img src="https://bomberfish.ca/buttons/button.gif" alt="BomberFish" title="BomberFish" />
          </a>
        `);
            document.body.appendChild(<CopiedToast />);
          } catch {
            console.error(e);
          }
        }}
      />
      <div id="buttons">
        {/* TODO: Fix this unholy mess */}
        <span class="webbtns">
          <WebButton
            src="/buttons/simpleanalytics.svg"
            title="Privacy-respecting analytics, because I kinda want to see if anyone is actually viewing my site."
            href="https://dashboard.simpleanalytics.com/bomberfish.ca"
          />
          <WebButton
            src="/buttons/dreamland-new.webp"
            title="Made with dreamland.js"
            href="https://dreamland.js.org/?uwu"
          />
          <WebButton
            src="/buttons/agplv3-with-text-162x68.webp"
            title="Licenced under the GNU Affero GPL Version 3"
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
          />
          <WebButton
            src="/buttons/arch.gif"
            title="Arch Linux"
            href="https://archlinux.org"
          />
          <WebButton
            src="/buttons/arc.gif"
            title="Arc from the Browser Company"
            href="https://arc.net"
          />
          <WebButton
            src="/buttons/VisitNeXT.gif"
            title="Visit NeXT"
            href="https://www.next.com"
          />
          <WebButton
            src="/buttons/PoweredByNEXTSTEP.gif"
            title="Powered by NeXTSTEP (not)"
            href="https://www.apple.com/macos"
          />
          <WebButton
            src="/buttons/any-browser.webp"
            title="View this site on any (modern) web browser!"
            href="https://anybrowser.org/campaign/index.html"
          />
          <WebButton
            src="/buttons/hg88x31.webp"
            title="Mercury Workshop"
            href="https://mercurywork.shop"
          />
          <WebButton
            src="/buttons/omada.gif"
            title="omada.cafe, an private and secure alternative provider."
            href="https://omada.cafe"
          />
          {/* TODO: update this to mozilla's latest shenanigans */}
          <WebButton
            src="/buttons/firefox.gif"
            title="Firefox is EVIL!"
            href="https://lunduke.locals.com/post/5871895/mozilla-firefox-goes-anti-privacy-pro-advertising"
          />
          <WebButton
            src="/buttons/ce88x31.webp"
            title="velzie.d"
            href="https://velzie.rip"
          />
          <WebButton
            src="/buttons/thinlqd.webp"
            title="ThinLiquid"
            href="https://thnlqd.nekoweb.org"
          />
          <WebButton
            src="/buttons/foxmossbutton.webp"
            title="FoxMoss"
            href="https://foxmoss.com"
          />
          <WebButton
            src="/buttons/wearr.gif"
            title="wearr"
            href="https://wearr.dev"
          />
          <WebButton
            src="/buttons/circular-88x31.gif"
            title="circular"
            href="https://circulars.dev"
          />
          <WebButton
            src="/buttons/necoarc-88x31.webp"
            title="the profaned one"
            href="https://necoarc.dev"
          />
          <WebButton
            src="/buttons/eightyeightthirtyone.webp"
            title="88x31"
            href="https://eightyeightthirty.one"
          />
          <WebButton
            src="/buttons/melankorin.gif"
            title="melankorin"
            href="https://melankorin.net"
          />
          <WebButton
            src="/buttons/lucida-2.gif"
            title="Lucida: Free Music. No BS."
            href="https://lucida.to"
          />
          {/* Because Nintendo can bite me */}
          <WebButton
            src="/buttons/mariokart.webp"
            title="Play some Mario Kart!"
            action={(e: MouseEvent) => {
              e.preventDefault();
              document.querySelector("main")!.appendChild(<MK64Frame />);
              (document.activeElement as HTMLElement)?.blur();
            }}
          />
        </span>
        <span class="webbtns">
          <WebButton
            src="/buttons/simpleanalytics.svg"
            title="Privacy-respecting analytics, because I kinda want to see if anyone is actually viewing my site."
            href="https://dashboard.simpleanalytics.com/bomberfish.ca"
          />
          <WebButton
            src="/buttons/dreamland-new.webp" // ughhhh i know this is unofficial but it's still good
            title="Made with dreamland.js"
            href="https://dreamland.js.org/?uwu"
          />
          <WebButton
            src="/buttons/agplv3-with-text-162x68.webp"
            title="Licenced under the GNU Affero GPL Version 3"
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
          />
          <WebButton
            src="/buttons/arch.gif"
            title="Arch Linux"
            href="https://archlinux.org"
          />
          <WebButton
            src="/buttons/arc.gif"
            title="Arc from the Browser Company"
            href="https://arc.net"
          />
          <WebButton
            src="/buttons/VisitNeXT.gif"
            title="Visit NeXT"
            href="https://www.next.com"
          />
          <WebButton
            src="/buttons/PoweredByNEXTSTEP.gif"
            title="Powered by NeXTSTEP (not)"
            href="https://www.apple.com/macos"
          />
          <WebButton
            src="/buttons/any-browser.webp"
            title="View this site on any (modern) web browser!"
            href="https://anybrowser.org/campaign/index.html"
          />
          <WebButton
            src="/buttons/hg88x31.webp"
            title="Percury Mercshop"
            href="https://mercurywork.shop"
          />
          <WebButton
            src="/buttons/omada.gif"
            title="omada.cafe, an private and secure alternative provider."
            href="https://omada.cafe"
          />
          <WebButton
            src="/buttons/firefox.gif"
            title="Firefox is EVIL!"
            href="https://lunduke.locals.com/post/5871895/mozilla-firefox-goes-anti-privacy-pro-advertising"
          />
          <WebButton
            src="/buttons/ce88x31.webp"
            title="velzie.d"
            href="https://velzie.rip"
          />
          <WebButton
            src="/buttons/thinlqd.webp"
            title="ThinLiquid"
            href="https://thnlqd.nekoweb.org"
          />
          <WebButton
            src="/buttons/foxmossbutton.webp"
            title="FoxMoss"
            href="https://foxmoss.com"
          />
          <WebButton
            src="/buttons/wearr.gif"
            title="wearr"
            href="https://wearr.dev"
          />
          <WebButton
            src="/buttons/circular-88x31.gif"
            title="circular"
            href="https://circulars.dev"
          />
          <WebButton
            src="/buttons/necoarc-88x31.webp"
            title="the profaned one"
            href="https://necoarc.dev"
          />
          <WebButton
            src="/buttons/eightyeightthirtyone.webp"
            title="88x31"
            href="https://eightyeightthirty.one"
          />
          <WebButton
            src="/buttons/melankorin.gif"
            title="melankorin"
            href="https://melankorin.net"
          />
          <WebButton
            src="/buttons/lucida-2.gif"
            title="Lucida: Free Music. No BS."
            href="https://lucida.to"
          />
          <WebButton
            src="/buttons/mariokart.webp"
            title="Play some Mario Kart!"
            action={(e: MouseEvent) => {
              e.preventDefault();
              document.querySelector("main")!.appendChild(<MK64Frame />);
              (document.activeElement as HTMLElement)?.blur();
            }}
          />
        </span>
      </div>
    </div>
  );
};
