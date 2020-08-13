import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateIndex } from '../../../reducers/GameIndex/actions';
import { setBird } from '../../../reducers/GameBird/actions';
import './index.scss';

const NextButton = () => {
  const dispatch = useDispatch();
  const isSolved = useSelector((state) => state.status.isSolved);
  const style = isSolved ? 'next-btn solved' : 'next-btn';
  const clickHandler = () => {
    if (isSolved) {
      dispatch(setBird(''));
      dispatch(updateIndex());
    }
  };
  return (
    <button
      className={style}
      type="button"
      onClick={clickHandler}
    >
      Next Level
    </button>
  );
};
export default NextButton;
