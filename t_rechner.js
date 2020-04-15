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