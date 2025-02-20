//1) Quali sono i tipi primitivi principali in TypeScript?
console.log("1. I dati di tipo primitivo sono String, Number, Boolean, Undefined, null");
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
console.log("2. let nome: string = 'Cosimo'; let età: number = 37; let studioTypeScript: boolean = true");
//3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet);
//4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
console.log(sum(3, 1));
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoPiuIva = function (prezzo) {
    var iva = 0.22;
    return prezzo + prezzo * iva;
};
console.log(prezzoPiuIva); //(100 + 100 * 0.22)
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatenaStringhe = function (str1, str2) {
    var concatenamento = str1 + str2;
    return concatenamento.length;
};
console.log(concatenaStringhe("ciao", "mondo"));
//7) Cos'è un Type Union e come si scrive?
console.log("7. Il Type Union in TypeScript è una variabile che consente di unire diversi data type in uno solo ");
var typeUnion = function (a) {
    a = "ciao"; //ok
    a = 18; //ok
    //   a = true; //Non va bene perche non rientra nè in number nè in string. Risposta: Type 'boolean' is not assignable to type 'string | number'.
};
console.log(typeUnion);
//8) Crea una variabile che possa contenere un numero, null o undefined.
var mixVariable = 5;
console.log(mixVariable);
var mixVariable2 = [];
mixVariable2.push("1");
mixVariable2.push(undefined);
//10) Tipizza il seguente array di numeri nei due modi possibili:
//const numbers = [1, 2, 3];
var method1 = [1, 2, 3];
console.log(method1);
var method2 = [];
method2.push(1);
method2.push(2);
method2.push(3);
console.log(method2);
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var quellaTupla = ["string", "string", "string", "number", "number"];
console.log("quellaTupla");
//12) Qual è la differenza tra type e interface?
console.log("Entrambi usati per definire una tipologia. TYPE solitamente è usato per Union e Tuple (definendo tipi Primitivi), mentre le Interface possono essere ridefinite, sono molto simili al “type”, ma a differenza di quest’ultimo, ci permette di definire la forma di un oggetto, pittosto che un tipo di oggetto. ");
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
