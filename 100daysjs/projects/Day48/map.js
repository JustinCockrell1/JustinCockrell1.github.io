const numbers = [1,2,3,4,5];

const doubled = numbers.map(doubleNum);

function doubleNum(n){
    return n*2;
}

console.log(doubled);
console.log(numbers);

const people = [
    {
        fname:"a",
        lname:"b"
    },
    {
        fname:"c",
        lname:"d"
    }
];

const fullNames = people.map((person)=> `FullName ${person.fname} ${person.lname}`);

console.log(fullNames);