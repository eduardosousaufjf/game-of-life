import cloneArray from "../cloneArray";
import willSurvive from "./rules/willSurvive";

const nextTick = (matrix) => {
    const cloneMatrix = cloneArray(matrix);
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cloneMatrix[i][j] = willSurvive(matrix, i, j) ? 1 : 0
        }
    }
    return cloneMatrix;
}

export default nextTick;
