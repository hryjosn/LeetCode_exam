let count = 0;
function insertSort(array) {
  let len = array.length;

  // 總共比 n -1 輪
  for (let j = 0; j < len - 1; j++) {
    // 比較次
    for (let i = j + 1; i > 0; i--) {
      count++;
      if (array[i] < array[i - 1]) {
        swap(array, i - 1, i);
      }
    }
  }
  console.log(count);
  return array;
}
console.log(insertSort([8, 9, 2, 5, 1]));
// [1, 2, 5, 8, 9]
// count = 10
function swap(arr, index1, index2) {
  // 要先把第一個值存下來
  let tmpValue = arr[index1];
  arr[index1] = arr[index2];
  // 假如這邊寫 array[index2] = array[index1]; 那兩個值會是一樣的
  arr[index2] = tmpValue;
}
