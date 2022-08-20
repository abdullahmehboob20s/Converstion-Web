import LotteryCard from "components/LotteryCard";
import React from "react";
import styles from "scss/layout/Lottery.module.scss";

function Lottery() {
  return (
    <section>
      <div className="container-wrapper">
        <h1 className="fs-24px black weight-5 uppercase mb-30px">
          BIGGEST UPCOMING LOTTERY DRAWS
        </h1>

        <div className={styles.card}>
          <LotteryCard img="images/lotto.png" />
          <LotteryCard img="images/mega.png" />
          <LotteryCard img="images/power.png" />
        </div>
      </div>
    </section>
  );
}

export default Lottery;
