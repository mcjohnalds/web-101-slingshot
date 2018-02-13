// @flow
import * as React from "react";
import type { SimpleResponse } from "./SimpleResponse";

type Props = {
  data: SimpleResponse
};

const Output = (props: Props) =>
  <pre>
    {props.data}
  </pre>;

export default Output;
