const sql = require('mysql2')
const con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect ((err) =>{
    if (err) throw err;
    con.query("DROP DATABASE IF EXISTS ecommerce_db;", (err,res)=>{
        if (err) throw err;
        console.log('database droped')
    })
    con.query("CREATE DATABASE ecommerce_db;" , (err,res)=>{
        if (err) throw err;
        console.log('database created')
        process.exit();
    })
    
})