import update from 'immutability-helper'

const state1 = ['x'];
const state2 = update(state1, {$push: ['y']});

console.log(state2)

// const vs let
let name = "Vuong";

name = "Su";

const nums = [1,2,3,4,5];
nums.push(6)

const person = {
    name: "Vuong",
    age: 33
}

person.name = "Sam";
person.age = 4;


//Arrow function
// function hello () {
//     console.log("Hello World!")
// }

//const hello = name => console.log("Hello", name)
const hello = name => console.log(`Hello ${name}`)

const fruits = ["Apples", "Oranges", "Grapes"];
//ForEach
// fruits.forEach((fruit, index)=> {
//     console.log(`${index+1}: ${fruit}`);
// })

//Map
// const singleFruit = fruits.map(fruit => fruit.slice(0,-1));
// console.log(singleFruit)

//Filter
const people = [
    {id: 1, name: "Vuong"},
    {id: 2, name: "Mai"},
    {id: 3, name: "Sam"},
    {id: 4, name: "Su"}
]

const people2 = people.filter(person => person.id !== 1)

//Spread
const arr = [1,2,3,4]

const arr2 = [...arr, 5];

const myProfile = {
    name: "Vuong",
    age: 33
}

const newMe = {
    ...myProfile,
    email: "vuong@gmail.com"
}

//Destructuring
const profile = {
    name1: "Vuong Bui",
    address: {
        city: "Hoa Binh",
        country: "Vietnam"
    },
    hobbies: ['Reading books', 'Fishing']
}

const {name1, address, hobbies} = profile;
const {city} = profile.address;
