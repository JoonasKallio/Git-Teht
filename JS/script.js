function laskesumma() {
    let numb1 = Number(document.getElementById("numero1").value);
    let numb2= Number(document.getElementById("Numero2").value);
    let sum = (numb1 + numb2);
    document.getElementById("vastaus").innerHTML= sum;
}