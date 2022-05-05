import React from 'react';
import css from './MinCard.module.css';

export default function Card() {
    return (
        <div className={css.mincard}>
            <div className={css.card}>
                <img src='https://cdn-icons-png.flaticon.com/512/7125/7125270.png' alt='#' />
                <h3>Пепперони <br />от 365 сом</h3>
            </div>
        </div>
    )
}