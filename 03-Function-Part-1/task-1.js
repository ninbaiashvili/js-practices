function f(n) {
    if(typeof(n) ==='number') {
        return n ** 3;
    }
    else {
        throw Error('Not a Number');
    }
}

console.log(f(3));