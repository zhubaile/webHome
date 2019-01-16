var express = require('express');
var app = express();
 
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile(__dirname + "/" + "index.html" );
})
app.get('/dyprofile', function (req, res) {
    res.sendFile(__dirname + "/pages/" + "dyprofile.html" );
})
app.get('/product', function (req, res) {
    res.sendFile(__dirname + "/pages/" + "product.html" );
})
app.get('/services', function (req, res) {
    res.sendFile(__dirname + "/pages/" + "services.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})