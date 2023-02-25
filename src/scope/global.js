//varibles

var a; // declarando
var b = 'b' // declarando y inicializando
b = 'bb' //reasignacion
var a = 'aa' //redeclaracion


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Argentina'; // global
  console.log(country);
}

countries();
console.log(country);
