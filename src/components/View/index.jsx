import React from 'react';
import { useSelector } from 'react-redux';
import Header from 'components/Header';
import Game from 'components/Game';
import Results from 'components/Results';
import Victory from 'components/Victory';
import birdsData from '@constants/birds-data';
import './index.scss';

const View = () => {
  const index = useSelector((state) => state.game.activeIndex);
  const isWin = useSelector((state) => state.victory.isWin);
  const isPlayed = birdsData.length === index;

  return (
    <div className="app-wrapper">
      <Header />
      {isPlayed
        ? (isWin ? <Victory /> : <Results />)
        : <Game />}
    </div>
  );
};
export default View;
