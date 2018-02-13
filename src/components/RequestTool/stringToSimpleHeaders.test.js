import stringToSimpleHeaders from "./stringToSimpleHeaders";

describe("stringToSimpleHeaders", () => {
  it("should convert empty input to no headers", () => {
    expect(stringToSimpleHeaders("")).toEqual({});
    expect(stringToSimpleHeaders(" ")).toEqual({});
  });

  it("should convert every line to a header", () => {
    jest.mock("./stringToHeader", () =>
      jest
        .fn()
        .mockImplementationOnce(() => ["host", "example.com"])
        .mockImplementationOnce(() => ["accept", "image/png"])
    );
    expect(
      stringToSimpleHeaders("host: example.com\naccept: image/png")
    ).toEqual({
      host: "example.com",
      accept: "image/png"
    });
  });

  it("should return a SyntaxError if any line is invalid", () => {
    jest.mock("./stringToHeader", () =>
      jest
        .fn()
        .mockImplementationOnce(() => ["host", "example.com"])
        .mockImplementationOnce(() => null)
        .mockImplementationOnce(() => ["accept", "image/png"])
    );
    expect(
      stringToSimpleHeaders("host: example.com\n:foo\naccept: image/png")
    ).toBeInstanceOf(SyntaxError);
  });

  it("should return descriptive error messages", () => {
    jest.mock("./stringToHeader", () =>
      jest
        .fn()
        .mockImplementationOnce(() => ["host", "example.com"])
        .mockImplementationOnce(() => null)
        .mockImplementationOnce(() => ["accept", "image/png"])
    );
    expect(
      stringToSimpleHeaders(
        "host: example.com\n:foo\naccept: image/png"
      ).toString()
    ).toEqual(expect.stringContaining("2"));
  });
});
