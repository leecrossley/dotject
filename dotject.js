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

        λ.each(function (keys, i) {
            addProps(iterator, keys.split("."));
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
