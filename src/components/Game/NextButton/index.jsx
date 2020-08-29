import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToInitial } from 'reducers/game-status/actions';
import { setTrueIndex } from 'reducers/game-true-index/actions';
import { setCategory } from 'reducers/game-category/actions';
import { updateIndex } from 'reducers/game-index/actions';
import { setBird } from 'reducers/game-bird/actions';
import { setWin } from 'reducers/game-win/actions';
import {
  getRandom,
  maxGameScore,
  desert,
  exotic,
  arctic,
  arcticIdx,
  desertIdx,
} from '@constants';
import birdsData from '@constants/birds-data';
import './index.scss';

const NextButton = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.game.activeIndex);
  const isSolved = useSelector((state) => state.status.isSolved);
  const score = useSelector((state) => state.result.score);
  const category = useSelector((state) => state.category.category);

  const isLastLevel = birdsData.length - 1 === index;
  const clickHandler = () => {
    if (isSolved) {
      score === maxGameScore && dispatch(setWin());
      index === arcticIdx && dispatch(setCategory(arctic));
      index === desertIdx && dispatch(setCategory(desert));
      isLastLevel && dispatch(setCategory(exotic));
      dispatch(setBird(''));
      dispatch(updateIndex());
      dispatch(setTrueIndex(getRandom()));
      dispatch(setToInitial());
    }
  };

  return (
    <button
      className={isSolved ? `next-btn solved ${category}` : 'next-btn'}
      type="button"
      onClick={clickHandler}
    >
      {isLastLevel && isSolved ? 'Results' : 'Next Level'}
    </button>
  );
};

export default NextButton;
