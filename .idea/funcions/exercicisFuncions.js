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

/*Exercici 3

function data() {
    return new Date()
}
console.log(data())*/

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

//Exercici 6

function sumar(a, b, c = 5) {
    return a + b + c;
}
console.log(sumar(3, 4))
