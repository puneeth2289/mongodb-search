// connect to the DB at startup
require( './data/init.js' ); 

const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const searchRouter = require( './routes/search' );


app.use(express.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

app.set( 'view engine', 'pug' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/customobjectdata',searchRouter);

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
