import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { setData } from '../../../../reducers/GameBird/BirdData/actions';
import birdsData from '../../../../constants/birds-data';
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
    <div className="game__bird">
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
          <ReactAudioPlayer
            src={audio}
            controls
            style={{ outline: 'none' }}
          />
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Bird;
