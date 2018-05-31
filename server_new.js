var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.get('/tpl_add',function(req,res){
app.get('/add',function(req,res){
	res.render('tpl_add.html')
})

app.post('/tpl_show',function(req,res){
	console.log(  req.body )
	console.log(  req.body.original_text[1] )

	console.log(Date() + ' 进行了一次转换');
	res.render('tpl_show.html', req.body )
})

app.listen(3000,function(){
	console.log('server ON')
})