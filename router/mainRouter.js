const express = require("express");
const router = express.Router();
const db = require('../model/db');

// 데이터를 전달할 때 : send()
// 그림파일을 전달할 때 : render()


// 기본 베이스 정리
/*
################ get API ###################
router.get("/", function(req, res){
    res.send("Hellow world");
})

router.get("/about", function(req, res){
    res.send("about page");
})
############################################


################ post API ###################
router.post("/postapi", function(req, res){
    var body = req.body;
    console.log(body);

    res.send('POST API')
})
#############################################


// get query : ex) http://localhost:3000/me-in-sk?page=2&name=minseok
router.get("/", function(req, res){
    var query = req.query;
    console.log(query);

    var page = req.query.page;
    console.log(page);

    res.send({'key': "value"});
})
*/


// CRUD 정리
/*
router.get("/data/create", function(req, res){
    var user_id = parseInt(Math.random() * 10000)
    db.users.create({user_id: user_id}).then(function(result){
        res.send({success: 200, data: result})
    })
})

router.get("/data/read", function(req, res){
    db.users.findAll().then(function(result){
        res.send({success: 200, data: result})
    })
})

router.post("/data/update", function(req, res){
    var target_id = req.body.target_id;
    db.users.update({user_id: 9999}, {where: {user_id: target_id}}).then(function(result){
        res.send({success: 200, data: result})
    })
})

router.post("/data/delete", function(req, res){
    var target_id = req.body.target_id;
    db.users.destroy({where: {user_id: target_id}}).then(function(result){
        res.send({success: 200, data: result})
    })
})
*/


router.get("/", function(req, res){
    res.render('index.ejs', {title: "main page"});
})





module.exports = router