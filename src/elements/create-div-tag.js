const createMultiClassDivTag = classNames => {
  const div = document.createElement('div');
  div.classList = classNames;

  return div;
};

module.exports = {
  createMultiClassDivTag,
};
