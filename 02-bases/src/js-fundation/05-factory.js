const { getUUID } = require("../plugins/get-id.plugin");
const { getAge } = require("../plugins/get-age.plugin");
const obj = { name: "John", birtdata: "1995-09-25" };

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birtdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

const buildHttpClient = ({ httpApi }) => {
  return ({ header }) => {
    return {
      get: async (url) => {
        return await axios.get(url);
      },
      post: async (url, body) => {
        return await axios.post(url, body);
      },
      put: async (url, body) => {
        return await axios.put(url, body);
      },
      delete: async (url) => {
        return await axios.delete(url);
      },
    };
  };
};

const john = buildPerson(obj);
