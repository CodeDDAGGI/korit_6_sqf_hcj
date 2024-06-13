document.addEventListener('DOMContentLoaded', function() {
    const boardSize = 15;
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    let currentPlayer = 'black';
    let gameState = Array(boardSize).fill().map(() => Array(boardSize).fill(null));

    // 보드 초기화
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
    }

    function handleCellClick(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;

        if (gameState[row][col] !== null) {
            return;
        }

        gameState[row][col] = currentPlayer;
        event.target.appendChild(createStone(currentPlayer));

        if (checkWin(row, col)) {
            status.textContent = `${currentPlayer === 'black' ? '흑' : '백'}이 승리했습니다!`;
            board.removeEventListener('click', handleCellClick);
        } else {
            currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
            status.textContent = `${currentPlayer === 'black' ? '흑' : '백'}의 차례입니다`;
        }
    }

    function createStone(player) {
        const stone = document.createElement('div');
        stone.className = player;
        return stone;
    }

    function checkWin(row, col) {
        row = parseInt(row);
        col = parseInt(col);
        const directions = [
            [[0, 1], [0, -1]], // 가로
            [[1, 0], [-1, 0]], // 세로
            [[1, 1], [-1, -1]], // 대각선 (\)
            [[1, -1], [-1, 1]] // 대각선 (/)
        ];

        for (const direction of directions) {
            let count = 1;
            for (const [dx, dy] of direction) {
                let x = row + dx;
                let y = col + dy;
                while (x >= 0 && x < boardSize && y >= 0 && y < boardSize && gameState[x][y] === currentPlayer) {
                    count++;
                    x += dx;
                    y += dy;
                }
            }
            if (count >= 5) {
                return true;
            }
        }
        return false;
    }
});
