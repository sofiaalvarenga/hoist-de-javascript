//1
var hello; //se crea variable 
console.log(hello); // imprime undefined
hello = 'world';

//2
var needle; //variable global
needle = 'haystack'; 
test(); // se invoca la function test()
function test(){
    var needle;  //variable local
    needle = 'magnet';
    console.log(needle);  // Imprime 'magnet';
}

//3
var brendan; //variable global
brendan = 'super cool'; 
function print(){ //no se invoca la función previamente
    var brendan; // variable local
    brendan = 'only okay'; 
    console.log(brendan);
}
console.log(brendan);  // imprime 'super cool'

//4
var food; // variable global
food = 'chicken';
console.log(food); // imprime 'chicken'
eat(); //se invoca la función eat()
function eat(){
    var food; // variable local
    food = 'half-chicken'; 
    console.log(food); // imprime 'half-chicken'
    var food = 'gone';
}

//5
var food; //se declara variable 
var mean; //se declara variable 
mean(); //Mean no existe como función declarativa. No puede ser llamada antes de declararse porque es una función expresiva en una variable.
console.log(food); // food no está definida fuera de function()
mean = function() { // Función expresiva: guarda función dentro de una variable
    var food; //variable local
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food); // food no está definida fuera de function()

//6
var genre;
console.log(genre); // imprime indefined
genre = "disco"; //variable global
rewind(); //se invoca función rewind ()
function rewind() {
    var genre; //variable local
    genre = "rock"; 
    console.log(genre); // imprime "rock"
    genre = "r&b"; 
    console.log(genre); // imprime "r&b"
}
console.log(genre); // imprime "disco"

//7
var dojo; //variable global
dojo = "san jose";
console.log(dojo); // imprime "san jose"
learn(); //se invoca la función learn()
function learn() {
    var dojo; //variable local
    dojo = "seattle";
    console.log(dojo); // imprime "seatle"
    dojo = "burbank";
    console.log(dojo); // imprime "burbank"
}
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












