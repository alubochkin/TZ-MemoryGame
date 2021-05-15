const cardCreateObject = (num, index) => {
  return {
    cardName: num,
    id: index,
    open: false,
    guessedCard: false
  }
}

export const cardCreated = () => {
  return new Array(36).fill(0)
    .map((num, index) => index <= 17 ? num += index + 1 : num += index - 17)
    .sort(() => Math.random() - 0.5)
    .map((num, index) => cardCreateObject(num, index))
}
