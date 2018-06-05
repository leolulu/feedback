var http = require('http')
var fs = require('fs')
var url = require('url')
var wwwDir = './public'

http
.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname 
    var theUrl = wwwDir + pathname

    console.log(theUrl)

    if (pathname === '/index') {
        fs.readFile('./public/html/index.html',function(err, data){
            res.end(data)
        })
    }
    else if (pathname === '/add') {
        fs.readFile('./public/html/add.html',function(err, data){
            res.end(data)
        })
    }
    else {
        fs.readFile(theUrl, function(err, data){
            if(err){
                return 
            }
            res.end(data)
        })        
    }

    
    
})
.listen(3000,function(){
    console.log('server on')
})