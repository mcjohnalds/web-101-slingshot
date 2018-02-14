import responseToString from "./responseToString";

describe("responseToString", () => {
  it("should convert a response to a string", async () => {
    expect(
      await responseToString(
        new Response(null, { status: 200, statusText: "OK" })
      )
    ).toEqual(`HTTP/1.1 200 OK`);
  });

  it("should handle headers", async () => {
    expect(
      await responseToString(
        new Response(null, {
          status: 200,
          statusText: "OK",
          headers: {
            "content-type": "application/json",
            age: 12
          }
        })
      )
    ).toEqual(`HTTP/1.1 200 OK
content-type: application/json
age: 12`);
  });

  it("should handle a response body", async () => {
    expect(
      await responseToString(
        new Response('["john", "jane"]', {
          status: 200,
          statusText: "OK",
          headers: {
            "content-type": "application/json",
            age: 12
          }
        })
      )
    ).toEqual(`HTTP/1.1 200 OK
content-type: application/json
age: 12

["john", "jane"]`);
  });
});
