describe("dotject", function() {

    it("should not be null", function() {
        expect(dotject).not.toBeNull();
        expect(λ).not.toBeNull();
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

});
