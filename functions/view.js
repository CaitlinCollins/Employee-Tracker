const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const begin = require('../index');


// View All Employees 

const viewAllEmp = () => {
    connection.query(
        "SELECT employee.id as ID, employee.first_name as First, employee.last_name as Last, name as Department, title as Role, salary as Salary, CONCAT(manager.first_name, ' ', manager.last_name) as Manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.dept_id LEFT JOIN manager on manager.id = employee.manager_id",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res, "\n");
        }
    );
};

// View All Roles

const viewAllRoles = () => {
    connection.query(
        "SELECT role.id as ID, title as Role, salary as Salary, name as Department FROM role LEFT JOIN department ON role.dept_id = department.id",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res, "\n");
        }
    );
};

// View All Departments  

const viewAllDept = () => {
    connection.query(
        "SELECT department.id as ID, name as Department FROM department",
        function(err, res) {
            if (err) throw (err);
            console.table("\n", res);
        }
    );
};


module.exports = {
    viewAllEmp,
    viewAllRoles,
    viewAllDept,
}