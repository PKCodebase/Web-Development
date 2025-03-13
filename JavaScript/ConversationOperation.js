let score = 33

console.log(typeof score)
console.log(typeof(score))

console.log("--------------------------------")

let score2 = "45ab"
let newValue = Number(score2)  // Type Conversion
console.log(typeof newValue)
console.log(newValue)  // If Coversation is not happen then it give NAN


console.log("------------------------------------------------")


let score3 = null
console.log(typeof score3)
let newValue2 = Number(score3)  // Type Conversion
console.log(typeof newValue2)
console.log(newValue2)  // If Coversation is not happen then it give 0


console.log("--------------------------")


let score4 = undefined
console.log(typeof score4)
let newValue3 = Number(score4)  //Type Coversion
console.log(typeof newValue3)   
console.log(newValue3)  // If Coversation is not happen then it give NAN


console.log("--------------------------")

let score5 = true
console.log(typeof score5)
let newValue4 = Number(score5)  //Type Coversion
console.log(typeof newValue4)
console.log(newValue4)  // If Coversation is not happen then it give 0,1

console.log("--------------------------")


let name = "kaushik"
console.log(typeof name)
let newValue5 = Number(name)  //Type Coversion
console.log(typeof newValue5)   
console.log(newValue5)  // If Coversation is not happen then it give true


console.log("---------------------------------------")



//"33" =>33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//1 => true; 0 => false
//"" => false
//"kaushik" => true

console.log("---------------------------------------")

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


console.log("----------------------------")

let value = 4
let negvalue = -value
console.log(negvalue)

console.log("----------------------------")
console.log(3+3)
console.log("3"+3)
console.log(3+3+"4"+3)
console.log("3"+4+6+4)

