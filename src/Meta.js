'use strict';

const assert = require('assert');
const Mapping = require('./Mapping');

module.exports = (object, map) => {
  assert(!!Mapping.valid(map), 'Invalid mapping information.');

  let meta = {};
  map.forEach(
    el => {
      if (object[el.objectKey]) {
        meta[el.sqsKey] = {
          DataType: el.sqsType,
          StringValue: '' + object[el.objectKey]
        };
      }
    }
  );

  return meta;
}
