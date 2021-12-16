"use strict";
//hoofdscript
let selectieTxt;
let geselecteerdeKeuze;
let aantalTxt;
let datumTxt;
let uurTxt;
let telefoonnummerTxt;
let voornaamTxt;
let achternaamTxt;
let emailTxt;
let berichtTxt;
let annulatieGeaccepteerd;
let voorwaardenGeaccepteerd;
let allesCorrectIngevuld=true;

//-------FUNCTIE  AANTAL PERSONEN --------------------------------------------------------
function controleerVoorwaardenAantal(){
	if( aantalTxt > 5){
		document.getElementById("aantal_error").innerHTML="Max 5 personen";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("aantal_error").innerHTML="";
	}
}

//-------FUNCTIE  UUR --------------------------------------------------------
function controleerVoorwaardenUur(){
	if( uurTxt.length == 0){
		document.getElementById("uur_error").innerHTML="Gelieve een uur aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("uur_error").innerHTML="";
	}
}

//-------FUNCTIE  VOORNAAM --------------------------------------------------------
function controleerVoorwaardenVoornaam() {
	if (voornaamTxt.length < 2) {
		document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("voornaam_error").innerHTML = "";
	}
}
//-------FUNCTIE  ACHTERNAAM ----------------------------------------------------------
function controleerVoorwaardenAchternaam() {
	if (achternaamTxt.length < 2) {
		document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("achternaam_error").innerHTML = "";
	}
}

//-------FUNCTIE  EMAIL----------------------------------------------------------
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

//-------FUNCTIE  TELEFOONNUMMER --------------------------------------------------------
function controleerVoorwaardenTelefoonnummer() {
    let regExp =/^\+[0-9]{2}\s?[0]?(\d{3})\s?\d{2}\s?\d{2}\s?\d{2}\s?$/;
    if (regExp.test(telefoonnummerTxt) == false) {
        document.getElementById("telefoonnummer_error").innerHTML = "Dit is niet correct. Voorbeeld: +32 467 89 78 67";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("telefoonnummer_error").innerHTML = "";
    }
}

//-------FUNCTIE  BERICHT --------------------------------------------------------
function controleerVoorwaardenBericht() {
	if (berichtTxt.length > 10) {
		document.getElementById("bericht_error").innerHTML = "Je bericht is te lang, gebruik max 10 tekens";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("bericht_error").innerHTML = "";
	}
}

//-------FUNCTIE  AANTAL PERSONEN --------------------------------------------------------
function controleerVoorwaardenAantal() {
	if (aantalTxt > 5) {
		document.getElementById("aantal_error").innerHTML = "Max 5 personen";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("aantal_error").innerHTML = "";
	}
}


//functie verstuur
function verstuur() {
	geselecteerdeKeuze = document.getElementById("selectie").selectedIndex;
	selectieTxt = document.getElementById("selectie").value;
	voornaamTxt = document.getElementById("voornaam").value;
	achternaamTxt = document.getElementById("achternaam").value;
	emailTxt = document.getElementById("email").value;
	uurTxt = document.getElementById("uur").value;
	berichtTxt = document.getElementById("bericht").value;
	aantalTxt = document.getElementById("aantal").value;
	datumTxt = document.getElementById("datum").value;
	telefoonnummerTxt = document.getElementById('telefoonnummer').value;
	annulatieGeaccepteerd = document.getElementById('AnnulatieVoorwaardenCheckbox').checked;
    voorwaardenGeaccepteerd = document.getElementById('AlgemeneVoorwaardenCheckbox').checked;
	allesCorrectIngevuld = true;


	if (geselecteerdeKeuze == 0) {
		document.getElementById("selectie_error").innerHTML = "Kies a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("selectie_error").innerHTML = "";
	}
	if (aantalTxt.length == 0) {
		document.getElementById("aantal_error").innerHTML = "Gelieve het aantal in te geven.";
		allesCorrectIngevuld = false;
		
	}
	else {
		controleerVoorwaardenAantal();
	}
	if (datumTxt.length == 0) {
		document.getElementById("datum_error").innerHTML = "Gelieve een datum aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("datum_error").innerHTML = "";
	}

	if (uurTxt == 0) {
		document.getElementById("uur_error").innerHTML = "Kies a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("uur_error").innerHTML = "";
	}
	
	if (voornaamTxt.length == 0) {
		document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenVoornaam();
	}
	if (achternaamTxt.length == 0) {
		document.getElementById("achternaam_error").innerHTML = "Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenAchternaam();
	}
	if (emailTxt.length == 0) {
		document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenEmail();
	}

	if (telefoonnummerTxt.length == 0){
        document.getElementById("telefoonnummer_error").innerHTML = "Vul hier je telefoonnummer in a.u.b."
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenTelefoonnummer();
    }

	controleerVoorwaardenBericht();

	if(!annulatieGeaccepteerd){
        document.getElementById("AlgemeneVoorwaardenError").innerHTML = "accepteer de algemene voorwaarden aub";
        allesCorrectIngevuld = false;
    }
    
    if(!voorwaardenGeaccepteerd){
        document.getElementById("AnnulatieVoorwaardenError").innerHTML = "accepteer de annulatie voorwaarden aub";
        allesCorrectIngevuld = false;
    }
	
	if (allesCorrectIngevuld) {
		document.write("Bedankt voor je reservatie. Je ontvangt zo meteen een bevestigingsmail.");
		let link = "mailto:" + encodeURIComponent("neletintel@hotmail.com")
			+ "?cc=" + encodeURIComponent("jasmine_juvyns@hotmail.com")
			+ "&subject=" + encodeURIComponent("Reservatieformulier validatie")
			+ "&body="
			+ "Bedankt voor je reservatie!"
			+ "Je maakte volgende reservatiekeuze: "
			+ encodeURIComponent(selectieTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Aantal plaatsen: "
			+ encodeURIComponent(aantalTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Gereserveerde datum: "
			+ encodeURIComponent(datumTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Gereserveerde uur: "
			+ encodeURIComponent(uurTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Jouw gegevens: "
			+ "Voornaam: "
			+ encodeURIComponent(voornaamTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Achternaam: "
			+ encodeURIComponent(achternaamTxt)
			+ encodeURIComponent("\r\n\n")
			+ "telefoonnummer: " 
        	+ encodeURIComponent(telefoonnummerTxt) 
       		+ encodeURIComponent("\r\n\n") 
			+ "Email: "
			+ encodeURIComponent(emailTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Je bericht: "
			+ encodeURIComponent(berichtTxt);
		window.location.href = link;
	}

}
