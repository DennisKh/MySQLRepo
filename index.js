var express = require('express');
var mysql = require('mysql');
var prod = {};
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'schorsa24083',
  database: 'busines',
  port: 3306,
});

connection.connect();

// Get query to DB (WHERE product_id IN (3,4))
var query = connection.query("SELECT product_name, shop_name  FROM busines.products INNER JOIN busines.shops ON busines.products.shop_id = busines.shops.shop_id",
function (err, res) {
  if (err) throw error;
  prod = res;
});

connection.end();

var app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/product', (req, res) => {
  res.send(prod);
});
app.listen(3013, () => {
  console.log('API app started http://localhost:3013');
});
