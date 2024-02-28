import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import '../assets/styles/Carrossel.css';
import imagem1 from '../assets/images/Slide1.png';
import imagem2 from '../assets/images/Slide2.png';
import imagem3 from '../assets/images/Slide3.png';
import imagem4 from '../assets/images/Slide4.png';

import imagem6 from '../assets/images/Slide6.png';


function Carrossel() {
  const data = [
    {id:1, imagem:imagem1},
    {id:2, imagem:imagem2},
    {id:3, imagem:imagem3},
    {id:4, imagem:imagem4},
    {id:6, imagem:imagem6}
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Carrossel">
      <Slider {...settings}>
        {data.map((d)=>(
          <div key={d.id} className="card">
            <img className='imgCard' src={d.imagem} alt="Imagem do Carrossel" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carrossel;