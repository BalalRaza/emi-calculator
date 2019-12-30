import { url } from '../config/config';
import { fixAndGetJson } from '../util/util';

export function fetchData() {
  let res;

  return fetch(url)
    .then(response => {
      res = response.clone(); // Just in case if JSON has syntax error
      return response.json();
    })
    .catch((err) => {
      if (err instanceof SyntaxError) {
        return fixAndGetJson(res);
      }
    });
};
