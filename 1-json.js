const fs = require ('fs')
// const book = {
//     tittle: 'Chocolate Factory',
//     author: 'Morag Holidays',
// }


// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)



//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)

//const parseData = JSON.parse(bookJSON)
//console.log(parseData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data =  JSON.parse(dataJSON)
// console.log(data.tittle)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'John'
user.age = 21

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)