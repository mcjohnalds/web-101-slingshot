// @flow
import * as React from "react";
import simpleHeadersToString from "./simpleHeadersToString";
import stringToSimpleHeaders from "./stringToSimpleHeaders";
import type { SimpleRequest } from "./SimpleRequest";
import type { SimpleHeaders } from "./SimpleHeaders";

type Props = {
  value: SimpleRequest,
  onChange: SimpleRequest => void
};

const Input = (props: Props) => {
  const value = props.value || {};
  const onMethodChange = event =>
    props.onChange({ ...value, method: event.target.value });
  const onPathChange = event =>
    props.onChange({ ...value, path: event.target.value });
  const onSimpleHeadersChange = event =>
    props.onChange({
      ...value,
      headers: stringToSimpleHeaders(event.target.value)
    });
  return (
    <div>
      <input name="method" value={value.method} onChange={onMethodChange} />
      <input name="path" value={value.path} onChange={onPathChange} />
      <textarea
        name="headers"
        value={simpleHeadersToString(value.headers)}
        onChange={onSimpleHeadersChange}
      />
    </div>
  );
};

export default Input;
