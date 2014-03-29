describe("dotject", function() {

    it("should not be null", function() {
        expect(dotject).not.toBeNull();
        expect(λ).not.toBeNull();
    });

    it("should create simple objects", function() {
        var simple = dotject.create("simple");
        var simpleish = dotject.create("simple.ish");

        expect(JSON.stringify(simple)).toEqual('{"simple":{}}');
        expect(JSON.stringify(simpleish)).toEqual('{"simple":{"ish":{}}}');
    });

});
