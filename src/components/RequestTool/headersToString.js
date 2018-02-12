// @flow
import R from "ramda";
import type { Headers } from "./Headers";

const headersToString = (headers: Headers): string =>
  R.toPairs(headers)
    .map(([k, v]) => {
      if (typeof v === "string") {
        return `${k}: ${v}`;
      } else {
        return null;
      }
    })
    .join("\n");

export default headersToString;
