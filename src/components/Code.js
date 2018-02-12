// @flow
import * as React from "react";

type Props = {
  children: React.Node
};

const Code = (props: Props) =>
  <code
    style={{
      fontFamily: "'Roboto Mono', monospace",
      fontSize: "0.9em",
      paddingTop: "0.1em"
    }}
  >
    {props.children}
  </code>;

export default Code;
