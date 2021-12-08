import axios from "axios";

 const rootapi = "http://13.78.196.54/api"

// const headers = {
//   headers: {
//     authorization: localStorage?.getItem("user") && "Bearer " + JSON.parse(localStorage?.getItem("user"))?.token,
//   },
// };

 const fetchMethods = {
  get: (url) => {
    return axios.get(url);
  },
  post: (url, data) => {
    return axios.post(url, data);
  },
  patch: (url, data) => {
    return axios.patch(url, data);
  },
  delete: (url) => {
    return axios.delete(url);
  },
  put: (url, data) => {
    return axios.put(url, data);
  },
};

export { fetchMethods , rootapi}