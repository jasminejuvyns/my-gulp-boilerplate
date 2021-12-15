"use strict";

let voornaamTxt;
let achternaamTxt;
let telefoonnummerTxt;
let emailTxt;
let berichtTxt;

let allesCorrectIngevuld = true;


function controleerVoorwaardenVoornaam() {
    if (voornaamTxt.length < 2) {
        document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("voornaam_error").innerHTML = "";
    }
}

function controleerVoorwaardenAchternaam() {
    if (achternaamTxt.length < 2) {
        document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("achternaam_error").innerHTML = "";
    }
}

function controleerVoorwaardenEmail() {
    let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
    if (regExp.test(emailTxt) == false) {
        document.getElementById("email_error").innerHTML = "Dit is niet correct!";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }
}

function controleerVoorwaardenTelefoonnummer() {
    let regExp =/^\+[0-9]{2}\s?[0]?(\d{3})\s?\d{2}\s?\d{2}\s?\d{2}\s?$/;
    if (regExp.test(telefoonnummerTxt) == false) {
        document.getElementById("telefoonnummer_error").innerHTML = "Dit is niet correct. Voorbeeld: +32 467 89 78 67";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("telefoonnummer_error").innerHTML = "";
    }
}

function controleerVoorwaardenBericht() {
    if (berichtTxt.length > 1000) {
        document.getElementById("bericht_error").innerHTML = "Je bericht is te lang, gebruik max 1000 tekens";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("bericht_error").innerHTML = "";
    }
}

function verstuur() {
    voornaamTxt = document.getElementById('voornaam').value;
    achternaamTxt = document.getElementById('achternaam').value;
    telefoonnummerTxt = document.getElementById('telefoonnummer').value;
    emailTxt = document.getElementById('email').value;
    berichtTxt = document.getElementById('bericht').value;
    
    allesCorrectIngevuld = true;

    if (voornaamTxt.length == 0) {
        document.getElementById("voornaam_error").innerHTML = "Vul hier je voornaam in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenVoornaam();
    }
    if (achternaamTxt.length == 0) {
        document.getElementById("achternaam_error").innerHTML = "Vul hier je achternaam in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenAchternaam();
    }
    if (telefoonnummerTxt.length == 0){
        document.getElementById("telefoonnummer_error").innerHTML = "Vul hier je telefoonnummer in a.u.b."
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenTelefoonnummer();
    }
    if (emailTxt.length == 0) {
        document.getElementById("email_error").innerHTML = "Vul hier je E-mail in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenEmail();
    }
    if (berichtTxt.length == 0){
        document.getElementById("bericht_error").innerHTML = "Vul hier je bericht in a.u.b.";
        allesCorrectIngevuld = false;
    }
    if (allesCorrectIngevuld) {
        document.write("alles is correct ingevuld");
        //deze if altijd op het einde zetten 	

        let link = "mailto:" + encodeURIComponent("neletintel@hotmail.com") 
        + "?cc=" + encodeURIComponent("jasmine_juvyns@hotmail.com") 
        + "?cc=" + encodeURIComponent("chepe@hotmail.ch") 
        + "&subject=" 
        + encodeURIComponent("Contactformulier validatie") 
        + "&body=" 
        + "voornaam:" 
        + encodeURIComponent(voornaamTxt) 
        + encodeURIComponent("\r\n\n") 
        + "telefoonnummer:" 
        + encodeURIComponent(telefoonnummerTxt) 
        + encodeURIComponent("\r\n\n") 
        + "achternaam:" 
        + encodeURIComponent(achternaamTxt) 
        + encodeURIComponent("\r\n\n") 
        + "email:" 
        + encodeURIComponent(emailTxt) 
        + encodeURIComponent("\r\n\n") 
        + "bericht:" 
        + encodeURIComponent(berichtTxt);
        window.location.href = link;
    }

}