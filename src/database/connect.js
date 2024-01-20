const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await 
    mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodedb.3lq63r8.mongodb.net/?retryWrites=true&w=majority`)
    .then((sucess) => console.log("Conexão realizada!"))
    .catch((err) => console.log('Erro : ', error));

}



module.exports = connectToDatabase;