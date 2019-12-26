//import express module
const express = require( 'express' );
//import sql pool
const pool = require( '../pool.js' );
//create router for user
let router = express.Router();
//login router
router.get( '/login/:uname&:upwd' , ( req , res ) => {
    //write sql
    console.log(typeof req.params.uname,req.params.upwd);
    pool.query( 'select uname,upwd from hs_user where uname=? and upwd=?' , [ req.params.uname , req.params.upwd ] , ( err , result ) => {
        if( err ) throw err;
        console.log(result)
        if( result.length > 0 ){
            res.send( '1' );
        } else{
            res.send( '0' );
        }
    } )
} );
//reg router
router.post( '/reg' , ( req , res ) => {
    //write sql
    pool.query( 'insert into hs_user set ?' , [ req.body ] , ( err , result ) => {
        if( err ) throw err;
        if( result.affectedRows > 0 ){
            res.send( '1' );
        } else{
            res.send( '0' );
        }
    } )
} );
//exports router
module.exports = router;