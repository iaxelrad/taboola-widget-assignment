const createVisualElement = (type, className, source, name) => {
  const visualElement = document.createElement(type);
  if (type === 'img') {
    visualElement.src = source;
    visualElement.alt = name;
    visualElement.className = className;
  } else if (type === 'video') {
    visualElement.className = className;
    visualElement.controls = true;
    const videoSourceElement = document.createElement('source');
    videoSourceElement.src = source;
    videoSourceElement.type = 'video/mp4';
    visualElement.appendChild(videoSourceElement);
  }

  return visualElement;
};

module.exports = {
  createVisualElement,
};
