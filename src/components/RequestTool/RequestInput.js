// @flow
import React from "react";
import Textarea from "react-textarea-autosize";

type Props = {
  value: string,
  onChange: string => any
};

const RequestInput = (props: Props) => {
  const onChange = event => props.onChange(event.target.value);
  return (
    <Textarea
      name="requestInput"
      value={props.value}
      onChange={onChange}
      style={{
        padding: "0.5rem",
        backgroundColor: "#f5f5f5",
        border: "none",
        resize: "none",
        width: "100%",
        boxSizing: "border-box"
      }}
    />
  );
};

export default RequestInput;
