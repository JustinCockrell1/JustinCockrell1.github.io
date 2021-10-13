const ages = [16,18,14,34,33,12];

const results = ages.some(isAdult); //as long as one item passes the test

function isAdult(age) {
    return age>=18;
}

console.log(results);