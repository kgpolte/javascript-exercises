const reverseString = function(string) {
    if (string == '') {
        return string;
    }

    let output = '';
    for (let i = string.length - 1; i >= 0; i--) {
        output = output + string.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
