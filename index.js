const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const view = require('./functions/view');


// function to begin app
function begin() {
    console.log("Welcome to The Office!", "\n");
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View All Employees", "View Employees by Department", "View Employees by Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role", "View All Departments", "Add Department", "Remove Department", "View Budget by Department", "Quit"]
        }
    ]).then((data) => {
        switch (data.choice) {
            case "View All Employees":
                view.viewAllEmp();
                break;

            case "View Employees by Department":
                viewbyDept();
                break;

            case "View Employees by Manager":
                viewbyMan();
                break;

            case "Add Employee":
                addEmp();
                break;

            case "Remove Employee":
                removeEmp();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            case "Update Employee Manager":
                updateMan();
                break;

            case "View All Roles":
                view.viewAllRoles();
                break;

            case "Add Role":
                addRole();
                break;

            case "Remove Role":
                removeRole();
                break;

            case "View All Departments":
                view.viewAllDept();
                break;

            case "Add Department":
                addDept();
                break;

            case "Remove Department":
                removeDept();
                break;

            case "View Budget by Department":
                viewBudget();
                break;

            case "Quit":
                console.log("That's what she said.");
                break;

            default:
                break;
        };

    });
}
begin();