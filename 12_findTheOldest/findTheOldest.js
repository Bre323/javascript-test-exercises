const getAge = function(birth, death) {
    if(!death) {
        const currentYear = new Date().getFullYear();
        return currentYear - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
   return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge > currentAge ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
