// Take in an array of book objects
const getTheTitles = function(books) {

    // Create an empty Array to store all the titles
    let titles = [];

    // FOR each book in `books`
    for (book of books) {

        // Add the title of the book to the Array of titles
        console.log(book.title);
        titles.push(book.title);
    }

    // Return the Array of titles
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
