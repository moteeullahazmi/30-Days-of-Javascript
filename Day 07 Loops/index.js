// for (
//   i = 1;
//   i <= 5;
//   i++ //i=6
// ) {
//   console.log(i); //1,2,3,4,5
// }

// console.log("The value of", i); // string number
// console.log("The value of" + i); //string

// // "azmi"5

// // for (initalization; condition; increament){

// }

// for(i=1; i<=100; i++){

//     if(i%2==0){
//         console.log(i)
//     }
// }

// // 2,4,6,8,10

// for (i=10; i>=1;i--){
//     console.log(i)
// }

// for loop range ptaa ho 1-100
// while only condition ptaa ho
// do-while pahle ek print line uske condition check ho p

// let i = 1;
// while (i <= 5) {
//   i++;
//   console.log(i);
// }

// let i = 1;
// while (i<=2) {

//   console.log(i);
//   i++;

// }

// let i=1 ;
// do{
//     console.log(i)
//     i++;

// } while(i<=5)

// let i=10;
// // while(i<5) {
// //     console.log(i)
// // }

// do{
// console.log(i)
// i++;
// } while(i<5)

//     console.log(i)

// for (let i=1; i<=5; i++){

//     if(i==3){
//        continue;  //1,2,4,5
//     }

//     console.log(i);
// }

// for(){
//     for(){

//     }
// }

// for(let row=1; row<=3; row++){

//     for(let col=1; col<=3;col++){
//         console.log(row,col)
//     }
// }

//  0 1 2
// let i=10;
// for (; ; i--){

//     if(i==-1){

//          console.log(i);
//           break;

//     }
// }

// let password = "";

// while (password !== "123456") {
//   password = prompt("Enter Password");
// }

// console.log("Login Success");


// for (i=1; i<5;i++){
//     for (j=1;j<=10;j++){

//         if(j==10)
//         {
//             console.log(`i is value ${i}, j is value ${j}`);
//         }
//     break;
//     }
// }



// for(let row=1; row<=3;row++){

//     console.log("row value is", row);
//       // i value is 1 
//     for (let col=1; col<=3; col++){

//         console.log(row,col)
//     }


// }



for (let i=1; i<=3; i++){

    let stars ="" ;

    for(let j=1;j<=i; j++){
        stars += "*";  
    }

    console.log(stars)
}
