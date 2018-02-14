// @flow
import React from "react";
import Input from "./Input";
import ErrorOutput from "./ErrorOutput";
import Output from "./Output";
import Button from "./Button";
import request from "./request";
import type { SimpleRequest } from "./SimpleRequest";
import type { SimpleResponse } from "./SimpleResponse";

type Props = {};

type State = {
  simpleRequest: SimpleRequest,
  response: SimpleResponse,
  error: Error | null
};

class RequestTool extends React.Component<Props, State> {
  state = {
    simpleRequest: { method: "", path: "", headers: { host: "" } },
    response: "",
    error: null
  };

  send = async () => {
    try {
      const response = await request(this.state.simpleRequest);
      this.setState({ response });
    } catch (error) {
      this.setState({ error });
    }
  };

  onInputChange = (simpleRequest: SimpleRequest) =>
    this.setState({ simpleRequest });

  render = () =>
    <div>
      <Input value={this.state.simpleRequest} onChange={this.onInputChange} />
      {this.state.error && <ErrorOutput data={this.state.error} />}
      <Button onClick={this.send} />
      <Output data={this.state.response} error={this.state.error} />
    </div>;
}

export default RequestTool;
