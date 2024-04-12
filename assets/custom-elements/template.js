customElements.define(
  "raggeju-template",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      caa("div", shadow, {}, "blajblaj");
    }
  }
);
