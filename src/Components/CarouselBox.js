import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.png';
import './CarouselBox.css';

const CarouselBox = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="One"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3>Яндекс Станция Макс</h3>
            <p>Нежный розовый</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Two"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3>Яндекс Станция Мини</h3>
            <p>Добро пожаловать в мир новых технологий</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Three"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3>Умный дом здесь</h3>
            <p>Когда если не сейчас</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBox;