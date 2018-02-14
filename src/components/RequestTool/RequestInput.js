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
    <Textarea name="requestInput" value={props.value} onChange={onChange} />
  );
};

export default RequestInput;
