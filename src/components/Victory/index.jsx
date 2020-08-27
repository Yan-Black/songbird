import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetIndex } from 'reducers/game-index/actions';
import { resetScore } from 'reducers/game-result/actions';
import { setToInitial } from 'reducers/game-status/actions';
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

  const [loaded, setLoaded] = useState(false);

  useEffect(() => { (() => audioSuccess.play())(); }, []);

  return (
    <div className="vitory-wrapper">
      <img
        className={loaded ? 'victory-image' : 'unload-image'}
        src={victory}
        alt="victory-img"
        onLoad={() => setLoaded(true)}
      />
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
