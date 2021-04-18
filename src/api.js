import axios from 'axios';

const request = (method, url, body = {}, callback) => {
  let parameters = {
    method: method,
    url: url,
    headers: {
        "Content-Type": "application/json"
    },
  }

  if (body) {
    parameters.data = body;
  }

  axios(parameters)
  .then((res) => {
    if(callback) {
      callback(res.data)
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

const getRequest = async (url, callback) => {
  request('GET', url, {}, callback)
};

const postRequest = async (url, body = {}, callback) => {
  request('POST', url, body, callback)
};

const putRequest = async (url, body = {}, callback) => {
  request('PUT', url, body, callback)
};

const patchRequest = async (url, body = {}, callback) => {
  request('PATCH', url, body, callback)
};

const deleteRequest = async (url, callback) => {
  request('DELETE', url, {}, callback)
};

export {getRequest, postRequest, putRequest, patchRequest, deleteRequest};