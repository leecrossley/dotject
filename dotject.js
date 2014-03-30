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
        var last;

        λ.each(function (props) {
            props = props.split(".");
            last = props.pop();
            iterator = addProps(iterator, props);
            iterator[last] = typeof (val) !== "undefined" ? val : {};
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
