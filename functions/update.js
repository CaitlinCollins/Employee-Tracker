const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


const updateRole = () => {
    selectManager();
};



const selectManager = ()=> {
    connection.query(
        "SELECT Concat(first_name, ' ', last_name) as name, id from employee",
        function(err, res) {
            if (err) throw (err);
            const empData = res.map((emp) => {
               return emp.name;
            });
            inquirer.prompt([
                {
                    type: "list",
                    name: "emp",
                    message: "Which employee would you like to update?",
                    choices: empData,
                }
            ]).then((data) => {
                const emp = data.emp;
                // Remove selected employee from array
                const newEmpData = empData.filter(selected => selected !== emp);
                // Add no manager as an option
                const none = "No Manager";
                newEmpData.push(none);
                inquirer.prompt([
                    {
                        type: "list",
                        name: "man",
                        message: "Who is " + emp + "'s new manager?",
                        choices: newEmpData,
                    }
                ]).then((data) => {
                    console.log(data);
                    connection.query(
                        "SELECT id FROM manager WHERE ?",
                        [
                            {
                            
                            },
                        ],
                        function(err, res) {
                            if (err) throw (err);
                            console.log(res);
                        },
                    )
                })
        });   
    });
}





module.exports = {
    updateRole,
    selectManager,
}