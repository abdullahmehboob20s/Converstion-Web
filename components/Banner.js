import React from "react";
import styles from "scss/components/Banner.module.scss";

function Banner({ title }) {
  return (
    <header className={styles.headerBanner}>
      <h1 className="fs-18px weight-7 white text-center">{title}</h1>
    </header>
  );
}

export default Banner;
