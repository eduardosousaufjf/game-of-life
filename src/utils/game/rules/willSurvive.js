const willSurvive = (matrix, row, col) => {
    const upLeft = matrix[row - 1]?.[col - 1] || 0;
    const left = matrix[row]?.[col - 1] || 0;
    const downLeft = matrix[row + 1]?.[col - 1] || 0;

    const top = matrix[row -1]?.[col] || 0;
    const down = matrix[row + 1]?.[col] || 0;

    const upRight = matrix[row - 1]?.[col + 1] || 0;
    const right = matrix[row]?.[col + 1] || 0;
    const downRight = matrix[row + 1]?.[col + 1] || 0;

    const neighbours = upLeft + left + downLeft + top + down + upRight + right + downRight;
    const alive = matrix[row][col] === 1;
    // console.log('neighbours', neighbours);
    // console.log('alive', alive);
    // console.log('first', alive && [2, 3].includes(neighbours))
    // console.log('second', (!alive && neighbours === 3))
    return (alive && [2, 3].includes(neighbours)) || (!alive && neighbours === 3);
}

export default willSurvive;
