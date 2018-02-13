// @flow
import R from "ramda";
import type { SimpleHeaders } from "./SimpleHeaders";
import stringToHeader from "./stringToHeader";

const stringToSimpleHeaders = (str: string): SimpleHeaders => {
  const lines = str.split("\n");
  const headers = lines.map(stringToHeader);
  const index = headers.findIndex(R.isNil);
  if (index === -1) {
    // headers.filter(Boolean) doesn't alter the array but it converts from
    // Array<?[string, string]> to Array<[string, string]> which makes flow
    // stop complaining
    return R.fromPairs(headers.filter(Boolean));
  } else {
    throw new SyntaxError(`Error on line ${(index + 1).toString()}`);
  }
};

export default stringToSimpleHeaders;
