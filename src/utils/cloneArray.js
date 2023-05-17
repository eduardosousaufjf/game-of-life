const cloneArray = (currentArray) => {
    return currentArray.map(function (arr) {
        return arr.slice();
    });
}

export default cloneArray;
