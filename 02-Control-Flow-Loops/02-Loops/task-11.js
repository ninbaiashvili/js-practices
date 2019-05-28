var unordered = [27, 0, 9, 5, 34, -6];
var ordered = [];

for (let number of unordered) {
    let i = 0;
    for (let a of unordered) {
        if (number > a) {
            i++;
        }
    }
    ordered[i] = number;
}

console.log(ordered);
