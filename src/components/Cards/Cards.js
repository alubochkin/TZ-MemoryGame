import React from 'react';
import { observer } from 'mobx-react-lite';
import CardItem from './CardItem/CardItem';
import classes from './Cards.module.css';
import icons from '../../helpers/arrayIconsForCards';

const Cards = observer(({ store }) => {
  //
  const cardControlHandler = (card) => {
    if (card.click) {
      if (store.isOpenCard.length === 0 && !card.open) {
        store.openCard(card);
      }
      if (store.isOpenCard[0]?.id !== card.id && !card.open) {
        store.openCard(card);
      }
    }
  };

  return (
    <>
      <div className={classes.CardsContainer}>
        {store?.cards.map((card) => (
          <CardItem
            openHandler={!card.guessedCard ? () => cardControlHandler(card) : null}
            icon={icons[+card.cardName]}
            key={card.id}
            id={card.id}
            cardName={card.cardName}
            open={card.open}
            guessedCard={card.guessedCard}
          />
        ))}
      </div>
    </>
  );
});

export default Cards;
