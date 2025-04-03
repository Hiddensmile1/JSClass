//alert("working javascript ");
console.log(document);
console.dir(document.location.href);
console.dir(document);

console.log("working on the console");

let userName = "seniorDev"; //global
console.log(userName);

function greet() {
	let greetMe = "hello how are you?"; //local
	console.log(greetMe);
}

greet();

function san() {
	console.log("hi guys welcome to class");
}

san();

let user2 = "joseph ";
let user3 = "sam";

console.log(user2, user3);
console.log(user2 + user3); //concatenation
console.log("hello" + " " + user3 + " " + user2);
console.log("hello", user3, user2);

let num2 = 4;
let num3 = 5;

console.log(num2 + num3);

function greetUser(myName) {
	console.log("hi", myName, "hope you are doing good?");
}

greetUser("mpumi");

function hiGreet() {
	// console.log("mpumi says hi");
	alert("hi you just click me");
}

function canyou() {
	console.log("can you click me");
}

let timeUp = "your time is up";
console.log(timeUp);

let timedown = `right now ${timeUp} `;
console.log(timedown);

function overMe() {
	// alert("heu you just hover me");
	document.body.style.backgroundColor = "yellow";
}

let isTrue = false;

// conditional statement
// if else conditional statement
if (isTrue) {
	console.log("true timeeeeeeeee");
}

if (true) {
	console.log("condition me");
}

if (false) {
	console.log("zig zay");
}

if (false) {
	function jojo(a, b, awe) {
		console.log("hi", a);
		console.log(a, b, awe);
	}
	jojo(45, "giddy", true);
}

let isLogin = true;

if (isLogin) {
	console.log("welcome back");
} else {
	console.log("please login in");
}

// switch case conditional statement

let day = "tuesday";

switch (day) {
	case "monday":
		console.log("today is monday");
		break;
	case "divvv":
		console.log("hi today is not monday");
		break;
	case "tuesday":
		console.log("today is tuesday");
		break;
	default:
		console.log("opps notting to show ");
}

// > sysmbol is part of the comprison operator
console.log(3 > 7);
console.log(3 < 7);
console.log(7 == 7);
console.log(7 === 7);
console.log(5 === 8);
console.log(5 === "5");
console.log(4 != 4);
console.log("day" === "day");
console.log(25 >= 25);
console.log(25 <= 25);

if (3 > 12) {
	console.log("opps hik");
}

// Questions
// let score = 23;
// 0 - 30  == f
// 30 - 40 == E
// 40 - 60 == C
// 60 - 70 == B
// 70 - 100  === A

let score = prompt("whats your score?");

if (score >= 0 && score <= 30) {
	alert("you got F");
}
else if (
	score >= 30 && score <= 40) {
	alert("you got E");
}
else if (
	score >= 40 && score <= 60) {
	alert("you got C");
} else if (
	score >= 60 && score <= 70) {
	alert("you got B");
} else if (
	score >= 70 && score <= 100) {
	alert("you got A");
} else {
	alert("please enter a valid score");
}
