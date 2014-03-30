if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";

    var addProps = λ.reduce(function (iterator, prop) {
        return (iterator[prop[0]] = prop[1] || iterator[prop[0]] || {});
    });

    return function (str, obj, val) {
        obj = obj || {};
        var iterator = obj;
        var props;

        λ.each(function (keys) {
            keys = keys.split(".");
            props = λ.map(function (key, i) {
                if (i < keys.length - 1) {
                    return [key, typeof (val) !== "undefined" ? val : {}];
                }
                return [key, {}];
            }, keys);
            addProps(iterator, props);
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
