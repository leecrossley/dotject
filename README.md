# dotject [![Build Status](https://travis-ci.org/leecrossley/dotject.png?branch=master)](https://travis-ci.org/leecrossley/dotject) [![npm version](https://badge.fury.io/js/dotject.png)](https://npmjs.org/package/dotject) [![Dependency Status](https://david-dm.org/leecrossley/dotject/status.png)](https://david-dm.org/leecrossley/dotject#info=dependencies)

## Getting started

### Using npm

```
npm install dotject
```

```
var dotject = require("dotject");
```

## Example

#### Create

```javascript
dotject.create("a.b.c");

{
  "a": {
    "b": {
      "c": {}
    }
  }
}

```

## TODO

- Assign value
- Extend existing objects

## License

[MIT License](http://ilee.mit-license.org)
