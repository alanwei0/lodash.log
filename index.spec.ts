import _ from 'lodash';
import './index';

// test('directly', () => {
//   _.log('hello world');
//   expect(true).toBe(true);
// });

test('in _.chain', () => {
  const arr = _.chain([1, 3, 5])
    .map(v => v * 2)
    .log('new array: ')
    .map(v => v + 1)
    .value();

  expect(arr).toEqual([3, 7, 11]);
});

test('in implicit chain', () => {
  const arr = _([1, 3, 5])
    .map(v => v * 2)
    .log('new array: ')
    .map(v => v + 1)
    .value();

  expect(arr).toEqual([3, 7, 11]);
});

test('format message', () => {
  const v = _.chain([1, 3, 5])
    .reduce((result: number, current) => result + current)
    .log('sum: %d')
    .isNumber()
    .value();

  expect(v).toBe(true);
});

// test('4. duplicated log func', () => {
// });
