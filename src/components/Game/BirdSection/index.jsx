import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import birdsData from '@constants/birds-data';
import placeholder from 'assets/placeholder.jpg';
import { namePlaceholder } from '@constants';
import './index.scss';

const BirdSection = () => {
  const isSolved = useSelector((state) => state.status.isSolved);
  const index = useSelector((state) => state.game.activeIndex);
  const trueIndex = useSelector((state) => state.trueIdx.trueIdx);
  const { audio, name, image } = birdsData[index][trueIndex];
  window.console.log(name);
  const ref = useRef(null);
  if (isSolved) {
    const {
      current: {
        audioEl: {
          current: player,
        },
      },
    } = ref;
    player.pause();
  }

  return (
    <div className="game-bird-section">
      <img
        className="section-image"
        src={isSolved ? image : placeholder}
        alt="bird"
      />
      <div className="section-player-container">
        <div className="section-bird-info">
          <h1>{isSolved ? name : namePlaceholder}</h1>
        </div>
        <ReactAudioPlayer
          src={audio}
          ref={ref}
          controls
          style={{ outline: 'none' }}
        />
      </div>
    </div>
  );
};

export default BirdSection;
