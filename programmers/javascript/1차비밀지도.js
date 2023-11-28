function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    let a = binary(n, arr1[i]).reverse();
    let b = binary(n, arr2[i]).reverse();
    let box = [];
    for (let j = 0; j < n; j++) {
      if (a[j] + b[j] == "  ") {
        box.push(" ");
      } else {
        box.push("#");
      }
    }
    answer.push(box.join(""));
  }

  console.log(answer);
  return answer;
}

function binary(n, a) {
  let i = 0;
  let b = [];
  while (i < n) {
    if (a % 2 == 1) {
      b.push("#");
    } else {
      b.push(" ");
    }
    a = Math.floor(a / 2);
    i++;
  }
  return b;
}
