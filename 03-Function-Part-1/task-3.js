var f = function(a,b,c) {

  for (let i of arguments) {
      if (typeof i !== 'number' ) {
          throw Error('All parameters type should be a number');
      }
  }
  
  return (a - b) / c;
}

console.log(f(9,3,2));
console.log(f('s',9,3));