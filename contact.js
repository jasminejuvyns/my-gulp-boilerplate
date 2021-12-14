"use strict"
function sendMail() {
	let link = "mailto:" + encodeURIComponent("jasmine_juvyns@hotmail.com;")
	+ encodeURIComponent(document.getElementById('email').value)
	+ "&subject=" + encodeURIComponent("Onderwerp van het bericht")
	+ "&body="
	+ "voornaam:"
	+ encodeURIComponent(document.getElementById('voornaam').value)
	+ encodeURIComponent("\r\n\n")
	+ "achternaam:"
	+ encodeURIComponent(document.getElementById('achternaam').value)
	+ encodeURIComponent("\r\n\n")
	+ "telefoonnummer:"
	+ encodeURIComponent(document.getElementById('telefoonnummer').value)
	+ encodeURIComponent("\r\n\n")
	+ "email:"
	+ encodeURIComponent(document.getElementById('email').value)
	+ encodeURIComponent("\r\n\n")
	+ "bericht:"
	+ encodeURIComponent(document.getElementById('bericht').value);
	window.location.href = link;
}