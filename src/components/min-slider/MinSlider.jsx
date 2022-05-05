import React from 'react';
import css from "./MinSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MinCard from '../min-card/MinCard';

export default function MinSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
    };
    return (
        <div >
             <div className='container'><h2>Часто заказывают</h2></div>
            <div className={css.slider}>
                <Slider {...settings}>
                   
                    <div className={css.sliderBlock}>
                        <MinCard />
                        </div>
                    <div className={css.sliderBlock}>
                        <MinCard />
                    </div>
                    <div className={css.sliderBlock}>
                        <MinCard />
                    </div>
                    <div className={css.sliderBlock}>
                        <MinCard />
                    </div>
                    <div className={css.sliderBlock}>
                        <MinCard />
                    </div>
                    <div className={css.sliderBlock}>
                        <MinCard />
                    </div>
                </Slider></div>
                <div className={css.halal}>
                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" />
                <span>Без свинины <br />
                      <span id={css.opacity}>Мы готовим из цыпленка и говядины</span></span>
                </div>
        </div>
    )
}
