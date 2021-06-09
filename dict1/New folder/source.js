const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

// connect to MySql
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('MySql connected');
})

const app = express();

//create database
app.get('/createdb',(req,res) => {
    let sql = 'CREATE DATABASE nodemySql';
    db.query(sql, (err) => {
        if(err) {
            throw err;
        }
        res.send('Database created');
    });
});

//Create a table
app.get('/createemployee', (req, res) => {
    let sql ='CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('employee table created')
    })
});

//Insert value Into table

app.get('/employee1/', (req, res) => {
    let post = (name:'jake smith', designation:'excutive officer')
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, err => {
        if(err){
            throw err
        }
        res.send('employee added')
    })
})

//select employee
app.get('/getemployee', (req, res) => {
    let sql = 'SELECT * FROM employee'
    if query = db.query(sql,(err, results)=>{
        if(err){
            throw err
        }
        console.log(results)
        res.send("employee details fetched")
    })
})

//Employee updated
app.get('/updateemployee/:id',(req,res)=>{
    let newName = 'updated name'
    let sql = 'UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}'
    let query = db.query(sql, err =>{
        if(err){
            throw err
        }
        res.send("employee updated")
    })
})

//delete employee
app.get('/deleteemployee/:id',(req,res)=>{
    let sql = 'DELETE FROM employee WHERE id = ${req.params.id}'
    let query = db.query(sql, err => {
        if(err){
            throw err
        }
        res.send("employee deleted")
    })
})
app.listen('3000', () => {
    console.log("Server started on port 3000 ")
});