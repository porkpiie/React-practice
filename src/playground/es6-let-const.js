var nameVar = "memes";
var nameVar = "Plebs";
console.log("nameVar", nameVar);

let nameLet = "Jen";
console.log("nameLet", nameLet);
nameLet = ";lkasdjf";
console.log("nameLet", nameLet);

const nameConst = "peach";
console.log("nameConst :", nameConst);

// will not reassign or error nameConst = "peach"
// nameConst = "durp";
// console.log("nameConst :", nameConst);

// Block Scoping

const fullName = "Foo Bar";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log("firstName :", firstName);
}

console.log("firstName :", firstName);
