window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var boton = document.querySelector("#theGreen");
boton.addEventListener("click", function(e) {
	alert("wuju");
});
