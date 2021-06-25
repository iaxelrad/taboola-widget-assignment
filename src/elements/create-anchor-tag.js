const createAnchorTag = (url, origin) => {
  const anchor = document.createElement('a');
  anchor.className = 'rec-item-wrapper';
  anchor.href = url;
  anchor.target = origin === 'sponsored' ? '_blank' : '_self';

  return anchor;
};

module.exports = {
  createAnchorTag,
};
