// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a);
//     console.log(b);
//   }

//   inner();
// }

// outer();

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// let fn = outer();

// fn(); //1
// fn(); //2
// fn();  //3

// function createCounter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//   };
// }

// let counter = createCounter();

// counter.increment(); //1

// counter.increment(); //2
// counter.decrement();  //1

// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// let double = multiply(2);
// let triple = multiply(3);

// console.log(double(5));   //10
// console.log(triple(5));  // 15

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}