// let firstName = "pankaj";
// let lastName = "sharma";
// console.log(`Hello, ${firstName} ${lastName}`);

// +++++++++++++++++++++++++++++++++++++++++++++++

// let gender = "male";
// if (gender == "male") {
//   console.log(`Hello ${firstName}`);
// } else {
//   console.log("It's female");
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// let ans = 0;
// for (let i = 1; i <= 1000; i++) {
//   ans += i;
// }
// console.log(ans);

// ++++++++++++++++++++++++++++++++++++++++++++++++

const numbers = [1, 2, 30, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++
// let biggestNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > biggestNum) {
//     biggestNum = numbers[i];
//   }
// }
// console.log(biggestNum);

// +++++++++++++++++++++++++++++++++++++++++++++++

// let users = [
//   { name: "pankaj", gender: "male" },
//   { name: "kirat", gender: "male" },
//   { name: "Rama", gender: "female" },
// ];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].gender === "male") {
//     console.log(users[i].name);
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(numbers.reverse());

// ++++++++++++++++++++++++++++++++++++++++++++++++

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 5));

// ++++++++++++++++++++++++++++++ Bounty +++++++++++++++++++++++

// let sum = 0;
// for (let i = 0; i < 1000000000000; i++) {
//   sum = sum + i;
// }
// console.log(sum); // this will take a lot of time and will be very slow

// +++++++++++++++++++++++++++++++++++++++++

function sum(num1, num2, fn) {
  let result = num1 + num2;
  fn(result);
}

function displayResult(data) {
  console.log("Result of the sum: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

let answer = sum(1,2,displayResult);
// displayResult(answer);
// displayResultPassive(answer);
