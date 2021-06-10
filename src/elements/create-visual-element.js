const createVisualElement = (type, className, source, name) => {
  const visualElement = document.createElement(type);
  visualElement.src = source;
  visualElement.alt = type === 'img' ? name : null;
  visualElement.className = className;

  return visualElement;
};

module.exports = {
  createVisualElement: createVisualElement,
};
