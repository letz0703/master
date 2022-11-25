import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

export default function Header() {
  return (
    <div
      className="gpt3__header section__padding"
      style={{color: 'White'}}
      id="home"
    >
      <div className="gtp3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="전화번호" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="customers" />
          <p>일본 현지주문 마감 까지 : 3명</p>
        </div>
      </div>
    </div>
  );
}
