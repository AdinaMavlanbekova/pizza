import React from 'react'
import css from "./Footer.module.css";


export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.orange}>
        <div className={css.img}>
          <img src='https://cdn-icons-png.flaticon.com/512/1872/1872426.png' alt='#' />
          <span>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</span>
        </div>
        <div className={css.quest}>
          <a href='#'>Заполнить анкету</a>
        </div>
      </div>

      <div className={css.black}>
        <div className='container'>
          <div className={css.info}>
          <div>
            <span>Додо Пицца</span><br />
            <a href='#'>О нас</a><br />
            <a href='#'>Додо-книга</a><br />
            <a href='#'>Блог «Сила ума»</a><br />
            <a href='#'>Додо ИС</a><br />
          </div>
          <div>
            <span>Работа</span><br />
            <a href='#'>В пиццерии</a><br />
          </div>
          <div>
            <span>Партнерам</span><br />
            <a href='#'>Предложить помещение</a><br />
          </div>
          <div>
            <span>Это интересно</span><br />
            <a href='#'>Почему мы готовим без<br /> перчаток?</a><br />
            <a href='#'>Экскурсии и мастер-классы</a><br />
          </div>
          <div>
            <span id={css.call}>звонок по</span>
            <img id={css.callLogo} src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg' alt='#' />
            <img id={css.callLogo} src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg' alt='#' />
            <img id={css.callLogo} src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg' alt='#' />
             <br />
            0 (551) 550-550<br />
            feedback@dodopizza.kg
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
