import React from 'react';
import classes from './CardItem.module.css';

const CardItem = ({
  open, guessedCard, openHandler, icon, id,
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
      role='button'
      tabIndex={id}
      onKeyPress={openHandler}
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
