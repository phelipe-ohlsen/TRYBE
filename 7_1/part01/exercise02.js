const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s.reverse();
  const index = s.indexOf(7);
  s.splice(index, 1);
  s.push(7);

  return s
  // Only change code above this line
}

editInPlace();
