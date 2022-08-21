import HeroCard from "components/HeroCard";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/layout/Hero.module.scss";

function Hero() {
  const isBellow500px = useMediaQuery("(max-width : 31.25em)");

  return (
    <div>
      <div className={isBellow500px ? "" : `container-wrapper`}>
        <img src="images/hero-banner.png" className="w-full mb-20px" alt="" />
      </div>

      <div className="container-wrapper">
        <div className={styles.cards}>
          <HeroCard
            icon="images/laptop.png"
            title="you pick"
            desc="It’s easy! Pick from over 40 official lottery games you wish to play. Then select your winning numbers."
            linkOptions={{
              link: "/",
              value: "Play Now » ",
            }}
          />
          <HeroCard
            icon="images/mart.png"
            title="we buy"
            desc="Once you’ve picked your winning numbers we’ll purchase your ticket on your behalf."
            linkOptions={{
              link: "/",
              value: "More Details »",
            }}
          />
          <HeroCard
            icon="images/money.png"
            title="you win!!!"
            desc="When you win, we’ll automatically credit your account the full value of your winnings."
            linkOptions={{
              link: "/",
              value: "Withdraw My Winnings »",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
