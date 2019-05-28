var f = function(day) {

  if (typeof day !== 'number') {
      throw Error('All parameters type should be a number');
  } else if ( day < 1 || day > 7 ) {
      throw Error('Parameter should be in the range of 1-7');
  }

  var week = [
    'Noday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return week[day];
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));