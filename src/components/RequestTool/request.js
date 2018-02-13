// @flow
import R from "ramda";
import type { SimpleRequest } from "./SimpleRequest";
import type { SimpleResponse } from "./SimpleResponse";
import simpleRequestToFetchRequest from "./simpleRequestToFetchRequest";
import fetchResponseToSimpleResponse from "./fetchResponseToSimpleResponse";

const request = (simpleRequest: SimpleRequest): Promise<SimpleResponse> =>
  fetch(simpleRequestToFetchRequest(simpleRequest)).then(
    fetchResponseToSimpleResponse
  );

export default request;
