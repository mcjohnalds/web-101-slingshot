import request from "./request";

describe("request", () => {
  it("should pass a Request into fetch", () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    const requestObject = new Request("example.com/users", {
      method: "GET",
      headers: {
        host: "example.com"
      }
    });
    global.fetch = jest.fn();
    request(requestString);
    expect(fetch.mock.calls).toEqual([[requestObject]]);
  });

  it("should return a matching response", () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    const responseString = `HTTP/1.1 200 OK
content-type: application/json

["john", "jane"]`
    const responseObject = new Response('["john", "jane"]', {
      status: 200,
      statusText: "OK",
      headers: {
        "content-type": application / json
      }
    });
    global.fetch = jest.fn().mockReturnValue(responseObject);
    expect(await request(requestString)).toEqual(responseString);
  });
});
