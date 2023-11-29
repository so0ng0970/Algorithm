function solution(k, m, score) {
  var answer = 0;
  let a = score.sort((a, b) => b - a);
  let add = [];
  for (let i = 1; i <= score.length; i++) {
    let index = {};
    if (i % m == 0) {
      index = i - 1;
    }

    if (a[index] !== undefined) {
      add.push(a[index] * m);
    }
  }
  for (let j = 0; j < add.length; j++) {
    answer += add[j];
  }
  return answer;
}
