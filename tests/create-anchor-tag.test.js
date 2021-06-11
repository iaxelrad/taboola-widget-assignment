require('@testing-library/jest-dom');

const { createAnchorTag } = require('../src/elements/create-anchor-tag');

const url = 'http://www.google.com/';

describe('Create an anchor tag element', () => {
  it('creates a sponsored anchor tag element ', () => {
    const anchorTag = createAnchorTag(url, 'sponsored');

    expect(anchorTag).not.toBeNull();
    expect(anchorTag).toHaveClass('rec-item-wrapper');
    expect(anchorTag).toHaveAttribute('target', '_blank');
  });
  it('creates an organic anchor tag element ', () => {
    const anchorTag = createAnchorTag(url, 'organic');

    expect(anchorTag).not.toBeNull();
    expect(anchorTag).toHaveClass('rec-item-wrapper');
    expect(anchorTag).not.toHaveAttribute('target', '_blank');
  });
});
