const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }

    let start;
    let end;
    let sum = 0;

    if (num1 > num2) {
        start = num2;
        end = num1;
    } else if (num2 > num1) {
        start = num1;
        end = num2;
    }

    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
