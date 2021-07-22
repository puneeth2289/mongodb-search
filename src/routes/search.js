const express = require( 'express' );
const search = require('../model/search');

const { 
    getWorkshops
} = require( '../controllers/search' );


const router = express.Router();

router.get('/',getWorkshops);

module.exports = router;