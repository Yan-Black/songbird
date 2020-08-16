import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetIndex } from 'reducers/game-index/actions';
import { resetScore } from 'reducers/game-result/actions';
import { setToInitial } from 'reducers/game-status/actions';
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
      <h1>
        {`Поздравляем, Вы набрали ${score} из 30 очков!`}
      </h1>
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
