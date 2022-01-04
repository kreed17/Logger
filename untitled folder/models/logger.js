
const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    id: String,
    name:{type:String, required: true},
    dateCreated: String,
    logs: [
        {
        logid: String,
        login: String,
        logout: String,
        duration:String        
        }
    ]    
})

const Log = mongoose.model('log', LogSchema);

module.exports = Log;