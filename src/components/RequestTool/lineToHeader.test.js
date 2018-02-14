import lineToHeader from "./lineToHeader";

describe("lineToHeader", () => {
  it("should convert a line to a header", () => {
    expect(lineToHeader("a:b")).toEqual(["a", "b"]);
  });

  it("should handle spaces around the header name", () => {
    expect(lineToHeader(" a:b")).toEqual(["a", "b"]);
    expect(lineToHeader("a :b")).toEqual(["a", "b"]);
    expect(lineToHeader(" a :b")).toEqual(["a", "b"]);
  });

  it("should handle spaces around the header value", () => {
    expect(lineToHeader("a: b")).toEqual(["a", "b"]);
    expect(lineToHeader("a:b ")).toEqual(["a", "b"]);
    expect(lineToHeader("a: b ")).toEqual(["a", "b"]);
  });
});
