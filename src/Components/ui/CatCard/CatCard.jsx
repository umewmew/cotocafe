import React from "react";
import Title, { TitleSize } from "../Title/Title";
import styles from "./CatCard.module.scss";
import CatFeatureIcon from "../CatFeature/CatFeature";

function CatCard({ name, about, image, feature }) {
  return (
    <div className={styles.cat_card}>
      <figure className={styles.cat_card_figure}>
        <img
          className={styles.cat_card_image}
          src={image}
          alt="Изображение кота"
        />
        <CatFeatureIcon feature={feature} />
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p className={styles.cat_card_text}>{about}</p>
    </div>
  );
}

export default CatCard;
