import React from 'react';
import './index.scss';

const Variants = () => {
  const v = [1, 2, 3, 4, 5, 6];
  return (
    <div className="game-variants">
      <ul className="game-list">
        {v.map((vr) => (
          <li
            key={vr}
            className="game-variant"
          >
            <span className="check-mark" />
            Воробей
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Variants;
