jest.mock("./request");

import React from "react";
import { shallow } from "enzyme";
import ReactTestUtils from "react-dom/test-utils";
import RequestTool from ".";
import Input from "./Input";
import Output from "./Output";
import Button from "./Button";
import request from "./request";

describe("RequestTool", () => {
  beforeEach(() => {
    request.mockClear();
  });

  it("renders without crashing", () => {
    shallow(<RequestTool />);
  });

  it("has an Input", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it("has a Button", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("has an Output", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(Output)).toHaveLength(1);
  });

  it("sends a HTTP request when the Button is pressed", () => {
    const wrapper = shallow(<RequestTool />);
    wrapper.find(Button).simulate("click");
    expect(request.mock.calls).toHaveLength(1);
  });

  it("sends HTTP requests with the chosen settings", () => {
    const wrapper = shallow(<RequestTool />);
    const simpleRequest = {
      method: "GET",
      path: "/users",
      headers: { host: "example.com" }
    };
    wrapper.find(Input).props().onChange(simpleRequest);
    wrapper.find(Button).simulate("click");
    expect(request.mock.calls[0]).toEqual([simpleRequest]);
  });

  it("displays the HTTP response", async () => {
    let finishRequest;
    const promise = new Promise(resolve => {
      finishRequest = () => resolve("response");
    });
    request.mockReturnValueOnce(promise);
    const wrapper = shallow(<RequestTool />);
    wrapper.find(Button).simulate("click");
    finishRequest();
    promise.then(() => () =>
      expect(wrapper.find(Output).props().data).toEqual("response")
    );
  });
});
