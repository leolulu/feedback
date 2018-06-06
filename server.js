var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router.js')
var app = express();

app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)

app.listen(3000,function(){
	console.log('server ON')
})