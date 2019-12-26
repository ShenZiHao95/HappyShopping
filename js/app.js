//import express module
const express = require( 'express' );
//import userRouter
const userRouter = require( './routers/user.js' );
//import body-parser
const bodyParser = require( 'body-parser' );
//create server
let app = express();
//set listen
app.listen( 8080 );
app.use( bodyParser.urlencoded( {
    extended : false
} ) );
app.use(express.static('public'))
//mount userRouter
app.use( '/user' , userRouter );