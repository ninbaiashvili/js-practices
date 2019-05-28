function f(){
    var sum = 0;
    for(i of arguments)
    {
        if(typeof(i) === 'number') {
            sum += i;
        }
        else {
            throw Error('All parameters type should be a number');
        }
    }
    return sum;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));