const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'searchTxt' );

const getWorkshops = ( req, res, next ) => {
    console.log(req.query.param); 
    var options = {
        allowDiskUse: false
    };

    var pipeline = [
        {
            "$search": {
                "index": "searchindex1",
                "autocomplete": {
                    "query": req.query.param,
                    "path": "message",
                    "fuzzy": {
                        "maxEdits": 2
                    }
                }
            }
        }, 
        {
            "$project": {
                "message": 1.0,
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

    /*const cursor = Workshop.aggregate(pipeline).cursor({ batchSize: 2500 }).exec();

    cursor.each(function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log(docs);
            res.render( 'index', {
                title: "Hey", body: JSON.stringify(docs)
            });
        }
    });*/
    Workshop.aggregate(pipeline,function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log(docs);
            res.render( 'index', {
                title: "Hey", body: JSON.stringify(docs)
            });
        }
    });    
};

module.exports = {
    getWorkshops
};