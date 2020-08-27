import React from 'react';
import { useSelector } from 'react-redux';
import Variants from './Variants';
import Bird from './Bird';
import './index.scss';

const ActiveSection = () => {
  const bird = useSelector((state) => state.bird.bird);

  return (
    <div className="game-active-section">
      <Variants />
      {bird
        ? <Bird />
        : (
          <div className="bird-placeholder">
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка.</p>
          </div>
        )}
    </div>
  );
};

export default ActiveSection;
