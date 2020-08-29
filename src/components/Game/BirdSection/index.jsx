import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import Loader from 'components/Loader';
import birdsData from '@constants/birds-data';
import placeholder from 'assets/placeholder.jpg';
import { namePlaceholder } from '@constants';
import 'react-h5-audio-player/src/styles.scss';
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
        audio: {
          current: player,
        },
      },
    } = ref;
    player.pause();
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => { isSolved && setLoading(true); }, [isSolved]);

  return (
    <div className="game-bird-section">
      <div className="section-image-container">
        {loading && <Loader />}
        <img
          className={!loading ? 'section-image' : 'unload-image'}
          src={isSolved ? image : placeholder}
          alt="bird"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="section-player-container">
        <div className="section-bird-info">
          <h1>{isSolved ? name : namePlaceholder}</h1>
        </div>
        <AudioPlayer
          ref={ref}
          src={audio}
          autoPlayAfterSrcChange={false}
          volume={0.5}
        />
      </div>
    </div>
  );
};

export default BirdSection;
