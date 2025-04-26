const repeatString = function(str, times) {
    let newStr = '';

    if(times < 0) {
        return 'ERROR';
    }

    for(let i = 0; i < times; i++) {
        newStr += str;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
