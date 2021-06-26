//Implement_section_sort
function SelectionSort(array) {
  let len = array.length;
  let indexMin;
  // 總共比 n -1 輪
  for (let j = 0; j < len - 1; j++) {
    indexMin = j;
    // 比較次
    for (let i = j; i < len; i++) {
      if (array[indexMin] > array[i]) {
        indexMin = i;
      }
    }
    // 比完這一輪才交換
    swap(array, j, indexMin);
  }
  return array;
}
console.log(SelectionSort([8, 9, 2, 5, 1]));

function swap(arr, index1, index2) {
  // 要先把第一個值存下來
  let tmpValue = arr[index1];
  arr[index1] = arr[index2];
  // 假如這邊寫 array[index2] = array[index1]; 那兩個值會是一樣的
  arr[index2] = tmpValue;
}
