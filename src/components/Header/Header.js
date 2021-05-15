import React from 'react';
import classes from './Header.module.css'

export const Header = (props) => {
  return (
    <div className={classes.Header}>


    {
      props.isGame 
        ? <div className={classes.GameData}>
            <span>Прошло <b>{props.timer}</b> сек</span>
            <span>Открыто <b>{props.coupleCard}</b> пар карточек из <b>18</b></span>
          </div>
        : null
    }

      
    </div>
  )
}
