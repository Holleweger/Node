//const { Person } = require("./person");
//const person = new Person("Felipe");

//require("./modules/fs")
// require("./modules/path")


const dotenv = require('dotenv');
const connectToDatabase = require("./src/database/connect")


dotenv.config();
connectToDatabase();

require('./modules/express')
