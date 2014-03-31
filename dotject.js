if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";

    var addProps = λ.reduce(function (iterator, prop) {
        return (iterator[prop] = iterator[prop] || {});
    });

    return function (str, obj, val) {
        obj = obj || {};
        var iterator = obj;
        var lastKey;
        var lastIteration;

        λ.each(function (keys, i) {
            keys = keys.split(".");
            lastKey = keys.pop();
            addProps(iterator, keys)[lastKey] = val || {};
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
