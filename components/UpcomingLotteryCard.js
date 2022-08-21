import React from "react";
import styles from "scss/components/UpcomingLotteryCard.module.scss";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function UpcomingLotteryCard() {
  return (
    <div className={styles.card}>
      <span className={styles.star}>
        <FaStar />
      </span>

      <div className={styles.imageBox}>
        <img src="images/mega.png" alt="" />
      </div>

      <div className={`${styles.title} mb-5px`}>
        <img src="images/country-icon-1.png" alt="" />
        <h1 className="fs-14px weight-5 black text-center">Mega Millions</h1>
      </div>

      <h2 className="fs-20px weight-7 text-center black mb-10px">
        $122 000 000
      </h2>

      <div className={`${styles.timer} mb-10px`}>
        <span className="blue">
          <FiClock />
        </span>
        <p className="fs-18px blue weight-5">1:22:01</p>
      </div>

      <button className="fs-16px black weight-5 pointer">Play Now</button>
    </div>
  );
}

export default UpcomingLotteryCard;
