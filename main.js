'use strict';

['Mapping', 'Meta', 'Object'].forEach(
  item => {
    module.exports[item] = require('./src/' + item + '.js');
  }
);
