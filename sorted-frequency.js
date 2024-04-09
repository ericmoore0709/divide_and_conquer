function sortedFrequency(arr, x) {
    // if it's outside the array bounds, it's not in the array
    if (arr[0] > x || arr[arr.length - 1] < x) return -1;

    // set default boundaries
    let leftBound = 0;
    let rightBound = arr.length - 1;

    let firstIndx = 0;

    // search for index of first instance of x
    while (leftBound < rightBound) {
        let indx = Math.floor((leftBound + rightBound) / 2);

        // if the value is less than x, set leftBound to continue right
        if (arr[indx] < x) leftBound = indx + 1;

        // whether it's equal or less than, we probably want to set the rightbound and continue left (until rightBound and leftBound are the same -- the first instance!)
        else rightBound = indx - 1;
    }

    // set the first index to the leftBound (because left and right bounds are likely the same by now)
    firstIndx = leftBound;

    // set up for the second binary search
    let secondIndx = rightBound;

    // reset boundaries, but left must be the first index
    leftBound = firstIndx;
    rightBound = arr.length - 1;

    // search for the final instance
    while (leftBound <= rightBound) {
        let indx = Math.floor((leftBound + rightBound) / 2);

        // if the value is bigger, we need to set right bound and continue left 
        if (arr[indx] > x) rightBound = indx - 1;

        // otherwise, set leftBound and continue to the right
        else leftBound = indx + 1;
    }

    // the leftBound should now be the index of the last instance of x 
    secondIndx = leftBound;

    // return the difference
    return secondIndx - firstIndx;
}

module.exports = sortedFrequency