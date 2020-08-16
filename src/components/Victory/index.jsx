import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetIndex } from 'reducers/GameIndex/actions';
import { resetScore } from 'reducers/GameResult/actions';
import { setToInitial } from 'reducers/GameStatus/actions';
import { audioSuccess } from '@constants';
import victory from 'assets/victory.png';
import './index.scss';

const Victory = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.result.score);
  const clickHandler = () => {
    dispatch(resetIndex());
    dispatch(resetScore());
    dispatch(setToInitial());
  };

  useEffect(() => {
    const playAudio = () => audioSuccess.play();
    playAudio();
  }, []);

  return (
    <div className="vitory-wrapper">
      <img className="victory-image" src={victory} alt="victory" />
      <p className="congratulations-score">
        {`Вы набрали ${score} из 30 очков!`}
      </p>
      <button
        type="button"
        className="play-again-btn"
        onClick={clickHandler}
      >
        Играть снова
      </button>
    </div>
  );
};

export default Victory;
