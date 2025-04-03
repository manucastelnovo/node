// const templateExports = require('./js-fundation/01-template')
// require('./js-fundation/02-destructiring')
// const { getUserById } = require('./js-fundation/03-callbacks')

// // console.log(templateExports.emailTemplate)

// getUserById(1, function(error, user){
//     if(error){
//         throw new Error(error)
//     }
//     console.log(user)

// })
const getPokemonById = require("./js-fundation/06-promises");

console.log(getPokemonById(34));
