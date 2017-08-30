import _ from 'lodash';
import { logFactory } from './index';

// overwrite console.log, in order to test
const log = console.log;
const output = { args: [] };
const reset = () => { output.args = []; };
console.log = (...args) => { output.args = args; };

test('directly', () => {
  reset();
  _.log('hello world');
  expect(output.args).toEqual(['hello world']);
});

test('in _.chain', () => {
  reset();
  const arr = _.chain([1, 3, 5])
    .map(v => v * 2)
    .log('new array: ')
    .map(v => v + 1)
    .value();

  expect(output.args).toEqual(['new array: ', [2, 6, 10]]);
  expect(arr).toEqual([3, 7, 11]);
});

test('in implicit chain', () => {
  reset();
  const arr = _([1, 3, 5])
    .map(v => v * 2)
    .log('new array: ')
    .map(v => v + 1)
    .value();

  expect(output.args).toEqual(['new array: ', [2, 6, 10]]);
  expect(arr).toEqual([3, 7, 11]);
});

test('format message', () => {
  const v = _.chain([1, 3, 5])
    .reduce((result: number, current) => result + current)
    .log('sum: %d')
    .isNumber()
    .value();

  expect(output.args).toEqual(['sum: %d', 9]);
  expect(v).toEqual(true);
});

test('conflict with another log', () => {
  const nowLog = _.log;
  _.mixin({ log: _.noop });
  expect(() => logFactory(_)).toThrow('Please Check! There has been another \'log\' in your lodash');
  _.mixin({ log: nowLog });
});
