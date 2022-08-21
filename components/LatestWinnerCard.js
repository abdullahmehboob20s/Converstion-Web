import React from "react";
import styles from "scss/components/LatestWinnerCard.module.scss";

function LatestWinnerCard() {
  return (
    <div className={styles.card}>
      <div>
        <img src="images/winner.png" className={styles.image} alt="" />
      </div>
      <div>
        <p className="fs-14px black weight-4 mb-5px">20.11.2021</p>
        <div className={`${styles.country} mb-5px`}>
          <img src="images/country-icon-1.png" alt="" />
          <p className="fs-14px weight-5 black weight-5">J.J won Р175</p>
        </div>
        <p className="black opacity-0_6 fs-14px weight-4">
          in 7 ИЗ 49 draw #13476
        </p>
      </div>
    </div>
  );
}

export default LatestWinnerCard;
