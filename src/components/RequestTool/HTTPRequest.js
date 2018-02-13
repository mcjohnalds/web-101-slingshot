// @flow
import type { Headers } from "./Headers";

export type HTTPRequest = {
  method: string,
  path: string,
  headers: Headers | SyntaxError
};
