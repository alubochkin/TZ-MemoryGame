/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import { makeAutoObservable, runInAction, configure } from 'mobx';
import cardCreated from '../helpers/auxiliary';

configure({
  enforceActions: 'never',
});

class Store {
  cards = [];

  isOpenCard = [];

  coupleCard = [];

  gameControl = {
    isGame: false,
    finishText: 'Игра окончена',
    time: 0,
    alert: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  gameStart() {
    this.cards = cardCreated();
    this.gameControl.isGame = true;
    // this.timerGame();
  }

  gameOver() {
    this.gameControl.alert = true;
    const idTimOut = setTimeout(() => {
      this.gameControl.isGame = false;
      this.cards = cardCreated();

      this.gameControl = {
        isGame: false,
        finishText: 'Игра окончена',
        time: 0,
        alert: false,
      };
      clearTimeout(idTimOut);
    }, 3000);

    this.isOpenCard = [];
    this.coupleCard = [];
  }

  // timerGame() {
  //   if (this.gameControl.isGame) {
  //     const timerId = setInterval(() => {
  //       if (!this.gameControl.isGame) clearInterval(timerId);

  //       this.gameControl.time += 1;
  //     }, 1000);
  //   }
  // }

  countDownOpenCard(coupleCard = null) {
    let dellay = 1000;

    if (coupleCard) {
      dellay = 500;

      this.coupleCard.push(
        coupleCard.map((cardItem) => Object.assign(cardItem, cardItem.guessedCard = true)),
      );

      this.cards.map((cardItem) => Object.assign(cardItem, coupleCard));
    }

    runInAction(() => {
      const promise = new Promise((resolve) => {
        const setTimeOutId = setTimeout(() => {
          this.cards.map((cardItem) => Object.assign(cardItem, (cardItem.open = false)));
          resolve(setTimeOutId);
        }, dellay);
      });

      promise.then((id) => clearTimeout(id))
        .then(() => (this.isOpenCard = []))
        .then(() => this.cards
          .map((cardItem) => Object.assign(cardItem, (cardItem.click = true))));
    });
  }

  openCard(card) {
    if (this.isOpenCard.length < 2) {
      this.cards.map((cardItem) => (cardItem.id === card.id
        ? Object.assign(card, (card.open = true))
        : cardItem));

      this.isOpenCard.push(card);

      if (this.isOpenCard.length === 2) {
        this.cards
          .map((cardItem) => Object.assign(cardItem, (cardItem.click = false)));
        if (this.isOpenCard[0].cardName === this.isOpenCard[1].cardName) {
          this.countDownOpenCard(this.isOpenCard);
        } else {
          this.countDownOpenCard();
          this.isOpenCard = [];
        }
      }
    }
  }
}

export default new Store();
