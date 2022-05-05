import React from 'react'
import css from "./NavSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../card/Card';
//import l from '../../img/k.jpg';

//const left = 'https://img1.freepng.ru/20180604/pxw/kisspng-arrow-computer-icons-arrow-feather-5b158e15b60919.7998857015281392857456.jpg';


export default function MainSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
    };
    return (
        <div >
            <div className={css.slider}>
                <Slider {...settings} className="container">
                    <div><Card /></div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </Slider>
                </div>
        </div>
    )
}
