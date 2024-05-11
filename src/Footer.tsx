import "dreamland";

export const WebButton: Component<
  {
    src: string;
    href: string;
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
    width: auto;
    height: max(31px, 1.9375rem);
    border-radius: ${
      this.rounded ? (this.radius ? this.radius : "0.5rem") : "0px"
    }
  }
  `;

  return (
    <a href={this.href} target="_blank">
      <img
        loading="lazy"
        src={this.src}
        alt={this.alt || this.title || ""}
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(31px, 1.9375rem), 0fr));
        grid-gap: calc(max(31px, 1.9375rem) * 3.5);
      }
    `;
  return (
    <footer>
      <subt>
        Website made with &lt;3 in{" "}
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
        </span>
        <br></br>
        {$if(
          new URL(window.location.href).searchParams.get("higherdimension") ===
            null,
          <div>
            <div>
              Pro tip: you can navigate this site with your keyboard! Press{" "}
              <kbd>tab</kbd> to start.
              <br></br>
              <br></br>
            </div>
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
          </div>
        )}
        <br></br>
        <div id="webbtns">
          <WebButton
            src="https://simpleanalyticsbadges.com/bomberfish.ca?logo=cba6f7&text=cdd6f4&background=181825&radius=8"
            title="Privacy-respecting analytics, because I kinda want to see if anyone is actually viewing my site."
            href="https://dashboard.simpleanalytics.com/bomberfish.ca"
          />
          <WebButton
            src="/dlbadge.webp"
            title="Built with dreamland.js"
            href="https://dreamland.js.org"
          />
        </div>
        <p>
          bomberfish.ca is a <strong>blink-free zone</strong>.
        </p>
      </subt>
    </footer>
  );
};
