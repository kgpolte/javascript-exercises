const palindromes = function (string) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    stringArray = Array.from(string.toLowerCase());
    reverseArray = Array.from(reverseString(string.toLowerCase()));
    
    cleanString = stringArray.filter(char => letters.includes(char)).toString();
    cleanReverse = reverseArray.filter(char => letters.includes(char)).toString();
    
    if (cleanString == cleanReverse) {
        return true;
    }
    return false;
};

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
module.exports = palindromes;
