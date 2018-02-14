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
  return <button onClick={onClick} name="sendRequest" />;
};

export default SendRequestButton;
