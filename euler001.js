var multiples = [];
var num = 1000;
var sum = 0;

for (var i = 1; i < num; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        multiples.push(i);
    }
}

for (var j = 0; j < multiples.length; j++) {
    sum += multiples[j];
}

console.log("Sum of multiples of 3 and 5 under "+ num +" is: "+ sum);