var fixedPoint = function (A) {
  const len = A.length;
  let minIndex = Number.MAX_SAFE_INTEGER;
  if (len < 1) return -1;

  // 這邊都以 index 為單位
  let start = 0;
  let end = len - 1;

  //  從中間開始切
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log("mid: " + mid);
    if (mid < A[mid]) {
      // 往左找
      end = mid - 1;
    } else if (mid > A[mid]) {
      // 往右找
      start = mid + 1;
    } else {
      minIndex = Math.min(minIndex, mid);
      end = mid - 1;
    }
  }
  // 如果上面都不符合代表找不到
  return minIndex == Number.MAX_SAFE_INTEGER ? -1 : minIndex;
};

console.log(fixedPoint([-10, -5, -2, 0, 4, 5, 6, 7, 8, 9, 10]));
