var http = require('http');		// http 모듈 
var fs = require('fs');         // filesystem 모듈

// http 서버 생성
http.createServer(function(req, res) {
    // 파일을 읽어 Response Message 생성
    var data = fs.readFileSync('./hello.html');
	// Response Header 설정
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // Response Message Write
	res.write(data);
	// Response Send
	res.end();
}).listen(8888, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log('Server is running on http://localhost:8888');
	}
});
