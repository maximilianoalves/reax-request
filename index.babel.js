import Promise from 'promise';
import superagent from 'superagent';

const request = (method, url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    superagent(method, url)[method === 'GET' ? 'query' : 'send'](data).set(headers).end((error, response) => {
      if (error) {
        reject(error.response.body);
      } else {
        resolve(response.body);
      }
    });
  });
}

export default request;
