// JavaScript-Code für meine Website

// Variablen definieren
let name = "Funny!";
let age = 9;

// Funktion, um "Hallo" und den Namen des Hundes auf der Seite auszugeben
function sayHello() {
  let message = "Hallo, mein Name ist " + name;
  document.getElementById("greeting").innerHTML = message;
}

// Funktion, um das Alter des Hundes auf der Seite auszugeben
function showAge() {
  let message = "Ich bin " + age + " Jahre alt.";
  document.getElementById("age").innerHTML = message;
}

// Aufruf der Funktionen beim Laden der Seite
window.onload = function() {
  sayHello();
  showAge();
}
