var http = require('http');		// http 모듈 
var fs = require('fs');         // filesystem 모듈

// http 서버 생성
http.createServer(function(req, res) {
	var data = '';
	if(req.method==='GET'){
		if(req.url==='/'){//처음부터 무조건 로그인해야 접속 가능한 페이지
			data = fs.readFileSync('./login.html');
			res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
			res.write(data);
			res.end();
		}
	}else if(req.method==='POST'){
		if(req.url==='/login'){
			console.log(req.method); //2
			req.on('data', function(_data){
				data = _data;	
				console.log(data);//4
			}).on('end',function(){
				res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
				res.write(data);
				res.end();
				console.log('Data End...');//5
			});
		}
	}
	console.log("request callback end...");//3

}).listen(8888, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log('Server is running on http://localhost:8888');
	}
});
