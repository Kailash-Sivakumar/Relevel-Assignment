//August 6

let rearrangeBinaryArray = (arr) => {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (arr[left] == 1 && arr[right] == 1) {
      right--;
    } else if (arr[left] == 0 && arr[right] == 1) {
      left++;
      right--;
    } else if (arr[left] == 0 && arr[right] == 0) {
      left++;
    } else if (arr[left] == 1 && arr[right] == 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  return arr;
};

let arr = [0, 1, 0, 1, 0, 1, 0, 0];
console.log(rearrangeBinaryArray(arr));
