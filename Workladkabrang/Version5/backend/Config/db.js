const mongoose = require('mongoose');

const ConnectDB = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/product');
        console.log("DB Connected");
    }catch(err){
        console.log(err);
    }
};

module.exports = ConnectDB