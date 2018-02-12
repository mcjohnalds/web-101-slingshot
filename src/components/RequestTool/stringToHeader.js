// @flow

const stringToHeader = (str: string): [string, string] | null => {
  const i = str.indexOf(":");
  if (i === -1) {
    return null;
  } else {
    const header = str.slice(0, i).trim();
    if (header === "") {
      return null;
    } else {
      return [header, str.slice(i + 1).trim()];
    }
  }
};

export default stringToHeader;
