// @flow
import React from "react";

type Props = {
  data: string
};

const ErrorOutput = (props: Props) =>
  <div data-name="errorOutput">
    {props.data}
  </div>;

export default ErrorOutput;
