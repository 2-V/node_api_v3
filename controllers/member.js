var db = require("../core/db");
var httpMsgs = require("../core/httpMsgs");
var util = require("util");

exports.getList = function (req, resp) {
	db.executeSql("SELECT TOP(10) First_Name, Last_Name, Email FROM Main", function(data, err) {
		if(err){
			httpMsgs.show500(req, resp, err);
		} else {
			httpMsgs.sendJson(req, resp, data);
		}
	});
};

exports.get = function (req, resp, memId) {
	db.executeSql("SELECT TOP(10) First_Name, Last_Name, Email FROM Main WHERE [Member Id] = " + memId, function(data, err) {
		if(err){
			httpMsgs.show500(req, resp, err);
		} else {
			httpMsgs.sendJson(req, resp, data);
		}
	});
};

exports.add = function (req, resp, reqBody) {
	try {
		if(!reqBody) throw new Error("Input not valid");
		var data = JSON.parse(reqBody);
		if (data) {
			var sql = "INSERT INTO Main (First_Name, Last_Name, email) VALUES ";
			sql +=
		}
		else {
			throw new Error("Input not valid");
		}
	}
	catch (ex) {
		httpMsgs.show500(req, resp, ex);
	}
};

exports.update = function (req, resp, reqBody) {

};

exports.delete = function (req, resp, reqBody) {

};