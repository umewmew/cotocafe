import React from "react";
import Button from "../../ui/Button/Button";
import CatCard from "../../ui/CatCard/CatCard";
import Title, { TitleSize } from "../../ui/Title/Title";
import "./CatsList.module.css";

function CatsList({catInfo}) {
  return (
    <section className="about-cats">
      <Title size={TitleSize.DEFAULT}>Наши звезды</Title>
      <ul className="about-cats__list">
        <li className="about-list__item">
          <CatCard />
        </li><li className="about-list__item">
          <CatCard />
        </li><li className="about-list__item">
          <CatCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default CatsList;
