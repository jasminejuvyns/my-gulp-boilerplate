//-----------------SLIDESHOW--------------------------
"use strict";
let myIndex = 0;
content();

function content() {
    try{
        let i;
        let x = document.getElementsByClassName("slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }    
        x[myIndex-1].style.display = "block";
    }
    catch(err) {
    }
    setTimeout(content, 2500); 
}


//---------------  BEGIN SCROLL TO TOP --------------------------------
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//------------------------RESERVERINGSFORMULIER---------------------------------------
let voornaamTxt;
let achternaamTxt;
let emailTxt;
let telefoonTxt;
let geselecteerdeKeuze;
let selectieTxt;

let allesCorrectIngevuld=true;

//----------functie voornaam--------------------------------------------------------
function controleerVoorwaardenVoornaam() {
    if (voornaamTxt.length < 2){
        document.getElementById("voornaam_error").innerHTML="Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("voornaam_error").innerHTML="";
    }
}

//-------functie achternaam --------------------------------------------------------
function controleerVoorwaardenAchternaam(){
    if(achternaamTxt.length < 2 ){ 
      document.getElementById("achternaam_error").innerHTML="Minstens 2 karakters lang!";
      allesCorrectIngevuld = false;
    }
    else{
      document.getElementById("achternaam_error").innerHTML="";
    }
}

//-------functie email --------------------------------------------------------
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

//-------functie telefoonnummer --------------------------------------------------------
function controleerVoorwaardenTelefoon(){
    let regExp=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
    if(regExp.test(telefoonTxt) == false){
        document.getElementById("telefoonnummer_error").innerHTML="Dit is niet correct!";
        allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("telefoonnummer_error").innerHTML="";
    }
}


//----------------- functie verstuur ---------------------------------
function verstuur() {
    voornaamTxt=document.getElementById("voornaam").value;
    achternaamTxt=document.getElementById("achternaam").value;
    emailTxt=document.getElementById("email").value;
    telefoonTxt=document.getElementById("telefoonnummer").value;
    geselecteerdeKeuze=document.getElementById("keuze").selectedIndex;
    selectieTxt=document.getElementById("keuze").value;
    if (voornaamTxt.length==0){
        document.getElementById("voornaam_error").innerHTML="Vul in a.u.b.";
        //uit de span in html
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
    if(telefoonTxt.length==0){
        document.getElementById("telefoonnummer_error").innerHTML="Vul in a.u.b.";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenTelefoon();
    }
    if(geselecteerdeKeuze==0){
        document.getElementById("selectie_error").innerHTML="Kies a.u.b.";
        allesCorrectIngevuld = false;
    }
    else{
    document.getElementById("selectie_error").innerHTML="";
    }
    //uiteindelijk controleren of alles correct is
    //deze if blijft altijd allerlaatst in de verstuur() functie
    if (allesCorrectIngevuld) {
        document.write("Naam is correct ingevuld");
    }



    //----------------BEGIN NIEUWSBRIEFFORMULIER----------------------------------------------//







    //----------------BEGIN NIEUWSBRIEFFORMULIER----------------------------------------------//