const foods = ["nasi goreng", "nasi kuning"]
const foods2 = ["jus mangga", "jus jeruk"]

// foods[2] = "test"
// foods.push("nasi uduk")
const newFoods = [...foods, ...foods2] 

const name = {
    firstName: "muhammad",
    lastName: "risano",
    makanan: [...foods]
}

const name2 = {...name}
name2.firstName = "andi"
name2.lastName = "pratama"
// const newName ={
//     ...name,
//     email : "risanoakbar@gmail.com"
// }
// console.log(name)
console.log(name)
