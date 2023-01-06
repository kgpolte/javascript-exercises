const caesar = function(string, shift) {

    // Alphabet definitions
    uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let encrypted = '';

    for (char of string) {

        // Try uppercase letters
        let charIndex = uppers.indexOf(char);
        if (charIndex >= 0) {

            let shiftedIndex = charIndex + shift;

            while (shiftedIndex > 25) {
                shiftedIndex = shiftedIndex - 26;
            }

            while (shiftedIndex < 0) {
                shiftedIndex = shiftedIndex + 26;
            }

            encrypted = encrypted + uppers.at(shiftedIndex);
            continue;
        }

        // If no uppercase match, Try lowercase letters
        charIndex = lowers.indexOf(char);
        if (charIndex >= 0) {

            let shiftedIndex = charIndex + shift;

            while (shiftedIndex > 25) {
                shiftedIndex = shiftedIndex - 26;
            }

            while (shiftedIndex < 0) {
                shiftedIndex = shiftedIndex + 26;
            }

            encrypted = encrypted + lowers.at(shiftedIndex);
            continue;
        }
        
        // Handle non-letter characters
        if (charIndex == -1) {
            encrypted = encrypted + char;
        }

    }

    return encrypted;

};

// Do not edit below this line
module.exports = caesar;
