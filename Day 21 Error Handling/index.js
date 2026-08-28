// try{
//     let result = JSON.parse("Invalid json");
// } catch(error) {
//     console.log("Something went wrong")
// }


// try{
//     y=10;
//     let x= y+10;
//     console.log(x)
// } catch(error){
//     console.log(error.message)
// }


// let age =19

// if(age< 18){
//     throw new Error("Not eligible")

// }


// try {
//     console.log("Try Block")
// } catch(err){
//     console.log("Error")
// } finally{
//     console.log("Always run")
// }

// class ValidationError extends Error{
//     constructor(message) {
//         super(message)
//         this.name = "ValidationError"
//     }
// }

// throw new ValidationError("Invalid output")


function withdraw(balance, amount){
    if(amount >balance) {
        throw new Error ("Insufficient balance")
    }
    return balance - amount
}

try{
    withdraw(1000,2000)
}catch (err){
    console.log(err.message)
}