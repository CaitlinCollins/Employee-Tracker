const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const view = require('./functions/view');
const add = require('./functions/add');
const update = require('./functions/update');


console.log("\n", "Welcome to The Office!", "\n");
begin();


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
                toMenu();
                break;

            case "Add Role":
                add.addRole();
                break;

            case "View All Departments":
                view.viewAllDept();
                toMenu();
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
    setTimeout(function () {
       begin();
    }, 500);
    };


