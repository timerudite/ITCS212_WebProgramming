/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");

/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

/* --- Your code goes here --- */
router.use(bp.json());
router.use(bp.urlencoded({extended: true}));

router.get("/", function(req,res){
    console.log("Accessed Contact Us");
    res.sendFile(path.join(__dirname+'/contact_us.html'));
});

router.post("/submit-form", function(req,res){
    //console.log(`${req.method}`);
    //console.log(req.query); //JSON
    const Name = req.body.name;
    const Email = req.body.email;
    const Mes = req.body.messages;

    console.log("Form submitted by " + Name);
    res.send(`<div style="font-family: sans-serif"><h1>Greeting <span style="background-color: #c49bf2">${Name}</span></h1>
                <p>The following message has been received: <span style="background-color: #25cbf5">${Mes}</span>
                We will contact you via <span style="background-color: #adf576">${Email}</span>.</p></div>`);
});

/* --- ------------------- --- */

/* Server listening */
app.listen(3030, function () {
    console.log("Server listening at Port 3030");
});