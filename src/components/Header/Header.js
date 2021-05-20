import React from 'react';
import classes from './Header.module.css';

const Header = ({ isGame, timer, coupleCard }) => (
  <div className={classes.Header}>
    {isGame ? (
      <div className={classes.GameData}>
        <span>
          Прошло <b> {timer} </b> сек.
        </span>
        <span>
          Открыто <b>{coupleCard}</b> пар карточек из<b>18</b>
        </span>
      </div>
    ) : null}
  </div>
);

export default Header;
