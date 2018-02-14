// @flow

const lineToHeader = (line: string): [string, string] => {
  const separatorIndex = line.indexOf(":");
  return [
    line.slice(0, separatorIndex).trim(),
    line.slice(separatorIndex + 1).trim()
  ];
};

export default lineToHeader;
