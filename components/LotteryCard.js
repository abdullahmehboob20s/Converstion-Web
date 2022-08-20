import React from "react";
import styles from "scss/components/LotteryCard.module.scss";
import { FiClock } from "react-icons/fi";

function LotteryCard({ img }) {
  return (
    <div className={styles.card}>
      <main>
        <div className={styles.imageWrapper}>
          <img src={img} alt="" />
        </div>
        <div className={styles.titles}>
          <div className={styles.cardTitle}>
            <img src="images/country-icon-1.png" alt="" />
            <p className="fs-14px black uppercase weight-5">Mega Millions</p>
          </div>
          <h2 className="green fs-26px weight-7 text-center">$94 000 000</h2>
        </div>
      </main>
      <footer>
        <button className="fs-16px black weight-5 pointer">Play Now</button>
        <div className={styles.timer}>
          <span>
            <FiClock color="white" />
          </span>
          <p className="fs-18px white weight-5">1:22:01</p>
        </div>
      </footer>
    </div>
  );
}

export default LotteryCard;
