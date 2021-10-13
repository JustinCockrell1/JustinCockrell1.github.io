const ages = [3,10,18,20];

function isAdult(age) {
    return age>=18;
}

const result = ages.findIndex(isAdult); //returns -1 if none found

console.log(result);