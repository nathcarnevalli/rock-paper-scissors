let countRound = 1
let playerLives = 5
let enemyLives = 5

function getComputerChoice() {
  return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
  ) {
    return changeGameStats('player', playerSelection, computerSelection)
  } else if (playerSelection === computerSelection) {
    return changeGameStats('tie', playerSelection, computerSelection)
  } else {
    return changeGameStats('computer', playerSelection, computerSelection)
  }
}

function showEnemyStats(computerSelection, countRound) {
  const enemy = document.getElementById('enemy')
  const round = document.getElementById('round')
  round.innerText = `${countRound}`

  for (let node of enemy.children) {
    if (node.src !== undefined) {
      if (computerSelection === 0) {
        node.src = './assets/images/water.png'
        node.style.width = '80px'
      } else if (computerSelection === 1) {
        node.src = './assets/images/ice.png'
        node.style.width = '80px'
      } else {
        node.src = './assets/images/fire.png'
        node.style.width = '80px'
      }
    } else {
      node.innerText = "Enemy's power"
    }
  }
}

function changeGameStats(winner, playerSelection, computerSelection) {
  const enemyCurrentLives = document.getElementById('enemy-lives')
  const playerCurrentlives = document.getElementById('player-lives')
  const combatArea = document.getElementById('message')

  if (winner === 'player') {
    enemyLives -= 1
    enemyCurrentLives.innerText = `${enemyLives}`
    playerWinner(playerSelection, combatArea)
  } else if (winner === 'computer') {
    playerLives -= 1
    playerCurrentlives.innerText = `${playerLives}`
    enemyWinner(computerSelection, combatArea)
  } else {
    combatArea.innerText = 'Nice fight but...tie'
  }
}

function playerWinner(playerSelection, combatArea) {
  if (playerSelection === 0) {
    combatArea.innerText = "Should't let your guard down!"
  } else if (playerSelection === 1) {
    combatArea.innerText = 'Kamisato Art... Soumetsu!'
  } else {
    combatArea.innerText = 'Pyre pyre pants on fire!'
  }
}

function enemyWinner(computerSelection, combatArea) {
  if (computerSelection === 0) {
    combatArea.innerText = 'Boya lata!'
  } else if (computerSelection === 1) {
    combatArea.innerText = 'Lata Boya Sada!'
  } else {
    combatArea.innerText = 'Celi Lata!'
  }
}

function endGame() {
  const main = document.querySelector('main')
  const header = document.querySelector('header')
  const button = document.createElement('button')
  if (enemyLives === 0 || playerLives === 0) {
    while (main.firstChild) {
      main.removeChild(main.firstChild)
    }

    if (enemyLives > 0) {
      header.children[1].innerText = 'YOU LOST THE GAME!'
    } else {
      header.children[1].innerHTML = 'YOU WON THE GAME!'
    }

    button.innerText = 'Restar'
    button.className = 'btn'
    header.appendChild(button)
    button.addEventListener('click', restartGame)
  }
}

function restartGame() {
  window.location.reload()
}

function game(e) {
  const playerSelection = Number(e.target.dataset.key)
  const computerSelection = getComputerChoice()
  showEnemyStats(computerSelection, countRound)
  playRound(playerSelection, computerSelection)
  countRound++
  endGame()
}

function togglePower() {
  const powers = document.getElementById('powers')

  for (const power of powers.children) {
    power.addEventListener('mouseover', e => {
      const key = Number(e.target.getAttribute('data-key'))

      switch (key) {
        case 0:
          e.target.src = './assets/images/tartas2.png'
          e.target.style.width = '130px'
          break
        case 1:
          e.target.src = './assets/images/ayaka2.png'
          e.target.style.width = '110px'
          break
        case 2:
          e.target.src = './assets/images/hutao2.png'
          e.target.style.width = '160px'
          break
      }
    })

    power.addEventListener('mouseout', e => {
      const key = Number(e.target.getAttribute('data-key'))

      switch (key) {
        case 0:
          e.target.src = './assets/images/tartas1.png'
          e.target.style.width = '120px'
          break
        case 1:
          e.target.src = './assets/images/ayaka1.png'
          e.target.style.width = '100px'
          break
        case 2:
          e.target.src = './assets/images/hutao1.png'
          e.target.style.width = '120px'
          break
      }
    })
  }
}

togglePower()

function getRandomEnemy() {
  const enemyRound = Math.floor(Math.random() * 7)

  switch (enemyRound) {
    case 0:
      enemy.children[1].src = './assets/images/enemy.png'
      break
    case 1:
      enemy.children[1].src = './assets/images/enemy2.png'
      break
    case 2:
      enemy.children[1].src = './assets/images/enemy3.png'
      break
    case 3:
      enemy.children[1].src = './assets/images/enemy4.png'
      break
    case 4:
      enemy.children[1].src = './assets/images/enemy5.png'
      break
    case 5:
      enemy.children[1].src = './assets/images/enemy6.png'
      break
    case 6:
      enemy.children[1].src = './assets/images/enemy7.png'
      break
    case 7:
      enemy.children[1].src = './assets/images/enemy8.png'
      break
  }
}

getRandomEnemy()
