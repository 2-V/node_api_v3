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
			else {
				var memIdPatt = "[0-9]+";
				var patt = new RegExp("/members/" + memIdPatt);
				if (patt.test(req.url)) {
					patt = new RegExp(memIdPatt);
					var memId = patt.exec(req.url);
					member.get(req, resp, memId);
				} else {
					httpMsgs.show404(req, resp);
				}
			}
			break;
		case "POST":
			if (req.url === "/members") {
				var reqBody = '';
				req.on("data", function (data) { 
					reqBody += data;
					if (reqBody.length > 1e7) {
						httpMsgs.show413(req, resp);
					}
				});

				req.on("end", function () { 
					emp.add(req, resp, reqBody);
				});
			} else {
				httpMsgs.show404(req, resp);
			}
			break;
		case "PUT":
			if (req.url === "/members") {
				var reqBody = '';
				req.on("data", function (data) { 
					reqBody += data;
					if (reqBody.length > 1e7) {
						httpMsgs.show413(req, resp);
					}
				});

				req.on("end", function () { 
					emp.update(req, resp, reqBody);
				});
			} else {
				httpMsgs.show404(req, resp);
			}
			break;
		case "DELETE":
			if (req.url === "/members") {
				var reqBody = '';
				req.on("data", function (data) { 
					reqBody += data;
					if (reqBody.length > 1e7) {
						httpMsgs.show413(req, resp);
					}
				});

				req.on("end", function () { 
					emp.delete(req, resp, reqBody);
				});
			} else {
				httpMsgs.show404(req, resp);
			}
			break;
		default:
			httpMsgs.show405(req, resp);
			break;
	}
}).listen(settings.webPort, function () {
	console.log("Started listening at: " + settings.webPort);
});