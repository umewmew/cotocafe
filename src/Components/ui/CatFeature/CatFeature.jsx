import clsx from "clsx";
import React from "react";
import styles from "./CatFeature.module.scss";

export const Feature = {
  NEW: "new",
  SOFT: "soft",
  EMPTY: "empty",
};

function CatFeatureIcon({ feature = "new"  }) {
  let subtitle;

  switch(feature) {
    case Feature.NEW:
      subtitle = "new";
      break;
    case Feature.SOFT:
      subtitle = "ласковый";
      break;
    default:
      subtitle = ""
      break;
  }

  return (
    <span
      className={clsx(styles.feature_icon, styles[`feature_icon_${feature}`])}
    >{subtitle}</span>
  );
}

export default CatFeatureIcon;
