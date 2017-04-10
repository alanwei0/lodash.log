const logMark = Symbol('log');

export default function (_) {
  if (_ === undefined || !_.mixin || !_.bind || !_.partial) {
    throw new Error('You have to init this extension with a lodash instance');
  }

  const log = (value, ...args) => {
    let logFunc = v => console.log(...args, v);
    
    if (args.length > 0 && typeof args[0] === 'boolean' && typeof args[1] === 'function') {
      const [useBind, func, ...others] = args;
      let bindFunc = 'partial';
      if (useBind) { bindFunc = 'bind'; }
      logFunc = v => _[bindFunc](func, ...others)(v);
    }
    
    return _.tap(value, logFunc);
  };

  log.__mark__ = logMark;

  if (_.log && _.log.__mark__ !== log.__mark__ 
    && process && process.env && process.env.NODE_ENV === 'development')
  {
    throw new Error('A method with the same name "log" has existed in lodash!');
  }

  _.mixin({ log });
}