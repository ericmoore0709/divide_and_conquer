function countZeroes(arr) {
  // if the last element is a 1, they're all 1s, no 0s.
  if (arr[arr.length - 1]) return 0;

  // if the first element is a 0, all of them are 0s.
  if (!arr[0]) return arr.length

  let count = 0;
  let leftBound = 0;
  let rightBound = arr.length - 1;

  // otherwise, take the halfway index
  while (leftBound < rightBound) {
    let indx = Math.floor((leftBound + rightBound) / 2);
    let val = arr[indx];

    // if it's a 1, we want something between this and rightBound
    if (val) {
      // update leftBound
      leftBound = indx + 1;
    } else {
      // if it's a 0, we know that everything from here to rightBound is a zero. Update count.
      count += (rightBound + 1 - indx)
      rightBound = indx - 1;
    }
  }

  if (!arr[((leftBound + rightBound) / 2)]) count++;
  return count;
}

module.exports = countZeroes