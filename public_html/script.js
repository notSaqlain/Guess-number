/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
*/


var NumCasuale = 0;

function casuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generaNum() {
    NumCasuale = casuale(1, 10);
    document.getElementById("t").innerHTML = NumCasuale;
}


function CheckNum() {
    var num = document.getElementsByName("numero")[0].value;
    var tip = " ";

    if (parseInt(num) !== NumCasuale) {
        tip = "False";
    } else {
        tip = "True";
    }

    document.getElementById("tip").innerHTML = tip;
}

function Reset() {
    document.getElementsByName("numero")[0].value = "";
    document.getElementById("tip").innerHTML = "";
    generaNum();
}