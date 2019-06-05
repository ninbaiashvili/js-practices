Object.prototype.extend = function(obj) {
    Object.getOwnPropertyNames(obj).forEach(
        (key) => {
            if(!this.hasOwnProperty(key)) {
                Object.defineProperty(this, key, Object.getOwnPropertyDescriptor(obj, key));
            }
        }
    );

    return this;
};

const source = {
    a: 'A',
    b: 'b'
};

Object.defineProperty(source, 'b', {
    writable: false
});

const data = {
    a: 'a'
};

data.extend(
    source
);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false