const { polybius }= require("../src/polybius");
const { expect } = require("chai")

describe("polybius()", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const message = "funny"
        const actual = polybius(message)
        const expected = "1254333345"
        expect(actual).to.equal(expected)
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiffy"
        const actual = polybius(message)
        const expected = "4242121245"
    });
    it("should leave spaces as is", () => {
        const message = "my message"
        const actual = polybius(message)
        const expected = "2345 23513434112251"
        expect(actual).to.equal(expected)
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const message = "23513434112251";
        const actual = polybius(message, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it("when decoding, should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
    it("should return false if the length of all numbers is odd", () => {
        const message = "2345 235134341122514";
        const actual = polybius(message, false);
        expect(actual).to.be.false;
    });
})