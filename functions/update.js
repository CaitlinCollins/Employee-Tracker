const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


const updateRole = () => {
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
                            });
                    })
                });
                
            });
        
        }); 
};











// const selectManager = ()=> {
//     connection.query(
//         "SELECT Concat(first_name, ' ', last_name) as name, id from employee",
//         function(err, res) {
//             if (err) throw (err);
//             const empData = res.map((emp) => {
//                return {name: emp.name, value: emp.id}
//             });
//             inquirer.prompt([
//                 {
//                     type: "list",
//                     name: "emp_id",
//                     message: "Which employee would you like to update?",
//                     choices: empData,
//                 }
//             ]).then((data) => {
//                 const emp_id = data.emp_id;
//                 // Remove selected employee from array
//                 const newEmpData = empData.filter(selected => selected !== emp_id);
//                 // Add no manager as an option
//                 const none = {name: "No Manager", value: null};
//                 newEmpData.push(none);
//                 inquirer.prompt([
//                     {
//                         type: "list",
//                         name: "man_id",
//                         message: "Who is their new manager?",
//                         choices: newEmpData,
//                     }
//                 ]).then((data) => {
//                     console.log(data.man_id);
                    
//                 })
//         });   
//     });
// }





module.exports = {
    updateRole,
    // selectManager,
}