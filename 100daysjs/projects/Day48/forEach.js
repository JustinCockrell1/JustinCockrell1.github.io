const days = ["mon", "tue","wed","thur","fri","sat","sun"];

days.forEach((item,index)=>{
    console.log(`Day ${index+1} = ${item}`);
});

// function myFunction(item, index, arr) {
//     console.log(item);
// }

const numbers = [54,34,23,12,64,4325,23];
let sum = 0;
numbers.forEach((item)=>{
    sum+=item;
});
console.log(sum);