// @flow
import React from "react";
import Input from "./Input";
import Output from "./Output";
import request from "./request";
import type { HTTPRequest } from "./HTTPRequest";
import type { HTTPResponse } from "./HTTPResponse";

type Props = {};

type State = {
  httpRequest: HTTPRequest,
  response: HTTPResponse
};

class RequestTool extends React.Component<{}, State> {
  state = {
    httpRequest: { method: "", path: "", headers: {} },
    response: ""
  };

  send = async () =>
    this.setState({ response: await request(this.state.httpRequest) });

  render = () =>
    <div>
      <Input
        value={this.state.httpRequest}
        onChange={httpRequest => this.setState({ httpRequest })}
      />
      <button name="send" onClick={this.send} />
      <Output data={this.state.response} />
    </div>;
}

export default RequestTool;
