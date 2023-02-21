import React from "react";
import Title, { TitleSize } from "../Title/Title";
import "./CatCard.module.css";

function CatCard() {
  return (
    <div className="cat-card">
      <figure className="cat-card__figure">
        <img className="cat-card__image"
          src="https://i.ibb.co/27Mdx7k/Rectangle-4-2.png"
          alt="Изображение кота"
        />
      </figure>
      <Title size={TitleSize.SMALL}>Кошка Сью</Title>
      <p className="cat-card__text">
        Эта юная красавица очень общительная и ласковая уже с первого дня, как
        приехала в кафе.
      </p>
    </div>
  );
}

export default CatCard;
