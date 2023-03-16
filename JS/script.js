function laskesumma() {
    let numb1 = Number(document.getElementById("num1").value);
    let numb2= Number(document.getElementById("num2").value);
    let sum = numb1 + numb2;
    document.getElementById("vastaus").innerHTML= "Numeroiden summa on: " + sum;
}