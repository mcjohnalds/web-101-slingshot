// @flow
import React from "react";
import Input from "./Input";
import Output from "./Output";

class RequestTool extends React.Component<{}> {
  render() {
    return (
      <div>
        <Input />
        <button name="send" onClick={() => fetch("/")} />
        <Output />
      </div>
    );
  }
}

export default RequestTool;
