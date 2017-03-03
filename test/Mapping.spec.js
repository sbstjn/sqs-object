'use strict';

const chai = require('chai');
const expect = chai.expect;
const sqsObject = require('../');

describe('Mapping', () => {
  it('should accept valid mapping', () => {
    const mapping = [
      {
        objectKey: 'id',
        sqsKey: 'ID',
        sqsType: 'String'
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
      }
    ];

    expect(
      sqsObject.Mapping.valid(mapping)
    ).to.equal(
      true
    );
  });

  it('should reject invalid mapping', () => {
    const mapping = [
      {
        objectKeys: 'id',
        sqsKey: 'ID',
        sqsType: 'String'
      }
    ];

    expect(
      sqsObject.Mapping.valid(mapping)
    ).to.equal(
      false
    );
  });
});
