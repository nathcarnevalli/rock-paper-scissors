function getComputerChoice() {
  const result = Math.floor(Math.random() * 3)

  switch (result) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toUpperCase()
  const computer = computerSelection.toUpperCase()

  const capitalizedPlayerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

  const capitalizedComputerSelection =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

  if (player === 'ROCK' && computer === 'SCISSORS') {
    return `You win! ${capitalizedPlayerSelection} beats ${computerSelection}!`
  } else if (player === 'PAPER' && computer === 'ROCK') {
    return `You win! ${capitalizedPlayerSelection} beats ${computerSelection}!`
  } else if (player === 'SCISSORS' && computer === 'PAPER') {
    return `You win! ${capitalizedPlayerSelection} beats ${computerSelection}!`
  } else if (player === computer) {
    return 'Tie!'
  } else {
    return `You Lose! ${capitalizedComputerSelection} beats ${playerSelection}!`
  }
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
