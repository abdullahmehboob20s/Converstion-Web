import UpcomingLotteryCard from "components/UpcomingLotteryCard";
import React from "react";
import styles from "scss/layout/UpcomingLotteries.module.scss";

function UpcomingLotteries() {
  return (
    <section>
      <div className="container-wrapper">
        <header className="header-banner mb-20px">
          <h1 className="fs-18px weight-7 white text-center">
            PLAY UPCOMING LOTTERIES ONLINE
          </h1>
        </header>

        <main className={styles.card}>
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />

          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
          <UpcomingLotteryCard />
        </main>
      </div>
    </section>
  );
}

export default UpcomingLotteries;
