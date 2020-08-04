import React from 'react';
import ReactPlayer from 'react-player';
import './index.scss';

const English = () => (
  <div className="cv-english">
    <div className="cv-english-header">
      <h1>English</h1>
    </div>
    <div className="cv-english-main">
      <div className="cv-english-tests">
        <h3 className="cv-english-title">Online tests: </h3>
        <ul className="cv-english-tests-list">
          <li>
            training.by test - B1
          </li>
          <li>
            test.str.by test - A2+
          </li>
          <li>
            lingualeo.com test - B1
          </li>
        </ul>
      </div>
      <div className="cv-english-presentation">
        <h3 className="cv-english-title">Presentation on english: </h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=91nQjFoXOPw&t=23s"
          width="500px"
        />
      </div>
    </div>
  </div>
);

export default English;
