// @flow
import * as React from "react";
import headersToString from "./headersToString";
import stringToHeaders from "./stringToHeaders";
import type { HTTPRequest } from "./HTTPRequest";
import type { Headers } from "./Headers";

type Props = {
  value: HTTPRequest,
  onChange: HTTPRequest => void
};

const Input = (props: Props) => {
  const value = props.value || {};
  const onMethodChange = event =>
    props.onChange({ ...value, method: event.target.value });
  const onPathChange = event =>
    props.onChange({ ...value, path: event.target.value });
  const onHeadersChange = event =>
    props.onChange({ ...value, headers: stringToHeaders(event.target.value) });
  const headers = headersToString(value.headers || {});
  return (
    <div>
      <input name="method" value={value.method} onChange={onMethodChange} />
      <input name="path" value={value.path} onChange={onPathChange} />
      <textarea name="headers" value={headers} onChange={onHeadersChange} />
    </div>
  );
};

export default Input;
