import React from 'react';
import PizzaCard from '../../components/pizza-card/PizzaCard.jsx';
import css from './Main.module.css';
import { useEffect, useState } from 'react';
import { baseUrl, pizzaApi } from '../../constants/api';
import { useSelector } from 'react-redux';



export default function Main({addToBasket}) {
const pizzas = useSelector( (state)=> state.pizza.data );

//  const [pizzas, setPizzas] = useState([]);

//  useEffect(() => {
//    fetch(baseUrl + pizzaApi)
//      .then((response) => response.json())
//      .then((data) => setPizzas(data))
//  }, []);
  

  return (
    <div className='container'>
      <h1>Пицца</h1>
      <div className={css.allPizza}>
        {
          pizzas.map((item) => <PizzaCard key={item.id} {...item} addToBasket={addToBasket} />)
        }
      </div>
    </div>
  )
}
