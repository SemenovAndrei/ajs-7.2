import Validator from '../validator';

test.each([
  [''],
  ['имя'],
  [' имя'],
  [' name'],
  ['+!&^%$#@'],
  ['name name'],
  ['1name'],
  ['name13'],
  ['na123me'],
  ['_name_'],
  ['-name-'],

  [null],
  [undefined],
])('%p', (name) => {
  expect(() => {
    const result = new Validator(name);
    result.validateUsername();
  }).toThrow();
});

test.each([
  ['name', true],
  ['name12d', true],
  ['a1s22f', true],
])('%p', (name, expected) => {
  const result = new Validator(name);
  expect(result.validateUsername()).toEqual(expected);
});
