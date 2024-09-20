import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/Routes";
const Header = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const [text, setText] = useState("Laura Volkaert");
  const intervalRef = useRef(null); // Store interval ref
  const originalText = "Laura Volkaert"; // You can change this to any text
  const iterationSpeed = 20; // Speed of iterations (ms)

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 52)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, iterationSpeed);
  };

  useEffect(() => {
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <header className={style.header}>
      <Link className={`${style.header__item} ${style.main}`} to={ROUTES.home}>
        <p onMouseOver={handleMouseOver} data-value={originalText}>
          {text}
        </p>
      </Link>
      <div className={style.header__container}>
        <Link className={style.header__item} to={ROUTES.aboutMe}>
          Over mij
        </Link>
        <Link className={style.header__item} to={ROUTES.list}>
          Projecten
        </Link>
        <Link className={style.header__item} to={ROUTES.contact}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
