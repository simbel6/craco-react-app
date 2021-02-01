import request from 'utils/request';

const api = {};
const files = require.context('./api', false, /\.js$/);
files.keys().forEach((key) => {
  const child = files(key).default;
  Object.assign(api, child);
});

const gen = (params) => {
  let url = params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    [method, url] = paramsArray;
  }

  return (data) =>
    request({
      url,
      data,
      method,
    });
};

const APIFunction = {};
Object.entries(api).forEach((item) => {
  APIFunction[item[0]] = gen(item[1]);
});

export default APIFunction;
