import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSolved } from 'reducers/game-status/actions';
import { updateScore } from 'reducers/game-result/actions';
import { setBird } from 'reducers/game-bird/actions';
import birdsData from '@constants/birds-data';
import {
  chekMarks,
  maxScore,
  audioCorrect,
  audioErr,
} from '@constants';
import './index.scss';

const Variants = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.game.activeIndex);
  const isSolved = useSelector((state) => state.status.isSolved);
  const trueIndex = useSelector((state) => state.trueIdx.trueIdx);

  const [markStyles, setMarkStyles] = useState(chekMarks);
  const [score, setScore] = useState(maxScore);

  const checkVariant = (e) => {
    const { target: { id } } = e;
    const idx = parseInt(id, 10);
    const marksClone = Array.from(markStyles);
    const bird = birdsData[index][idx].name;
    dispatch(setBird(bird));
    if (idx === trueIndex) {
      if (marksClone[idx] !== 'check-mark success') {
        audioCorrect.play();
      }
      marksClone.splice(idx, 1, 'check-mark success');
      setMarkStyles(marksClone);
      dispatch(setSolved());
      dispatch(updateScore(score));
    } else {
      score > 0 && setScore(score - 1);
      if (!isSolved) {
        if (marksClone[idx] !== 'check-mark err') {
          audioErr.play();
        }
        marksClone.splice(idx, 1, 'check-mark err');
        setMarkStyles(marksClone);
      }
    }
  };

  useEffect(() => {
    setMarkStyles(chekMarks);
    setScore(maxScore);
  }, [index]);

  return (
    <div className="game-variants">
      <ul className="game-list">
        {birdsData[index].map(({ name }, i) => (
          <button
            key={name}
            type="button"
            className="game-variant"
            id={i}
            onClick={checkVariant}
          >
            <span className={markStyles[i]} />
            {name}
          </button>
        ))}
      </ul>
    </div>
  );
};
export default Variants;
