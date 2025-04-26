const fibonacci = function(num) {
    let temp = 0;
    let current = 1;
    let previous = 0;
    
    if(typeof num !== 'number') {
        parseInt(num);
    }
    if(num < 0) {
        return 'OOPS'
    }
    if(num == 0) {
        return 0;
    }
    
    for(let i = 1; i < num; i++) {
        temp = current;
        current += previous;
        previous = temp;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
