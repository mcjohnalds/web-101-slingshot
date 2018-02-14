import React from "react";
import { mount } from "enzyme";
import delay from "delay";
import RequestTool from "./index.js";

describe("RequestTool", () => {
  test("it should render without crashing", () => {
    mount(<RequestTool />);
  });

  test("when I click send it should send a request and display the response", async () => {
    const requestString = `GET /users HTTP/1.1
host: example.com
content-type: application/json`;
    const requestObject = new Request("example.com/users", {
      method: "GET",
      headers: { "content-type": "application/json" }
    });
    const responseString = `HTTP/1.1 200 OK
content-type: application/json

["john", "jane"]`;
    const responseObject = new Response(`["john", "jane"]`, {
      status: 200,
      statusText: "OK",
      headers: { "content-type": "application/json" }
    });
    global.fetch = jest.fn().mockReturnValue(Promise.resolve(responseObject));
    const wrapper = mount(<RequestTool />);
    wrapper
      .find("[name='requestInput']")
      .at(0)
      .simulate("change", { target: { value: requestString } });
    wrapper.find("[name='sendRequest']").simulate("click");
    expect(global.fetch.mock.calls).toEqual([[requestObject]]);
    await delay();
    wrapper.update();
    expect(wrapper.find("[data-name='responseOutput']").text()).toEqual(
      expect.stringContaining(responseString)
    );
  });

  test("if the request couldn't be sent I should see an error", async () => {
    const wrapper = mount(<RequestTool />);
    wrapper.find("[name='requestInput']").at(0).simulate("change", {
      target: {
        // Missing host header
        value: `GET /users HTTP/1.1`
      }
    });
    wrapper.find("[name='sendRequest']").simulate("click");
    await delay();
    wrapper.update();
    expect(wrapper.find("[data-name='errorOutput']")).toHaveLength(1);
  });
});
