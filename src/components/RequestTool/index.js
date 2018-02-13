// @flow
import React from "react";
import Input from "./Input";
import Output from "./Output";
import request from "./request";
import type { SimpleRequest } from "./SimpleRequest";
import type { SimpleResponse } from "./SimpleResponse";

type Props = {};

type State = {
  simpleRequest: SimpleRequest,
  response: SimpleResponse
};

class RequestTool extends React.Component<{}, State> {
  state = {
    simpleRequest: { method: "", path: "", headers: {} },
    response: ""
  };

  send = async () =>
    this.setState({ response: await request(this.state.simpleRequest) });

  render = () =>
    <div>
      <Input
        value={this.state.simpleRequest}
        onChange={simpleRequest => this.setState({ simpleRequest })}
      />
      <button name="send" onClick={this.send} />
      <Output data={this.state.response} />
    </div>;
}

export default RequestTool;
