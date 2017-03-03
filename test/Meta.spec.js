'use strict';

const chai = require('chai');
const expect = chai.expect;
const sqsObject = require('../');

describe('Meta', () => {
  it('should create meta attributes from object', () => {
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
      }
    ];

    const object = {
      id: 12,
      name: 'Paul',
      age: 45
    };

    const meta = sqsObject.Meta(object, mapping);

    expect(meta).to.have.property('ID');
    expect(meta).to.have.property('Name');
    expect(meta).to.have.property('Age');

    expect(meta.ID).to.have.property('DataType').that.equals('Number');
    expect(meta.Name).to.have.property('DataType').that.equals('String');
    expect(meta.Age).to.have.property('DataType').that.equals('Number');

    expect(meta.ID).to.have.property('StringValue').that.equals('12');
    expect(meta.Name).to.have.property('StringValue').that.equals('Paul');
    expect(meta.Age).to.have.property('StringValue').that.equals('45');

    expect(sqsObject.Object(meta, mapping)).to.deep.equal(object);
  });
});
