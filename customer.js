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

let display = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
     productSelection();
  });
};display();
 let productSelection = function() {
  inquirer
  .prompt([
    {
      name: 'macbook',
      type: 'input',
      message: 'What Macbook would you like?',
      default: 'Mac Book Pro!',
    },
  ]).then(function(answer){
    selectQuanity()
  })}

   // console.info('Answer:', answers.productSelection);
  console.log("productSelection")

let selectQuanity = function() {
  inquirer
  .prompt([
    {
      name: 'macbook',
      type: 'input',
      message: 'How many would you like?',
    },

  ]).then(function(selectQuanity){
    buyMore()
  })}
  //console.log("selectQuanity")
  

let buyMore = function() {
  inquirer
  .prompt([
    {
      name: 'macbook',
      type: 'input',
      message: 'Would you like another model?',
    },
  ]).then(function(answer){
    buyMore()
    switch(buyMore) {
      case x:
        yes = productSelection;
        break;
      case y:
        no = err;
        break;
  }}
  )
};
  connection.end();

// display();
// const prompts = require('prompts');
 

// function questions  {
//   {
//     inquirer.prompt ({
//     type: 'input',
//     name: 'product type',
//     message: 'What Mac would you like?'
//   },
//   {
//     type: 'input',
//     name: 'quanity',
//     message: 'How many would you like?'
//   },
//   {
//     type: 'input',
//     name: 'about',
//     message: 'Would you like to choose another Mac ?',
//     initial: 'You can never have to many?'
//   }

 
// (async () => {
//   const response = await prompts(questions);
 
//   // => response => { username, age, about }
// })();

//inquirer
//please select id number
//please select quanity of product
//would you like to purchase any other products?

// connect to sql
// display products
// if statement to select product
// then promt to product selected === product available
// if true the subtract product from 
