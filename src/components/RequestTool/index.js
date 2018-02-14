// @flow
import React from "react";
import RequestInput from "./RequestInput";
import SendRequestButton from "./SendRequestButton";
import ResponseOutput from "./ResponseOutput";

type Props = {};

type State = {
  requestInput: string,
  response: string
};

class RequestTool extends React.Component<Props, State> {
  state = {
    requestInput: "",
    response: ""
  };

  onRequestInputChange = (requestInput: string) =>
    this.setState({ requestInput });

  onResponse = (response: string) => this.setState({ response });

  render = () =>
    <div>
      <RequestInput
        value={this.state.requestInput}
        onChange={this.onRequestInputChange}
      />
      <SendRequestButton
        data={this.state.requestInput}
        onResponse={this.onResponse}
      />
      <ResponseOutput data={this.state.response} />
    </div>;
}

export default RequestTool;
