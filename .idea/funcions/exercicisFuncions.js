/*Exercici 1

function nom() {
    console.log('Marc')
    console.log('Romaguera')
    console.log('Fernandez')
}
nom()*/

/*Exercici 2

function valor(valor) {
    console.log(typeof valor)
}
valor(613)
valor('patata')
valor(true)*/

/* Exercici 3

function data() {
    return new Date()
}*/

/*Exercici 4

function funcio() {
    var patata = 10
}
console.log(patata)*/

/*Exercici 5

function comptaVocals(text) {
    var vocals = "aeiouAEIOU";
    var comptador = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocals.includes(text[i])) {
            comptador++;
        }
    }

    return comptador;
}
console.log(comptaVocals('patata'))*/

/*Exercici 6

function sumar(a, b, c = 5) {
    return a + b + c;
}*/

/*Exercici 7

function exercici7(a, b, c) {
    const dataa = data()
    console.log("Data actual:", dataa)
    return sumar(a, b, c)
}
console.log(exercici7(2, 3, 4))*/

/* Exercici 8

function comprovarTrenta(a, b) {
    return (a === 30 || b === 30 || (a + b) === 30)
}
console.log(comprovarTrenta(10, 20))
console.log(comprovarTrenta(30, 5))
console.log(comprovarTrenta(13,30))
console.log(comprovarTrenta(7, 4))*/

/* Exercici 9

const func_trenta = function(x, y) {
    if (x === 30 || y == 30 || x + y == 30) {
        return true
    }
    else{
        return false
    }
}
console.log(func_trenta(10, 20))
console.log(func_trenta(30, 5))
console.log(func_trenta(13,30))
console.log(func_trenta(7, 4))*/

/* Exercici 10

const igual = (a, b) => a === b
console.log(igual(5,5))
console.log(igual(5,"5"))
console.log(igual(true,true))
console.log(igual(null,undefined))*/

/* Exercici 11

const arrelQuadrada = x => Math.sqrt(x).toFixed(2)
console.log(arrelQuadrada(9))
console.log(arrelQuadrada(13276))*/

/* Exercici 12

const aMinuscules = str => str.toLowerCase()
console.log(aMinuscules("ADRIA EL MILLOR PROFESSOR AAaaAAaa"))*/
