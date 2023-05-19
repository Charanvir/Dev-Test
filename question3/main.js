"use strict";
exports.__esModule = true;
exports.Connect4 = void 0;
/**
 * Represents a node in the Connect4 grid.
 */
var GridNode = /** @class */ (function () {
    function GridNode(value) {
        this.value = value;
        this.top = null;
        this.bottom = null;
        this.left = null;
        this.right = null;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
    return GridNode;
}());
/**
 * Represents a Connect4 game.
 */
var Connect4 = /** @class */ (function () {
    /**
     * Creates a new instance of Connect4.
     */
    function Connect4() {
        this.currentPlayer = 1;
        this.grid = this.createGrid();
        this.gameFinished = false;
    }
    /**
     * Creates and initializes the Connect4 grid.
     * @returns The initialized grid as a 2D array of GridNodes.
     */
    Connect4.prototype.createGrid = function () {
        var ROWS = 6;
        var COLUMNS = 7;
        var grid = [];
        var firstRow = [];
        for (var c = 0; c < COLUMNS; c++) {
            firstRow.push(new GridNode(0));
            if (c > 0) {
                firstRow[c].left = firstRow[c - 1];
                firstRow[c - 1].right = firstRow[c];
            }
        }
        grid.push(firstRow);
        for (var r = 1; r < ROWS; r++) {
            var row = [];
            for (var c = 0; c < COLUMNS; c++) {
                row.push(new GridNode(0));
                if (c > 0) {
                    row[c].left = row[c - 1];
                    row[c - 1].right = row[c];
                    row[c].topLeft = grid[r - 1][c - 1];
                    grid[r - 1][c - 1].bottomRight = row[c];
                }
                if (c < COLUMNS - 1) {
                    row[c].topRight = grid[r - 1][c + 1];
                    grid[r - 1][c + 1].bottomLeft = row[c];
                }
                row[c].top = grid[r - 1][c];
                grid[r - 1][c].bottom = row[c];
            }
            grid.push(row);
        }
        return grid;
    };
    /**
     * Plays a move in the Connect4 game.
     * @param column - The column where the player wants to place their disc.
     * @returns The game status message based on the move.
     */
    Connect4.prototype.play = function (column) {
        if (this.gameFinished) {
            return "Game has finished!";
        }
        if (column < 0 || column >= this.grid[0].length) {
            return "Invalid column!";
        }
        var currentRow = this.grid.length - 1;
        while (currentRow >= 0) {
            if (this.grid[currentRow][column].value === 0) {
                this.grid[currentRow][column].value = this.currentPlayer;
                if (this.checkWin(currentRow, column)) {
                    this.gameFinished = true;
                    return "Player " + this.currentPlayer + " wins!";
                }
                var messageplayer = this.currentPlayer;
                this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
                return "Player " + messageplayer + " has a turn";
            }
            currentRow--;
        }
        return "Column full!";
    };
    /**
     * Checks if a player has won the game.
     * @param row - The row of the last placed disc.
     * @param column - The column of the last placed disc.
     * @returns True if a player has won, false otherwise.
     */
    Connect4.prototype.checkWin = function (row, column) {
        var player = this.grid[row][column].value;
        // Horizontal check
        var count = 1;
        var i = column - 1;
        while (i >= 0 && this.grid[row][i].value === player) {
            count++;
            i--;
        }
        i = column + 1;
        while (i < this.grid[row].length && this.grid[row][i].value === player) {
            count++;
            i++;
        }
        if (count >= 4) {
            return true;
        }
        // Vertical check
        count = 1;
        var j = row - 1;
        while (j >= 0 && this.grid[j][column].value === player) {
            count++;
            j--;
        }
        j = row + 1;
        while (j < this.grid.length && this.grid[j][column].value === player) {
            count++;
            j++;
        }
        if (count >= 4) {
            return true;
        }
        // Diagonal check: top-left to bottom-right
        count = 1;
        i = column - 1;
        j = row - 1;
        while (i >= 0 && j >= 0 && this.grid[j][i].value === player) {
            count++;
            i--;
            j--;
        }
        i = column + 1;
        j = row + 1;
        while (i < this.grid[row].length &&
            j < this.grid.length &&
            this.grid[j][i].value === player) {
            count++;
            i++;
            j++;
        }
        if (count >= 4) {
            return true;
        }
        // Diagonal check: top-right to bottom-left
        count = 1;
        i = column + 1;
        j = row - 1;
        while (i < this.grid[row].length &&
            j >= 0 &&
            this.grid[j][i].value === player) {
            count++;
            i++;
            j--;
        }
        i = column - 1;
        j = row + 1;
        while (i >= 0 && j < this.grid.length && this.grid[j][i].value === player) {
            count++;
            i--;
            j++;
        }
        if (count >= 4) {
            return true;
        }
        return false;
    };
    return Connect4;
}());
exports.Connect4 = Connect4;
