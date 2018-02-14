// @flow
import stringToRequest from "./stringToRequest";
import responseToString from "./responseToString";

const request: string => Promise<string> = async input =>
  fetch(stringToRequest(input)).then(responseToString);

export default request;
