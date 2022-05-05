import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import css from "./NavBar.module.css";

export default function NavBar() {
  const basket = useSelector( (state) => state.basket.data)

  const [modal, setModal] = useState(false)

  const getAllPrice = () => {
    let price = 0;
    basket.forEach((item) => {
      price = Number(item.price) + price
    })
    return price
  }

  const onModal = () => setModal(!modal);



  return (
    <>
      <div className={`container ${css.container}`}>
        <div className={css.navbar}>
          <div className={css.link}>
            <Link to="/">Комбо</Link>
            <Link to="/">Закуски</Link>
            <Link to="/">Десерты</Link>
            <Link to="/">Напитки</Link>
            <Link to="/">Другие товары</Link>
            <Link to="/">Акции</Link>
            <Link to="/">Контакты</Link>
            <Link to="/about-us">О нас</Link>
            <Link to="/">Прямой эфир</Link>
          </div>
          <div className={css.basket}>
            <button onClick={onModal}>Корзина</button>

          </div>
        </div>

      </div>
      <div className={`${css.modal}  ${modal ? css.activeModal : ""} `}>
        <div className={css.basketWrapper}>
          <img
            onClick={onModal}
            className={css.closeModal}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828744.png"
            alt='Close'
          />
          <h2>{basket.length}товара на {getAllPrice()} сом</h2>
          <div>
          {
           basket?.map((item, index) => <div key={index}>{item.title}</div>)
          }
          </div>
        </div>
      </div>
    </>
  )
}
