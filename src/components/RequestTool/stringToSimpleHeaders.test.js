import stringToSimpleHeaders from "./stringToSimpleHeaders";

describe("stringToSimpleHeaders", () => {
  it("should convert every line to a header", () => {
    expect(
      stringToSimpleHeaders("host: example.com\naccept: image/png")
    ).toEqual({
      host: "example.com",
      accept: "image/png"
    });
  });

  it("should throw a SyntaxError if a line is invalid", () => {
    expect(() => stringToSimpleHeaders("host: example.com\n:foo")).toThrow(
      SyntaxError
    );
  });

  it("should have descriptive error messages", () => {
    expect(() => stringToSimpleHeaders("host: example.com\n:foo")).toThrow(/2/);
  });
});
