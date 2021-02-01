const env = process.env.REACT_ENV;

export const CURRENT_ENV = env;

export const BASE_URL = {
  dev: 'http://127.0.0.1:3008/v1/',
  test: '',
  pre: '',
  prod: '',
}[CURRENT_ENV];

export const OTHER_BASE_URL = '';
