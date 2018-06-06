var express = require('express')
var router = express.Router()

router.get('',function(req,res){
	res.send('Welcome!');
})

router.get('/add',function(req,res){
	res.render('tpl_add.html')
})

router.post('/tpl_show',function(req,res){
	console.log(  req.body )
	console.log(  req.body.original_text[1] )

	console.log(Date() + ' 进行了一次转换');
	res.render('tpl_show.html', req.body )
})

router.get('/mongo',function(req,res){
	res.render('mongo_add.html')
})

router.post('/mongo',function(req,res){
	console.log(req.body.common_text);
	res.render('mongo_add.html')
})


module.exports = router;