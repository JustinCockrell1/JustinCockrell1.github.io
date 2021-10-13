const fruits = ["Banana","Orange","Apple","Mango"];

fruits.sort();

console.log(fruits);

const numbers = [4,2,5,1,3];

numbers.sort();

console.log(numbers)

const points = [40,100,1,5,25,10];

points.sort(compareFunction);

function compareFunction(a,b){
    //return a-b; //Ascending order
    return b-a; //Descending order
}

console.log(points);