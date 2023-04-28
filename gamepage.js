// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1)
// contar el número de intentos
var x= document.getElementById("guessField").value
// crear para el intento correcto
function submit(){
	if(x == y){
		alert("Correcto" + attempts "intento(s)")
		attempts = 1
	} else {
		if (x < y){
			alert("Incorrecto")
			attempts++
		} else {
		  if (x > y){
			 alert("Incorrecto")
			 attempts++
		  }
		}
	}
}
  
// función para el número adivinado por el usuario     
function playAgain(){
	y = Math.floor(Math.random() * 10 + 1)
}
