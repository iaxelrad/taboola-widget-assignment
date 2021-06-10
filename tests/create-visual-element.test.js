require('@testing-library/jest-dom');

const {
  createVisualElement,
} = require('../src/elements/create-visual-element');

const className = 'class-name';
const name = 'name';

describe('Create a visual element', () => {
  it('creates an image element', () => {
    let type = 'img';
    const source =
      'http://trademonday.com/wp-content/uploads/2019/12/Demo_banner.png';
    const imgTag = createVisualElement(type, className, source, name);

    expect(imgTag).not.toBeNull();
    expect(imgTag).not.toHaveTextContent();
    expect(imgTag).toHaveClass(className);
    expect(imgTag).toHaveAttribute('src', source);
    expect(imgTag).toHaveAttribute('alt', name);
  });
});
it('creates an iframe element', () => {
  let type = 'iframe';
  const source = 'https://www.youtube.com/embed/y3nTJ3R2Tdk';
  const imgTag = createVisualElement(type, className, source, name);

  expect(imgTag).not.toBeNull();
  expect(imgTag).not.toHaveTextContent();
  expect(imgTag).toHaveClass(className);
  expect(imgTag).toHaveAttribute('src', source);
  expect(imgTag).not.toHaveAttribute('alt', name);
});
// });
