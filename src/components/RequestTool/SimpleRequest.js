// @flow
import type { SimpleHeaders } from "./SimpleHeaders";

export type SimpleRequest = {
  method: string,
  path: string,
  headers: SimpleHeaders
};
