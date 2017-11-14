if (typeof (fjs) === "undefined") {
    var fjs = require("functional.js");
}

var dotject = (function () {
    "use strict";

    var addProps = fjs.fold(function (iterator, prop) {
        return (iterator[prop] = iterator[prop] || {});
    });

    var valueArgs = function (args) {
        return args.length > 2 ? [].slice.call(args, 2) : [];
    };

    return function (str, obj) {
        obj = obj || {};
        var iterator = obj;
        var lastKey;
        var values = valueArgs(arguments);

        fjs.each(function (keys, i) {
            keys = keys.split(".");
            lastKey = keys.pop();
            var value = (values[i] !== undefined) ? values[i] : {};
            addProps(iterator, keys)[lastKey] = value;
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
