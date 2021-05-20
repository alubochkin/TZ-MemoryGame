/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './CardItem.module.css';

const CardItem = ({
  open, guessedCard, openHandler, icon,
}) => {
  const cls = [classes.CardItem];

  if (open) {
    cls.push(classes.open);
  }
  if (guessedCard) {
    cls.push(classes.guessedCard);
  }

  return (
    <div
      className={cls.join(' ')}
      role='link'
      onClick={openHandler}
    >
      <div className={classes.front} />

      <div className={classes.back}>
        <i className='material-icons'>{icon}</i>
      </div>
    </div>
  );
};

export default CardItem;
