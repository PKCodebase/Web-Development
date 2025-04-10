const  myArr = [1,4,6,9,]
console.log(myArr[0])

const myArr1 = new Array(1, 2, 3, 4)
console.log(myArr1[1])

myArr1.push(6)
console.log(myArr1)

myArr1.pop()
console.log(myArr1)

myArr1.unshift(9) //Add value first in array
console.log(myArr1)

myArr1.shift()
console.log(myArr1) //Remove value first from Array 


console.log(myArr1.includes(9)) //It check element exist or not
console.log(myArr1.indexOf(9)) 

const newArr = myArr1.join()   //Add the Array to another arra but return type is string
console.log(newArr)


console.log('-----------------------------------')

console.log("A", myArr1)
const myn1 = myArr1.slice(1,3)
console.log(myn1)
console.log("B", myArr1)

const myn2 = myArr1.splice(1, 3)   //Slice Splice important
console.log("C", myArr1)
console.log(myn2)