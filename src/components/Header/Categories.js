import React from 'react';
import style from './Categories.module.css';

function Categories() {
  return (
    <div className={style.menu}>
        <ul className={style.menu__list}>
            <li className={style.menu__item}><button type='button'>Groceries</button></li>
            <li className={style.menu__item}><button type='button'>Premium Fruits</button></li>
            <li className={style.menu__item}><button type='button'>Home & Kitchen</button></li>
            <li className={style.menu__item}><button type='button'>Fashion</button></li>
            <li className={style.menu__item}><button type='button'>Electronics</button></li>
            <li className={style.menu__item}><button type='button'>Beauty</button></li>
            <li className={style.menu__item}><button type='button'>Home Improvement</button></li>
            <li className={style.menu__item}><button type='button'>Sports, Toys & Luggage</button></li>

        </ul>
    </div>
  )
}

export default Categories