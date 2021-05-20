/* eslint-disable no-empty */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { observer } from 'mobx-react-lite';
// import { toJS } from 'mobx';
import CardItem from './CardItem/CardItem';
import classes from './Cards.module.css';
import icons from '../../helpers/arrayIconsForCards';

const Cards = observer(({ store }) => {
  const cardControlHandler = (card) => {
    if (store.isOpenCard.length === 0) {
      card.guessedCard ? null : store.openCard(card);
    }

    if (store.isOpenCard[0]?.id !== card.id) {
      card.guessedCard ? null : store.openCard(card);
    }
  };

  return (
    <>
      <div className={classes.CardsContainer}>
        {store?.cards.map((card) => (
          <CardItem
            openHandler={() => cardControlHandler(card)}
            icon={icons[+card.cardName]}
            key={card.id}
            cardName={card.cardName}
            open={card.open}
            guessedCard={card.guessedCard}
          />
        ))}
      </div>
    </>
  );
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export default Cards;
