// @flow
import React from "react";

type Props = {
  data: string
};

const ResponseOutput = (props: Props) =>
  <div
    style={{
      marginTop: "0.5rem",
      width: "100%",
      height: "30rem",
      overflow: "scroll"
    }}
  >
    <pre
      data-name="responseOutput"
      style={{
        margin: "0",
        padding: "0.5rem",
        backgroundColor: "#f5f5f5",
        border: "none",
        resize: "none",
        width: "100%",
        height: "100%"
      }}
    >
      {props.data}
    </pre>
  </div>;

export default ResponseOutput;
