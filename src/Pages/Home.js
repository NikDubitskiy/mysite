import React from 'react';
import './Home.css';
import CarouselBox from '../Components/CarouselBox';
export default function Home() {
  const products = [
    {
      name: 'Станция Макс Black',
      image: require('../images/yandex-station-max-black.png'),
      price: '27 990 ₽',
    },
    {
      name: 'Станция Макс White',
      image: require('../images/yandex-station-max-white.png'),
      price: '27 990 ₽',
    },
  ];

  return (
    <div>
         <div>
            <CarouselBox />
        </div>
        <div className="title-container">
      <h1>Наши  товары</h1>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="order-form">
        <h2>Заказать товар</h2>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <button type="submit">Отправить</button>
      </form>

      <footer className="footer">
        <p>Все права защищены © 2023</p>
      </footer>
    </div>
  );
}
