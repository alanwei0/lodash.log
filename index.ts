import _ from 'lodash';

const log = (value, ...args) => {
  let logFunc = v => console.log(...args, v);
  return _.tap(value, logFunc);
};

if ('log' in _) {
  console.warn('Please Check! There has been a \'log\' function in your lodash');
}

_.mixin({ log });

export default _;
