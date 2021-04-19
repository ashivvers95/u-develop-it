const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        //mysql username
        user: 'root',
        //mysql password
        password: '$nowBear95',
        database: 'election'
    },
    console.log('connected to the election database.')
);

module.exports = db;