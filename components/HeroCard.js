import Link from "next/link";
import React from "react";
import styles from "scss/components/HeroCard.module.scss";

function HeroCard({ title, desc, linkOptions, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={icon} alt="" />
      </div>
      <div>
        <div className={`mb-10px ${styles.card_header}`}>
          <h2 className="black fs-16px weight-5 uppercase">{title}</h2>
          <Link href={linkOptions.link ? linkOptions.link : "/"} passHref>
            <a className="blue fs-14px weight-5 pointer underline">
              {linkOptions.value}
            </a>
          </Link>
        </div>

        <p className="fs-14px weight-4 opacity-0_7 lh-1_5">{desc}</p>
      </div>
    </div>
  );
}

export default HeroCard;
