import React from 'react';
import Variants from './Variants';
import Bird from '../Bird';
import './index.scss';

const ActiveSection = () => (
  <div className="game-active-section">
    <Variants />
    <Bird />
  </div>
);

export default ActiveSection;
