var http = require("http");
var member = require("../controllers/member");
var settings = require("../settings");
var httpMsgs = require ("../core/httpMsgs")

http.createServer(function (req, resp) {
	switch (req.method) {
		case "GET":
			if (req.url === "/") {
				httpMsgs.showHome(req, resp);
			}
			else if (req.url === "/members") {
				member.getList(req, resp);
			}
			break;
		case "POST":
			break;
		case "PUT":
			break;
		case "DELETE":
			break;
		default:
			httpMsgs.show405(req, resp);
			break;
	}
}).listen(settings.webPort, function () {
	console.log("Started listening at: " + settings.webPort);
});