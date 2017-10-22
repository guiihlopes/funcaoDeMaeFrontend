import es6promise from 'es6-promise';
import 'isomorphic-fetch';
import Cookie from 'js-cookie';

es6promise.polyfill();

const defaultRequestOptions = {
  headers: {
    'Content-Type': 'application/json',
    authorization: Cookie.get('funcao_de_mae_locale'),
  },
};

function parseJSON(response) {
  return new Promise(resolve => response.json()
    .then(json => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


export function request(url, options) {
  let newHeader = {};
  const newOptions = options;
  if (options !== undefined) {
    if (options.headers !== undefined) {
      newHeader = Object.assign({}, defaultRequestOptions.headers, options.headers);
      // verifica quando passa o content type null, significa que remove ele dos headers
      if (newHeader['Content-Type'] === null) {
        delete newHeader['Content-Type'];
      }
      newOptions.headers = newHeader;
    }
  }
  const finalOptions = { ...defaultRequestOptions, ...newOptions };
  return new Promise((resolve, reject) => {
    fetch(`${BACKEND_URL}/${url}`, finalOptions)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }

        return reject(response);
      });
  });
}
