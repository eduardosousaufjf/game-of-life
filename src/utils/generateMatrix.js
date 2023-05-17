const generateMatrix = (rows, columns) => {
    return generateArray(rows, generateArray(columns))
}

const generateArray = (size, defaultValue = 0) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array[i] = defaultValue;
    }
    return array;
}

export default generateMatrix;
