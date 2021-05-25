import React from 'react';
import classes from './Header.module.css';

const Header = ({ isGame, coupleCard }) => (
  <div className={classes.Header}>
    {isGame ? (
      <div className={classes.GameData}>
        <span>
          Открыто <b>{coupleCard}</b> пар карточек из<b>18</b>
        </span>
      </div>
    ) : null}
  </div>
);

export default Header;
