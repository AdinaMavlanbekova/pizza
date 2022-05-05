import React from 'react';
import css from './Card.module.css';

export default function Card() {
    return (
        <div className={css.border}>
            <div className={css.card}>
                <img src='https://media-cdn.tripadvisor.com/media/photo-s/0d/92/4f/3b/caption.jpg' alt='#' />
                <h3>Горячие новинки</h3>
            </div>
        </div>
    )
}
