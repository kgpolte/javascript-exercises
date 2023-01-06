const fibonacci = function(num) {

    num = parseInt(num);

    // Check that input is positive
    if (num < 1) {
        return 'OOPS';
    }

    let accumulator = 1; // Initialize the accumulator to 1
    let previous = null; // Initialize the previous value to null

    // Run the Fibonacci algorithm <num> number of times
    for (let i = 0; i < num; i++) {

        // IF previous is NOT null
        if (previous != null) {
            
            // Add the accumulator and previous values together
            // Store the value in a new variable
            const newVal = accumulator + previous;

            // Update the value of previous to the current value of the accumulator
            previous = accumulator;

            // Update the value of accumulator to equal the new value
            accumulator = newVal;

        } else {
            // ELSE initialize the previous value to 0
            previous = 0;
        }

    }

    return accumulator;
};

// Do not edit below this line
module.exports = fibonacci;
