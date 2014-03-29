if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";

    var addProps = λ.reduce(function (iterator, prop) {
        return (iterator[prop] = iterator[prop] || {});
    });

    return function (str, obj) {
        obj = obj || {};
        var iterator = obj;
        λ.each(function (props) {
            addProps(iterator, props.split("."));
        }, str.split(","));

        return obj;
    };
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
