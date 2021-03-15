const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


// View All Employees 

const viewAllEmp = () => {
    connection.query(
        "SELECT employee.id as ID, first_name as First, last_name as Last, name as Department, title as Role, salary as Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.dept_id",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res);
        });
};

// View All Roles

const viewAllRoles = () => {
    connection.query(
        "SELECT role.id as ID, title as Role, salary as Salary, name as Department FROM role LEFT JOIN department ON role.dept_id = department.id",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res);
        });
};

// View All Departments  

const viewAllDept = () => {
    connection.query(
        "SELECT department.id as ID, name as Department FROM department",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res);
        });
};


module.exports = {
    viewAllEmp,
    viewAllRoles,
    viewAllDept,
}