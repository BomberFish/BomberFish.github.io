import "dreamland";

export const SuperCoolAndEpicDanceFloor: Component<{}, {}> = function () {
  this.css = `
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    grid-template-columns: repeat(7, 1fr);
  
    .tile {
      background: var(--base);
      border: 10px solid var(--mantle);
      animation: 1s linear infinite forwards borderPulse;
      width: 150px;
      height: 150px;
    }

    @keyframes borderPulse {
      0% {
        border-color: var(--crust);
      }
      10%, 20% {
        border-color: var(--accent);
      }
      7% {
        border-color: color-mix(in srgb, white 20%, var(--accent))
      }
      85%, 100% {
        border-color: var(--crust);
      }
    }

    `;

  return (
    <div>
      {/* mother of all jank */}
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>

      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
      <div class="tile"></div>
    </div>
  );
};
