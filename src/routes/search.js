const express = require( 'express' );
const search = require('../model/search');

const { 
    getWorkshops
} = require( '../controllers/search' );

const router = express.Router();

console.log('hereee');

router.get( '/', getWorkshops );



module.exports = router;