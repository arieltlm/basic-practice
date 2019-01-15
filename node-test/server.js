var http = require('http');
var fs = require('fs'); //引入文件读取模块
const request = require('request');

var documentRoot = '/Users/tlm/Documents/web-front/test/keep-study/node-test/';
//需要访问的文件的存放目录（项目所在位置的文件夹路径）

var server = http.createServer(function (req, res) {

    var url = req.url;
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;


    fs.readFile(file, function (err, data) {
        /*
            一参为文件路径
            二参为回调函数
                回调函数的一参为读取错误返回的信息，返回空就没有错误
                二参为读取成功返回的文本内容
        */
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data); //将index.html显示在客户端
            res.end();

        }

    });



}).listen(8010);

const hostname = '127.0.0.1';
const port = 8011;

// 创建一个 API 代理服务
const apiServer = http.createServer((req, res) => {
    // const url = 'http://news-at.zhihu.com/api/4' + req.url;
    const url = 'http://localhost:8088' + req.url; // 代理express_demo2所起的服务
    const options = {
        url: url
    };

    function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            // 设置编码类型，否则中文会显示为乱码
            res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
            // 设置所有域允许跨域
            res.setHeader('Access-Control-Allow-Origin', '*');
            // 返回代理后的内容
            res.end(body);
        }
    }
    request.get(options, callback);
});
// 监听 8010 端口
apiServer.listen(port, hostname, () => {
    console.log(`接口代理运行在 http://${hostname}:${port}/`);
});

console.log('服务器开启成功');