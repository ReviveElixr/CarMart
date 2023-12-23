const mongoose = require('mongoose');

const Msg = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    },
})

module.exports  = mongoose.model('MSG', Msg);

