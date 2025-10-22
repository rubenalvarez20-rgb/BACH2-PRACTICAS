function encender() {
	document.getElementById("bombilla").src = "on.png"; //imagen encendida
	document.getElementById("estado").textContent = "La bombilla está encendida";
}


function apagar() {
	document.getElementById("bombilla").src = "off.png"; // imagen apagada
	document.getElementById("estado").textContent = "La bombilla está apagada";
}


function sodio() {
	document.getElementById("nombre").textContent = "Sodio";
	document.getElementById("simbolo").textContent = "Na";
	document.getElementById("peso").textContent = "22,98u";
	document.getElementById("número").textContent = "11";
}

function oxigeno() {
	document.getElementById("nombre").textContent = "Oxigeno";
	document.getElementById("simbolo").textContent = "O";
	document.getElementById("peso").textContent = "16u";
	document.getElementById("número").textContent = "8";
}

function carbono() {
	document.getElementById("nombre").textContent = "Carbono";
	document.getElementById("simbolo").textContent = "C";
	document.getElementById("peso").textContent = "12.01u";
	document.getElementById("número").textContent = "6";
}

