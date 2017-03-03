'use strict';

const assert = require('assert');
const Mapping = require('./Mapping');

const castValue = (value, type) => {
  switch (type.toLowerCase()) {
    case 'number':
      return parseInt(value, 10);
    case 'string':
      return value;
  }
};

module.exports = (meta, map) => {
  assert(!!Mapping.valid(map), 'Invalid mapping information.');

  let object = {};
  map.forEach(
    el => {
      if (meta[el.sqsKey]) {
        object[el.objectKey] = castValue(meta[el.sqsKey].StringValue, meta[el.sqsKey].DataType);
      }
    }
  );

  return object;
}
