import simpleRequestToFetchRequest from "./simpleRequestToFetchRequest";

describe("simpleRequestToFetchRequest", () => {
  it("should convert a minimal SimpleRequest to a Request", () => {
    const simpleRequest = {
      method: "GET",
      path: "/users",
      headers: {
        host: "example.com"
      }
    };
    expect(simpleRequestToFetchRequest(simpleRequest)).toEqual(
      new Request("example.com/users")
    );
  });

  it("should allow for other HTTP headers", () => {
    const simpleRequest = {
      method: "GET",
      path: "/users",
      headers: {
        host: "example.com",
        accept: "application/json"
      }
    };
    expect(simpleRequestToFetchRequest(simpleRequest)).toEqual(
      new Request("example.com/users", {
        headers: {
          accept: "application/json"
        }
      })
    );
  });

  it("should allow for other HTTP methods", () => {
    const simpleRequest = {
      method: "POST",
      path: "/users",
      headers: {
        host: "example.com"
      }
    };
    expect(simpleRequestToFetchRequest(simpleRequest)).toEqual(
      new Request("example.com/users", {
        method: "POST"
      })
    );
  });
});
