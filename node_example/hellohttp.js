var http = require('http');		// http 코어모듈 

// http 서버 생성
http.createServer(function(req, res) {
	// Response Header 설정
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	// Response Message Write
	res.write('<h1>Hello Node</h1>');
	// Response End
	res.end();
}).listen(8888, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log('Server is running on http://localhost:8888');
	}
});
