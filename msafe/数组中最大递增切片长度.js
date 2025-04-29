function solution(A) {
  if (A.length === 0) {
    return 0;
  }
  let currentLength = 1;
  let maxLength = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }
  maxLength = Math.max(maxLength, currentLength);
  return maxLength;
}



