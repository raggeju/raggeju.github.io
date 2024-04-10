const cewa = (component, attributes) => {
  const element = document.createElement(component);
  if (!attributes) return element;
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );
  return element;
};
