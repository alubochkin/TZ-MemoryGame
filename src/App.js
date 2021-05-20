/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
// import react from 'react';
import { observer } from 'mobx-react-lite';
import Cards from './components/Cards/Cards';
import StartGame from './components/StartGame/StartGame';
import Header from './components/Header/Header';
import Layout from './hoc/Layout/Layout';

import Store from './store/store';

const App = observer(() => {
  const start = () => Store.gameStart();

  if (Store.coupleCard.length >= 18) Store.gameOver();

  return (
    <Layout>
      <Header
        isGame={Store.gameControl.isGame}
        coupleCard={Store.coupleCard.length}
        timer={Store.gameControl.time}
      />

      {Store.gameControl.alert ? (
        <div className='alertFinish'>{Store.gameControl.finishText}</div>
      ) : null}

      {Store.gameControl.isGame ? (
        <Cards store={Store} />
      ) : (
        <StartGame start={start} />
      )}
    </Layout>
  );
});

export default App;
