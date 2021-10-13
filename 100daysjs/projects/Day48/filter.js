const ages = [16,18,14,34,33,12];

const result = ages.filter(isAdult);

function isAdult(age){
    return age>=18;
}

console.log(result);

const numbers = [1,2,3,4,5,6,7,8];

const even = numbers.filter((n)=>{
    return n%2===0;
});

console.log(even);