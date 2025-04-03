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

const john = buildPerson(obj);
