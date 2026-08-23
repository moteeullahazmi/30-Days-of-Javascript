// function task(callback) {
//   console.log("Kaam start");
//   callback();  //done();
// }

// function done() {
//   console.log("Kaam khatam");
// }

// task(done);

// // Kaam start 
// // Kaam Khatam


// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);


let promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Kaam ho gaya");
  } else {
    reject("Error aa gaya");
  }
});


promise.then((data)=>{
    console.log(data)
})

promise.catch((error)=>{
    console.log(error)
})

promise.finally(()=>{
    console.log("Process end")
})