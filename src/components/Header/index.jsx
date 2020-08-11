import React from 'react';
import Categories from './Categories';
import './index.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <h1>
        <i>Song</i>
        <span className="logo-chunk">
          <i>bird</i>
        </span>
      </h1>
      <h2>
        {`Score: ${0}`}
      </h2>
    </div>
    <Categories />
  </div>
);

export default Header;
