const insertSort = (array) => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      array[j] = current;
      j--;
    }
  }
  return array;
};
console.log(insertSort([64, 34, 25, 12, 22, 11, 90]));

