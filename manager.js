'use strict';

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Aggies10!",
  database: "bamazon_DB"
});

connection.connect();

function displayProducts() {
    connection.query("SELECT * FROM products", function(error, results) {
      if (error) throw error;
   console.log(inventory);

   var table = new Table({
    head: ["products", "price", "name", "inventory"]})
    return(displayProducts)
})}

for (var i = 0; i < results.length; i++) 
table.push([
    results[i].products,
    results[i].price,
    results[i].name,
    results[i].inventory,
  ]);



