// @flow
import React from "react";
import request from "./request";

type Props = {
  data: string,
  onResponse: string => any
};

const SendRequestButton = (props: Props) => {
  const onClick = () => request(props.data).then(props.onResponse);
  return <button onClick={onClick} name="sendRequest" />;
};

export default SendRequestButton;
