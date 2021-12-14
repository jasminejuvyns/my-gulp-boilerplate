
    //----------------NIEUWSBRIEFFORMULIER----------------------------------------------//
"use strict"
    
let emailTxt;

function controleerVoorwaardenEmail() {
	let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
	if (regExp.test(emailTxt) == false) {
		document.getElementById("email_error").innerHTML = "Dit is niet correct!";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("email_error").innerHTML = "";
	}
}

function verstuur() {
    emailTxt = document.getElementById("email").value;

    if (emailTxt.length == 0) {
		document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenEmail();
	}
}





    //----------------NIEUWSBRIEFFORMULIER----------------------------------------------//