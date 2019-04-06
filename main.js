// CONST & LET

/**
 * use let if you want to change its value in the future
 * ps. u can reassign value of an object/array but u cant recreate it
 */

let name = 'Foo';
name = 'Bar';

const person = {
  name: '',
  age: 23
};

person.name = 'Foo';

const num = [1,2,3,4];
num.push(5);


// ARROW FUNCTION
// this is a normal function
function normalFunction() {
  console.log('this is a normal function')
}

/**
 * using arrow function
 * u can omit the parenthesis if u have only 1 paremeter
 * omit the curly braces if its one liner
 * u can use const or let
 */
const arrowFunction = () => { console.log('this is an arrow function from es6')}


// FOREACH
const fruits = ['Durians', 'Rambutans', 'Lomboys'];
fruits.forEach((fruit, index) => {
  console.log(index + ' : ' + fruit);
});

// MAP
// difference between foreach and map is it returns a value while foreach will just iterate
const fruit = fruits.map(fruit => fruit.slice(0,-1).toUpperCase());
console.log(fruit);

// FILTER
// filters with certain condition
const people = [
  {id: 1, name: 'Foo Bar'},
  {id: 2, name: 'John Doe'},
  {id: 3, name: 'Joe Nel'},
];

const filterPeople = people.filter((person) => person.id !== 2);
console.log(filterPeople);

// SPREAD
/**
 * a spread operator is three dots (...)
 * copies a particular data
 */
 const arr1 = [1,2,3];
 const arr2 = [...arr1.filter(num => num !==2 )];

 const person1 = {
   name: 'Chris',
   age: 10
 };

 const person2 = {
   ...person1,
   email: 'chris@gmail.com'
 };

// DESTRUCTURING
// pull out data from an object
const profile = {
  fname:'Joe Nel',
  address: {
    street: 'Velez',
    city: 'CDO'
  }
}

const {fname, address} = profile;
const {street, city} = address

// CLASSES
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Aloha snackbar everyone! My name is ${this.name}, and I am ${this.  age}.`;
  }
}

const newPerson = new Person('Johnny Sins', 33);
console.log(newPerson.greet());


// subclasses

// modules