function findFloor(arr, x) {

    if (arr[0] > x) return -1;
    if (arr[arr.length - 1] < x) return arr[arr.length - 1];

    let leftBound = 0;
    let rightBound = arr.length - 1;
    let result = -1;


    while (leftBound < rightBound) {
        let indx = Math.floor((leftBound + rightBound) / 2);
        let val = arr[indx];

        // console.log('(' + indx + ', ' + val + ')')

        if (val === x) return x;

        if (val < x) {
            result = val
            leftBound = indx + 1;
            // console.log('moving leftbound to: ' + leftBound)
        }

        if (val > x) {
            rightBound = indx - 1;
            // console.log('moving rightbound to: ' + rightBound)
        }
    }

    if (arr[leftBound] < x) result = arr[leftBound];

    return result;
}

module.exports = findFloor