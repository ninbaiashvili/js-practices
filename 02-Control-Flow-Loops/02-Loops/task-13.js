var arr = [2, -5, 9, -15, 0, 4];
var sum = 0;

for (let i of arr) {
    if (i > 0) {
        sum += i;
    }
}
console.log(sum);
