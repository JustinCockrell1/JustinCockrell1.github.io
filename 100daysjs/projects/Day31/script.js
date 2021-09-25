// console.log(window)
// console.log(Object.getOwnPropertyNames(window)) //638

//setItem():
//getItem():
//removeItem():
//clear():
//key():

//window.localStorage.setItem("key","value");
window.localStorage.setItem("firstName","Justin");
localStorage.setItem("lastName","Cockrell");

const person = {
    fullName: "Cockrell Justin",
    location: "Abuja",
}

localStorage.setItem("user",JSON.stringify(person))

const fruits = ["apple","banana","pineapple","Mango"]

localStorage.setItem("fruits",JSON.stringify(fruits))


//Get item from local storage
console.log(JSON.parse(localStorage.getItem("fruits")))

//remove item from local storage

localStorage.removeItem("fruits") //removes item with key fruits

//Clear local storage
// localStorage.clear()
console.log(localStorage.key(2)) //returns the nth key