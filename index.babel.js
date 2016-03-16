import Promise from 'promise'
import superagent from 'superagent'

const request = params => {
  return new Promise((resolve, reject) => {
    const {
      method,
      url,
      query = {},
      data = {},
      headers = {}
    } = params
    superagent(method, url)
      .query(query)
      .send(data)
      .set(headers)
      .end((error, response) => {
        if (error) {
          reject(error.response ? (error.response.body || error.response) : error)
        } else {
          resolve(response.body)
        }
      })
  })
}

export default request
