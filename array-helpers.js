/////////////
// reduce
/////////////

const inventory = [
    { title: "Book1", price: 10},
    { title: "Book2", price: 20}
];

const totalPrice = function(inventory) {
    return inventory.reduce((total, book) => total + book.price, 0);
}

console.log(totalPrice(inventory));