/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import {observer} from 'mobx-react-lite';

import { CardItem } from './CardItem/CardItem';
import classes from './Cards.module.css';

import  icons from '../../helpers/arrayIconsForCards';

export const Cards = observer(({store}) => {

  // console.log(store.openCard);

  return (
    <Fragment>

      <div className={classes.CardsContainer}>
        { store.cards.map((card) => (
          <CardItem      
            openHandler={() => card.guessedCard ? null : store.openCard(card)}
            icon={icons[+card.cardName]}
            key={card.id}
            cardName={card.cardName}
            open={card.open}
            guessedCard={card.guessedCard}
          />
      ))}

      </div>
    </Fragment>

  )
});
