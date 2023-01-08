const fibonacci = function(num) {

    num = parseInt(num);

    // Check that input is positive
    if (num < 1) {
        return 'OOPS';
    }

    let accumulator = 1;
    let previous = null;

    for (let i = 0; i < num; i++) {

        if (previous != null) {
            const newVal = accumulator + previous;
            previous = accumulator;
            accumulator = newVal;
        } else {
            previous = 0;
        }
    }

    return accumulator;
};

// Do not edit below this line
module.exports = fibonacci;
