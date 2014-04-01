# dotject [![Build Status](https://travis-ci.org/leecrossley/dotject.png?branch=master)](https://travis-ci.org/leecrossley/dotject) [![npm version](https://badge.fury.io/js/dotject.png)](https://npmjs.org/package/dotject) [![Dependency Status](https://david-dm.org/leecrossley/dotject/status.png)](https://david-dm.org/leecrossley/dotject#info=dependencies)

Dot notation to object. Shortcode your object creation and value assignments to nested objects.

Supports nesting and same level objects, as well as (multiple) value assignment and value overriding of existing objects.

## Getting started

### Using npm

```
npm install dotject --save
```

```
var dotject = require("dotject");
```

## Examples

### Create an object

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

### Extend an existing object

Extend an existing object with new properties by passing the existing object as a second (optional) argument:

```javascript
dotject("b.c", {"a":{}});

{
  "a": {},
  "b": {
    "c": {}
  }
}

```

Existing object values are retained:

```javascript
dotject("b.c", {"a": true});

{
  "a": true,
  "b": {
    "c": {}
  }
}

```

Existing nested object properties are retained:

```javascript
dotject("a.c", {"a":{"b":{}}});

{
  "a": {
    "b": {},
    "c": {}
  }
}

```

### Assign a value

You can assign a value to the last nested property:

```javascript
dotject("a.b", {}, 10);

{
  "a": {
    "b": 10
  }
}

```

### Assign multiple values

You can assign a values to the last nested properties:

```javascript
dotject("a,b.c,d", {}, true, 10, "test");

{
  "a": true,
  "b": {
    "c": 10
  },
  "d": "test"
}

```

### Assign multiple values and override existing

You can assign a values to the last nested properties:

```javascript
dotject("a,b", {"a": false}, true, "test")

{
  "a": true,
  "b": "test"
}

```

## "Real world" example

```javascript
var camera = {isEnabled: true};
camera = dotject("settings.encoding.format,output.data.base64", camera, "JPEG", true);

{
  "isEnabled": true,
  "settings": {
    "encoding": {
      "format": "JPEG"
    }
  },
  "output": {
    "data": {
      "base64": true
    }
  }
}

```

## License

[MIT License](http://ilee.mit-license.org)
