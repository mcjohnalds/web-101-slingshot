import React from "react";
import Output from "./Output";
import { shallow } from "enzyme";

describe("Output", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Output />);
  });
});
