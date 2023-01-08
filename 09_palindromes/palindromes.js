const palindromes = function (string) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const stringArray = Array.from(string.toLowerCase());
    const reverseArray = Array.from(reverseString(string.toLowerCase()));
    
    const cleanString = stringArray.filter(char => letters.includes(char)).toString();
    const cleanReverse = reverseArray.filter(char => letters.includes(char)).toString();
    
    if (cleanString == cleanReverse) {
        return true;
    }
    return false;
};

const reverseString = function(string) {
    if (string == '') {
        return string;
    }

    const stringArray = [...string];
    return stringArray.reduce((accumulator, currentValue) => {
        return currentValue.concat(accumulator);
    });
};

// Do not edit below this line
module.exports = palindromes;
