const cardCreateObject = (num, index) => ({
  cardName: num,
  id: index,
  open: false,
  click: true,
  guessedCard: false,
});

export default () => new Array(36)
  .fill(0)
  .map((num, index) => (index <= 17 ? (index + 1) : (index - 17)))
  .sort(() => Math.random() - 0.5)
  .map((num, index) => cardCreateObject(num, index));
