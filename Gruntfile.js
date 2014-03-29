module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: "*.js"
        },
        watch: {
            files: "*.js",
            tasks: "test"
        },
        jasmine: {
            src: "froute-picker.js",
            options: {
                specs: "*-spec.js",
                vendor: "node_modules/functional.js/functional.min.js"
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.registerTask("test", ["jshint", "jasmine"]);
};