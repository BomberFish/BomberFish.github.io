import "dreamland";

export const Screen: Component<
  {
    x?: number;
    y?: number;
    z?: number;
    rx?: number;
    ry?: number;
    rz?: number;
    width?: number;
    height?: number;
    autoHeight?: boolean;
    nomove?: boolean;
  },
  {
    children: Element;
  }
> = function () {
  this.css = `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    width: ${this.width + "px" || "auto"};
    height: ${this.height + "px" || "auto"};

    transition: 0.75s transform ease-out;

    transform-origin: 50% 0;
    transform: rotateX(calc(var(--rX))) rotateY(calc(var(--rY))) rotateZ(calc(var(--rZ))) translate3d(calc(var(--pX)*var(--gridsize)),calc(var(--pY)*var(--gridsize)),calc(var(--pZ)*var(--gridsize)));

    article {
      background: color-mix(in srgb, var(--crust), transparent 20%);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 0.75em;
      border-radius: 1rem;
      border: 1px solid var(--surface0);
      transition: 0.3s;
      overflow: auto;
      height: ${this.autoHeight ? "auto" : "100%"};

      resize: both;

      &:hover {
        border-color: var(--accent);
        transition: 0.3s;
      }

      width: 100%;
    }
  `;

  this.x ||= 0;
  this.y ||= 0;
  this.z ||= 0;
  this.rx ||= 0;
  this.ry ||= 0;
  this.rz ||= 0;

  this.mount = () => {
    // works around a bug i will fix later
    useChange(
      use`--pX: ${this.x || 0}; --pY: ${this.y || 0}; --pZ: ${this.z || 0
        }; --rX: ${this.rx || 0}deg; --rY: ${this.ry || 0}deg; --rZ: ${this.rz || 0
        }deg`,
      (v) => ((this.root as HTMLElement).style.cssText = v)
    );
  };

  return (
    <div
      on:mouseenter={() => {
        if (this.rz !== undefined && !this.nomove) {
          this.z! += 0.3;
        }
      }}
      on:mouseleave={() => {
        if (this.rz !== undefined && !this.nomove) {
          this.z! -= 0.3;
        }
      }}
      on:dblclick={() => {
        if (this.rz !== undefined && !this.nomove) {
          this.rz! += 360;
        }
      }}
    >
      {this.children}
    </div>
  );
};
