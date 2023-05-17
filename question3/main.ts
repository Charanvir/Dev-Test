/**
 * Connect4 Class
 * Represents a Connect 4 game board and provides methods to play the game.
 */
export class Connect4 {
  private grid: number[][]; // The game grid represented as a 2D array of numbers
  private currentPlayer: number; // The current player (1 or 2)
  private winner: number | null; // The winner of the game (1 or 2) or null if there is no winner yet

  /**
   * Creates an instance of the Connect4 class.
   * Initializes the game grid, current player, and winner.
   */
  constructor() {
    this.grid = [];
    for (let i = 0; i < 6; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 7; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.currentPlayer = 1;
    this.winner = null;
  }

  /**
   * Plays a move in the specified column.
   * @param col - The column number (0-6) where the player wants to place their token.
   * @returns A string indicating the result of the move.
   */
  play(col: number): string {
    if (this.winner !== null) {
      return "Game has finished!";
    }

    for (let row = 5; row >= 0; row--) {
      if (this.grid[row][col] === 0) {
        // Empty cell found, place the player's token
        this.grid[row][col] = this.currentPlayer;

        if (this.checkWin(row, col)) {
          // The current player wins the game
          this.winner = this.currentPlayer;
          return `Player ${this.currentPlayer} wins!`;
        } else {
          // Switch to the next player's turn
          const message = `Player ${this.currentPlayer} has a turn`;
          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
          return message;
        }
      }
    }

    // No empty cell found in the specified column
    return "Column full!";
  }

  /**
   * Checks if the current player has won the game.
   * @param row - The row number of the last placed token.
   * @param col - The column number of the last placed token.
   * @returns True if the current player has won, false otherwise.
   */
  private checkWin(row: number, col: number): boolean {
    // Check vertical
    let count = 0;
    for (let i = 0; i < 6; i++) {
      count = this.grid[i][col] === this.currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }

    // Check horizontal
    count = 0;
    for (let i = 0; i < 7; i++) {
      count = this.grid[row][i] === this.currentPlayer ? count + 1 : 0;
      if (count >= 4) return true;
    }

    return false;
  }
}

// Testing a vertical win
const gameExample: Connect4 = new Connect4();
console.log(gameExample.play(0));
console.log(gameExample.play(1));
console.log(gameExample.play(0));
console.log(gameExample.play(1));
console.log(gameExample.play(0));
console.log(gameExample.play(1));
console.log(gameExample.play(0)); // Expected Result is Player 1 wins

// Testing when a column is full
const gameExample2: Connect4 = new Connect4();
console.log(gameExample2.play(0));
console.log(gameExample2.play(0));
console.log(gameExample2.play(0));
console.log(gameExample2.play(0));
console.log(gameExample2.play(0));
console.log(gameExample2.play(0));
console.log(gameExample2.play(0)); // Expected Column Full
console.log(gameExample2.play(0)); // Expected Column Full

// Testing a horizontal win

const gameExample3: Connect4 = new Connect4();
console.log(gameExample3.play(0));
console.log(gameExample3.play(0));
console.log(gameExample3.play(1));
console.log(gameExample3.play(1));
console.log(gameExample3.play(2));
console.log(gameExample3.play(2));
console.log(gameExample3.play(3)); // Expected Player 1 Wins
console.log(gameExample3.play(3)); // Expected Game Finished
