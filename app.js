
const express = require('express');
const app = express();
const obj = require("./util/planetData");
// const getPlanetData = obj.getPlanetData;
// const getExtraDetails = obj.getExtraDetails;

const path = require('path');
const { error } = require('console');
const pubdir = path.join(__dirname, "/public");

app.set("view engine", "ejs");
app.use(express.static(pubdir));


app.use(express.json());
app.use(express.urlencoded({ extend: true }));

let planetName;

app.get("/", (req, res) => {
    planetName="mercury";
    obj.getPlanetData("MERCURY", (err, data) => {
        if (err) {
            return res.send(err);
        }
        else {

            console.log({ data });
            res.render("planet", { data });
        }
    })
})

app.get("/planet", (req, res) => {
    planetName=req.query.planetName;
    if (!planetName) {
        return res.send("Planet name is missing");
    }
    obj.getPlanetData(planetName, (err, data) => {
        if (err) {
            return res.send(err);
        }
        else {
            res.render("planet", { data });
            console.log(data);
        }
    })
})


app.get("/overview",(req,res)=>{
    let type="overview";
    obj.getExtraDetails(planetName,type,(error,data)=>{
        if(error)
        {
            return res.send(error);
        }
        else
        {
            res.render("planet",{data});
        }
    })
})


app.get("/structure",(req,res)=>{
    let type="structure";
    obj.getExtraDetails(planetName,type,(error,data)=>{
        if(error)
        {
            return res.send(error);
        }
        else
        {
            res.render("planet",{data});
        }
    })
})


app.get("/geology",(req,res)=>{
    let type="geology";
    obj.getExtraDetails(planetName,type,(error,data)=>{
        if(error)
        {
            return res.send(error);
        }
        else
        {
            res.render("planet",{data});
        }
    })
})


app.get("/extra", (req, res) => {
    // console.log(req.query.planetName + ", "+req.query.type);
    if (!req.query.planetName && !req.query.type) {
        return res.send("Planet name or type is missing");
    }
    obj.getExtraDetails(req.query.planetName, req.query.type, (error, data) => {
        console.log(req.query.type+" hello");
        if (error) {
            return res.send(error);
        }
        else {
            console.log("hello:" + { data });
            res.render("planet", { data });
        }
    })
})

app.listen(3501, () => {
    console.log("server is running on port 3500");
})