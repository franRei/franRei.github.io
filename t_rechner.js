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
	})
})