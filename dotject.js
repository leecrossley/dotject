if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";
    var dotject = {};

    var addProps = λ.reduce(function (arg1, arg2) {
        return (arg1[arg2] = {});
    });

    dotject.create = λ.curry(function (props) {
        var obj = {};
        return addProps(obj, props.split("."));
    });

    return dotject;
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
