const add = (a, b) => {
  return a + b;
};
console.log("add(55, 1) :", add(55, 1, 1001));

// *this* is no longer bound with arrow

const user = {
  name: "Bob",
  cities: ["Swindon", "Toronto", "Montreal"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 420, 69],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log("multiplier.multiply() :", multiplier.multiply());
