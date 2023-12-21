//require('custom-env').env('../.env');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jj081123',
    database: 'sistema_gestao'
})

module.exports = connection;