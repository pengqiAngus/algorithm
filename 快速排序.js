const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array.pop();
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
