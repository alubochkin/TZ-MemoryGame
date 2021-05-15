import React from 'react';
import classes from './CardItem.module.css';

export const CardItem = (props) => {


	const cls = [classes.CardItem]

	if (props.open) {
		cls.push(classes.open)
	}
  if (props.guessedCard) {
		cls.push(classes.guessedCard)
	}


  return (
    <div 
      className={cls.join(' ')}
      onClick={props.openHandler}
    >
        <div className={classes.front}></div>

        <div className={classes.back}>
          <i className="material-icons">{props.icon}</i>
        </div>
            
    </div>
  )
}
