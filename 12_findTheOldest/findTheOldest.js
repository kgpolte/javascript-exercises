const findTheOldest = function(people) {
    return people.reduce((oldest, current) => getOlderPerson(oldest, current));
};

const getOlderPerson = function(oldest, current) {

    const thisYear = new Date().getFullYear();
    let currentAge;
    let oldestAge;

    if (!oldest.yearOfBirth) {
        return current;
    } else if (!oldest.yearOfDeath) {
        oldestAge = thisYear - oldest.yearOfBirth;
    } else {
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }

    if (!current.yearOfDeath) {
        currentAge = thisYear - current.yearOfBirth;
    } else {
        currentAge = current.yearOfDeath - current.yearOfBirth;
    }

    if (currentAge > oldestAge) {
        return current;
    } else {
        return oldest;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
