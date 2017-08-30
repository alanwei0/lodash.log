# lodash.log

[![Travis](https://img.shields.io/travis/alanwei0/lodash.log.svg)](https://travis-ci.org/alanwei0/lodash.log)
[![codecov](https://img.shields.io/codecov/c/github/alanwei0/lodash.log.svg)](https://codecov.io/gh/alanwei0/lodash.log)
[![npm-version](https://img.shields.io/npm/v/lodash.log.svg)](https://www.npmjs.com/package/lodash.log)
[![license](https://img.shields.io/github/license/alanwei0/lodash.log.svg)](https://github.com/alanwei0/lodash.log)

Mix `console.log` into lodash, to print the intermediate value in a chain.

## Other Features

- TypeScript supported
- Not print in production env

## Install

```sh
$ npm install -S lodash.log
```

## Usage

```javascript
import _ from 'lodash';
// because this lib is a mixin of lodash, 
// so you must import it just after lodash，but prior to others at the beginning of the program
import 'lodash.log';

// directly
_.log('hello world'); // hello world

// in a chain
_.chain([1, 3, 5])
  .map(v => v * 2)
  .log('current array: ') // current array: [2, 6, 10]
  .map(v => Math.pow(v, 2))
  .value();
```
