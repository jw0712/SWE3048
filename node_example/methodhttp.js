var http = require('http');		// http 모듈 
var fs = require('fs');         // filesystem 모듈

// http 서버 생성
http.createServer(function(req, res) {
	var data = '';
	if(req.method==='GET'){
		if(req.url==='/'){//처음부터 무조건 로그인해야 접속 가능한 페이지
			data = fs.readFileSync('./login.html');
		}
	}else if(req.method==='POST'){

	}
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
