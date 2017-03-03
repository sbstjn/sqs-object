'use strict';

const chai = require('chai');
const expect = chai.expect;
const sqsObject = require('../');

describe('Object', () => {
  it('should create object from meta attributes', () => {
    const mapping = [
      {
        objectKey: 'id',
        sqsKey: 'ID',
        sqsType: 'Number'
      },
      {
        objectKey: 'name',
        sqsKey: 'Name',
        sqsType: 'String'
      },
      {
        objectKey: 'age',
        sqsKey: 'Age',
        sqsType: 'Number'
      },
      {
        objectKey: 'valid',
        sqsKey: 'Valid',
        sqsType: 'Boolean'
      }
    ];

    const meta = {
      ID: {
        DataType: 'Number',
        StringValue: '12'
      },
      Name: {
        DataType: 'String',
        StringValue: 'Paul'
      },
      Age: {
        DataType: 'Number',
        StringValue: '45'
      }
    };

    const object = sqsObject.Object(meta, mapping);

    expect(object).to.have.property('id').that.equals(12);
    expect(object).to.have.property('name').that.equals('Paul');
    expect(object).to.have.property('age').that.equals(45);

    expect(sqsObject.Meta(object, mapping)).to.deep.equal(meta);
  });
});
