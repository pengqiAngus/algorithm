const selectionSort = (array) => {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let smallLest = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[smallLest]) {
        smallLest = j;
      }
    }
    if (i !== smallLest) {
      [array[i], array[smallLest]] = [array[smallLest], array[i]];
    }
  }
  return array;
};

console.log(selectionSort([3, 1, 2, 66, 5, 4, 12, 45]));
