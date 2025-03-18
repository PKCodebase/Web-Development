const marver_heros = ["thor","Ironman","Spidrman"]
const dc_heros = ["superman","flash","batman"]

// marver_heros.push(dc_heros)
 const allhero=marver_heros.concat(dc_heros)
console.log(marver_heros)
console.log(allhero)


const all_new_heros = [...marver_heros,...dc_heros]
console.log(all_new_heros)


console.log("------------------------")
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh")) //Check it is array or not
console.log(Array.from("Hitesh"))//convert into array
console.log(Array.from({name:"hitesh"})) //interesting  beacuse we are storing key vcalue pair
//  that's why it is giving empty


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


