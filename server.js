var http = require("http");
var fs = require("fs");
var qs = require('querystring');
var exec = require('child_process').exec;

exec('node ./Server/createData.js', function(error, stdout, stderr) {
  if(error){
    console.error(error.message);   
  }
    console.log(stdout);
});

http.createServer(function(req, res) {
    console.log("recieving request");
    console.log(`method = ${req.method}`);
    console.log(`url = ${req.url}\n`);

    var queryData = "";

	if (req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/html"});
	    fs.createReadStream("./Server/public/index.html", "UTF-8").pipe(res);
	} else if (req.method === "POST") {

		req.on("data", function(chunk) {
			queryData += chunk;
            
            if (queryData.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });

		req.on("end", function() {
            console.log("Query data from POST request: " + queryData);
            var post = qs.parse(queryData);
            console.log(post.phonenumber);
            if(post.phonenumber === "1234" ){
                console.log("success!");
                res.writeHead(200, {"Content-Type": "text/json"});
                fs.createReadStream("./Server/public/Data/data.json", "UTF-8").pipe(res);
            
            } else {
                console.log("failure!");
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.end("File Not Found");
            }

		});


	}

	

}).listen(8080);

console.log("server listening on port 8080\n");
console.log('Creating data');
