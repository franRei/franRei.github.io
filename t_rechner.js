"use strict"
document.addEventListener("DOMContentLoaded", function () {
	//gets buttons from html
	var form = document.getElementById("calc"),
	out = document.querySelector("#calc output"),
	overwrite = true;

	//unterdrückt submit und page reload
	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		ev.stopPropagation();
		return false;

		//another comment
		//just another
	})
})

// button functionalities
document.querySelectorAll("#calc button").forEach(function (b) { 
	var c = b.textContent;

	switch (c) {

		case "9":
		case "8":
		case "7":
		case "6":
		case "5":
		case "4":
		case "3":
		case "2":
		case "1":
		case "0":
		case ".":
			b.addEventListener("click", function () {
				input(c);
			});
		break;

		case "+":
		case "-":
		case "×":
		case "÷":
			b.addEventListener("click", function () {
				operator(c);
			});
		break;

		case "√":
		case "x²":
		case "ln":
			b.addEventListener("click", function () {
				extra(c);
			});
		break;

		case "=":
			b.addEventListener("click", result);
		break;

		case "C":
			b.addEventListener("click", clear);
		break;
	}

document.addEventListener("keypress", function (ev) {
	//decimal point, ASCII von Komma und Punkt"x²"
	if ([45, 46].includes(ev.charCode)) {
		//, .
		input(".");
	}

	//digits
	if ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57].includes(ev.charCode)) {
		//ASCII für 0-9
		input(ev.charCode - 48);
	}
	//operator
	if ([42, 43, 45, 47].includes(ev.charCode)) {
		//ASCII für operator *+-/
		operator(
			["x", "+", "-", "÷"][
				[42, 43, 45, 47].indexOf(ev.charCode)
			]
		);
	}

	//result
	if (ev.charCode == 61) {
		//ASCII für =
		result();
	}

	//clear
	if ([67, 99].includes(ev.charCode)) {
		//C, c
		clear();
	}

	//log
	if ([76, 108].includes(ev.charCode)) {
		//L, l
		extra("ln");
	}

	//root
	if ([82, 114].includes(ev.charCode)) {
		//R, r
		extra("√");
	}

	//square
	if ([83, 115].includes(ev.charCode)) {
		//S, s
		extra("x²");
	}

	//additional clear and results
	switch (ev.code) {
		case "Backspace":
		case "Delete":
			clear();
		break;

		case "Enter":
		case "NumpadEnter":
			result();
		break;
	}

});

function extra (type) {
	switch (type) {
		case "√":
			out.textContent = Math.sqrt(result(true));
		break;

		case "x²":
			out.textContent = Math.pow(result(true), 2);
		break;

		case "ln":
			out.textContent = Math.log(result(true));
		break;
	}
	overwrite = true;
}

function result (noDisplay) {
	var input = out.textContent,
		r = 0

	input = input.replace(/x/g, "*").replace(/÷/g, "/");

	input = input.replace(/[^0-9. +\-*\/]/g, "");

	try {
		r = eval(input);
	} catch (e) {
		r = 0;
	}

	if (noDisplay !== true) {
		out.textContent = r;
		overwrite = true;
	}
	return r;
}