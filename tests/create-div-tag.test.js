require('@testing-library/jest-dom');

const { createMultiClassDivTag } = require('../src/elements/create-div-tag');

describe('Create a div tag', () => {
  const divTag = createMultiClassDivTag('class-name');
  it('creates a div element', () => {
    expect(divTag).not.toBeNull();
    expect(divTag).toHaveClass('class-name');
  });
});
