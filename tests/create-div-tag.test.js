require('@testing-library/jest-dom');

const { createDivTag } = require('../src/elements/create-div-tag');

describe('Create a div tag', () => {
  const divTag = createDivTag('class-name');
  it('creates a div element', () => {
    expect(divTag).not.toBeNull();
    expect(divTag).toHaveClass('class-name');
  });
});
