const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


async function updateRole() {
    connection.query(
        "SELECT Concat(first_name, ' ', last_name) as name, id from employee",
        function(err, res) {
            if (err) throw (err);
            const empData = res.map((emp) => {
               return {name: emp.name, value: emp.id};
            });
            inquirer.prompt([
                {
                    type: "list",
                    name: "emp_id",
                    message: "Which employee would you like to update?",
                    choices: empData,
                }
            ]).then((data) => {
                const emp_id = data.emp_id;
                connection.query(
                    "SELECT title, role.id FROM role",
                    function(err, res) {
                        if (err) throw (err);
                        const roleData = res.map((role) => {
                            return {name: role.title, value: role.id};
                        });
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "newRole",
                            message: "What is their new role?",
                            choices: roleData,
                        }
                    ]).then((data) => {
                        const newRole = data.newRole;
                        connection.query(
                            "UPDATE employee SET ? WHERE ?",
                            [
                                {
                                    role_id: newRole,
                                },
                                {
                                    id: emp_id,
                                },
                            ],
                                function(err, res) {
                                if (err) throw err;
                                console.log("\n Employee Role Updated \n");
                                return res;
                            });
                        })
                });
        }); 
    });
}




module.exports = {
    updateRole,
}