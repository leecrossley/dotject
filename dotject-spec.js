describe("dotject", function() {

    it("should not be null", function() {
        expect(dotject).not.toBeNull();
        expect(λ).not.toBeNull();
    });

    it("should create simple objects", function() {
        var a = dotject.create("a");
        var ab = dotject.create("a.b");
        var abc = dotject.create("a.b.c");

        expect(JSON.stringify(a)).toEqual('{"a":{}}');
        expect(JSON.stringify(ab)).toEqual('{"a":{"b":{}}}');
        expect(JSON.stringify(abc)).toEqual('{"a":{"b":{"c":{}}}}');
    });

});
