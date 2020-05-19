turn these things into variables

billOfBooty
treasureCut

// 1.'
// How can I send my bill and ta<xrate into the calculateBill
// How can I pass my bill and ta<xrate into the calculateBill
// pas in basketball

// 2.
//calculate inside calculateBill

// 3. Billy Bones the _____ ParrotLoving Pirate

function calculateBilly(billOfBooty, treasureCut) {
  const totally = billOfBooty * (1 - treasureCut);
  return totally;
}

const myTotalesBooty = calculateBilly(100, 0.33);
const myTotalBooty2 = calculateBilly(200, 0.33);
console.log(myTotalesBooty);

// 4.

// 5. retrun or return?
function sayHiOh() {
  return `Hi ${firstName}`;
}

const greetings = sayHiOh()
console.log(greetings)



// 6.

function doctor(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `YO ${name.toUpperCase()}`
}


yell(doctor('wes'))


// 7.

// 8.

// 9.

(" (>_>)");

function calculateBilly() {
  console.log("bill");
}

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log("Running Calculate Bill!!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
