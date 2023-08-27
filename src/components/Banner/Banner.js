import React from 'react';
import logo from './Image/watch.png'
import style from './Banner.module.css'
function Banner() {
    const slider = 8;
  return (
    <div className={style.banner }>
        <span className={`${style.arrow} ${style.left}`}></span>
        <div className={style.textContent}>
            <h2 className={style.banner__overtitle}>Best Deal Online on smart watches</h2>
            <h1 className={style.banner__title}>SMART WEARABLE.</h1>
            <h3 className={style.banner__undertitle}>UP to 80% OFF</h3>
        </div>
        <img src={logo} alt="Watch"/>
        <span className={`${style.arrow} ${style.right}`}></span>
    </div>
  )
}

export default Banner