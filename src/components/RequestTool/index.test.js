import React from "react";
import { shallow } from "enzyme";
import ReactTestUtils from "react-dom/test-utils";
import RequestTool from ".";
import Input from "./Input";
import Output from "./Output";

describe("RequestTool", () => {
  it("renders without crashing", () => {
    shallow(<RequestTool />);
  });

  it("has an Input", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it("has an input to send the request", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find("[name='send']")).toHaveLength(1);
  });

  it("has an Output", () => {
    const wrapper = shallow(<RequestTool />);
    expect(wrapper.find(Output)).toHaveLength(1);
  });

  it("sends a HTTP request when the send button is pressed", () => {
    global.fetch = jest.fn();
    const wrapper = shallow(<RequestTool />);
    wrapper.find("[name='send']").simulate("click");
    expect(global.fetch.mock.calls.length).toBe(1);
  });

  it("sends HTTP requests with the chosen method", () => {
    global.fetch = jest.fn();
    const wrapper = shallow(<RequestTool />);
    wrapper.find("[name='send']").simulate("click");
    expect(global.fetch.mock.calls.length).toBe(1);
  });
});
