const mongoose = require('mongoose');

const mongo = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("Connection Sucessfull ...");
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = mongo;