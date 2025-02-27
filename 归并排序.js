const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  if (leftIndex < left.length) {
    result = [...result, ...left.slice(leftIndex)];
  }

  if (rightIndex < right.length) {
    result = [...result, ...right.slice(rightIndex)];
  }
  return result;
};

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
