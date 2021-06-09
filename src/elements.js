export const createAnchorTag = (url, origin) => {
  const anchor = document.createElement('a');
  anchor.className = 'rec-item-wrapper';
  anchor.href = url;
  anchor.target = origin === 'sponsored' ? '_blank' : null;

  return anchor;
};

export const createDivTag = classNames => {
  const div = document.createElement('div');
  div.classList = classNames;

  return div;
};

export const createTextElement = (type, className, description, name) => {
  const element = document.createElement(type);
  element.innerHTML = description ? description : name;
  element.className = className;

  return element;
};

export const createVisualElement = (type, className, source, name) => {
  const visualElement = document.createElement(type);
  visualElement.src = source;
  visualElement.alt = type === 'img' ? name : null;
  visualElement.className = className;

  return visualElement;
};
