import React from 'react';
import { useDispatch } from "react-redux";
import Api from '../../api/Api.js';
import { ACsetNewPizza } from "../../redux/actionCreators.js";
import css from './PizzaCard.module.css';

export default function PizzaCard({ addToBasket, name, info, file, id, isAdmin, ...props}) {
    const imgUrl = "http://solid.lol/public/" + file
const dispatch = useDispatch();

const onBasket = () => {
    dispatch( ACsetNewPizza ({name, info, file, id, ...props}) )
}  

const onDelete = () => {
Api.deletePizza(id)
.then(() => {
    window.location.reload()
})
}

    return (
        <div>
            <div className='container'>
                <div className={css.pizza}>
                    <img 
                    src={imgUrl || 'https://media-cdn.tripadvisor.com/media/photo-s/0d/92/4f/3b/caption.jpg'} 
                    alt='#' />
                    <h3>{name}</h3>
                    <p>{info}</p>
                    <span>{props.price} сом</span>
                    {
                        isAdmin
                        ? <button onClick={onDelete}>удалить</button>
                        :  <button onClick={onBasket}>Выбрать</button>
                    }
                </div>
            </div>
        </div>
    )
}
