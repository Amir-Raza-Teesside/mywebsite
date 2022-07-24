const express = require('express')
var path = require('path')

app = express()
port = process.env.port || 3000
app.listen(port);


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/Images', express.static(__dirname + 'public/Images'))

app.get('/', (req,res)=>
{
  


   res.sendFile('./views/index.html',{root: __dirname});
          //res.send("adjkdn")
    

});
app.get('/project', (req,res)=>
{
  


   res.sendFile('./views/project.html',{root: __dirname});
          //res.send("adjkdn")
          
    

});

