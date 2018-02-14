import React from "react";
import { shallow } from "enzyme";
import RequestInput from "./RequestInput";
import Textarea from "react-textarea-autosize";

describe("RequestInput", () => {
  it("should display the value property", () => {
    const wrapper = shallow(<RequestInput value="value" />);
    expect(wrapper.find(Textarea).props().value).toEqual("value");
  });

  it("should call the onChange prop on user input", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<RequestInput value="value" onChange={onChange} />);
    wrapper.find(Textarea).props().onChange({ target: { value: "new value" } });
    expect(onChange.mock.calls).toEqual([["new value"]]);
  });
});
