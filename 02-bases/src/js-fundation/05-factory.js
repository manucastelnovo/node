const obj = { name:'John', birtdata: '1995-09-25'}

const buildPerson = ({name, birthdate})=>{
    return {
        id: new Date().getTime(),
        name:name,
        birtdate:birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}

const john = buildPerson(obj)