// @flow
import React from "react";
import RequestInput from "./RequestInput";
import SendRequestButton from "./SendRequestButton";
import ResponseOutput from "./ResponseOutput";
import ErrorOutput from "./ErrorOutput";

type Props = {};

type State = {
  requestInput: string,
  response: string,
  error: string | null
};

class RequestTool extends React.Component<Props, State> {
  state = {
    requestInput: "",
    response: "",
    error: null
  };

  onRequestInputChange = (requestInput: string) =>
    this.setState({ requestInput });

  onResponse = (response: string) => this.setState({ response });

  onError = (error: string) => this.setState({ error });

  render = () =>
    <div>
      <RequestInput
        value={this.state.requestInput}
        onChange={this.onRequestInputChange}
      />
      {this.state.error && <ErrorOutput data={this.state.error} />}
      <SendRequestButton
        data={this.state.requestInput}
        onResponse={this.onResponse}
        onError={this.onError}
      />
      <ResponseOutput data={this.state.response} />
    </div>;
}

export default RequestTool;
