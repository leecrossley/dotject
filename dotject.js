if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";

    var addProps = λ.reduce(function (iterator, prop) {
        var key = prop[0];
        var val = prop[1];
        return (iterator[key] = val || iterator[key] || {});
    });

    var addVals = λ.map(function (key, val) {
        return [key, typeof (val) !== "undefined" ? val : {}];
    });

    return function (str, obj, val) {
        obj = obj || {};
        var iterator = obj;
        var props;

        λ.each(function (keys) {
            props = addVals(keys.split("."));
            addProps(iterator, props);
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
