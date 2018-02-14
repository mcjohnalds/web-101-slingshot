// @flow
const responseToString: Response => Promise<string> = async response => {
  let str = `HTTP/1.1 ${response.status} ${response.statusText}`;
  for (const [k, v] of response.headers.entries()) {
    // Add if check to appease flow
    if (typeof v === "string") str += `\n${k}: ${v}`;
  }
  const body = await response.text();
  if (body.length > 0) {
    str += "\n\n" + body;
  }
  return str;
};

export default responseToString;
