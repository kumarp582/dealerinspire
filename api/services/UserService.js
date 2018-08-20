const requestAgent = require("axios");
const userConstants = require('../constants/UserConstants');

let baseUrl = userConstants.BASE_URL;
const apiKey = userConstants.API_KEY;
let baseParams = {
	api_key: apiKey
}

/*
** Get All Users /users
*/
var getAllUsers = (cb) => {
	let options = {
		method: "GET",
		url: baseUrl,
		params: Object.assign(baseParams),
		responseType: "json"
	}
	requestAgent(options)
	.then(function (res) {
		cb(null, res.data.users);
	})
	.catch(function (err) {
		cb(err);
	});
}


/*
** Get Users by text search /users?q=text
*/
var getUsersBySearch = (searchText, cb) => {
	let options = {
		method: "GET",
		url: baseUrl,
		params: Object.assign(baseParams, { q: searchText }),
		responseType: "json"
	};
	requestAgent(options)
	.then(function (res) {
		cb(null, res.data.users);
	})
	.catch(function (err) {
		cb(err);
	});
}


/*
** Get User Details By @user_id /users?user_id=id
*/
var getUserDetailsByID = (userID, cb) => {
	let options = {
		method: "GET",
		url: baseUrl + "/" + userID,
		params: Object.assign(baseParams),
		responseType: "json"
	};
	requestAgent(options)
	.then(function (res) {
		cb(null, res.data.user);
	})
	.catch(function (err) {
		cb(err);
	});
}

exports.getAllUsers = getAllUsers;
exports.getUserDetailsByID = getUserDetailsByID;
exports.getUsersBySearch = getUsersBySearch;