if (typeof (λ) === "undefined") {
    var λ = require("functional.js");
}

var dotject = (function () {
    "use strict";
    var dotject = {};

    dotject.create = λ.curry(function (dots) {
        var created = {};
        var last = created;
        var props = dots.split(".");

        λ.each(function (prop) {
            last = last[prop] = {};
        }, props);

        return created;
    });

    return dotject;
})();

if (typeof (module) !== "undefined" && module.exports) {
    module.exports = dotject;
}
