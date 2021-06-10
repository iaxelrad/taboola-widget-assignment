require('@testing-library/jest-dom');

const { createTextElement } = require('../src/elements/create-text-element');

const className = 'class-name';
const description = 'description';
const name = 'name';

describe('Create a text element', () => {
  it('creates a text element', () => {
    let type = 'p';
    const pTag = createTextElement(type, className, description, name);

    type = 'h1';
    const h1Tag = createTextElement(type, className, description, name);

    expect(pTag).not.toBeNull();
    expect(pTag).toHaveTextContent(description);
    expect(h1Tag).not.toBeNull();
  });

  it('creates a text element with no description', () => {
    let type = 'p';

    const pTag = createTextElement(type, className, name);
    type = 'h1';
    const h1Tag = createTextElement(type, className, name);
    expect(pTag).not.toBeNull();
    expect(pTag).toHaveTextContent(name);
    expect(h1Tag).not.toBeNull();
  });

  it('creates a text element with no description or name', () => {
    let type = 'p';
    const pTag = createTextElement(type, className);
    type = 'h1';
    const h1Tag = createTextElement(type, className);
    expect(pTag).not.toBeNull();
    expect(pTag).toHaveTextContent('');
    expect(h1Tag).not.toBeNull();
  });
});
