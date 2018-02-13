// @flow
import R from "ramda";
import type { HTTPRequest } from "./HTTPRequest";
import type { HTTPResponse } from "./HTTPResponse";

const request = (httpRequest: HTTPRequest): Promise<HTTPResponse> =>
  fetch(`${httpRequest.headers.host}${httpRequest.path}`, {
    method: httpRequest.method,
    headers: R.omit(["host"], httpRequest.headers)
  }).then(async response => {
    const text = await response.text();
    return `${response.status} ${response.statusText} HTTP/1.1
host: ${httpRequest.headers.host}
${Array.from(response.headers.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .concat("")
      .join("\n")}
${text}`;
  });

export default request;
