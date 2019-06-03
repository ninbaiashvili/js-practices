function upperCaseFirst(str) {
    if (typeof str != "string") {
        throw new Error('Not a string!');
    }
    else {
        const stringInUpperCase = str.toUpperCase();
        return stringInUpperCase;
    }
};

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''