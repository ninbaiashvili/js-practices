const newArr = [1,2,3];

forEach(newArr, function(item, i, arr) {
    console.log("item " + item);
    console.log("index - " + i);
    console.log("array - " + arr);
});

function forEach(myArr, callback) {
    if (Array.isArray(myArr)) {
        if (typeof callback === "function") {
            for (let i = 0; i < myArr.length; i++) {
                callback(myArr[i] , i , myArr);
            }
        } else {
            throw Error('not a Function');
        }
    } else {
        throw Error('Not an array');
    }
}
