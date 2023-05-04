function getComputerChoice(max) {
  const result = Math.floor(Math.random() * max)

  switch (result) {
    case 0:
      return 'Rock'
    case 1:
      return 'Paper'
    case 2:
      return 'Scissors'
  }
}

console.log(getComputerChoice(3))
