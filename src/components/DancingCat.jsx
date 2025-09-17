import { useState } from 'react';
import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationType, setAnimationType] = useState('bounce');

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const changeAnimation = (type) => {
    setAnimationType(type);
    setIsAnimating(true);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">춤추는 고양이</h1>

      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`cat ${isAnimating ? animationType : ''}`}
        />

        <div className="shadow"></div>
      </div>

      <div className="controls">
        <button
          className="control-btn toggle-btn"
          onClick={toggleAnimation}
        >
          {isAnimating ? '정지' : '시작'}
        </button>

        <div className="animation-buttons">
          <button
            className="control-btn"
            onClick={() => changeAnimation('bounce')}
          >
            통통 튀기
          </button>
          <button
            className="control-btn"
            onClick={() => changeAnimation('spin')}
          >
            빙글빙글
          </button>
          <button
            className="control-btn"
            onClick={() => changeAnimation('shake')}
          >
            흔들흔들
          </button>
          <button
            className="control-btn"
            onClick={() => changeAnimation('dance')}
          >
            댄스파티
          </button>
        </div>
      </div>

      <div className="music-notes">
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♪</span>
        <span className="note note-4">♬</span>
      </div>
    </div>
  );
};

export default DancingCat;