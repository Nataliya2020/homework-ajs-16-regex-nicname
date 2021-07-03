import Validator from '../Validator';

test('checking the creation of a correctly specified name', () => {
  expect(new Validator().validateUsername('Nick-123_name')).toBeTruthy();
});

test('checking the creation of an incorrectly specified name, specified width a digit', () => {
  expect(() => new Validator().validateUsername('1Nick-123_name')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, specified width a underscore', () => {
  expect(() => new Validator().validateUsername('_Nick-123_name')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, specified width a dash', () => {
  expect(() => new Validator().validateUsername('-Nick-123_name')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, ending in a digit', () => {
  expect(() => new Validator().validateUsername('Nick-123_name1')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, ending width a dash', () => {
  expect(() => new Validator().validateUsername('Nick-123_name-')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, ending width an underscore', () => {
  expect(() => new Validator().validateUsername('Nick-123_name_')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, ending width an underscore', () => {
  expect(() => new Validator().validateUsername('Nick-123_name_')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name with more than three digits in a row', () => {
  expect(() => new Validator().validateUsername('Nick-1234_name')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, specified with a forbidden character ampersand', () => {
  expect(() => new Validator().validateUsername('&Nick-124_name')).toThrowError(new Error('Имя не соответствует правилам'));
});

test('checking the creation of an incorrectly specified name, specified with a forbidden character point', () => {
  expect(() => new Validator().validateUsername('.Nick-124_name')).toThrowError(new Error('Имя не соответствует правилам'));
});
