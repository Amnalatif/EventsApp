const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const api=require("./server/routes/api");

const port = 3000;

const app=express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api',api);

app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'dist/index'));
});

app.post('/upload',(req,res)=>{
    res.send('saad');
})
app.listen(port,function(){
    console.log("server runing on localhost"+port);
});
