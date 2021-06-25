const createTextElement = (type, className, description, name) => {
  const element = document.createElement(type);
  element.textContent = description ? description : name;
  element.className = className;

  return element;
};

module.exports = {
  createTextElement,
};
