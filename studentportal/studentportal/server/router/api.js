const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const multer = require('multer');
var app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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
    console.log("Connected");

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

const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({ storage: storage });


router.post('/upload', upload.single('file'), function(req, res) {

    console.log(req.body);

    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {

        //var raw = new Buffer(fs.readFileSync(req.file.path)).toString("base64");
        var raw = Buffer.from(fs.readFileSync(req.file.path)).toString("base64");

        var sql = "INSERT INTO user (`user_name`, `user_mail`, `user_password` , `user_college` , `user_city` , `user_address` , `user_photo` ) VALUES ('" + req.body.name + "' , '" + req.body.email + "',123,'" + req.body.collegename + "','" + req.body.city + "','" + req.body.address + "','" + raw + "')";
        con.query(sql, function(err, result) {

            if (err) throw err;

            return res.send({
                success: true
            })


        });



    }




});



//register User////////////////////////////
router.post('/register', function(req, res) {
    var sql = "INSERT INTO dealer (`name`, `house_type`, `price_range` , `phone_number` , `area` , `remarks` ) VALUES ('" + req.body.name + "' , '" + req.body.type + "','" + req.body.pricerange + "','" + req.body.phoneno + "','" + req.body.area + "','" + req.body.remarks + "')";
    con.query(sql, function(err, result) {
        if (err)
            throw err;

        console.log("1 record inserted");
    });
});
//////


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

//chcek  User////////////////////////////
router.post('/getquestionbycategory', function(req, res) {

    //req.body.email = 't@gmail.com';
    var sql = "select * from question_data where category_name='" + req.body.category_name + "' ";
    con.query(sql, function(err, result) {
        if (err) {
            sendError(err, res);
        }
        response = result;

        res.json(response);
    });
});


router.post('/addquestion', upload.single('file') , function(req, res) {

    console.log(req.body);
    console.log('=multipart data type=====hhhhh');
    if(!!req.body.question){

        var sql = "INSERT INTO question_data (`question_text`, `category_name`, `question_answer` , `question_option_one` , `question_option_two` , `question_option_three` ) VALUES ('" + req.body.question + "' , '" + req.body.category_name + "','" + req.body.answer + "','" + req.body.option_one + "','" + req.body.option_two + "','" + req.body.option_three + "')";
        con.query(sql, function(err, result) {
            if (err)
                throw err;

            console.log("1 record inserted");

            res.json(result);
        });

    }else{

        res.json('failure');
        console.log("Failure");

    }




});



//chcek  User////////////////////////////
router.post('/studentlist', function(req, res) {

    var sql = "select user_id , user_name , user_mail , user_password , user_college, user_city , user_address from user ";
    con.query(sql, function(err, result) {
        if (err) {
            sendError(err, res);
        }
        response = result;

        res.json(response);
    });

});



////////////////////////////////

//Insert User////////////////////////////
router.post('/insertdata', function(req, res) {
    var sql = "INSERT INTO dealer (`name`, `house_type`, `price_range` , `phone_number` , `area` , `remarks` ) VALUES ('" + req.body.name + "' , '" + req.body.type + "','" + req.body.pricerange + "','" + req.body.phoneno + "','" + req.body.area + "','" + req.body.remarks + "')";
    con.query(sql, function(err, result) {
        if (err)
            throw err;

        console.log("1 record inserted");
    });
});
////////////////////////////////

//delete user start

router.post('/deletedata', function(req, res) {

    var sql = "Delete from users where User_Id = '" + req.body.User_Id + "'";
    con.query(sql, function(err, result) {
        if (err)
            throw err;
        console.log("1 record deleted");

    });
});

//delete user end

//=====================Update Question
router.post('/updatequestion', function(req, res) {

    var sql = "Update question_data set question_text  = '" + req.body.question + "' , category_name  = '" + req.body.category_name + "' , question_answer  = '" + req.body.question_answer + "' , question_option_one  = '" + req.body.question_option_one + "' , question_option_two  = '" + req.body.question_option_two + "' , question_option_three  = '" + req.body.question_option_three + "' , is_active  = '" + req.body.is_active + "' where question_id = '" + req.body.question_id + "'";
    con.query(sql, function(err, result) {
        if (err)
            throw err;
        console.log("1 record updated");

    });
});



//=====================Update Question
router.post('/deletequestion', function(req, res) {

    var sql = "Update question_data set is_active  = '" + req.body.is_active + "' where question_id = '" + req.body.question_id + "'";
    con.query(sql, function(err, result) {
        if (err) {
            sendError(err, res);
        }
        response = result;

        res.json(response);

    });
});



//=====================Get  Question Data
router.post('/getquestion', function(req, res) {

    var sql = "select * from question_data where is_active='YES' ";
     con.query(sql, function(err, result) {
        if (err) {
            sendError(err, res);
        }
        response = result;

        res.json(response);
    });
});





// Get users//////////////////////////
router.get('/users', (req, res) => {

    var sql = "select * from users";
    con.query(sql, function(err, rows) {
        if (err) {
            sendError(err, res);
        }
        response.data = rows;
        res.json(response);
    })
});
///////////////////////////////////////


module.exports = router;