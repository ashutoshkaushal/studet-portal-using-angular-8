const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // to support JSON-encoded bodies


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "user_db"
});


con.connect(function(err) {
    if (err)
        throw err;
    console.log("Connected encode");

    /*if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO users (name) VALUES ('Company Inc')";
	  con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	  });*/

});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//chcek  User////////////////////////////
router.post('/userdetail', function(req, res) {

    //req.body.email = 't@gmail.com';
    var sql = "select * from user where user_mail='" + req.body.email + "' ";
    con.query(sql, function(err, result) {
        if (err) {
            sendError(err, res);
        }
        response = result;

        res.json(response);
    });
});


router.post('/addquestion',  function(req, res) {


    console.log(req.body);

    console.log('=default data type=====hhhhh'); 
    
    if(!!req.body.question){

        var sql = "INSERT INTO question_data (`question_text`, `category_name`, `question_answer` , `question_option_one` , `question_option_two` , `question_option_three` ) VALUES ('" + req.body.question + "' , '" + req.body.category_name + "','" + req.body.answer + "','" + req.body.option_one + "','" + req.body.option_two + "','" + req.body.option_three + "')";
        con.query(sql, function(err, result) {
            if (err)
                throw err;

            console.log("1 record inserted");
        });


    }else{


        console.log("Failure");

    }




});










module.exports = router;