function findRotatedIndex(arr, x) {

    let indx = 0;
    let leftBound = 0;
    let rightBound = arr.length - 1;

    // oh hey, we found it! Convenient!
    if (arr[indx] === x) return 0;

    // it's in the second half
    if (arr[indx] > x) leftBound = Math.floor((leftBound + rightBound) / 2);

    // it's in the first half
    if (arr[indx] < x) rightBound = Math.floor((leftBound + rightBound) / 2);

    // now do the usual binary search
    while (leftBound < rightBound) {
        indx = Math.floor((leftBound + rightBound) / 2);

        // found it. return.
        if (arr[indx] === x) return indx;

        // it must be further to the right
        if (arr[indx] < x) leftBound = indx + 1;

        // it must be further to the left
        if (arr[indx] > x) rightBound = indx - 1;
    }

    // check to see if it's the last one
    if (arr[leftBound] === x) return leftBound;

    // it's not there.
    return -1;

}

module.exports = findRotatedIndex