customElements.define(
  "raggeju-job",
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
