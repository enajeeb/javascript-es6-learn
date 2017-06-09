// Classes
class Car {
    constructor(options) {
        this.title = options.title;
    }

    drive() {
        return 'vroom';
    }

    honk() {
        return 'bam';
    }
}

class Honda extends Car {
    constructor(options) {
        super(options); // call Car.constructor()
        this.color = options.color;
    }
    honk() {
        // super(options); // call Car.honk()
        return 'beep';
    }
}

let honda = new Honda({ title: 'my car', color: 'red' });

// let car = new Car({ title: 'Honda' });
console.log(honda);
// console.log(car.drive());