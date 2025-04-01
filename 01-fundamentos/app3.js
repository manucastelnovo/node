const fs = require('fs');

const content = fs.readFileSync('readme.md','utf8')

const wordCount = content.split(' ')
const regex = /react/gi;
let reactWordCount = content.match(regex).length

console.log('Palabras', wordCount.length);
console.log('Palabras', reactWordCount)
console.log(content)