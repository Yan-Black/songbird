import React from 'react';
import Modes from '../../../constants';
import './index.scss';

const Categories = () => (
  <div className="header-categories">
    <ul className="header-category">
      {Modes.map((mode, i) => (
        <li
          className={
          i === 0
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

export default Categories;
