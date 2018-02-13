// @flow
import R from "ramda";
import type { Headers } from "./Headers";
import stringToHeader from "./stringToHeader";

const stringToHeaders = (str: string): Headers | SyntaxError => {
  if (str.trim() === "") {
    return {};
  } else {
    const lines = str.split("\n");
    const headers = lines.map(stringToHeader);
    const index = headers.findIndex(R.isNil);
    if (index === -1) {
      // headers.filter(Boolean) doesn't alter the array but it converts from
      // Array<?[string, string]> to Array<[string, string]> which makes flow
      // stop complaining
      return R.fromPairs(headers.filter(Boolean));
    } else {
      return new SyntaxError((index + 1).toString());
    }
  }
};

export default stringToHeaders;
