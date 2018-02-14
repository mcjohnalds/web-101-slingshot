jest.mock("./request");

import React from "react";
import { shallow } from "enzyme";
import RequestTool from ".";
import Input from "./Input";
import Output from "./Output";
import ErrorOutput from "./ErrorOutput";
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

  it("doesn't show an ErrorOutput", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(ErrorOutput)).toHaveLength(0);
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
    const promise = Promise.resolve("response");
    request.mockReturnValueOnce(promise);
    const wrapper = shallow(<RequestTool />);
    wrapper.find(Button).simulate("click");
    await promise;
    wrapper.update();
    expect(wrapper.find(Output).props().data).toEqual("response");
  });

  it("shows an ErrorOutput when there was an issue sending the request", async () => {
    const promise = Promise.reject(new Error());
    request.mockReturnValueOnce(promise);
    const wrapper = shallow(<RequestTool />);
    wrapper.find(Button).simulate("click");
    try {
      await promise;
    } catch (error) {
      wrapper.update();
      expect(wrapper.find(ErrorOutput).props().data).toEqual(error);
    }
  });
});
