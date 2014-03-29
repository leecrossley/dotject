describe("dotject", function() {

    it("should not be null", function() {
        expect(dotject).not.toBeNull();
        expect(λ).not.toBeNull();
    });

    it("should create the most basic of objects", function() {
        var simple = dotject.create("really.simple");

        expect(simple).toEqual("{ really: { simple } }");
    });

});
