export default (queries: { [key in string]: string }) => {
    const queryString = Object.keys(queries)
      .map((key) => `${key}=${queries[key]}`)
      .join("&");
    return `${queryString}`;
  };