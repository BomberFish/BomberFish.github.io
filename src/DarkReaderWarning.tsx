import "dreamland";

export const DarkReaderWarning: Component<{}, {}> = function () {
  this.mount = () => {
    setInterval(() => {
      if (
        !document.documentElement.getAttribute("data-darkreader-mode") ||
        !document.documentElement.getAttribute("data-darkreader-scheme")
      ) {
        this.root.remove();
      }
    });
  };

  function ctpRed(): string {
    switch (document.body.classList[0]) {
      case "Mocha":
        return "#f38ba8";
      case "Macchiato":
        return "#ed8796";
      case "Frappe":
        return "#e78284";
      case "Latte":
        return "#d20f39";
      default:
        return "#f00";
    }
  }

  this.css = `
      position: fixed;
      bottom: 0;
      right: 0;
      background: var(--surface0);
      color: var(--text);
      padding: 0.5rem 1rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      border-top-left-radius: 0.75rem;
  
      span {
        color: ${ctpRed()};
      }
  
    `;

  return (
    <div id="darkreader-warning">
      <span class="material-symbols-outlined">warning</span>{" "}
      <p>Dark Reader breaks this site.</p>
      <p>Please disable it.</p>
    </div>
  );
};
