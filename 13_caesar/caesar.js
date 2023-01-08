const caesar = function(string, shift) {
    const charCodes = Array.from(string).map(char => char.charCodeAt(0));
    const encryptedCharCodes = charCodes.map(code => shiftCharCode(code, shift));
    const encryptedChars = encryptedCharCodes.map(code => String.fromCharCode(code));
    return encryptedChars.join('');
};

const shiftCharCode = function(code, shift) {

    let shiftedCode;

    if (code > 64 && code < 91) {
        shiftedCode = code + shift;
        while (shiftedCode > 90) {
            shiftedCode -= 26;
        }
        while (shiftedCode < 65) {
            shiftedCode += 26;
        }
    } else if (code > 96 && code < 123) {
        shiftedCode = code + shift;
        while (shiftedCode > 122) {
            shiftedCode -= 26;
        }
        while (shiftedCode < 97) {
            shiftedCode += 26;
        }
    } else {
        shiftedCode = code;
    }

    return shiftedCode;
};

// Do not edit below this line
module.exports = caesar;
