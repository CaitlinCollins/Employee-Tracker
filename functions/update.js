const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


const updateRole = () => {
    connection.query(
        "SELECT first_name, last_name FROM employee",
        function(err, res) {
            if (err) throw (err);
            const empData = res.map((emp) => {
               return {first: emp.first_name, last: emp.last_name};
            });
            console.log(empData);
            inquirer.prompt([
                {
                    type: "list",
                    name: "emp",
                    message: "Which employee would you like to update?",
                    choices: empData,
                }

            ]).then((data) => {
                const emp = data.emp;
                console.log(emp);
            })
        });
}











module.exports = {
    updateRole,
}