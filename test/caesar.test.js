const { caesar }= require("../src/caesar");
const { expect } = require("chai")

describe("caesar()", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "zoo muppets";
      const shift = 0;
      const actual = caesar(message, shift, (encode = true));
      const expected = false
      expect(actual).to.equal(expected)
    });
    it("should return false if the shift amount is above 25", () => {
        const message = "zoo muppets";
        const shift = 30;
        const actual = caesar(message, shift, (encode = true));
        const expected = false
        expect(actual).to.equal(expected)
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "zoo muppets";
        const shift = -30;
        const actual = caesar(message, shift, (encode = true));
        const expected = false
        expect(actual).to.equal(expected)
    });
    it("should encode 'i love coding' to 'j mpwf dpejoh", () => {
        const message = "i love coding";
        const shift = 1
        const expected = "j mpwf dpejoh"
        const actual = caesar(message, shift, (encode = true))
        expect(actual).to.equal(expected)
    });
    it("should decode 'j mpwf dpejoh' to 'i love coding", () => {
        const message = "j mpwf dpejoh";
        const shift = 1
        const expected = "i love coding"
        const actual = caesar(message, shift, (encode = false))
        expect(actual).to.equal(expected)
    });
    it("should maintain spaces and other characters in the initial input", () => {
        const message = "%%% $$$ ***"
        const shift = 1
        const expected = "%%% $$$ ***"
        const actual = caesar(message, shift, (encode = true))
        expect(actual).to.equal(expected)
    });
    it("should invert shift if decoding (encode = false)", () => {
        const message = "bcdef"
        const shift = 1
        const expected = "abcde"
        const actual = caesar(message, shift, (encode = false))
        expect(actual).to.equal(expected)
    });
    it("should ignore capital letters", () => {
        const message = "ABCDE"
        const shift = 1
        const expected = "bcdef"
        const actual = caesar(message, shift, (encode = true))
        expect(actual).to.equal(expected)
    });
    it("should handle shifts that go past the end of the alphabet", () => {
        const message = "z"
        const shift = 10
        const expected = "j"
        const actual = caesar(message, shift, (encode = true))
        expect(actual).to.equal(expected)
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const message = "zz top"
        const shift = -2
        const expected = "xx rmn"
        const actual = caesar(message, shift, (encode = true))
        expect(actual).to.equal(expected)
    });
})