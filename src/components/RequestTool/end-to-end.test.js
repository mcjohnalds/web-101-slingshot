import React from "react";
import RequestTool from "./index.js";
import { mount } from "enzyme";

describe("RequestTool", () => {
  test("it should render without crashing", () => {
    mount(<RequestTool />);
  });

  test("when I click send it should send a request and display the response when I click send", async () => {
    global.fetch = jest.fn().mockReturnValue(
      Promise.resolve(
        new Response(`["john", "jane"]`, {
          status: 200,
          statusText: "OK",
          headers: { "content-type": "application/json" }
        })
      )
    );
    const wrapper = mount(<RequestTool />);
    wrapper.find("[name='requestInput']").at(0).simulate("change", {
      target: {
        value: `GET /users HTTP/1.1
host: example.com`
      }
    });
    wrapper.find("[name='sendRequest']").simulate("click");
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
    expect(wrapper.find("[data-name='responseOutput']").text()).toEqual(
      expect.stringContaining(`HTTP/1.1 200 OK
content-type: application/json

["john", "jane"]`)
    );
  });

  xtest("if the request couldn't be sent I should see an error", async () => {
    const wrapper = mount(<RequestTool />);
    wrapper.find("[name='requestInput']").at(0).simulate("change", {
      target: {
        // Missing host header
        value: `GET /users HTTP/1.1`
      }
    });
    wrapper.find("[name='sendRequest']").simulate("click");
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
    expect(wrapper.find("[data-name='errorOutput']")).toHaveLength(1);
  });
});
