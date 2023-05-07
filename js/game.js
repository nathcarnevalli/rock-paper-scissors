function getComputerChoice() {
  return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 3)
  ) {
    return 'Winner: player'
  } else if (playerSelection === computerSelection) {
    return 'Tie'
  } else {
    return 'Winner: computer'
  }
}

function game(e) {
  const playerSelection = Number(e.target.dataset.key)
  const computerSelection = getComputerChoice()
  playRound(playerSelection, computerSelection)
}

function togglePower() {
  const powers = document.getElementById('powers')

  for (const power of powers.children) {
    power.addEventListener('mouseover', e => {
      const key = Number(e.target.getAttribute('data-key'))

      switch (key) {
        case 0:
          e.target.src = './assets/images/water-2.png'
          e.target.style.width = '90px'
          break
        case 1:
          e.target.src = './assets/images/snow-2.png'
          e.target.style.width = '90px'
          break
        case 2:
          e.target.src = './assets/images/fire-2.png'
          e.target.style.width = '90px'
          break
      }
    })

    power.addEventListener('mouseout', e => {
      const key = Number(e.target.getAttribute('data-key'))

      switch (key) {
        case 0:
          e.target.src = './assets/images/water-1.png'
          e.target.style.width = '80px'
          break
        case 1:
          e.target.src = './assets/images/snow-1.png'
          e.target.style.width = '80px'
          break
        case 2:
          e.target.src = './assets/images/fire-1.png'
          e.target.style.width = '80px'
          break
      }
    })
  }
}

togglePower()
