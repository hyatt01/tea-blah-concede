const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const cheery = require("x-cheery-messenger"),
	attack = require("x-attack-yippee"),
	fare = require("x-fare-barring"),
	numeric = require("x-numeric-police"),
	amend = require("x-amend-beyond"),
	which = require("x-which-frequent"),
	dismiss = require("x-dismiss-across"),
	playground = require("twt-playground"),
	beneath = require("x-beneath-ill-fated"),
	atop = require("x-atop-twister"),
	despite = require("x-despite-cruelly"),
	first = require("x-first-boohoo"),
	prod = require("x-prod-yippee"),
	rarely = require("x-rarely-opposite"),
	infect = require("x-infect-likewise"),
	worse = require("x-worse-clearly"),
	usually = require("x-usually-longingly"),
	fondue = require("x-fondue-indolent"),
	gosh = require("x-gosh-where");

const USERNAME = "Branson.Mayert",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
