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
        return role.title;
    });
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
        connection.query(
            "SELECT role.id FROM role WHERE ?",
            [
                {
                   title : data.role
                },
            ],
            function(err, res) {
                if (err) throw err;
                const roleId = res[0].id
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: data.first,
                    last_name: data.last,
                    role_id: roleId,
                    manager_id: 1,
                },
                function(err, res) {
                    if (err) throw err;
                    console.log("\n New employee added: " + data.first + " " + data.last + "\n");
                });
                connection.query(
                    "INSERT INTO manager SET ?",
                    {
                        first_name: data.first,
                        last_name: data.last,
                    },
                    function(err, res) {
                        if (err) throw err;
                        return res;
                    });
                });  
         });  
    });
};


///////////// Add Role


async function addRole() {
    connection.query(
        "SELECT name FROM department",
        function(err, res) {
            if (err) throw (err);
            const deptData = res.map((role) => {
                return role.name;
            });
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
                const select = (data.dept);
                connection.query(
                    "SELECT id FROM department WHERE ?",
                    [
                        {
                        name : select,
                        },
                    ],
                    function(err, res) {
                        if (err) throw err;
                        connection.query(
                            "INSERT INTO role SET ?",
                            {
                                title: data.title,
                                salary: data.salary,
                                dept_id: res[0].id,
                            },
                            function(err, res) {
                                if (err) throw err;
                                console.log("\n New role added: " + data.title + "\n");
                                return res;
                            }
                    );
                }       
            );   
        });
    });
};





////////// Add Department 

async function addDept() {
    await inquirer.prompt([
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
                return res;
            });
        }
    );
};


module.exports = {
    addEmp,
    addDept,
    addRole,
}