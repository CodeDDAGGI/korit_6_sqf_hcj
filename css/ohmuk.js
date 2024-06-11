document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const board = document.getElementById('board');
    let cells = [];
    let currentPlayer = 'black';

    // Initialize the board
    for (let i = 0; i < boardSize; i++) {
        cells[i] = [];
        for (let j = 0; j < boardSize; j++) {
            cells[i][j] = board.rows[i].cells[j];
            cells[i][j].addEventListener('click', () => placeStone(i, j));
        }
    }

    function placeStone(row, col) {
        if (cells[row][col].classList.contains('black') || cells[row][col].classList.contains('white')) {
            return;
        }

        cells[row][col].classList.add(currentPlayer);

        if (checkWin(row, col, currentPlayer)) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            resetBoard();
        }

        currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    }

    function resetBoard() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                cells[i][j].classList.remove('black', 'white');
            }
        }
        currentPlayer = 'black';
    }

    function checkWin(row, col, player) {
        const directions = [
            { x: 1, y: 0 }, // Horizontal
            { x: 0, y: 1 }, // Vertical
            { x: 1, y: 1 }, // Diagonal down-right
            { x: 1, y: -1 } // Diagonal down-left
        ];

        for (const { x, y } of directions) {
            let count = 1;

            for (let step = 1; step < 5; step++) {
                const newRow = row + step * x;
                const newCol = col + step * y;
                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize && cells[newRow][newCol].classList.contains(player)) {
                    count++;
                } else {
                    break;
                }
            }

            for (let step = 1; step < 5; step++) {
                const newRow = row - step * x;
                const newCol = col - step * y;
                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize && cells[newRow][newCol].classList.contains(player)) {
                    count++;
                } else {
                    break;,
                }
            }

            if (count >= 5) {
                return true;
            }
        }

        return false;
    }
});