import stringToHeader from "./stringToHeader";

describe("stringToHeader", () => {
  it("should convert a valid header string to a header pair", () => {
    expect(stringToHeader("accept:")).toEqual(["accept", ""]);
    expect(stringToHeader("accept: ")).toEqual(["accept", ""]);
    expect(stringToHeader("host:example.com")).toEqual(["host", "example.com"]);
    expect(stringToHeader(" host:example.com")).toEqual([
      "host",
      "example.com"
    ]);
    expect(stringToHeader("host :example.com")).toEqual([
      "host",
      "example.com"
    ]);
    expect(stringToHeader("host: example.com")).toEqual([
      "host",
      "example.com"
    ]);
    expect(stringToHeader("host: example.com ")).toEqual([
      "host",
      "example.com"
    ]);
    expect(stringToHeader("cookie:a:b:c")).toEqual(["cookie", "a:b:c"]);
  });

  it("should return null when the input is invalid", () => {
    expect(stringToHeader("")).toBeNull();
    expect(stringToHeader(" ")).toBeNull();
    expect(stringToHeader(":")).toBeNull();
    expect(stringToHeader(" :")).toBeNull();
    expect(stringToHeader(": ")).toBeNull();
    expect(stringToHeader(" : ")).toBeNull();
    expect(stringToHeader("a")).toBeNull();
    expect(stringToHeader("a ")).toBeNull();
    expect(stringToHeader(" a")).toBeNull();
    expect(stringToHeader(" a ")).toBeNull();
  });
});
