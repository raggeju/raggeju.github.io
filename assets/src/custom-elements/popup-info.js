class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const text = this.hasChildNodes ? this.childNodes[0] : undefined;

    caa(
      "style",
      shadow,
      {},
      `
.wrapper {
	position: relative;
}

.info {
	font-size: 0.8rem;
	width: 200px;
	display: inline-block;
	border: 1px solid black;
	padding: 10px;
	background: white;
	border-radius: 10px;
	opacity: 0;
	transition: 0.6s all;
	position: absolute;
	top: 20px;
	left: 10px;
	z-index: 3;
}

img {
	width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
	opacity: 1;
}`
    );
    const wrapper = caa("span", shadow, { class: "wrapper" });
    caa("br", wrapper);
    const icon = caa("span", wrapper, { class: "icon", tabindex: 0 });
    caa("img", icon, {
      src: this.hasAttribute("img") ? this.getAttribute("img") : "assets/img/default.png",
    });
    caa("span", wrapper, { class: "info" }, text);
  }
}

customElements.define("popup-info", PopupInfo);
