import stringToRequest from "./stringToRequest";

describe("stringToRequest", () => {
  it("should convert a string to a request", () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    const requestObject = new Request("example.com/users", {
      method: "GET",
      headers: {}
    });
    expect(stringToRequest(requestString)).toEqual(requestObject);
  });

  it("should handle multiple headers", () => {
    const requestString = `GET /users HTTP/1.1
host: example.com
accept: application/json`;
    const requestObject = new Request("example.com/users", {
      method: "GET",
      headers: {
        accept: "application/json"
      }
    });
    expect(stringToRequest(requestString)).toEqual(requestObject);
  });

  it("should throw an error if the host header is missing", () => {
    const requestString = `GET /users HTTP/1.1
accept: application/json`;
    expect(() => stringToRequest(requestString)).toThrow();
  });
});
