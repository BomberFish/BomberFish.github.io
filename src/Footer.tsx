import "dreamland";
import isMobile from "./IsMobile";

const CopiedToast: Component<{}, {}> = function () {
  this.mount = () => {
    setTimeout(() => {
      this.root.remove();
    }, 2000);
  };

  this.css = `
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
> = function () {
  this.css = `
  width: max-content;
  height: max(31px, 1.9375rem);
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
      on:click={(e: MouseEvent) => {
        this.action!(e);
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

export const Footer: Component<{}, {}> = function () {
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
        display: flex;
        gap: 0.75rem;
        width: 100%;
        flex-wrap: wrap;
      }

      span {
        font-size: 1.15rem;
        color: var(--text);
        margin-bottom: 0.5rem;
        font-weight: 520;
        font-family: var(--font-display);
        display: flex;
        align-items: center;

      }

      .question {
      font-family: var(--font-display);
        color: var(--subtext0);
        display: inline-block;
        font-size: 0.75rem;
        margin-left: 0.25rem;
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
        Button Collection<span class="question" aria-role="button" on:click={async ()=>{
          alert("Most of these are things/websites I think are cool, except the first four which relate directly to this site. Click on one to go to the relevant website. No website paid me to get here.")
        }}>?</span>
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
        <div id="webbtns">
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
            src="/buttons/ce88x31.webp"
            title="CoolElectronics"
            href="https://coolelectronics.me"
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
        </div>
        <p
          style={{
            marginBlock: "1rem",
          }}
        >
          bomberfish.ca is a <strong>&lt;blink&gt; free zone</strong>.
        </p>
        {/* <br></br> */}
        {$if(
          new URL(window.location.href).searchParams.get("higherdimension") ===
            null && !isMobile(),
          <div>
            {/* <div>
                      Pro tip: you can navigate this site with your keyboard! Press{" "}
                      <kbd>tab</kbd> to start.
                      <br></br>
                      <br></br>
                    </div> */}
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
          </div>,
        )}
      </subt>
    </footer>
  );
};
