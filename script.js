// //        1. type conversion
// const inputNamber = "7500";
// console.log(inputNamber + 10);
// console.log(inputNamber);
// console.log(Number(inputNamber), inputNamber);
// console.log(typeof inputNamber);

// const birthday = 2002;
// console.log(String(birthday));

// const fristName = "Bishwajit";
// console.log(Number(fristName));

// const inputNamber = "7500";
// const fristName = "Bishwajit";
// console.log(Boolean(inputNamber));
// console.log(Boolean(fristName));

// //         2. javascript type coercion
// let booknumber = "5 ";
// console.log("I have " + booknumber + "story book");
// console.log("20" - 5);
// console.log("20" + 5);
// console.log("20" * 5);
// console.log("20" / 5);
// console.log("20" - "5");

// console.log(5 + 10 + 5 + "5");
// console.log("100" - "50" + "10");
// console.log("15" - "5" - "4" - "3" + "5");

// //        3. javascript turu and falsy value
// // 1. 0
// // 2. ""
// // 3.null
// // 4. undefined
// // 5.NaN

// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean(1));
// console.log(Boolean("Bishwajit"));
// console.log(Boolean(390));

// const Job = 0;
// if (Job) {
//   console.log("I Have a Good Job!");
// } else {
//   console.log("Looking  For a God Job");
// }

// let salary = 3000;
// if (salary) {
//   console.log("My salary is set!");
// } else {
//   console.log("my salary isn't set!");
// }

// //       4. conditional statements
// let earning = 15000;
// if (earning > 35000){
//   console.log("his earning is good!");
// }
// else if (earning > 2000) {
//   console.log("his  earning isn't bad");
// }

// let today = "tuesday";
// if (today === "saturday") {
//   console.log("Today 9pm we have a main live class!");
// } else if (today === "sunday") {
//   console.log("today 9pm we hava a support live class!");
// } else if (today === "monday") {
//   console.log("today 9pm we hava a main live class!");
// } else if (today === "tuesday") {
//   console.log("today 9pm we hava a support live class!");
// } else if (today === "wednesday") {
//   console.log("today 9pm we hava a main live class!");
// } else if (today === "thursday") {
//   console.log("today 9pm we hava a support live class!");
// } else {
//   console.log("today is our holiday");
// }

// //   5.  Nested conditional statements
// const x = 10;
// if (x >= 10) {
//   if (x == 10) {
//     console.log("x is equals to 10!");
//   } else {
//     console.log("x is greter than 10!");
//   }
// } else {
//   console.log("x is lower than 10!");
// }

// 6. switch statement
let day = "Sunday";

switch (day) {
  case "Saturday":
    console.log("Tday 9pm we have a live main class!");
    break;

  case "Sunday":
    console.log("Today 9pm we hava a support live class!");
    break;

  case "Monday":
    console.log("Tday 9pm we have a live main class!");
    break;

  case "Tuesday":
    console.log("Today 9pm we hava a support live class!");
    break;

  case "Wednesday":
    console.log("Tday 9pm we have a live main class!");
    break;

  case "Thursday":
    console.log("today 9pm we hava a support live class!");
    break;
  default:
    console.log("Today is our holiday!");
}
