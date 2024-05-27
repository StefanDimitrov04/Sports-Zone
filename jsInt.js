// Базов клас Animal
// function Animal(name) {
//     this.name = name;
// }

// // Метод на Animal за издаване на звук
// Animal.prototype.makeSound = function() {
//     return "Животното прави звук.";
// }

// // Клас Dog, който наследява Animal
// function Dog(name) {
//     // Извикване на конструктора на Animal с името на кучето
//     Animal.call(this, name);
// }

// // Наследяване на прототипа на Animal от Dog
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Промяна на метода makeSound за кучето
// Dog.prototype.makeSound = function() {
//     return "Кучето лае: Гау! Гау!";
// }

// // Създаване на обекти от класовете Animal и Dog
// let animal = new Animal("Животно");
// let dog = new Dog("Рекс");

// // Извикване на методите на обектите
// console.log(animal.name + ": " + animal.makeSound()); // Животно прави звук.
// console.log(dog.name + ": " + dog.makeSound());       // Рекс лае: Гау! Гау!

// const array1 = [5, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sumWithInitial);
// Expected output: 10


// let obj1 = { name: "John" };
// let obj2 = obj1;

// obj2.name = "Jane";

// console.log(obj1.name); // Резултат: "Jane"

let num = 5;
let num2 = num;

num2 = 4;
console.log(num);