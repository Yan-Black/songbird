import React from 'react';
import Modes from '../../../constants';
import './index.scss';

const Categories = () => (
  <div className="header__categories">
    <ul className="header__category">
      {Modes.map((mode, i) => (
        <li
          className={
          i === 0
            ? 'header__category_mode active_mode'
            : 'header__category_mode'
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
