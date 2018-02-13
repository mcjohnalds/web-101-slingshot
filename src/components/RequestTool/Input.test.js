import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import Input from "./Input";
import { shallow } from "enzyme";

describe("Input", () => {
  it("shouldn't throw an error when rendered", () => {
    shallow(<Input />);
  });

  it("has an input to set the method", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find("[name='method']")).not.toBeNull();
  });

  it("has an input to set the path", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find("[name='path']")).not.toBeNull();
  });

  it("has an input to set the headers", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find("[name='headers']")).not.toBeNull();
  });

  it("sets the method from the value property", () => {
    const wrapper = shallow(<Input value={{ method: "GET" }} />);
    expect(wrapper.find("[name='method']").props().value).toBe("GET");
  });

  it("sets the path from the value property", () => {
    const wrapper = shallow(<Input value={{ path: "/users" }} />);
    expect(wrapper.find("[name='path']").props().value).toBe("/users");
  });

  it("sets the headers from the value property", () => {
    const wrapper = shallow(
      <Input
        value={{
          headers: {
            host: "example.com",
            accept: "image/png"
          }
        }}
      />
    );
    expect(wrapper.find("[name='headers']").props().value).toBe(
      "host: example.com\naccept: image/png"
    );
  });

  it("should call the onChange callback when the method changes", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Input
        value={{
          method: "GET",
          path: "/users",
          headers: { host: "imgur.com" }
        }}
        onChange={onChange}
      />
    );
    wrapper.find("[name='method']").simulate("change", {
      target: { name: "method", value: "POST" }
    });
    expect(onChange.mock.calls[0]).toEqual([
      {
        method: "POST",
        path: "/users",
        headers: { host: "imgur.com" }
      }
    ]);
  });

  it("should call the onChange callback when the path changes", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Input
        value={{
          method: "GET",
          path: "/users",
          headers: { host: "imgur.com" }
        }}
        onChange={onChange}
      />
    );
    wrapper.find("[name='path']").simulate("change", {
      target: { name: "path", value: "/dogs" }
    });
    expect(onChange.mock.calls[0]).toEqual([
      {
        method: "GET",
        path: "/dogs",
        headers: { host: "imgur.com" }
      }
    ]);
  });

  it("should call the onChange callback when the headers change", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Input
        value={{
          method: "GET",
          path: "/users",
          headers: { host: "imgur.com" }
        }}
        onChange={onChange}
      />
    );
    wrapper.find("[name='headers']").simulate("change", {
      target: { name: "headers", value: "host: imgur.com\naccept: image/png" }
    });
    expect(onChange.mock.calls[0]).toEqual([
      {
        method: "GET",
        path: "/users",
        headers: { host: "imgur.com", accept: "image/png" }
      }
    ]);
  });
});
