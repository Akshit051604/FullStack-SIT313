const express = require('express')
const app = express()
const bodyparser = require('body-parser')


app.use('/',bodyparser.urlencoded({extended:true}))


app.listen(8080, function(request, response)
{
 console.log('The port is listening on 8080')
})

app.get('/', function(request, response)
{
 response.sendFile(__dirname + '/index.html')
 
})

app.post('/', function(request,response)
{
 var sum = Number(request.body.NUM1) + Number(request.body.NUM2);

 response.send('The Sum is ' + sum)
})

