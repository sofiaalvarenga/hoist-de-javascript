// EJEMPLO
console.log(example);
var example = "I'm the example!";
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(example); // imprime undefined
// hello = 'world';

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle
// needle = 'haystack' *variable global*
// se invoca la function test()
// function test
// needle = 'magnet' *variable local*
// console.log(needle) // Imprime 'magnet';

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan
// brendan = 'super cool' *variable global*
// function print()
// brendan = 'only okay' *variable local*
// console.log (brendan) // imprime 'super cool'

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food
// food = 'chicken' *variable global*
// console.log (food) // imprime 'chicken'
// función eat() se invoca
// function eat()
// food = 'half-chicken' *variable local*
// console.log(food) // imrpime 'half-chicken'
// food = 'gone'

//6
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean() no es una función
// var food
// console.log (food)// food no está definida
// var mean
// mean = funtion()
// console.log (food)// food no está definida

//7
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre
// console.log(genre)// imrpime indefined
// genre = "disco" *variable global*
// se invoca función rewind()
// function rewind()
// genre = "rock" *variable local*
// console.log(genre)// imprime "rock"
// genre = "r&b" *variable local*
// console.log(genre)// imprime "r&b"
// console.log(genre)// imrpime "disco"

//8
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo 
// dojo = "san jose" *variable global*
// se invoca función learn()
// function learn()
// dojo "seatle" *variable local*
// console.log(dojo) // imprime "seatle"
// dojo = "burbank" *variable local*
// console.log (dojo)// imprime "burbank"
// console.log (dojo)// imprime "san jose"









