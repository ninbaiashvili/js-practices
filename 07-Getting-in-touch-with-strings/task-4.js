function extractCurrencyValue(source) {
    if (typeof source != "string") {
        throw new Error('Boooo, not a string !');
    }
    return parseInt(source.slice(1));

};

console.log(extractCurrencyValue('$120')); // 120