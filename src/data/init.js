const mongoose = require( 'mongoose' );

require( '../model/search' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'useFindAndModify', false );

// const connectionStr = 'mongodb://user:password@...'
const connectionStr = 'mongodb+srv://devtenantuser:Password121416@dev-leo-tenant.yjm1a.mongodb.net/devdiscussionforum_test';

mongoose.connect( connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on( 'open', () => {
    console.log( 'connected to the DB' );
});

mongoose.connection.on( 'error', err => {
    console.log( 'unable to connect to the DB', err.message );
    process.exit( 0 );
});