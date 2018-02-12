// @flow
import React from "react";
import Code from "./Code";
import CodeBlock from "./CodeBlock";

const HTTPRequestsRoute = () =>
  <div>
    <p style={{ marginTop: 0 }}>
      Go to <a href="https://imgur.com/abc123">https://imgur.com/abc123</a>.
    </p>
    <p>
      What just happened? Your browser sent something like this text to
      imgur.com:
    </p>
    <CodeBlock>
      GET /abc123.png HTTP/1.1<br />
      host: www.imgur.com<br />
      accept: image/png<br />
      user-agent: Chrome/63.0.3239.132
    </CodeBlock>
    <p>That's called a HTTP request. Let's break down what's in the request:</p>
    <h2>Method</h2>
    <CodeBlock style={{ color: "#999" }}>
      <em style={{ color: "#333", fontStyle: "normal" }}>GET</em> /abc123.png
      HTTP/1.1
    </CodeBlock>
    <p>
      <Code>GET</Code> means we just want to get a resource without modifying it
      in any way. There are other methods like <Code>POST</Code>,{" "}
      <Code>PUT</Code>, and <Code>DELETE</Code> that we'll get to later.
    </p>
    <h2>Path</h2>
    <CodeBlock style={{ color: "#999" }}>
      GET <em style={{ color: "#333", fontStyle: "normal" }}>
        /abc123.png
      </em>{" "}
      HTTP/1.1
    </CodeBlock>
    <p>
      The part that reads <Code>/abc123.png</Code> is called the path.
    </p>
    <h2>HTTP version</h2>
    <CodeBlock style={{ color: "#999" }}>
      GET /abc123.png{" "}
      <em style={{ color: "#333", fontStyle: "normal" }}>HTTP/1.1</em>
    </CodeBlock>
    <p>
      <Code>HTTP/1.1</Code> just says that we're talking over HTTP.
    </p>
    <h2>Headers</h2>
    <CodeBlock>
      host: www.imgur.com<br />
      accept: image/png<br />
      user-agent: Chrome/63.0.3239.132
    </CodeBlock>
    <p>These are the called the headers of the request.</p>
    <ul>
      <li>
        <Code>host</Code> is the domain you're accessing
      </li>
      <li>
        <Code>accept</Code> says what kind of filetype you are expecting
      </li>
      <li>
        <Code>user-agent</Code> says what browser you're using
      </li>
    </ul>
    <p>
      HTTP has many different headers you can send. Only the <Code>host</Code>{" "}
      header is mandatory.
    </p>
    <p>
      A few moments later, the server you sent the message to responds with
      this:
    </p>
    <CodeBlock>
      HTTP/1.1 200 OK<br />
      content-type: image/png<br />
      content-length: 1234<br />
      <br />
      0101010011101000...
    </CodeBlock>
    <p>This is a HTTP response. Let's break this down:</p>
    <h2>HTTP version</h2>
    <CodeBlock style={{ color: "#999" }}>
      <em style={{ color: "#333", fontStyle: "normal" }}>HTTP/1.1</em> 200 OK
    </CodeBlock>
    <p>This again just reaffirms we are using HTTP.</p>
    <h2>HTTP status</h2>
    <CodeBlock style={{ color: "#999" }}>
      HTTP/1.1 <em style={{ color: "#333", fontStyle: "normal" }}>200 OK</em>
    </CodeBlock>
    <p>
      This is the status. <Code>200 OK</Code> means everything worked fine.
      There are others like <Code>404 Unauthorized</Code> and{" "}
      <Code>401 Access denied</Code>.
    </p>
    <h2>
      Send your own <Code>GET</Code> request
    </h2>
  </div>;

export default HTTPRequestsRoute;
