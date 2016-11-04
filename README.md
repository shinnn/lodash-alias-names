# lodash-alias-names

[![NPM version](https://img.shields.io/npm/v/lodash-alias-names.svg)](https://www.npmjs.com/package/lodash-alias-names)
[![Build Status](https://travis-ci.org/shinnn/lodash-alias-names.svg?branch=master)](https://travis-ci.org/shinnn/lodash-alias-names)
[![devDependencies Status](https://david-dm.org/shinnn/lodash-alias-names/dev-status.svg)](https://david-dm.org/shinnn/lodash-alias-names?type=dev)

Alias names of the [Lodash](https://lodash.com/) methods

```json
{
  "head": [
    "first"
  ],
  "forEach": [
    "each"
  ],
  "forEachRight": [
    "eachRight"
  ],
  "assignIn": [
    "extend"
  ],
  "assignInWith": [
    "extendWith"
  ],
  "toPairs": [
    "entries"
  ],
  "toPairsIn": [
    "entriesIn"
  ],
  "prototype.value": [
    "prototype.toJSON",
    "prototype.valueOf"
  ]
}
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install lodash-alias-names
```

## Usage

```javascript
const lodashAliasNames = require('lodash-alias-names');
```

### lodashAliasNames

Type: `Object`

[Lodash](https://github.com/lodash/lodash) has some alias methods for backward compatibility. For exmaple `_.extend` was [renamed](https://github.com/lodash/lodash/commit/9c342eb4323770868448c0b3597a575820da6289) to [`_.assignIn`](https://lodash.com/docs/#assignIn) in [v4.0.0](https://github.com/lodash/lodash/wiki/Changelog#v400) and at the same time re-added as an alias of `_.assignIn`.

The exposed object is in the following form:

```javascript
{
  "originalLodashMethodName": [
    "aliasLodashMethodName",
    // ...
  ],
  // ...
}
```

```javascript
lodashAliasNames.forEach; //=> ['each']
// This means "`_.forEach` has one alias: `_.each`.

lodashAliasNames['prototype.value']; //=> ['prototype.toJSON', 'prototype.valueOf']
// This means `_.prototype.value` has two aliases: `_.prototype.toJSON` and `_.prototype.valueOf`.
```

## License

[The Unlicense](./LICENSE).
