const fruits = ["Banana","Orange","Apple","Mango"];

const result = fruits.includes("Banana"); //case sensitive

if (result){
    console.log("Banana detected");
}
else {
    console.log("No Banana detected");
}

console.log(result);
console.log(fruits.includes("Cashew"));

