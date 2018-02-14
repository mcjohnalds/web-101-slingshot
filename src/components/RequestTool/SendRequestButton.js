// @flow
import React from "react";
import request from "./request";

type Props = {
  data: string,
  onResponse: string => any,
  onError: string => any
};

const SendRequestButton = (props: Props) => {
  const onClick = () =>
    request(props.data)
      .then(props.onResponse)
      .catch(error => props.onError(error.message));
  return (
    <button
      onClick={onClick}
      name="sendRequest"
      style={{
        width: "100%",
        padding: "0",
        height: "2rem",
        margin: "0.5rem 0",
        backgroundColor: "#6e6ea0",
        color: "white",
        cursor: "pointer",
        fontFamily: "Barlow, sans-serif",
        border: "none"
      }}
    >
      Send request
    </button>
  );
};

export default SendRequestButton;
