import { playRound, getComputerChoice } from './utils.js'

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = 1
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
  }
}

game()
