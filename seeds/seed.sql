insert into department (name) values ("Exective");
insert into department (name) values ("Sales");
insert into department (name) values ("Accounting");
insert into department (name) values ("Human Resources");

insert into role (title, salary, dept_id) values ("Regional Manager", 40000, 1);
insert into role (title, salary, dept_id) values ("Receptionist", 20000, 1);
insert into role (title, salary, dept_id) values ("Lead Sales", 52000, 2);
insert into role (title, salary, dept_id) values ("Paper Salesman", 50000, 2);
insert into role (title, salary, dept_id) values ("Accounts Manager", 40000, 3);
insert into role (title, salary, dept_id) values ("Accountant", 36000, 3);
insert into role (title, salary, dept_id) values ("HR Manager", 36000, 4);
insert into role (title, salary, dept_id) values ("Customer Service", 30000, 4);

insert into employee (first_name, last_name, role_id, manager_id) values ("Michael", "Scott", 1, null);
insert into employee (first_name, last_name, role_id, manager_id) values ("Pam", "Beesley", 2, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ("Jim", "Halpert", 3, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ("Dwight", "Schrute", 4, 3);
insert into employee (first_name, last_name, role_id, manager_id) values ("Stanley", "Hudson", 4, 3);
insert into employee (first_name, last_name, role_id, manager_id) values ("Angela", "Martin", 5, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ("Oscar", "Nunez", 6, 6);
insert into employee (first_name, last_name, role_id, manager_id) values ("Kevin", "Malone", 6, 6);
insert into employee (first_name, last_name, role_id, manager_id) values ("Toby", "Flenderson", 7, null);
insert into employee (first_name, last_name, role_id, manager_id) values ("Kelly", "Kapour", 8, 1);

insert into manager (first_name, last_name) values ("Michael", "Scott");
insert into manager (first_name, last_name) values ("Pam", "Beesley");
insert into manager (first_name, last_name) values ("Jim", "Halpert");
insert into manager (first_name, last_name) values ("Dwight", "Schrute");
insert into manager (first_name, last_name) values ("Stanley", "Hudson");
insert into manager (first_name, last_name) values ("Angela", "Martin");
insert into manager (first_name, last_name) values ("Oscar", "Nunez");
insert into manager (first_name, last_name) values ("Kevin", "Malone");
insert into manager (first_name, last_name) values ("Toby", "Flenderson");
insert into manager (first_name, last_name) values ("Kelly", "Kapour");

