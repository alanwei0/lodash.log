import _ from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    log(message?: any, ...optionalParams: any[]): void;
  }

  interface LoDashExplicitWrapperBase<T, TWrapper> {
    log(...optionalParams: any[]): TWrapper;
  }
}

const log = (value, ...args) => {
  let logFunc = v => console.log(...args, v);
  return _.tap(value, logFunc);
};

if ('log' in _) {
  console.warn('Please Check! There has been a \'log\' function in your lodash');
}

_.mixin({ log });
