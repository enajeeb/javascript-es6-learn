// Rest operator
// capture list of arguments into a list

// rest
function add(...numbers) {

    console.log(numbers);
    // [ 1, 2, 3, 4, 5 ]

    // spread
    console.log(...numbers);
    // 1 2 3 4 5
}

add(1,2,3,4,5);


// spread
const color1 = ['red', 'green'];
const color2 = ['blue', 'yellow'];

console.log([...color1, ...color2]);
// [ 'red', 'green', 'blue', 'yellow' ]

console.log([...color1, ...color2, 'purple']);
// [ 'red', 'green', 'blue', 'yellow', 'purple' ]