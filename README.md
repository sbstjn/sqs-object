# sqs-object

Convert **JavaScript** objects to **SQS Meta** attributes as *vice verse*.

## Installation

```bash
$ > npm install sqs-object --save
```

## Usage

```js
const sqsObject = require('sqs-object');
```

## Mapping

First define a mapping between the JavaScript object and the SQS Meta Attributes like this:

```js
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
```

## Object to Meta Attributes

```js
const meta = sqsObject.Meta({
  id: 12,
  name: 'Paul',
  age: 45
}, mapping);
```

```json
{
  "ID": {
    "DataType": "Number",
    "StringValue": "12"
  },
  "Name": {
    "DataType": "String",
    "StringValue": "Paul"
  },
  "Age": {
    "DataType": "Number",
    "StringValue": "45"
  }
}
```

## Meta Attributes to Object

```js
const object = sqsObject.Object({
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
}, mapping);
```

```json
{
  "id": 12,
  "name": "Paul",
  "age": 45
}
```

## License

Feel free to use the code, it's released using the [MIT license](https://github.com/sbstjn/sqs-object/blob/master/LICENSE.md).

## Contributors

- [Sebastian Müller](https://sbstjn.com)
