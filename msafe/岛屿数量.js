var numIslands = function (grid) {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    let count = 0;
    const dfs = (i, j) => {
        // 将当前陆地格子标记为已访问（即变为水）
        grid[i][j] = '0';
        // 向上探索
        if (i > 0 && grid[i - 1][j] === '1') dfs(i - 1, j);
        // 向下探索
        if (i < m - 1 && grid[i + 1][j] === '1') dfs(i + 1, j);
        // 向左探索
        if (j > 0 && grid[i][j - 1] === '1') dfs(i, j - 1);
        // 向右探索
        if (j < n - 1 && grid[i][j + 1] === '1') dfs(i, j + 1);
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                // 每遇到一个新的陆地格子，进行一次深度优先搜索，岛屿数量加1
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
};