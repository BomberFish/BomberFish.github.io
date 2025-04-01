import "dreamland";
import { DesignPhilosophy } from "../SiteContent";

export const ThreeDeeInfo: Component<{}, {}> = function () {
  return (
    <article>
      <h2>about the 3d view!</h2>
      <h3>quick start guide</h3>
      <ul>
        <li>use WASD to move</li>
        <li>use the left/right arrow keys to rotate the camera</li>
        <li>use the up/down arrow keys to move up and down</li>
      </ul>
      <p>check behind you to see my blog!</p>
      <h3>how i did it</h3>
      <p>
        the 3d effects are done purely with css 3d transforms! no webgl, canvas
        elements, smoke, or mirrors. i use a js framework called{" "}
        <a href="https://dreamland.js.org/?kawaii" target="_blank">
          dreamland.js
        </a>{" "}
        for basic reactivity, and to make development easier. you can check out
        the source of this page{" "}
        <a
          href="https://github.com/BomberFish/BomberFish.github.io/blob/master/src"
          target="_blank"
        >
          here
        </a>
        !
      </p>
      <h3>FAQ</h3>
      <div>Q: why?</div>
      <div>A: because it's cool :3</div>
      <br></br>
      <div>Q: why can't I click any links?</div>
      <div>
        A: you are using firefox. the firefox devs (in their infinite wisdom)
        refuse to implement modern standards correctly. please just use chrome.
      </div>
      <br></br>
      <div>Q: this is so cool, why isn't it the default view?</div>
      <div>
        A: it's an accessibility nightmare, and doesn't even work right on most
        browsers (thanks mozilla). also, it's totally broken on phones! (i'm
        just too lazy to implement mobile controls :P)
      </div>
      <br></br>
      <div>Q: where'd you get the idea?</div>
      <div>
        i was mainly inspired by{" "}
        <a href="https://coolelectronics.me" target="_blank">
          velzie's website
        </a>
        , which pulls off something similar. i actually used some of his code
        for this site (cooleletronis {/* yes this is mispelled on purpose */} if
        you are reading this thank you), so it wouldn't be possible without him.
      </div>
      <DesignPhilosophy />
    </article>
  );
};
