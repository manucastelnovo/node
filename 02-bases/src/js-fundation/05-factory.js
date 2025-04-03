const { v4:uuidv4 } = require('uuid')
const getAge = require('get-age')
const obj = { name:'John', birtdata: '1995-09-25'}

const buildPerson = ({name, birthdate})=>{
    return {
        id: uuidv4(),
        name:name,
        birtdate:birthdate,
        age: getAge(birtdata)
    }
}

const john = buildPerson(obj)