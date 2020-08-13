import React from 'react';
import { useSelector } from 'react-redux';
import Modes from '../../../constants';
import './index.scss';

const Categories = () => {
  const index = useSelector((state) => state.game.activeIndex);
  return (
    <div className="header-categories">
      <ul className="header-category">
        {Modes.map((mode, i) => (
          <li
            className={
          i === index
            ? 'category-mode active-mode'
            : 'category-mode'
          }
            key={mode}
          >
            {mode}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
