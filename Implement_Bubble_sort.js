//Bubble_Sort

function BubbleSort(array) {
  let len = array.length;
  let count = 0;
  // 總共比 n -1 輪
  for (let j = 0; j < len - 1; j++) {
    // 比較次
    for (let i = 0; i < len - j - 1; i++) {
      count++;
      if (array[i + 1] < array[i]) {
        swap(array, i, i + 1);
      }
    }
  }
  console.log(count);
  return array;
}
console.log(BubbleSort([8, 9, 2, 5, 1])); // [ 1, 2, 5, 8, 9 ]
// 先把交換寫好 之後會一直用到
function swap(arr, index1, index2) {
  // 要先把第一個值存下來
  let tmpValue = arr[index1];
  arr[index1] = arr[index2];
  // 假如這邊寫 array[index2] = array[index1]; 那兩個值會是一樣的
  arr[index2] = tmpValue;
}
