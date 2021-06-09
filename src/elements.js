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

export const createTextElement = (type, className, content) => {
  const element = document.createElement(type);
  element.innerHTML = content;
  element.className = className;

  return element;
};

export const createVisualElement = (type, className, source) => {
  const visualElement = document.createElement(type);
  visualElement.src = source;
  visualElement.className = className;

  return visualElement;
};
