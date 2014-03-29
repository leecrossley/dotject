if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";
    var dotject = {};

    var addProps = λ.reduce(function (iterator, prop) {
        return (iterator[prop] = {});
    });

    dotject.create = λ.curry(function (props) {
        var obj = {}, iterator = obj;
        addProps(iterator, props.split("."));

        return obj;
    });

    return dotject;
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
