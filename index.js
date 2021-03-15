const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const view = require('./functions/view');
const add = require('./functions/add');
const update = require('./functions/update');

console.log("Welcome to The Office!", "\n");
begin();
// function to begin app
function begin() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        }
    ]).then(async (data) => {
        switch (data.choice) {
            case "View All Employees":
                await view.viewAllEmp();
                break;

            case "Add Employee":
                add.addEmp();
                break;

            case "Update Employee Role":
                update.updateRole();
                break;

            case "View All Roles":
                await view.viewAllRoles();
                break;

            case "Add Role":
                await add.addRole();
                break;

            case "View All Departments":
                await view.viewAllDept();
                break;

            case "Add Department":
                await add.addDept();
                break;

            case "Quit":
                console.log("\n That's what she said. \n");
                connection.end();
                break;

            default:
                break;
        };
        toMenu();
    });
}


function toMenu() {
    begin();
}

