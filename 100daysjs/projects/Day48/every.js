//const ages = [16,18,14,34,33,12];
const ages = [18,34,33];

const result = ages.every(isAdult);

function isAdult(age) {
    return age>=18;
}

console.log(result)