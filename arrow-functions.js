// => fat arrow

//////////////
// implicit return
//////////////
const add = (a, b) => a + b;
// console.log(add(1,2));


//////////////
// with curly braces
//////////////
const sub = (a, b) => {
    // return statement is required
    return a - b;
}
// console.log(sub(5, 2));


//////////////
// parenthesis can be skipped for single argument 
//////////////
const double = number => {
    return number * 2;
}
// console.log(double(2));


//////////////
// no argument
//////////////
const test = () => console.log("test function");
// test();


//////////////
// convert to fat arrow function
//////////////
const numbers = [2,4,6];
numbers.map(function(number) {
    // console.log(number * 2);
});

// numbers.map(number => console.log(number * 2));

//////////////
// Problem solve
//////////////
let team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`
        });
    }
}
console.log(team.teamSummary());
// [ 'Jane is on team undefined', 'Bill is on team undefined' ]

// solve using arrow functions (lexical this)
let team2 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        // this === team2
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`
        });
    }
}
console.log(team2.teamSummary());
// [ 'Jane is on team Super Squad', 'Bill is on team Super Squad' ]