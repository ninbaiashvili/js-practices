Object.prototype.extend = (o, p) => {
    // for (prop in p) {
    //     o[prop] = p[prop];
    // }

    // return o;
};

const source = {
    a: 'A',
    b: 'b'
};

Object.defineProperty(source, 'b', {
    writable: false
});

const data = { a: 'a' };

data.extend(
    source
);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false