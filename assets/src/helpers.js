const caa = (component, appendTo, attributes, textContent) => {
  const element = document.createElement(component);
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (appendTo) {
    appendTo.appendChild(element);
  }
  return element;
};
