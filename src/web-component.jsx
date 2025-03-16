// import ReactDom from "react-dom/client";
// import { Widget } from "./components/Widget";

// export const normalizeAttribute = (attribute) => {
//   return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
// };

// class WidgetWebComponent extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }

//   connectedCallback() {
//     const props = this.getPropsFromAttributes();
//     const root = ReactDom.createRoot(this.shadowRoot);
//     root.render(<Widget {...props} />);
//   }

//   getPropsFromAttributes() {
//     const props = {};
//     for (const { name, value } of this.attributes) {
//       props[normalizeAttribute(name)] = value;
//     }
//     return props;
//   }
// }

// export default WidgetWebComponent;

import { createRoot } from "react-dom/client";
import { Widget } from "./components/Widget";

class WidgetWebComponent extends HTMLElement {
  connectedCallback() {
    const projectId = this.getAttribute("project-id");
    const root = createRoot(this);
    root.render(<Widget projectId={projectId} />);
  }
}

customElements.define("my-widget", WidgetWebComponent);

export { WidgetWebComponent };
