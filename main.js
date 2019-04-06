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

// map

// filter

// spread

// destructuring

// classes

// subclasses

// modules