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
    width: min(20rem, 40%);
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
  `;

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
	font-family: var(--font-body)!important;
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
    letter-spacing: 0.09em;
  }
    `;
  return (
    <section>
      <h1>
        <span>hiya!</span> 👋
      </h1>
      <p>i'm hariz, a 16 y/o high school student from canada :3</p>
      <p>
        i sometimes make <code>use(ful|less)</code> projects and stuff.
      </p>
      <p>
        <br></br>
        as for <code>.* engineering</code>, I'm interested in:
        <ul>
          <li>hardware (building robots 'n stuff!)</li>
          <li>microcontrollers</li>
          <li>ios development with swiftui</li>
          <li>
            webdev (as you can tell from this immaculately put-together
            portfolio)
          </li>
          <li>backend (kinda)</li>
          <li>and a little bit of security research!</li>
        </ul>
      </p>
    </section>
  );
};

export const About: Component<{}, {}> = function () {
  return (
    <section>
      <h2>some more about me...</h2>
      <ul>
        <li>i was one of the winners of the 2024 swift student challenge</li>
        <li>
          i am fluent in the following programming languages:
          <ul>
            <li>swift (the GOAT)</li>
            <li>javascript/typescript</li>
            <li>c/c++/objective-c</li>
            <li>bash</li>
            <li>python</li>
          </ul>
        </li>
        <li>
          i'm part of{" "}
          <a href="https://mercurywork.shop" target="blank">
            mercury workshop
          </a>
          , a team of open-source software developers
        </li>
        <li>i'm also an amateur music producer! stay tuned for more info!</li>
      </ul>
    </section>
  );
};

export const Contact: Component<{}, {}> = function () {
  return (
    <section>
      <h2>get in touch!</h2>
      <ul>
        <li>
          <a href="https://github.com/BomberFish" target="blank" rel="me">
            github
          </a>
        </li>
        <li>
          <a href="https://wetdry.world/@fish" target="blank" rel="me">
            fediverse
          </a>
          &nbsp;(@fish@wetdry.world)
          <ul>
            <li>
              if you use bluesky, you can follow&nbsp;
              <a
                href="https://bsky.app/profile/fish.wetdry.world.ap.brid.gy"
                target="blank"
              >
                @fish.wetdry.world.ap.brid.gy
              </a>
              &nbsp;to view my posts on the fediverse. please note, this is
              usually a few minutes behind!
            </li>
            <li>
              if you use neither of those, you can view my latest post in the
              "yapping" tab above.
            </li>
          </ul>
        </li>
        <li>
          <a href="mailto:hariz@bomberfish.ca">Email</a> (hariz@bomberfish.ca)
          <ul>
            <li>
              i might be slow to respond, since i don't check my email often.
            </li>
            <li>every email address @bomberfish.ca belongs to me.</li>
          </ul>
        </li>
        <li>
          discord
          <ul>
            <li>
              @bomberfish <strong>(main account)</strong>
            </li>
            <li>@realtimsweeneyepic</li>
            <li>@pageprotectionlayer</li>
            <li>@securepagetablemonitor</li>
          </ul>
        </li>
        {/* <li> */}
        {/* no elon i am not calling it "X" */}
        {/* <a href="https://twitter.com/bomberfish77" target="blank" rel="me">
            Twitter (inactive)
          </a>
        </li> */}
        <li>
          <a
            href="https://matrix.to/#/@bomberfish:omada.cafe"
            target="blank"
            rel="me"
          >
            matrix
          </a>{" "}
          (@bomberfish:omada.cafe)
        </li>
        <li>
          <span>signal: @bomberfish.77</span>
          <ul>
            <li>please only use this if all else fails!</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export const SiteMap: Component<{}, {}> = function () {
  return (
    <section>
      <h2>other things on this site</h2>
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
      <h2>website design philosophy</h2>
      <ul>
        <li>be as keyboard-accessible as possible.</li>
        <li>
          javascript is not the enemy. take advantage of all the latest gizmos.
          <ul>
            <li>always include source maps. why not show off your code?</li>
          </ul>
        </li>
        <li>
          optimize for size. some people use (and pay for) Canadian cellular
          data.
        </li>
        <li>have some fun! Don't be too bland.</li>
      </ul>
    </section>
  );
};
