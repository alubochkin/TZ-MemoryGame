import React from 'react';
import classes from './StartGame.module.css';

const StartGame = (props) => (
  <div className={classes.StartGame}>
    <div className={classes.Description}>
      <h3>Игра Память тренируйте внимательность и память играя</h3>
      <p>Ваша задача открыть все карточки, как можно быстрее</p>
    </div>

    <button type='button' onClick={() => props.start()}>
      Начать игру
    </button>
  </div>
);

export default StartGame;
