// @flow
import headersToString from "./headersToString";

describe("headersToString", () => {
  it("should convert no headers to an empty string", () => {
    expect(headersToString({})).toBe("");
  });

  it("should convert a single header to a string", () => {
    expect(headersToString({ host: "example.com" })).toBe("host: example.com");
  });

  it("should convert multiple headers to a string", () => {
    expect(headersToString({ host: "example.com", accept: "image/png" }));
  });
});
