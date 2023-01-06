// Take in an array of person objects
const findTheOldest = function(people) {

    // Initialize variables to hold the oldest person object and their age
    let oldestPerson;
    let oldestAge = 0;

    // FOR each person in `people`
    for (person of people) {

        // Define an empty variable to store the person's age
        let age;

        // IF the person is still living
        if (!person.yearOfDeath) {

            // Set their yearOfDeath to this year
            person.yearOfDeath = new Date().getFullYear();
        }

        age = person.yearOfDeath - person.yearOfBirth;

        //IF their age is greater than the current oldest
        if (age > oldestAge) {

            // Set the oldest person variables equal to the current one's values
            oldestAge = age;
            oldestPerson = person;

        }

    }

    // RETURN the oldest person
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
