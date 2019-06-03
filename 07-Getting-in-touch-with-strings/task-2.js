function checkSpam(source, example) {
    if (typeof source != "string" || typeof example != "string") {
        throw new Error('Not a string!');
    }
    const sourceLow = source.toLowerCase();
    const exampleLow = example.toLowerCase();
    
    return sourceLow.includes(exampleLow);
};

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'comnj')); // true