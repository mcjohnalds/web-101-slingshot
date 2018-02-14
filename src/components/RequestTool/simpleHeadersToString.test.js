import simpleHeadersToString from "./simpleHeadersToString";

describe("simpleHeadersToString", () => {
  it("should convert a single header to a string", () => {
    expect(simpleHeadersToString({ host: "example.com" })).toBe(
      "host: example.com"
    );
  });

  it("should convert multiple headers to a string", () => {
    expect(simpleHeadersToString({ host: "example.com", accept: "image/png" }));
  });
});
