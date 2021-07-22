const express = require( 'express' );
const search = require('../model/search');

const { 
    getId
} = require( '../controllers/search' );
console.log('HEREE');

const router = express.Router();

router.get('/',getId);

module.exports = router;