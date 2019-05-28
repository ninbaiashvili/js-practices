var unordered = [2, 5, 9, 15, 0, 4];
var ordered = [];

for (let number of unordered) {
    if (number > 3 && number < 10) {
        ordered.push(number);
        console.log(number);
    }
}
