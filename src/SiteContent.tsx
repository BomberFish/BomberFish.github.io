import "dreamland";
import { articleCSS } from "./CommonCSS";

export const FullArticle: Component<{}, {}> = function () {
  return (
    <article class={articleCSS}>
      <IntroSmall />
      <About />
      <Contact />
      <SiteMap />
    </article>
  );
};

export const Intro: Component<{}, {}> = function () {

  this.css = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  img {
    height: auto;
    width: min(20rem, 50%);
    align-self: flex-start;
    justify-self: flex-end;
    float: left;
    margin-right: 2rem;
  }

  @media (orientation: portrait) {
    #kawaii {
      display: none; /* TODO: Figure something out */
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    #kawaii {
      display: none;
    }
  }
  `

  return (
    <div>
      <div>
        <IntroSmall />
        <About />
        <Contact />
      </div>
      <img id="kawaii" src="/kawaii.webp" alt="Vtuber-style logo" />
    </div>
  );
};

export const IntroSmall: Component<{}, {}> = function () {
  this.css = `
  h1 {
    font-size: 3rem!important;
    cursor: default;
  }
  h1>span {
    font-weight: 900!important;
    transition: font-weight 0.25s ease,
                letter-spacing 0.25s ease;
    letter-spacing: 0em;
  }

  h1:hover > span {
    font-weight: 100!important;
    transition: font-weight 0.25s ease,
                letter-spacing 0.25s ease;
    letter-spacing: 0.05em;
  }
    `
  return (
    <section>
      <h1><span>Hi</span> 👋</h1>
      <p>
        I'm Hariz, a 16 y/o high school student from Canada, and I sometimes do/make cool/lame things.
      </p>
      <p>
        <br></br>
        As for <code>/.* engineering/g</code>, I'm interested in:
        <ul>
          <li>Hardware (building robots 'n stuff!)</li>
          <li>Webdev (as you can tell from this immaculately put-together portfolio)</li>
          <li>Backend (kinda)</li>
          <li>Native iOS development</li>
          <li>And a little bit of security research</li>
        </ul>
      </p>
    </section>
  )
}

export const About: Component<{}, {}> = function () {
  return (
    <section>
      <h2>Some more about me</h2>
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
    </section>
  );
};

export const Contact: Component<{}, {}> = function () {
  return (
    <section>
      <h2>Get in touch</h2>
      <ul>
        <li>
          <a href="https://wetdry.world/@fish" target="blank" rel="me">
            Fediverse
          </a>
          &nbsp;(@fish@wetdry.world)
          <ul>
            <li>
              If you use Bluesky, you can follow&nbsp;<a href="https://bsky.app/profile/fish.wetdry.world.ap.brid.gy" target="blank">@fish.wetdry.world.ap.brid.gy</a>&nbsp;to view my posts on the Fediverse. Please note this is not always up-to-date.
            </li>
            <li>
              If you use neither of those, you can view my latest post in the "Yapping" tab above.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://reddit.com/u/DALEK_77" target="blank" rel="me">
            Reddit
          </a>
        </li>
        <li>
          {/* no elon i am not calling it "X" */}
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
            <li>Every email address @bomberfish.ca is me.</li>
          </ul>
        </li>
        <li>
          Discord
          <ul>
            <li>
              @bomberfish <strong>(Main account)</strong>
            </li>
            <li>@realtimsweeneyepic</li>
            <li>@pageprotectionlayer</li>
            <li>@securepagetablemonitor</li>
          </ul>
        </li>
        <li>
          <a href="https://matrix.to/#/@bomberfish:omada.cafe" target="blank" rel="me">Matrix</a> (@bomberfish:omada.cafe)
        </li>
        <li>
          <span>Signal: @bomberfish.77</span>
          <ul>
            <li>Please only use this if all else fails.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export const SiteMap: Component<{}, {}> = function () {
  return (
    <section>
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
    </section>
  );
};

export const DesignPhilosophy: Component<{}, {}> = function () {
  return (
    <section>
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
    </section>
  );
};
