'use strict';

const assert = require('assert');

module.exports.valid = mapping => {
  try {
    mapping.forEach(
      el => {
        const jsonText = JSON.stringify(el);

        assert(!!el.objectKey, 'Missing .objectKey: ' + jsonText);
        assert(!!el.sqsKey, 'Missing .sqsKey: ' + jsonText);
        assert(!!el.sqsType, 'Missing .sqsType: ' + jsonText);
      }
    );
  } catch (e) {
    return false;
  }

  return true;
};
