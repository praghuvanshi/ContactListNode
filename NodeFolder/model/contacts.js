var mongoose=require('mongoose');

const ContactSchema=mongoose.Schema({
    first_name:{
        type:String
    },last_name:{
        type:String
    },phone_number:{
        type:String
    }
});

const Contact=module.exports=mongoose.model('contacts',ContactSchema);