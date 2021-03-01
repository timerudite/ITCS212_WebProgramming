/* Import modules here: express, dotenv, router */
/* Config dotenv and router */

const express = require('express');
const app = express();
//const path = require('path');
const dotenv = require("dotenv");
const router = express.Router();
app.use('/', router);


/* Connection to MySQL */
const mysql = require('mysql2');
require('dotenv').config();
var connection = mysql.createConnection({
    host        : process.env.MYSQL_HOST,
    user        : process.env.MYSQL_USER,
    password    : process.env.MYSQL_PASSWORD,
    database    : process.env.MYSQL_DATABASE
});

/* Connect to DB */
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected DB: "+process.env.MYSQL_DATABASE);
});



router.get('/cis-students-list', function (req, res) {
    console.log("Retrieved all CIS students in tinycollege (List)...")
    let sql = "SELECT stu_fname, stu_lname, stu_gpa FROM student WHERE dept_code='CIS' ORDER BY stu_fname ASC";
    connection.query(sql, function (err, results) {
    if (err) throw err;
    console.log(results.length + " CIS students returned");
    let output = "<h2>CIS Students</h2><ul>";
    results.forEach(student => {
    output += "<li>" + student.stu_fname;
    output += "&nbsp;" + student.stu_lname;
    output += "&nbsp;" + "(GPA:" + student.stu_gpa +")";
    });
    output += "</ul>";
    res.send(output);
    });
});

/* Run Server */
app.listen(process.env.PORT, function() {
    console.log("Server listening at Port 3030");
});