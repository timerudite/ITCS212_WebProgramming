/* Express with Routing */
const path = require('path');
const express = require('express');
const app = express();

// #1:Root: When path is "/", repond with the plain text as “Hello World! in plain text” (status:200)
app.get('/',(req, res) => {
    //console.log("Hello World! in plain text");
    res.status(200).send("Hello World! in plain text");
});

// #2:TH Page: When path is "/th", respond with greeting_th.html (status:200)
app.get('/th',(req, res) => {
        res.status(200).sendFile(path.join(__dirname + '/greeting_th.html'));
        //__dirname : resolve to your directory name.
});

// #3:CN Page: When path is "/cn", respond with greeting_cn.html (status:200)
app.get('/cn',(req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/greeting_cn.html'));
    //__dirname : resolve to your directory name.
});


// #4:Otherwise, respond the error in the plain text as “Where are you going”? (status:404)
app.use((req, res, next) => {
//console.log("404: Invalid accessed");
res.status(404).send("Where are you going ?");

})
app.listen(3030);
console.log('Running at Port 3030');