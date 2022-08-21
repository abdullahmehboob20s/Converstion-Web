import Banner from "components/Banner";
import UpcomingLotteryCard from "components/UpcomingLotteryCard";
import React from "react";
import styles from "scss/layout/UpcomingLotteries.module.scss";

function UpcomingLotteries() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="mb-20px">
          <Banner title="PLAY UPCOMING LOTTERIES ONLINE" />
        </div>

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
