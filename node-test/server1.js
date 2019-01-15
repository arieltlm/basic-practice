var http = require('http');
// var request = require('request');
var fs = require('fs'); //引入文件读取模块

const apiServer = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-type' : 'text/html'});
    // res.write('1414124');
    // res.end('<p>Hello World</p>')
    fs.readFile('data1.js', function readData(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
}).listen(8010);