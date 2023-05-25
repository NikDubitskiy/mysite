import React, { useState } from 'react';
import './Contacts.css';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Отправка формы на сервер или выполнение других действий

    // Сброс полей формы
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Наши контакты</h1>

      <div className="map-container">
        <div className="map-overlay">
          <h2>Офис компании</h2>
          <p>Адрес: ул. Льва Толстого, 16, Москва, 119021</p>
          <p>Телефон: +7 (495) 739-70-00</p>
        </div>
        <iframe
          title="Карта"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.706505660776!2d37.598510015729776!3d55.743151126225514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549aafe7d4e47%3A0xf36f6378b52ddad2!2s%C2%ABYandex%C2%BB!5e0!3m2!1sen!2suk!4v1623999328987!5m2!1sen!2suk"
          allowFullScreen
        ></iframe>
      </div>

      <div className="contact-form">
        <h2>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
