var number = prompt("Enter # below.\n***NOTE: Do NOT pick a large number or calc will take a LONG time***");
var i = 2;
var j = 2;
var isPrime;
var greatestPrime;
var factors = [];
var primeFactors = [];

if (number < 1){
    console.log("Number must be a positive integer.");    
}
else if (number == 1){
    console.log("The number 1 is NOT prime and has no factors.");
}
else if (number == 2){
    console.log("The number 2 is prime and its largest factor is 2.");
}
else{

    // Add all factors to array
    for (j = 2; j < number; j++){
        if (number % j === 0){
            factors.push(j);
        }
    }
    
    // If no factors, number is prime. Otherwise print output and check for prime factors.
    if (factors.length === 0){
        console.log(number +" is a prime number.");
    }
    else{
        
        console.log("Factors of "+ number);
        console.log(factors);
        
        var index;
        for(index = 0; index < factors.length; index++){
            
            // Check if prime
            isPrime = true;
            i = 2;
            while (i < factors[index]){
                if (factors[index] % i === 0){
                    isPrime = false;
                    break;
                }
                i++;
            }
            // Uncomment below to output if each factor is prime
            // console.log(factors[index] +" is prime? - "+ isPrime);
            
            // If prime add to array of primes
            if (isPrime){
                primeFactors.push(factors[index]);    
            }
        
        }
        
        // Output list of primes and largest prime factor
        console.log("Prime factors of "+ number);
        console.log(primeFactors);
        console.log("The largest prime factor of "+ number +" is "+ primeFactors[(primeFactors.length - 1)]);

    }


}