// const numbers = [1,2,3,4]

// const results = numbers.map(function(num){ //2
//     return num *5;
// })

// console.log(results);

// const users = ["aman", "rahul", "neha"];

// const results = users.map(function (user){
//     return user.toUpperCase();
// })

// console.log(results);

// const numbers = [10, 20, 30,16,24,90,345,98,67];

// const result = numbers.filter(function (num){
//     return num >=10
// });

// console.log(result);

// const users = ["Rahul", "Aman", "Neha", "Azmi", "Swapnil", "Pushkar", "Ehtesham" ];

// const result = users.filter(function (user) {
//   return user.startsWith("P");  //a start name
// });

// console.log(result);

// const numbers = [10,20,30,50,60]; //60

// const total = numbers.reduce(function (sum,num){
//     return sum+num;
// },0)

// console.log(total);

// const prices = [500, 700, 1000];

// const total = prices.reduce(function (sum, price) {
//   return sum + price;
// }, 0);

// console.log(total);

// const numbers = [5,101,10,15,20,66,78,12,102];

// const resultFind = numbers.find(function(num){
//     return num>100
// })

// const resultFilter = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log("Find = ", resultFind)
// console.log("Filter = ", resultFilter);

// const users= [
//     "Pushkarrrr",
//     "Ehtesham",
//     "Swapnil"
// ]
// const result = users.some(function (user){
//     return user === "Pushkar"
// })

// console.log(result)

// const numbers = [2, 4, 6, 10,9];

// const result = numbers.every(function (num) {
//   return num % 2 == 0;
// });

// console.log(result);

// const marks= [90,85,80,34];

// const result = marks.every(function (mark){
//     return mark >=35;
// })

// console.log(result);

// const students = [100, 6,7,9,20,30]

// students.reverse()
// console.log(students)

// let constan = [
//   [1, 2],
//   [3, 4,[1,2,3],[1,3,[1,2,4,[1],],],],
// ]

// const result = constan.flat(Infinity);
// console.log(result)

// const student = ["Pushkar", "Azmi", "Ehteshaam"];

// const numbers = [11, 9, 7, 8, 90];

// numbers.sort(function (a,b){
//   return a-b;
// })

// console.log(numbers)  // 7,8,9,11,90

const numbers = [100, 5, 20, 50];

numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);  //[100,50 ,20,5]