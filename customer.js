"use strict";

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Aggies10!",
  database: "bamazonDB"
});

connection.connect();

var display = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
     productSelection();
  });
};

var productSelection = function() {
  console.log("productSelection")
  selectQuanity()
};
var selectQuanity = function() {
  console.log("selectQuanity")
  buyMore()
};
var buyMore = function() {
  console.log("buyMore")
};
display();


//inquirer
//please select id number
//please select quanity of product
//would you like to purchase any other products?

// connect to sql
// display products
// if statement to select product
// then promt to product selected === product available
// if true the subtract product from inventory
