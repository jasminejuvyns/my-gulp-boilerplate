"use strict"
//hoofdscript
let selectieTxt;
let geselecteerdeKeuze;
let aantalTxt;
let datumTxt;
let uurTxt;
let voornaamTxt;
let achternaamTxt;
let emailTxt;
let telefoonnummerTxt;
let berichtTxt;
let allesCorrectIngevuld=true;

//-------FUNCTIE  AANTAL PERSONEN --------------------------------------------------------
function controleerVoorwaardenAantal(){
	if( aantalTxt.length > 5){
		document.getElementById("aantal_error").innerHTML="Max 5 personen";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("aantal_error").innerHTML="";
	}
}

//-------FUNCTIE  DATUM --------------------------------------------------------
function controleerVoorwaardenDatum(){
	if( datumTxt.length < 1){
		document.getElementById("datum_error").innerHTML="Gelieve een datum aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("datum_error").innerHTML="";
	}
}

//-------FUNCTIE  UUR --------------------------------------------------------
function controleerVoorwaardenUur(){
	if( uurTxt.length < 1){
		document.getElementById("uur_error").innerHTML="Gelieve een uur aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("uur_error").innerHTML="";
	}
}

//-------FUNCTIE  VOORNAAM --------------------------------------------------------
function controleerVoorwaardenVoornaam() {
	if (voornaamTxt.length < 2){
		document.getElementById("voornaam_error").innerHTML="Minstens 2 karakters lang!";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("voornaam_error").innerHTML="";
	}
}
//-------FUNCTIE  ACHTERNAAM ----------------------------------------------------------
function controleerVoorwaardenAchternaam(){
	if(achternaamTxt.length < 2 ){ 
	  document.getElementById("achternaam_error").innerHTML="Minstens 2 karakters lang!";
	  allesCorrectIngevuld = false;
	}
	else{
	  document.getElementById("achternaam_error").innerHTML="";
	}
}

//-------FUNCTIE  EMAIL----------------------------------------------------------
function controleerVoorwaardenEmail(){
	let regExp=/^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
	if(regExp.test(emailTxt) == false){
		document.getElementById("email_error").innerHTML="Dit is niet correct!";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("email_error").innerHTML="";
	}
}

//-------FUNCTIE  TELEFOONNUMMER --------------------------------------------------------
function controleerVoorwaardenTelefoonnummer(){
	let regExp=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
	if(regExp.test(telefoonnummerTxt) == false || telefoonnummerTxt.length == 0){
		document.getElementById("telefoonnummer_error").innerHTML="Dit is niet correct!";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("telefoonnummer_error").innerHTML="";
	}
}

//-------FUNCTIE  BERICHT --------------------------------------------------------
function controleerVoorwaardenBericht(){
	if( berichtTxt.length > 1000){
		document.getElementById("bericht_error").innerHTML="Je bericht is te lang, gebruik max 1000 tekens";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("bericht_error").innerHTML="";
	}
}




//functie verstuur
function verstuur() {
	geselecteerdeKeuze=document.getElementById("selectie").selectedIndex;
	selectieTxt=document.getElementById("selectie").value;
	voornaamTxt=document.getElementById("voornaam").value;
	achternaamTxt=document.getElementById("achternaam").value;
	emailTxt=document.getElementById("email").value;
	telefoonnummerTxt=document.getElementById("telefoonnummer").value;
	berichtTxt=document.getElementById("bericht").value;
	aantalTxt=document.getElementById("aantal").value;
	datumTxt=document.getElementById("datum").value;
	uurTxt=document.getElementById("uur").value;
	allesCorrectIngevuld=true;

	
	if(geselecteerdeKeuze == 0){
		document.getElementById("selectie_error").innerHTML="Kies a.u.b.";
		allesCorrectIngevuld = false;
	}
	else{
		document.getElementById("selectie_error").innerHTML="";
	}
	if(aantalTxt.length == 0){
		document.getElementById("aantal_error").innerHTML="Gelieve het aantal in te geven.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenAantal();
	}
	if(datumTxt.length == 0){
		document.getElementById("datum_error").innerHTML="Gelieve een datum aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenDatum();
	}
	if(uurTxt.length == 0){
		document.getElementById("uur_error").innerHTML="Gelieve een uur aan te duiden.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenUur();
	}
	if(voornaamTxt.length==0){
		document.getElementById("voornaam_error").innerHTML="Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenVoornaam();
	}
	if(achternaamTxt.length==0){
		document.getElementById("achternaam_error").innerHTML="Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenAchternaam();
	}
	if(emailTxt.length==0){
		document.getElementById("email_error").innerHTML="Vul in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenEmail();
	}
	if(telefoonnummerTxt.length > 0){
		document.getElementById("telefoonnummer_error").innerHTML="Telefoonnummer niet compleet. Voorbeeld: +32479161520";
		allesCorrectIngevuld = false;
	}
	else{
		controleerVoorwaardenTelefoonnummer();
	}
	if (allesCorrectIngevuld) {
		document.write("Naam is correct ingevuld");

		let link = "mailto:" + encodeURIComponent("jasmine_juvyns@hotmail.com")
		+ "&subject=" + encodeURIComponent("Reservatieformulier validatie")
		+ "&body=" 
		+ "selectie:" 
		+ encodeURIComponent(selectieTxt) 
		+ encodeURIComponent("\r\n\n")
		+ "aantal:" 
		+ encodeURIComponent(aantalTxt) 
		+ encodeURIComponent("\r\n\n") 
		+ "datum:" 
		+ encodeURIComponent(datumTxt) 
		+ encodeURIComponent("\r\n\n")
		+ "uur:" 
		+ encodeURIComponent(uurTxt) 
		+ encodeURIComponent("\r\n\n") 
		+ "voornaam:"
		+ encodeURIComponent(voornaamTxt)
		+ encodeURIComponent("\r\n\n")
		+ "achternaam:" 
		+ encodeURIComponent(achternaamTxt) 
		+ encodeURIComponent("\r\n\n") 
		+ "email:"
		+ encodeURIComponent(emailTxt)
		+ encodeURIComponent("\r\n\n")
		+ "telefoonnummer:" 
		+ encodeURIComponent(telefoonnummerTxt) 
		+ encodeURIComponent("\r\n\n") 
		+ "bericht:"
		+ encodeURIComponent(berichtTxt)
		window.location.href = link;
	}
	
}