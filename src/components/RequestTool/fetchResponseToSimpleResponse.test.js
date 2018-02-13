import fetchResponseToSimpleResponse from "./fetchResponseToSimpleResponse";

describe("fetchResponseToSimpleResponse", () => {
  it("should convert a Response to a SimpleResponse", async () => {
    expect(await fetchResponseToSimpleResponse(new Response(null))).toEqual(
      `HTTP/1.1 200 OK`
    );
  });

  it("should handle different status codes", async () => {
    expect(
      await fetchResponseToSimpleResponse(
        new Response(null, { status: 404, statusText: "Not Found" })
      )
    ).toEqual("HTTP/1.1 404 Not Found");
  });

  it("should include a header in the return value", async () => {
    expect(
      await fetchResponseToSimpleResponse(
        new Response(null, { headers: { "content-type": "application/json" } })
      )
    ).toEqual(`HTTP/1.1 200 OK
content-type: application/json`);
  });

  it("should include multiple headers in the return value", async () => {
    expect(
      await fetchResponseToSimpleResponse(
        new Response(null, {
          headers: { "content-type": "application/json", age: 12 }
        })
      )
    ).toEqual(`HTTP/1.1 200 OK
content-type: application/json
age: 12`);
  });

  it("should include the body in return value", async () => {
    expect(await fetchResponseToSimpleResponse(new Response("body"))).toEqual(
      `HTTP/1.1 200 OK
content-type: text/plain;charset=UTF-8

body`
    );
  });

  it("should include the headers and body in the return value", async () => {
    expect(
      await fetchResponseToSimpleResponse(
        new Response("body", {
          headers: { "content-type": "application/json" }
        })
      )
    ).toEqual(
      `HTTP/1.1 200 OK
content-type: application/json

body`
    );
  });
});
