import React from "react";
import Title, { TitleSize } from "../../ui/Title/Title";
import { location } from "../../../Assets/icons";
import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_wrapper}>
        <Title size={TitleSize.BIG}> Первое в России Котокафе </Title>
        <p className={styles.about_text}>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </p>
        <span className={styles.about_subtitle}>
          Рабочее время с 8:00 до 23:00
        </span>
        <span>
          {location} Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </span>
      </div>
    </section>
  );
}

export default About;
