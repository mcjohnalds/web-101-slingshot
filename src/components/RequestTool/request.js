// @flow
import R from "ramda";
import type { SimpleRequest } from "./SimpleRequest";
import type { SimpleResponse } from "./SimpleResponse";

const request = (simpleRequest: SimpleRequest): Promise<SimpleResponse> =>
  fetch(`${simpleRequest.headers.host}${simpleRequest.path}`, {
    method: simpleRequest.method,
    headers: R.omit(["host"], simpleRequest.headers)
  }).then(async response => {
    const text = await response.text();
    return `${response.status} ${response.statusText} HTTP/1.1
host: ${simpleRequest.headers.host}
${Array.from(response.headers.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .concat("")
      .join("\n")}
${text}`;
  });

export default request;
