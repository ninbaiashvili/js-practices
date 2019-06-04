function upperCaseFirst(str) {
    if (typeof str != "string") {
        throw new Error('Not a string!');
    }
    else {
        const stringInUpperCase = str.charAt(0).toUpperCase() + str.slice(1);
        return stringInUpperCase;
    }
};

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''