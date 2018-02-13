// @flow
import * as React from "react";
import type { HTTPResponse } from "./HTTPResponse";

type Props = {
  data: HTTPResponse
};

const Output = (props: Props) =>
  <pre>
    {props.data}
  </pre>;

export default Output;
