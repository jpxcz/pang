const express = require('express');
const app = express();
const cors = require("cors")

const { getQuery } = require('./mysql');


app.use(cors())
app.get('/', function (req, res) {
  getQuery(function (err, result) {
    if (err) throw err;
    res.json({ query: result })
    return res;
  })
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});