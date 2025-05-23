import "dreamland"

export const Cursor: Component<{}, { x: number; y: number }> = function () {
    this.x = 0
    this.y = 0
    
    this.mount = () => {
        document.addEventListener("mousemove", (e) => {
        this.x = e.clientX
        this.y = e.clientY
        })
    }
    
    this.css = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 10000;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        backdrop-filter: invert(1);
        translate: -10px -10px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            filter: invert(1);
        }
        
    `
    
    return (
        <div id="cursor" style={use`top: ${this.y}px; left: ${this.x}px;`}>
            <span>+</span>
        </div>
    )
}