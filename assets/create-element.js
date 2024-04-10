function cewa(component, attributes) {
  const element = document.createElement(component);
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );
  return element;
}
