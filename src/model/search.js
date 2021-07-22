const mongoose = require( 'mongoose' );

var nameSchema = new mongoose.Schema({
    discussionId: {
        type:String
    },
    _id:
    {
        type: String
    },
    name :
    {
        type :String
    },
    location: {
        type:String
    },
    viewers :
    {
        type: Array
    },
    name : {
        type:String
    }, 
    bpc : {
        type:Number
    }, 
    createdOn : {
        type:Date
    },
    createdBy : 
    {
        type:Number
    },
    updatedBy:
    {
        type:Number
    },
    updatedOn : {
        type:Date
    }, 
    _schemaver:
    {
        type:String
    }
});

mongoose.model( 'searchTxt', nameSchema ,'topic');