import React from "react";
import style from './Footer.module.css'
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__description}>
        <ul className={style.footer__list}>
          <li className={style.footer__item}>
            <h1 className={style.footer__title}>MegaMart</h1>
          </li>
          <li className={`${style.footer__item} ${style.footer__undertitle}`}>
            <h3 className={style.footer__undertitle}>Contact Us</h3>
          </li>
          <li className={`${style.footer__item} ${style.link}`}>
            <span>
              <p>Whats App</p>
              <a href="rfrfr">+1 202-918-2132</a>
            </span>
          </li>
          <li className={`${style.footer__item} ${style.link2}`}>
            <span>
              <p>Call Us</p>
              <a href="rfrfr">+1 202-918-2132</a>
            </span>
          </li>
          <li className={`${style.footer__item} ${style.footer__undertitle2}`}>
            <h3>Download App</h3>
          </li>
          <li className={`${style.footer__item} ${style.linksapp}`}>
            <img src={require("./image/App store.png")} />
            <img src={require("./image/google-store.png")} />
          </li>
        </ul>
        <ul className={style.footer__links}>
          <li className={style.footer__linkstitle}>
            <h2>Most Popular Categories</h2>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Staples</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Beverages</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Personal Care</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Home Care</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Baby Care</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Vegetables & Fruits</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Snacks & Foods</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Dairy & Bakery</a>
          </li>
        </ul>
        <ul className={`${style.footer__links} ${style.footer__links2}`}>
          <li className={style.footer__linkstitle}>
            <h2>Customer Services</h2>
          </li>
          <li className={style.footer__link}>
            <a href="grg">About Us</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Terms & Conditions</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">FAQ</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Privacy Policy</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">E-waste Policy</a>
          </li>
          <li className={style.footer__link}>
            <a href="grg">Cancellation & Return Policy</a>
          </li>
        </ul>
      </div>
      <footer>
        <a href="effeff">© 2022 All rights reserved. Reliance Retail Ltd.</a>
      </footer>
    </div>
  );
}

export default Footer;
