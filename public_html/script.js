/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function casuale(min, max) {
    return Math.random() * (max - min) + min;
}
  
function CheckNum() {
    var NumCasuale = casuale(1, 10);
    var num = document.getElementsByName("numero").values;
    var tip = " ";

    if (num != NumCasuale) {
        tip = "False";
    } else {
        tip = "True";
    }

    document.getElementById("tip").innerHTML = tip;
}