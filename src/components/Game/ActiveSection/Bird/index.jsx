import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import { setData } from 'reducers/game-bird/bird-data/actions';
import birdsData from '@constants/birds-data';
import 'react-h5-audio-player/src/styles.scss';
import './index.scss';

const Bird = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.game.activeIndex);
  const bird = useSelector((state) => state.bird.bird);
  const {
    audio,
    description,
    name,
    image,
    species,
  } = useSelector((state) => state.data);

  useEffect(() => {
    birdsData[index]
      .forEach((bData) => bData.name === bird
      && dispatch(setData(bData)));
  }, [bird]);

  return (
    <div className="game-bird">
      <div className="player-section">
        <img
          className="bird-image"
          src={image}
          alt="bird"
        />
        <div className="player-container">
          <div className="bird-info">
            <h1>{name}</h1>
          </div>
          <div className="bird-info">
            <span>{species}</span>
          </div>
          <AudioPlayer
            autoPlayAfterSrcChange={false}
            src={audio}
            volume={0.1}
          />
        </div>
      </div>
      <p className="bird-description">
        {description}
      </p>
    </div>
  );
};

export default Bird;
