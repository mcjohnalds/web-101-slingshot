// @flow
import React from "react";

type Props = {
  data: string
};

const ResponseOutput = (props: Props) =>
  <pre
    data-name="responseOutput"
    style={{
      margin: "0.5rem 0 0 0",
      padding: "0.5rem",
      backgroundColor: "#f5f5f5",
      border: "none",
      resize: "none",
      width: "100%",
      boxSizing: "border-box",
      height: "30rem",
      overflow: "auto"
    }}
  >
    {props.data}
  </pre>;

export default ResponseOutput;
