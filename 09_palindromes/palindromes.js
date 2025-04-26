const palindromes = function (str) {
    const alfanumeric = /[a-zA-Z0-9]+/i;
    const cleanString = str
        .toLowerCase()
        .split('')
        .filter((char) => alfanumeric.test(char))
        .join('');
    const reverseString = cleanString.split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
