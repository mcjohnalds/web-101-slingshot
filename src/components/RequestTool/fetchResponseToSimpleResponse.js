// @flow
import type { SimpleResponse } from "./SimpleResponse";

const fetchResponseToSimpleResponse: Response => Promise<
  SimpleResponse
> = async response => {
  let str = `HTTP/1.1 ${response.status} ${response.statusText}`;
  const body = await response.text();
  for (const [k, v] of response.headers.entries()) {
    str += `\n${k}: ${v}`;
  }
  if (body.length > 0) {
    str += "\n\n" + body;
  }
  return str;
};

export default fetchResponseToSimpleResponse;
