const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mysql = require("./src/model/mysql.js");

const app = express();
app.use('/public',express.static("public"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const port = 8000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get("/backend",(req,res)=>{
    res.sendFile(__dirname+'/backend.html');
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/contact.html');
})

app.get("/frontend",(req,res)=>{
    res.sendFile(__dirname+'/frontend.html');
})

app.get("/marketing",(req,res)=>{
    res.sendFile(__dirname+'/marketing.html');
})

app.get("/uxui",(req,res)=>{
    res.sendFile(__dirname+'/uxui.html');
})

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
})

app.post("/ajouter_avi",(req,res)=>{
    var firstName = req.body._firstName;
    var lastName = req.body._lastName;
    var avis = req.body._avis;
    var note = req.body._note;
    var formation = req.body._formation;

    var sql = "INSERT INTO utilisateur(firstName,lastName,avis,note,formation) VALUES ?";
    var valeur = [[firstName,lastName,avis,note,formation]];

    mysql.query(sql,[valeur],(err,result)=>{
        if(err) throw err;
        res.json(result.insertId)
    });

})


app.post("/backend",(req,res)=>{

    var sql = "SELECT * FROM utilisateur WHERE formation = 'Backend' ORDER BY id DESC";
    mysql.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.json(result);
    });
})


app.post("/frontend",(req,res)=>{

    var sql = "SELECT * FROM utilisateur WHERE formation = 'Frontend' ORDER BY id DESC";
    mysql.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.json(result);
    });
})

app.post("/marketing",(req,res)=>{

    var sql = "SELECT * FROM utilisateur WHERE formation = 'Marketing' ORDER BY id DESC";
    mysql.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.json(result);
    });
})

app.post("/uxui",(req,res)=>{

    var sql = "SELECT * FROM utilisateur WHERE formation = 'UX-UI' ORDER BY id DESC";
    mysql.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.json(result);
    });
})

app.post("/index",(req,res)=>{

    var sql = "SELECT firstName,lastName,avis,note as m_note,formation FROM utilisateur WHERE note = 5";
    mysql.query(sql,(err,result,fields)=>{
        if(err) throw err;
        res.json(result);
    });
})

app.listen(port,()=>console.log(`app utilise le port : ${port}`));