import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToInitial } from 'reducers/GameStatus/actions';
import { setTrueIndex } from 'reducers/GameTrueIndex/actions';
import { updateIndex } from 'reducers/GameIndex/actions';
import { setBird } from 'reducers/GameBird/actions';
import { getRandom } from '@constants';
import birdsData from '@constants/birds-data';
import './index.scss';

const NextButton = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.game.activeIndex);
  const isSolved = useSelector((state) => state.status.isSolved);
  const isLastLevel = birdsData.length - 1 === index;
  const clickHandler = () => {
    if (isSolved) {
      dispatch(setBird(''));
      dispatch(updateIndex());
      dispatch(setTrueIndex(getRandom()));
      dispatch(setToInitial());
    }
  };

  return (
    <button
      className={isSolved ? 'next-btn solved' : 'next-btn'}
      type="button"
      onClick={clickHandler}
    >
      {isLastLevel && isSolved ? 'Results' : 'Next Level'}
    </button>
  );
};

export default NextButton;
