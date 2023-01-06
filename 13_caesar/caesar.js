const caesar = function(string, shift) {

    uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    let encrypted = '';

    for (char of string) {

        if (!uppers.includes(char) && !lowers.includes(char)) {

            encrypted = encrypted + char;

        } else if (char.toUpperCase() == char) {

            const charIndex = uppers.indexOf(char);
            let newIndex = charIndex + shift;

            while (newIndex > 25) {
                newIndex = newIndex - 26;
            }

            while (newIndex < 0) {
                newIndex = newIndex + 26;
            }

            const newLetter = uppers.at(newIndex);
            encrypted = encrypted + newLetter;

        } else {

            const charIndex = lowers.indexOf(char);
            let newIndex = charIndex + shift;

            while (newIndex > 25) {
                newIndex = newIndex - 26;
            }
            
            while (newIndex < 0) {
                newIndex = newIndex + 26;
            }

            const newLetter = lowers.at(newIndex);
            encrypted = encrypted + newLetter;

        }

    }

    return encrypted;

};

// Do not edit below this line
module.exports = caesar;
