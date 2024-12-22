import React, { useState } from "react";
import style from "./Construction.module.css";

const Construction = () => {
  const audio = new Audio("/audio/music.mp3");
  const [showCredits, setShowCredits] = useState(false);

  const playMusic = () => {
    setShowCredits(true);

    if (showCredits) return;

    audio.currentTime = 0;
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  };
  return (
    <div className={style.container}>
      {showCredits && (
        <div className={style.credits}>
          Music by{" "}
          <a href="https://pixabay.com/users/denis-pavlov-music-35636692/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=249305">
            Denis Pavlov
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=249305">
            Pixabay
          </a>
        </div>
      )}
      <div className={style.content}>
        <h1 className={style.heading}>Coming Soon</h1>
        <p className={style.text}>
          We're working hard to get things ready. Stay tuned!
        </p>
        <p className={style.text}>Listen to some music in the meantime.</p>
        <button onClick={playMusic} className={style.button}>
          Play music
        </button>
        <div className={style.loader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Construction;
