// @flow
import * as React from "react";

type Props = {
  children?: React.Node,
  style?: Object
};

const CodeBlock = (props: Props) =>
  <pre
    style={{
      fontFamily: "'Roboto Mono', monospace",
      backgroundColor: "#f5f5f5",
      padding: "0.5rem 0.5rem",
      ...props.style
    }}
  >
    {props.children}
  </pre>;

export default CodeBlock;
