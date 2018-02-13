import request from "./request";

describe("request", () => {
  it("should send a request", () => {
    global.fetch = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve(new Response("response")));
    const simpleRequest = {
      method: "GET",
      path: "/users",
      headers: { host: "example.com", accept: "text/plain;charset=UTF-8" }
    };
    request(simpleRequest);
    expect(fetch.mock.calls).toEqual([
      [
        "example.com/users",
        { method: "GET", headers: { accept: "text/plain;charset=UTF-8" } }
      ]
    ]);
  });

  it("should return the request", async () => {
    global.fetch = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve(new Response()));
    const res = await request({
      method: "GET",
      path: "/users",
      headers: { host: "example.com" }
    });
    expect(res).toEqual(`200 OK HTTP/1.1
host: example.com

`);
  });

  it("should return response headers", async () => {
    global.fetch = jest
      .fn()
      .mockReturnValueOnce(
        Promise.resolve(new Response("response", { headers: { age: 12 } }))
      );
    const res = await request({
      method: "GET",
      path: "/users",
      headers: { host: "example.com" }
    });
    expect(res).toEqual(`200 OK HTTP/1.1
host: example.com
age: 12
content-type: text/plain;charset=UTF-8

response`);
  });
});
