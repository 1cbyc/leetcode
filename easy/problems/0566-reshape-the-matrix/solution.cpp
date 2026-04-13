class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int rows = mat.size();
        int cols = mat[0].size();
        if (rows * cols != r * c) {
            return mat;
        }

        vector<vector<int>> result(r, vector<int>(c));
        for (int index = 0; index < rows * cols; index++) {
            result[index / c][index % c] = mat[index / cols][index % cols];
        }
        return result;
    }
};
