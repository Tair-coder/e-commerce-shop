import React from 'react';
import ReactDom from 'react-dom'
import style from './Modal.module.css'
import card from './image/Buy.svg'


function Backdrop(props) {
   return  <div className={style.backdrop} onClick={props.closeModal}></div>
}
function Cart(props) {
  return (
    <div className={style.modal}>
      <header className={style.modal__header}>
      <span className={style.modal__title}>
            <img src={card}/>
            <h2 className={style.modal__t}>Cart</h2>
        </span>
        <button type="button" onClick={props.closeModal} className={style.closeBtn}></button>
      </header>
      <div className={style.modal__content}>
      <h1 className={style.modal__text}>Add product.</h1>
      </div>
      <footer className={style.modal__footer}>
        <button  type="button" className={style.modal__btn}>order</button>
      </footer>
    </div>
  )
}
function Modal(props) {
  return (
  <React.Fragment>
    {ReactDom.createPortal(<Backdrop closeModal={props.closeModal}/>,document.getElementById('backdrop'))}
    {ReactDom.createPortal(<Cart closeModal={props.closeModal}/>,document.getElementById('modal'))}
  </React.Fragment>
  )
  
}

export default Modal