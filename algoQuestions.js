/*
pascal triangle

       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
  1 5 10 10 5 1
 1 6 15 20 15 6 1
1 7 21 35 35 21 7 1
*/

function pascal(n) {
  if (n === 1) {
    console.log(['1']);
  } else if (n === 2) {
    console.log([[1], [1, 1]]);
  } else {
    const ans = [[1], [1, 1]];

    for (let i = 2; i <= n; i++) {
      // lines
      const newLine = [];
      for (let j = 0; j < i; j++) {
        // inLine
        // if (j===0) 1 else if (j===i-1) 1 :
        const newNum = ans[i][j] + ans[i][j + 1];
        newLine.push(newNum);
      }
      ans.push(newLine);
    }
    console.log(ans);
  }
}

/* return the kth largest element */
function largest(array, k) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > ans) {
      ans = array[i];
    }
    return ans;
  }
}
