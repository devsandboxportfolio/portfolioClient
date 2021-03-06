import axios from 'axios';

let jwtAccessToken = '';
let jwtRefreshToken;
let jwtAccessTokenExpiresAt;
let auth_service_url = 'https://devsandboxportfolioauth.azurewebsites.net';

const login = (body) => {
  const setJwtVariables = (response) => {
    if (response.status === 200) {
      jwtAccessToken = response.accessToken;
      jwtRefreshToken = response.refreshToken;
      jwtAccessTokenExpiresAt = response.expiresAt;
    }
  }

  request('POST', auth_service_url + "/user/login", body, setJwtVariables)
};

const getAccessToken = () => {
  const setJwtVariables = (response) => {
    if (response.status === 200) {
      jwtAccessToken = response.accessToken;
      jwtAccessTokenExpiresAt = response.expiresAt;
    }
  }
  request('POST', auth_service_url + "/user/getAccessToken", {refreshToken : jwtRefreshToken}, setJwtVariables)
};

const request = (method, url, body = {}, callback) => {
  if (jwtAccessTokenExpiresAt && new Date().getTime() > jwtAccessTokenExpiresAt) {
    getAccessToken()
  }
  let parameters = {
    method: method,
    url: url,
    headers: {
        Authorization: `Bearer ${jwtAccessToken}`,
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

export {getRequest, postRequest, putRequest, patchRequest, deleteRequest, login};