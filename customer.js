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

var display = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      var table = new Table({
        head: ["products", "name", "price" , "inventory"]
      }
      )})}



      // connect to sql 
      // display products
      // if statement to select product 
      // then promt to product selected === product available 
      // if true the subtract product from inventory 