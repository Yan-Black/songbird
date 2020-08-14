import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetIndex } from 'reducers/GameIndex/actions';
import { resetScore } from 'reducers/GameResult/actions';
import { setToInitial } from 'reducers/GameStatus/actions';
import './index.scss';

const Results = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.result.score);
  const clickHandler = () => {
    dispatch(resetIndex());
    dispatch(resetScore());
    dispatch(setToInitial());
  };

  return (
    <div className="results-wrapper">
      <div className="results-info">
        <h1>{`Поздравляем, Вы набрали ${score} из 30 очков!`}</h1>
      </div>
      <button
        type="button"
        className="results-btn"
        onClick={clickHandler}
      >
        Играть ещё
      </button>
    </div>
  );
};

export default Results;
