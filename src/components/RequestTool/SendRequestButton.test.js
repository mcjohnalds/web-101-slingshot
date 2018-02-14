jest.mock("./request");

import React from "react";
import { shallow } from "enzyme";
import delay from "delay";
import SendRequestButton from "./SendRequestButton";
import request from "./request";

describe("SendRequestButton", () => {
  beforeEach(() => {
    request.mockClear();
  });

  it("should send a request when clicked", () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    const wrapper = shallow(<SendRequestButton data={requestString} />);
    request.mockReturnValue(Promise.resolve());
    wrapper.simulate("click");
    expect(request.mock.calls).toEqual([[requestString]]);
  });

  it("call the onResponse prop when a response is received", async () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    const response = `HTTP/1.1 200 OK
    content-type: application/json

["john", "jane"]`;
    const promise = Promise.resolve(response);
    request.mockReturnValue(promise);
    const onResponse = jest.fn();
    const wrapper = shallow(
      <SendRequestButton data={requestString} onResponse={onResponse} />
    );
    wrapper.simulate("click");
    await promise;
    expect(onResponse.mock.calls).toEqual([[response]]);
  });

  it("call the onError prop when the request couldn't be sent", async () => {
    const requestString = `GET /users HTTP/1.1
host: example.com`;
    request.mockReturnValue(Promise.reject(new Error("error")));
    const onError = jest.fn();
    const wrapper = shallow(
      <SendRequestButton data={requestString} onError={onError} />
    );
    wrapper.simulate("click");
    await delay();
    expect(onError.mock.calls).toEqual([["error"]]);
  });
});
