let covertToTwoDArray = (arr) => {
  //declaring a 2d array
  let result = new Array(5).fill(0).map((e) => new Array(2).fill(0));
  let k = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      result[i][j] = arr[k++];
    }
  }
  return result;
};

let matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(covertToTwoDArray(matrix));
