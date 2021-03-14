const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// Add Employee 

const addEmp = () => {
    connection.query(
    "SELECT title as Role FROM role",
    function(err, res) {
    if (err) throw (err);
    const roleData = res.map((role) => {
        return role.dataValues
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

module.exports = {
    addEmp,
}