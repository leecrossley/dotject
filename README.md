# dotject [![Build Status](https://travis-ci.org/leecrossley/dotject.png?branch=master)](https://travis-ci.org/leecrossley/dotject) [![npm version](https://badge.fury.io/js/dotject.png)](https://npmjs.org/package/dotject) [![Dependency Status](https://david-dm.org/leecrossley/dotject/status.png)](https://david-dm.org/leecrossley/dotject#info=dependencies)

## Getting started

### Using npm

```
npm install dotject --save
```

```
var dotject = require("dotject");
```

## Examples

### New object

#### Simple nested properties

Separating property names with dots (like JavaScript dot notation) will create nested objects:

```javascript
dotject("a.b.c");

{
  "a": {
    "b": {
      "c": {}
    }
  }
}

```

#### Properties at the same level

Separating property names with a comma (similar to JavaScript objects) will create properties at the same level:

```javascript
dotject("a,b");

{
  "a": {},
  "b": {}
}

```

This notation can be combined with the dot style notation:

```javascript
dotject("a,b.c");

{
  "a": {},
  "b": {
    "c": {}
  }
}

```

## TODO

- Assign value
- Extend existing objects

## License

[MIT License](http://ilee.mit-license.org)
