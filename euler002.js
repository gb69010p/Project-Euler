var max = prompt("Up to what number?");
var evenFibonacci = [];

// Add all 
var evenFib = function (maxFib){
    var first = 1;
    var second = 2;
    var temp;
    
    // Add even fibonnaci numbers to array
    while (second < maxFib){
        if (second % 2 === 0){
            evenFibonacci.push(second);
        }
        temp = first;
        first = second;
        second += temp;
    }
    return evenFibonacci;
};

// Calculate sum of fibonnaci array
var sumFib = function (fibSeq){
  var sum = 0;
  
  for (var i = 0; i < fibSeq.length; i++){
      sum += fibSeq[i];
  }
  return sum;
};

// Calculation and output
console.log(evenFib(max));
console.log("Sum of even fibonnaci numbers: "+ sumFib(evenFibonacci));
