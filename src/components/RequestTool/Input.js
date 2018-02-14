// @flow
import * as React from "react";
import Textarea from "react-textarea-autosize";
import simpleHeadersToString from "./simpleHeadersToString";
import stringToSimpleHeaders from "./stringToSimpleHeaders";
import type { SimpleRequest } from "./SimpleRequest";
import styles from "./styles.module.css";

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
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "0.5rem",
        fontFamily: "'Roboto Mono', monospace"
      }}
    >
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <div style={{ flex: 1, marginRight: "0.5rem" }}>
          <input
            name="method"
            value={value.method}
            onChange={onMethodChange}
            className={styles.input}
          />
        </div>
        <div style={{ flex: 5, margin: "0 0.5rem" }}>
          <input
            name="path"
            value={value.path}
            onChange={onPathChange}
            className={styles.input}
          />
        </div>
        <span style={{ marginLeft: "0.5rem" }}>HTTP/1.1</span>
      </div>
      <Textarea
        name="headers"
        value={simpleHeadersToString(value.headers)}
        onChange={onSimpleHeadersChange}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
