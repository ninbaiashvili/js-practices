function truncate(string, maxlength) {
    if (typeof string != "string" || typeof maxlength != "number") {
        throw new Error('Boooo, not cool !');
    }
    if (string.length > maxlength) {
        const str = maxlength - 3;
        const subString = string.slice(0, str) + '...';
        return subString;
    }

};

console.log(truncate('I wanna to say next thing about this topic', 22)); // 'I wanna to say next...'