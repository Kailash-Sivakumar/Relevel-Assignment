let binarySearch = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + parseInt(high - low / 2);

    if (arr[mid] == k) return mid;

    if (k > arr[mid]) low = mid + 1;
    else if (k < arr[mid]) high = mid - 1;
  }
  return false;
};

let search2DArray = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;
  let N = arr[0].length;
  while (low <= high) {
    let mid = low + parseInt(high - low / 2);

    if (arr[mid][0] <= k && arr[mid][N - 1])
      if (binarySearch(arr[mid], k))
        return ` [${mid}] [${binarySearch(arr[mid], k)}]`;
      else return false;

    if (arr[mid][0] > k) high = mid - 1;
    else if (arr[mid][N - 1] < k) low = mid + 1;
  }
  return false;
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];

console.log(search2DArray(matrix, 16));
