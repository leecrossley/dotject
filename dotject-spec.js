describe("dotject", function() {

    it("should not be null", function() {
        expect(dotject).not.toBeNull();
        expect(fjs).not.toBeNull();
    });

    it("should create objects with nested properties", function() {
        var a = dotject("a");
        var ab = dotject("a.b");
        var abc = dotject("a.b.c");

        expect(JSON.stringify(a)).toEqual('{"a":{}}');
        expect(JSON.stringify(ab)).toEqual('{"a":{"b":{}}}');
        expect(JSON.stringify(abc)).toEqual('{"a":{"b":{"c":{}}}}');
    });

    it("should create objects with same level properties", function() {
        var ab = dotject("a,b");
        var abc = dotject("a,b,c");

        expect(JSON.stringify(ab)).toEqual('{"a":{},"b":{}}');
        expect(JSON.stringify(abc)).toEqual('{"a":{},"b":{},"c":{}}');
    });

    it("should create objects with nested and same level properties", function() {
        var abc = dotject("a,b.c");
        var abcd = dotject("a.b,c.d");

        expect(JSON.stringify(abc)).toEqual('{"a":{},"b":{"c":{}}}');
        expect(JSON.stringify(abcd)).toEqual('{"a":{"b":{}},"c":{"d":{}}}');
    });

    it("should extend object properties", function() {
        var extend1 = dotject("b.c", {"a":{}});
        var extend2 = dotject("a.c", {"a":{"b":{}}});

        expect(JSON.stringify(extend1)).toEqual('{"a":{},"b":{"c":{}}}');
        expect(JSON.stringify(extend2)).toEqual('{"a":{"b":{},"c":{}}}');
    });

    it("should extend objects with values", function() {
        var extendVal = dotject("b.c", {"a": true});

        expect(JSON.stringify(extendVal)).toEqual('{"a":true,"b":{"c":{}}}');
    });

    it("should create objects with nested properties and single value", function() {
        var a = dotject("a", {}, true);
        var ab = dotject("a.b", {}, 10);
        var abc = dotject("a.b.c", {}, "test");

        expect(JSON.stringify(a)).toEqual('{"a":true}');
        expect(JSON.stringify(ab)).toEqual('{"a":{"b":10}}');
        expect(JSON.stringify(abc)).toEqual('{"a":{"b":{"c":"test"}}}');
    });

    it("should create objects with nested and same level properties and multiple values", function() {
        var abc = dotject("a,b.c", {}, true, 10);
        var abcd = dotject("a,b.c,d", {}, true, 10, "test");

        expect(JSON.stringify(abc)).toEqual('{"a":true,"b":{"c":10}}');
        expect(JSON.stringify(abcd)).toEqual('{"a":true,"b":{"c":10},"d":"test"}');
    });

    it("should extend objects with multiple values", function() {
        var extended1 = dotject("b.c", {"a": true}, 10);
        var extended2 = dotject("a,b", {"a": false}, true, "test");

        expect(JSON.stringify(extended1)).toEqual('{"a":true,"b":{"c":10}}');
        expect(JSON.stringify(extended2)).toEqual('{"a":true,"b":"test"}');
    });

    it("should handle a 'real world' example", function() {
        var camera = {isEnabled: true};
        camera = dotject("settings.encoding.format,output.data.base64", camera, "JPEG", true);

        expect(JSON.stringify(camera)).toEqual('{"isEnabled":true,"settings":{"encoding":{"format":"JPEG"}},"output":{"data":{"base64":true}}}');
    });

});
