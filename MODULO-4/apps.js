//calculator

var numberA = () => parseInt  (document.getElementById("input-number1").value);
var numberB = () => parseInt  (document.getElementById("input-number2").value);



//Operaciones

var sumNumber = () => numberA() + numberB() ;
var restNumber = () => numberA() - numberB() ;
var multNumber = () => numberA() * numberB() ;
var dividNumber = () => numberA() / numberB() ;

//Events



var showResultsum = () => document.getElementById("result").value = sumNumber();
var showResultrest = () => document.getElementById("result").value = restNumber();
var showResultmult = () => document.getElementById("result").value = multNumber();
var showResultdivid = () => document.getElementById("result").value = dividNumber();

// Eventos

document.getElementById("sum").addEventListener("click", showResultsum);
document.getElementById("rest").addEventListener("click", showResultrest);
document.getElementById("mult").addEventListener("click", showResultmult);
document.getElementById("divid").addEventListener("click", showResultdivid)






