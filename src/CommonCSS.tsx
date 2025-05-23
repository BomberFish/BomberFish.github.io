import { scope, cascade } from "dreamland/core";

export const articleCSS = scope`
  :scope {
  width: 100%;
  }
  ul {
    list-style-type: circle;
    padding-inline-start: 2rem;
  }

  ul ul {
    list-style-type: "→ ";
    padding-inline-start: 2rem;
  }
`;
