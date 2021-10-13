const ages = [3,10,18,20];

function isAdult(age) {
    return age >= 18;
}

const result = ages.find(isAdult);

console.log(result);

const fruits = [
    {name:"a",quantity:2},
    {name:"b",quantity:3},
    {name:"c",quantity:4}
];

const fruitResult = fruits.find(({name})=>name=="b");
console.log(fruitResult);