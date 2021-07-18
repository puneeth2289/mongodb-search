const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'searchTxt' );

console.log('controller');

const getWorkshops = ( req, res, next ) => {
    console.log(req.query); 

    var name = req.params.name;
    var value = req.params.value;
    var query = {};
    query[name] = value;

    Workshop.find(query, function (err, docs) {
        if (err){
           // console.log(err);
        }
        else{
            console.log("First function call : ", docs);
            res.json(docs);
        }
    });      
};

module.exports = {
    getWorkshops
};