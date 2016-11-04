'use strict';

const getLodashAliases = require('get-lodash-aliases');
const lodashAliases = require('.');
const test = require('tape');

test('lodashAliases', t => {
  t.plan(1);

  getLodashAliases().then(expected => {
    t.deepEqual(lodashAliases, expected, 'should have no conflict with the latest Lodash API data.');
  }).catch(t.fail);
});
