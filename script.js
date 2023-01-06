//1
var hello; //se crea variable 
console.log(hello); // imprime undefined
hello = 'world';

//2
var needle; //variable global
function test(){
    var needle;  //variable local
    needle = 'magnet';
    console.log(needle);  // Imprime 'magnet';
}
needle = 'haystack'; 
test(); // se invoca la function test()

//3
var brendan; //variable global 
function print(){ //no se invoca la función previamente
    var brendan; // variable local
    brendan = 'only okay'; 
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);  // imprime 'super cool'

//4
var food; // variable global
function eat(){
    var food; // variable local
    food = 'half-chicken'; 
    console.log(food); // imprime 'half-chicken'
    var food = 'gone';
}
food = 'chicken';
console.log(food); // imprime 'chicken'
eat(); //se invoca la función eat()

//5
var mean; //se declara variable 
mean(); //Mean no existe como función declarativa. No puede ser llamada antes de declararse porque es una función expresiva en una variable.
console.log(food); // Error: food no está definida 
mean = function() { // Función expresiva: guarda función dentro de una variable
    var food; //variable local
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food); // Error: food no está definida

//6
var genre;
function rewind() {
    var genre; //variable local
    genre = "rock"; 
    console.log(genre); // imprime "rock"
    genre = "r&b"; 
    console.log(genre); // imprime "r&b"
}
console.log(genre); // imprime indefined
genre = "disco"; //variable global
rewind(); //se invoca función rewind ()
console.log(genre); // imprime "disco"

//7
var dojo; //variable global
function learn() {
    var dojo; //variable local
    dojo = "seattle";
    console.log(dojo); // imprime "seatle"
    dojo = "burbank";
    console.log(dojo); // imprime "burbank"
}
dojo = "san jose";
console.log(dojo); // imprime "san jose"
learn(); //se invoca la función learn()
console.log(dojo); // imprime "san jose"

//8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name; //incluir en el objeto dojo, name como name de entrada
    dojo.students = students; //incluir en el objeto dojo, students como students de entrada
    if(dojo.students > 50){
        dojo.hiring = true; //incluir en el objeto dojo, hiring como boleano true
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // Pretende asignar un string como valor a dojo, que es un objeto {}
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // Imprime el string {name: chicago, students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); // Imposible asignar un string al objeto dojo porque va cambiar su naturaleza {}












