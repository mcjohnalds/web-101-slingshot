// @flow
import React from "react";

type Props = {
  data: string
};

const ErrorOutput = (props: Props) =>
  <div>
    {props.data}
  </div>;

export default ErrorOutput;
