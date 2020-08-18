let n = 7;

for (let i = 1; i <= n; i+=2) {
  let row = "";
  let space = "";

  // Border
  if (i == 1 || i == 7) {
    for (let j = n-i; j < n; j++) {
      row = row + "*";
    }
    
    for (let k = n-i; k > 0; k-= 2) {
      space = space + " ";
    }

  } else {
  // Inside 
    for (let j = n-i; j < n; j++) {
      if (j == n-i) {
        row = row + "*";
      }

      else if (j != n-1) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    
    for (let k = n-i; k > 0; k-= 2) {
      space = space + " ";
    }
  }

  row = space + row;

  console.log(row);
}
