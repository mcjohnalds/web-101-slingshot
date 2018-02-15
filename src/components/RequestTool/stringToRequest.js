// @flow
import * as R from "ramda";
import lineToHeader from "./lineToHeader";

const stringToRequest = (input: string): Request => {
  const firstNewline = input.indexOf("\n");
  const firstLine = input.slice(0, firstNewline).split(" ");
  const method = firstLine[0];
  const path = firstLine[1];
  const headersString = getHeadersString(input);
  const headerLines = headersString.split("\n");
  const headers = R.pipe(R.map(lineToHeader), R.fromPairs)(headerLines);
  const host = headers.host;
  if (!host) {
    throw new Error("Missing host header");
  }
  const headersWithoutHost = R.omit(["host"], headers);
  return new Request(host + path, {
    method,
    headers: headersWithoutHost,
    body: getBody(input)
  });
};

const getHeadersString = (input: string): string => {
  const firstNewline = input.indexOf("\n");
  const bodyStart = input.indexOf("\n\n");
  if (bodyStart === -1) {
    return input.slice(firstNewline + 1);
  } else {
    return input.slice(firstNewline + 1, bodyStart);
  }
};

const getBody = (input: string): string | typeof undefined => {
  const bodyStart = input.indexOf("\n\n");
  if (bodyStart === -1) {
    return undefined;
  } else {
    return input.slice(bodyStart + 2);
  }
};

export default stringToRequest;
