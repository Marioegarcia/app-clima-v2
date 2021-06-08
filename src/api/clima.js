import { basePath, apiVersion } from "./config";
import axios from 'axios';

export function getCiudadApi(ciudad) {
  
  return axios.post(`${basePath}/${apiVersion}/clima`, {
    ciudad
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return { ok: false, message: error.message };
  });

}

export function getClimaApi(data) {
  
  const url = `${basePath}/${apiVersion}/temperatura`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return { ok: true, message: result.message };
    })
    .catch(err => {
      return { ok: false, message: err.message };
    });
}


export function getClimaApi2(data) {
 
  // const url = `${metawheather}/search/?lattlong=${data[1]},${data[0]}`;
  const url = `$${basePath}/${apiVersion}/temperatura`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return { ok: true, message: result.message };
    })
    .catch(err => {
      return { ok: false, message: err.message };
    });
}


