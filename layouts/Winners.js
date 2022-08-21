import Button from "components/Button";
import LatestWinnerCard from "components/LatestWinnerCard";
import Link from "next/link";
import React from "react";
import styles from "scss/layout/Winners.module.scss";

function Winners() {
  return (
    <section>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <header className="header-banner mb-20px">
              <h1 className="fs-18px weight-7 white text-center">
                BIGGEST LOTTERY WINNER
              </h1>
            </header>

            <main>
              <div className={`${styles.left_title} mb-25px`}>
                <img src="images/star.png" alt="" />
                <h2 className="fs-28px black weight-5">Won</h2>{" "}
                <h1 className="fs-36px blue weight-7">€100 000 000</h1>
              </div>

              <section>
                <aside>
                  <img
                    src="images/winner-family.png"
                    className="w-full mb-20px"
                    alt=""
                  />

                  <div className={styles.lottries}>
                    <h2 className="fs-14px weight-5 black uppercase">
                      UK Lotto results:
                    </h2>
                    <div>
                      <div className={`${styles.lottries_dates_cards} mb-10px`}>
                        <div className="fs-12px white weight-5">07</div>
                        <div className="fs-12px white weight-5">07</div>
                        <div className="fs-12px white weight-5">07</div>
                        <div className="fs-12px white weight-5">07</div>
                        <div className="fs-12px white weight-5">07</div>
                      </div>
                      <p className="text-center fs-12px weight-4 black">
                        Date: 20.11.2021
                      </p>
                    </div>
                  </div>
                </aside>
                <div>
                  <h1 className="fs-16px black weight-5 mb-15px">
                    Shaun Vincent a Lottery Winner
                  </h1>
                  <p className="fs-14px weight-4 black lh-1_6 mb-30px">
                    Shaun Vincent, from Barnsley, celebrates his £1,158,038
                    National Lottery win after his cheque presentation at the
                    Cedar Court Hotel, Wakefield.
                  </p>

                  <div className="mb-45px">
                    <Link href="/">
                      <a className="w-fit margin-center block underline blue text-center fs-14px weight-5">
                        Read the full story
                      </a>
                    </Link>
                  </div>

                  <Button title="Play Now" />
                </div>
              </section>
            </main>
          </div>
          <div className={styles.right}>
            <header className="header-banner mb-20px">
              <h1 className="fs-18px weight-7 white text-center">
                OUR LATEST WINNERS
              </h1>
            </header>

            <main>
              <header>
                <h2 className="text-center black fs-18px weight-4 mb-5px">
                  Total prizes paid out
                </h2>
                <h1 className="green text-center fs-26px weight-7 mb-5px">
                  US$ 107 233 768
                </h1>
                <div className={styles.tickets}>
                  <h1 className="black fs-26px weight-7 mb-5px">6 975 146</h1>
                  <p className="fs-18px weight-4 black">winning tickets</p>
                </div>
              </header>
              <footer>
                <LatestWinnerCard />
                <LatestWinnerCard />
                <LatestWinnerCard />
              </footer>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Winners;
