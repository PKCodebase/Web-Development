let mydate = new Date();
console.log(mydate);
console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());

let createdDate = new Date(2023, 0, 23)
console.log(createdDate.toDateString());

let createdDate1 = new Date(2023, 0, 23, 5, 3,7)
console.log(createdDate1.toLocaleString());

let createdDate2 = new Date("2023-01-14")
console.log(createdDate2.toLocaleString());


let createdDate3 = new Date("01-14-2023")
console.log(createdDate3.toLocaleString());


console.log("------------------------------------")


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate3.getTime());
console.log(Math.floor(Date.now()/1000));


console.log("------------------------------------")


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
})  