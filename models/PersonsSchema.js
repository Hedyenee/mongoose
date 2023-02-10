const mongoose = require('mongoose')
 const Schema = mongoose.Schema() 
 


const userSchema = new mongoose.Schema({
    name : {
        type : String
        
    },
    age : {
        type : Number
    },

    favoriteFood : {
        type : [String],
        
    },

 
})

const User = mongoose.model('User',userSchema)

module.exports = User




