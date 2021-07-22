const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'searchTxt' );
var ObjectId = require('mongodb').ObjectID;

const getWorkshops = ( req, res, next ) => {
    //console.log(req._parsedUrl.query); 
    try{
    var pipeline = [
        {
            "$search": {
                "index": "searchindex",
                "autocomplete": {
                    "query": req._parsedUrl.query,
                    "path": "name",
                    "fuzzy": {
                        "maxEdits": 2
                    }
                }
            }
        }, 
        {
            "$project": {
                "name": 1.0,
                "createdBy": 1.0,
                "score": {
                    "$meta": "searchScore"
                }
            }
        }, 
        {
            "$limit": 10.0
        }
    ];


    Workshop.aggregate(pipeline,function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            //console.log(docs);
            res.send(docs);
        }
    });    
} catch (e) {
    res.status(500).send({ message: e.message });
    console.log( e.message)
} 
};

const getId = ( req, res, next ) => {
    console.log(req.originalUrl.substring(1,req.originalUrl.length));
    try {
       
        var myId = (req.originalUrl.substring(1,req.originalUrl.length));
        //console.log(myId);
     Workshop.findOne( { "_id": (myId) }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                res.send(docs);
            }
        });

      
    } catch (e) {
        console.log( e.message);
        res.status(500).send({ message: e.message });
    }
};
     

module.exports = {
    getWorkshops
    ,getId
};