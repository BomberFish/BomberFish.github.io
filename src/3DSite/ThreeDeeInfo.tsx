import "dreamland";
import { DesignPhilosophy } from "../SiteContent";

export const ThreeDeeInfo: Component<{}, {}> = function () {
  return (
    <article>
      <h2>About the 3D view</h2>
      <h3>Quick Start</h3>
      <ul>
        <li>Use WASD to move</li>
        <li>Use the left and right arrow keys to rotate the camera</li>
        <li>Use the up and down arrow keys to move up and down</li>
      </ul>
      <p>Check behind you to see my blog.</p>
      <h3>How I did it</h3>
      <p>
        The 3D effects are done purely with CSS transforms. No WebGL, canvas
        elements, smoke, or mirrors. I use a JavaScript framework called{" "}
        <a href="https://dreamland.js.org/?kawaii" target="_blank">
          DreamlandJS
        </a>{" "}
        for basic reactivity, and to make development easier. You can check out
        the source of this page{" "}
        <a
          href="https://github.com/BomberFish/BomberFish.github.io/blob/master/src"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <h3>FAQ</h3>
      <div>Q: Why?</div>
      <div>A: Because it's cool :3</div>
      <br></br>
      <div>Q: Why can't I click any links?</div>
      <div>
        A: You are using Firefox. The Firefox devs (in their infinite wisdom)
        refuse to implement modern standards correctly.
      </div>
      <br></br>
      <div>Q: This is so cool, why isn't it the default view?</div>
      <div>
        A: It's an accessibility nightmare, and doesn't even work right on most
        browsers (thanks Mozilla). Also, it's completely broken on phones! (I'm
        just too lazy to implement mobile controls :P)
      </div>
      <br></br>
      <div>Q: GRRR!! Why did you use a JS framework!! So bloated!!</div>
      <div>
        A: Calm down Mr.Vanilla-purist. I'm sure you're great fun at parties.
      </div>
      <br></br>
      <div>Q: Where did you get the idea?</div>
      <div>
        I was mainly inspired by{" "}
        <a href="https://coolelectronics.me" target="_blank">
          velzie.d's website
        </a>
        , which pulls off something similar. I actually used some of his code
        for this site (cooleletronis {/* yes this is mispelled on purpose */} if
        you are reading this thank you), so it wouldn't be possible without him.
      </div>
      <DesignPhilosophy />
    </article>
  );
};
