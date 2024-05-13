import "dreamland";
import { articleCSS } from "./CommonCSS";

export const FullArticle: Component<{}, {}> = function () {
  return (
    <article class={articleCSS}>
      <Intro />
      <About />
      <Contact />
      <SiteMap />
    </article>
  );
};

export const Intro: Component<{}, {}> = function () {
  return (
    <div>
      <h1>Hi 👋</h1>
      <p>
        I'm Hariz, a high school student from Canada. I'm a wannabe "software
        engineer" and I sometimes do cool things.
      </p>
      <p>
        I'm interested in webdev, native iOS development, and a bit of security research.
      </p>
    </div>
  );
};

export const About: Component<{}, {}> = function () {
  return (
    <div>
      <h2>About me</h2>
      <ul>
        <li>I was one of the winners of the 2024 Swift Student Challenge</li>
        <li>
          I know the following programming languages (well):
          <ul>
            <li>Swift (the GOAT)</li>
            <li>JavaScript/TypeScript</li>
            <li>C/C++/Objective-C</li>
            <li>Bash</li>
            <li>Python</li>
          </ul>
        </li>
        <li>
          I'm a member of{" "}
          <a href="https://mercurywork.shop" target="blank">
            Mercury Workshop
          </a>
        </li>
        <li>I play the guitar (!!)</li>
        <li>I use Arch (btw)</li>
      </ul>
    </div>
  );
};

export const Contact: Component<{}, {}> = function () {
  return (
    <div>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://fosstodon.org/@BomberFish" target="blank" rel="me">
            Fediverse
          </a>
          &nbsp;(@BomberFish@fosstodon.org)
        </li>
        <li>
          <a href="https://reddit.com/u/DALEK_77" target="blank" rel="me">
            Reddit
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bomberfish77" target="blank" rel="me">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/BomberFish" target="blank" rel="me">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:hariz@bomberfish.ca">Email</a> (hariz@bomberfish.ca)
          <ul>
            <li>I might be slow to respond, I don't check my email often.</li>
          </ul>
        </li>
        <li>
          Discord
          <ul>
            <li>
              @bomberfish <strong>(Main account)</strong>
            </li>
            <li>@hanz_was_here</li>
            <li>@pageprotectionlayer</li>
            <li>@securepagetablemonitor</li>
          </ul>
        </li>
        <li>
          <span>Signal: @bomberfish.77</span>
          <ul>
            <li>Please only use this if all else fails.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export const SiteMap: Component<{}, {}> = function () {
  return (
    <div>
      <h2>Other things on this site</h2>
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
    </div>
  );
};

export const DesignPhilosophy: Component<{}, {}> = function () {
  return (
    <div>
      <h2>Website Design Philosophy</h2>
      <ul>
        <li>Be as keyboard-accessible as possible.</li>
        <li>
          JavaScript is not the enemy. Take advantage of all the latest gizmos.
          <ul>
          <li>Always include source maps. Why not show off your code?</li>
          </ul>
        </li>
        <li>
          Optimize for size. Some people use (and pay for) Canadian cellular
          data.
        </li>
        <li>Have some fun. Don't be too bland.</li>
      </ul>
    </div>
  );
};
