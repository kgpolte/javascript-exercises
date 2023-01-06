const removeFromArray = function(array, ...elements) {
    for (element of elements) {
        if (array.includes(element)) {
            array.splice(array.indexOf(element), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
