var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('heyyy')
});

server.listen(3000, '127.0.0.1');
console.log('Server');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function ajax(url, callback, errorr){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(response){
            resolve(xhr.response);
        }
        xhr.onerror = function(err){
            reject('response error');
        }
        
        xhr.send();
    })
}
ajax('http://dummy.restapiexample.com/api/v1/employee').then(function(data){
    console.log(data);
})