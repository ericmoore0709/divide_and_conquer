function findRotationCount(arr) {
    // if the first value is smaller than the last, the array wasn't rotated.
    if (arr[0] < arr[arr.length - 1]) return 0;

    // set left and right bounds as first and last indices by default
    let leftBound = 0;
    let rightBound = arr.length - 1;

    // get the middle value
    let currIndx = Math.floor((leftBound + rightBound) / 2);

    // if the middle value is greater than the first value, the rotation hasn't happened yet. Set leftBound here to continue right.
    if (arr[currIndx] > arr[0]) leftBound = currIndx;
    // if the middle value is smaller than the first value, the rotation has already happened. Set rightbound here to continue left.
    else rightBound = currIndx;

    // continue binary search
    while (leftBound <= rightBound) {
        // get middle value
        currIndx = Math.floor((leftBound + rightBound) / 2);
        
        // if the value to the left is smaller, we haven't yet reached the rotation. Continue right.
        if (arr[currIndx - 1] < arr[currIndx]) leftBound = currIndx + 1;
        // if the value to the left is bigger, the index of the right is the rotation. Return it.
        else return currIndx;
    }
    // something went horribly wrong. Please send help.
    return -1;
}

module.exports = findRotationCount