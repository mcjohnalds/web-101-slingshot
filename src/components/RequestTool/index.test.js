import React from "react";
import { shallow } from "enzyme";
import RequestTool from "./index";
import RequestInput from "./RequestInput";
import SendRequestButton from "./SendRequestButton";
import ResponseOutput from "./ResponseOutput";

describe("RequestTool", () => {
  it("should pass request input to the SendRequestButton", () => {
    const wrapper = shallow(<RequestTool />);
    wrapper.find(RequestInput).props().onChange("some value");
    wrapper.update();
    expect(wrapper.find(SendRequestButton).props().data).toEqual("some value");
  });

  it("should pass response to ResponseOutput", () => {
    const wrapper = shallow(<RequestTool />);
    wrapper.find(SendRequestButton).props().onResponse("response");
    wrapper.update();
    expect(wrapper.find(ResponseOutput).props().data).toEqual("response");
  });
});
