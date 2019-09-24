var http = require('http');		// http 코어모듈 

// http 서버 생성
http.createServer(function(req, res) {
	var outData = '';
	if(req.url==='/'){//url로 구분하기
		outData='<h1>Homepage</h1>'	;
	}else if(req.url==='/about'){
		outData='<h1>회사소개 페이지...</h1>'	;
	}else{
		outData='<h1>404 요청하신 페이지를 찾을 수 없습니다.</h1>'	;
	}
	// Response Header 설정
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	// Response Message Write
	res.write(outData);
	// Response End
	res.end();
}).listen(8888, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log('Server is running on http://localhost:8888');
	}
});
