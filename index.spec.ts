import _ from 'lodash';
import './index';

test('1. base', () => {
  const arr = _.chain([1, 3, 5])
    .map(v => v * 2)
    .log('new array: ')
    .map(v => v + 1)
    .value();

  expect(arr).toEqual([3, 7, 11]);
});

test('2. format', () => {
  const v = _.chain([1, 3, 5])
    .reduce((result: number, current) => result + current)
    .log('sum: %d')
    .isNumber()
    .value();

  expect(v).toBe(true);
});

// test('3. not in chain', () => {
//   _.log('hello world');
//   expect(true).toBe(true);
// });

// test('4. duplicated log func', () => {
// });
