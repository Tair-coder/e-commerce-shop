import React from 'react';
import style from './Nav.module.css'
import location from './image/Iconly/Two-tone/Location.svg';
import delivery from './image/iconoir_delivery-truck.svg';
import discount from './image/Discount.svg';
import Section from '../UI/Section';


function Nav() {
  return (
    <Section class={style.nav__section}>
    <nav className={style.nav}>
        <h4 className={style.nav__title}>Welcome to worldwide Megamart!</h4>
        <ul className={style.nav__list}>
            <li className={style.list__item}><img src={location} alt="location"/><a href="rfrf">Deliver to <span>423651</span></a></li>
            <li className={style.hr}/>
            <li className={style.list__item}><img src={delivery} alt="location"/><a href="rfrf">Track your order</a></li>
            <li className={style.hr}/>
            <li className={style.list__item}><img src={discount} alt="location"/><a href="rfrf">All Offers</a></li>
        </ul>
    </nav>
</Section>
  )
}

export default Nav