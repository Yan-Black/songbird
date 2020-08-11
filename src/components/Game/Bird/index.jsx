import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import placeholder from '../../../assets/placeholder.jpg';
import './index.scss';

const Bird = () => (
  <div className="game__bird">
    <div className="player-section">
      <img
        className="bird-image"
        src={placeholder}
        alt=""
      />
      <div className="player-container">
        <div className="bird-name">
          <h1>*****</h1>
        </div>
        {false && (
        <div className="bird-transcription">
          <span>Accipiter gentilis</span>
        </div>
        )}
        <ReactAudioPlayer
          src=""
          autoPlay
          controls
        />
      </div>
    </div>
    {false && <div className="bird-description" />}
  </div>
);
export default Bird;
