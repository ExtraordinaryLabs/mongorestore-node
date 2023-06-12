const dotenv = require('dotenv')
dotenv.config()

const { MONGO_URI } = process.env

console.log(MONGO_URI)