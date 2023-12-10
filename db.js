const Pool=require('pg').Pool; //pg is postgress npm package that needs to be installed to use postgress.

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"Newnew",
    port:5432,

});

module.exports=pool;
