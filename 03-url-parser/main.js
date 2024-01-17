const _ = require("lodash");

const extractUrlParts = (url, format) => {
  if (!(_.isString(url) && _.isString(format))) {
    throw new Error("Both URL and format must be strings");
  }

  const [path, queryString] = url.split("?");
  const params = extractUrlParams(path, format);
  const queryParams = extractQueryParams(queryString);

  return { ...params, ...queryParams };
};

const extractUrlParams = (path, format) => {
  const urlSegments = path.split("/");
  const formatSegments = format.split("/");

  if (urlSegments.length !== formatSegments.length) {
    throw new Error("Provided URL does not follow the provided format");
  }

  return formatSegments.reduce((result, formatSegment, i) => {
    if (formatSegment.startsWith(":")) {
      const paramName = formatSegment.substring(1);
      result[paramName] = convertToNumberIfNumeric(urlSegments[i]);
    }

    return result;
  }, {});
};

const extractQueryParams = (queryString) => {
  const searchParams = new URLSearchParams(queryString);

  return _.fromPairs(
    Array.from(searchParams.entries()).map(([key, value]) => [
      key,
      convertToNumberIfNumeric(value),
    ])
  );
};

const convertToNumberIfNumeric = (value) => {
  return isNaN(value) ? value : Number(value);
};

// Test
const url = "/6/api/listings/3?sort=desc&limit=10";
const format = "/:version/api/:collection/:id";
const extractedUrl = extractUrlParts(url, format);
console.log(extractedUrl);
