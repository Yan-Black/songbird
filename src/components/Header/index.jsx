import React from 'react';
import { useSelector } from 'react-redux';
import Categories from './Categories';
import './index.scss';

const Header = () => {
  const score = useSelector((state) => state.result.score);
  const category = useSelector((state) => state.category.category);

  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          <i>Song</i>
          <span className={`${category}-color`}>
            <i>bird</i>
          </span>
        </h1>
        <h2>
          {`Score: ${score}`}
        </h2>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
