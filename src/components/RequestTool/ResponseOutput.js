// @flow
import React from "react";

type Props = {
  data: string
};

const ResponseOutput = (props: Props) =>
  <div data-name="responseOutput">
    {props.data}
  </div>;

export default ResponseOutput;
