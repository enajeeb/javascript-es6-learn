////////////////////////
// Destructuring Objects
////////////////////////
const expense = {
    type: 'business',
    amount: 'USD 100'
};

// ES5
var typeVal = expense.type;
var amountVal = expense.amount;

// ES6
// use {} for destructuring arrays
const { type, amount } = expense;

console.log(type, amount);
// business USD 100

////////////////////////
// Destructuring Arrays
////////////////////////
const storeNames = [
    'Safeway',
    'Target',
    'Costco'
];

// use [] for destructuring arrays
const [ name ] = storeNames;
console.log(name);
// Safeway

// using rest
const [ name1, ...rest ] = storeNames;
console.log(name);
console.log(rest);
// Safeway
// [ 'Target', 'Costco' ]

////////////////////////
// Mixing objects and arrays
////////////////////////

const locations = [
    {lat: 12, long: 234, location_name: 'Home'},
    {lat: 12, long: 234, location_name: 'Office'},
];

// get location_name of first object
const [ {location_name} ] = locations;
console.log(location_name);
// Home

const Cakes = {
    sizes: ['8 inch', '10 inch'],
    types: ['chocolate', 'vanilla', 'strawberry']
};

// get second cake type
const { types: [ type1, type2, ...restTypes] } = Cakes;
console.log(type2);
// vanilla