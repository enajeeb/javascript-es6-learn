////////////////////
// if key and value are identical we condense to single word
////////////////////
const color = 'red';
// const car = {
//     color: color
// };

const car = {
    color
};
console.log(car);


////////////////////
// default function arguments
////////////////////
function makeCake (recipe, type = 'Strawberry') {
    return `Using ${recipe} for ${type} cake`;
}

console.log(makeCake('My Recipe', 'Chocolate'));
// Using My Recipe for Chocolate cake

console.log(makeCake('My Recipe'));
// Using My Recipe for Strawberry cake