var calc = require('./calc.js')

var http = require('http')

http.createServer(function(req, res)
{

res.writeHead(200,{ContentType:'text/html'})
var x = 23
var y = 45
res.write("hello ")
//console.log(typeof f )
console.log(calc.add(x,y));
// res.write(req.url)
res.end()

}
).listen(6060)