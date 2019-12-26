//import mysql module
const mysql=require('mysql');
//create connection pool
let pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'happyshopping',
    connectionLimit:15
});
//exports pool
module.exports=pool;