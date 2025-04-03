const axios = require("axios");

const buildMakeHttpClient = (httpApi) => {
  return ({ header }) => {
    return {
      get: async (url) => {
        return await httpApi.get(url, { header });
      },
      post: async (url, body) => {
        return await httpApi.post(url, { data: body, header });
      },
      put: async (url, body) => {
        return await httpApi.put(url, { body, header });
      },
      delete: async (url) => {
        return await httpApi.delete(url, { header });
      },
    };
  };
};
const makeHttpClient = buildMakeHttpClient(axios);
const httpClienWithAuth = makeHttpClient({
  header: { Authorization: `bearer ${process.env.TOKEN}` },
});
const httpClientWithOutAuth = makeHttpClient({
  header: { "Content-type": "Application/json" },
});

module.exports = {
  http: httpClienWithAuth,
  httpWithAuth: httpClientWithOutAuth,
};
