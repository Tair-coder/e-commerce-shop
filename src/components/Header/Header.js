import React, { useEffect, useState } from 'react';
import Modal from '../UI/Modal';
import Section from '../UI/Section';
import Categories from './Categories';
import style from './Header.module.css';
import logo from './image/MegaMart.svg'
function Header(props) {
  const [categoriesIsValid,setCategoriesIsValid] = useState(false);
  const [stateModal,setStateModal] = useState(false);
  useEffect(()=> {
    if(stateModal == true){
      document.body.style.overflow = "hidden";
    }
    if(stateModal == false){
      document.body.style.overflow = "visible";
    }
    return () => {
      
    };
  },[stateModal])
  const closeModal = (e) => {
    e.preventDefault()
    setStateModal(!stateModal)
  }
  const navClickHandler = () => {
    setCategoriesIsValid(!categoriesIsValid)

  }
  return (
    <Section class={style.section__header}>
      {stateModal && <Modal closeModal={closeModal}/>}
      <header className={style.head}>
        <ul className={style.head__list}>
          <li className={style.head__item}><button type="button" className={style.btn} onClick={navClickHandler}>< span></span></button></li>
          <li className={style.head__item}><img src={logo} alt="logo"/></li>
        </ul>
        <ul className={style.head__list}>
          <li className={style.input__item}><input type="text" className={style.input} placeholder="Search essentials, groceries and more..."/><span/></li>
          <li className={style.head__item}><span className={style.log}><a href='fee'>Sign Up</a>/<a href='ef'>Sign In</a></span></li>
          <li className={style.hr}></li>
          <li className={style.head__item}><a href="dddd" className={style.addCard} onClick={closeModal}>Cart</a></li>
        </ul>
      </header>
      {categoriesIsValid && <Categories/>}
    </Section>
  )
}

export default Header