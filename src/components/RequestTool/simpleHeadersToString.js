// @flow
import R from "ramda";
import type { SimpleHeaders } from "./SimpleHeaders";

const simpleHeadersToString = (headers: SimpleHeaders): string =>
  R.toPairs(headers)
    .map(([k, v]) => {
      if (typeof v === "string") {
        return `${k}: ${v}`;
      } else {
        return null;
      }
    })
    .join("\n");

export default simpleHeadersToString;
