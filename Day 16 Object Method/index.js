// // // // const user = {
// // // //     name: "Rahul",
// // // //     age: 25,
// // // //     role: "Tester"
// // // // };

// // // // const result  = Object.keys(user);

// // // // console.log(result);

// // // // const user = {
// // // //     id: 101,
// // // //     name: "Pushkar",
// // // //     role: "Tester"
// // // // };

// // // // const keys = Object.keys(user);

// // // // console.log(keys)

// // // const user ={
// // //     name: "Rahul",
// // //     age: 25,
// // //     role: "Tester"
// // // };

// // // const result = Object.values(user);

// // // console.log(result);

// // // const user = {
// // //     name: "Ehteshaam",
// // //     age:25,
// // //     role: "Tester"
// // // };

// // // const result = Object.entries(user);

// // // console.log(result)

// // // const user = {
// // //     name: "Rahul",
// // // };

// // // const details = {
// // //     role:"tester",
// // //     experience: 2
// // // }

// // // const address={
// // //     city: "Lucknow"
// // // }

// // // const result = Object.assign({},user,details,address);

// // // console.log(user)
// // // console.log(details)

// // // console.log(result)

// // const config ={
// //     browser : "Chroome",
// //     timeout: 5000
// // }

// // Object.freeze(config);

// // config.timeout = 10000;  //update
// // config.headless = false;  // add

// // delete config.browser;   //delete

// // console.log(config)

// const user = {
//     name: "rahul",
//     role: "tester"
// };

// Object.seal(user);

// user.role="Developer"

// user.age = 25  //add X
// delete user.name;

// console.log(user)

const user = {
  name: "Rahul",
  role: "Tester",
  experience: 2,
};

console.log(Object.keys(user));  //[ name, role, experience]

console.log(Object.values(user));  // [rahul, tester,2]

console.log(Object.entries(user)); // {[name: rahul ], [role:tester]}

const updatedUser = Object.assign({}, user, {
  experience: 3,
});

console.log(updatedUser);

Object.freeze(user);

Object.seal(updatedUser);