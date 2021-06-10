const createAnchorTag = (url, origin) => {
  const anchor = document.createElement('a');
  anchor.className = 'rec-item-wrapper';
  anchor.href = url;
  anchor.target = origin === 'sponsored' ? '_blank' : null;

  return anchor;
};

module.exports = {
  createAnchorTag: createAnchorTag,
};
