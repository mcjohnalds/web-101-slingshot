// @flow
import * as R from "ramda";
import type { SimpleRequest } from "./SimpleRequest";

const simpleRequestToFetchRequest = (simpleRequest: SimpleRequest): Request =>
  new Request(simpleRequest.headers.host + simpleRequest.path, {
    method: simpleRequest.method,
    headers: R.omit(["host"], simpleRequest.headers)
  });

export default simpleRequestToFetchRequest;
