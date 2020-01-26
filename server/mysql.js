const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'pang'
});

connection.connect();




// connection.end();

const getQuery = (callback) => {
  connection.query('SELECT id, name FROM users', function (error, results, fields) {
    if (error) callback(error);
    var rows = [];
    for(let i = 0; results.length > i; i++) {
      rows.push(JSON.stringify(results[i]));
    }
    
    callback(null, rows);
  });
}

module.exports = {
  getQuery,
}