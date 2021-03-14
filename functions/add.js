const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// Add Employee 

const addEmp = () => {
    connection.query(
    "SELECT title FROM role",
    function(err, res) {
    if (err) throw (err);
    const roleData = res.map((role) => {
        return role.title
    });
    console.log(roleData);
    inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: "Let's add a new employee! What is their first name?",
            default: "Type name here.",
        },
        {
            type: "input",
            name: "last",
            message: "What is their last name?",
            default: "Type name here.",
        },
        {
            type: "list",
            name: "role",
            message: "Select their role",
            choices: roleData,
        },
    ]).then((data) => {
        console.log(data);
    });    
});
};

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title", 
            message: "Let's add a new role! What is the title?",
            default: "Type title here."
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of this role?",
            default: "Type salary here. No commas.",
        },
        {
            type: "list",
            name: "dept",
            message: "To what department does this role belong?",
            choices: deptData,
        }
    ]).then((data) => {

    })
}

const addDept = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Let's add a new department! What shall we call it?",
            default: "Type name here.",
        }
    ]).then((data) => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: data.name
            },
            function(err, res) {
                if (err) throw err;
                console.log("\n New department added: " + data.name + "\n");
            }
        );
    });
};





module.exports = {
    addEmp,
    addDept,
    addRole,
}