const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const view = require('./functions/view');
const add = require('./functions/add');
const update = require('./functions/update');


// function to begin app
function begin() {
    console.log("Welcome to The Office!", "\n");
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        }
    ]).then((data) => {
        switch (data.choice) {
            case "View All Employees":
                view.viewAllEmp();
                toMenu();
                break;

            case "Add Employee":
                add.addEmp();
                break;

            case "Update Employee Role":
                update.updateRole();
                break;

            case "View All Roles":
                view.viewAllRoles();
                break;

            case "Add Role":
                add.addRole();
                break;

            case "View All Departments":
                view.viewAllDept();
                break;

            case "Add Department":
                add.addDept();
                break;

            case "Quit":
                console.log("\n That's what she said. \n");
                connection.end();
                break;

            default:
                break;
        };
    });
}


function toMenu() {
    begin();
}

begin();