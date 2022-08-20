import Link from "next/link";
import React from "react";
import styles from "scss/layout/Navbar.module.scss";
import { BiChevronDown } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src="images/logo.png" className={styles.logo} alt="" />
            </div>
            <div className={styles.center}>
              <div className="fs-14px black weight-4 mb-5px">
                Welcome <span className="weight-7">Roma</span> —{" "}
                <button className="weight-5 blue pointer">Logout</button>
              </div>

              <p className="fs-14px black weight-4">
                Your balance: <span className="weight-7">Р 0,00</span>
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.socialIcons}>
                <Link href="/" passHref>
                  <a>
                    <FaFacebookF />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <FaTwitter />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <FaFacebookMessenger />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <FaWhatsapp />
                  </a>
                </Link>
              </div>

              <div className={styles.languageDropdown}>
                <button className={`${styles.dropdownBtn} pointer`}>
                  <img src="images/country-icon-1.png" alt="" />
                  <p className="fs-14px blcak weight-4">English</p>
                  <span>
                    <BiChevronDown color="black" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.links_left}>
              <Link href="/" passHref>
                <a className="fs-16px white weight-7">Home</a>
              </Link>
              <Link href="/" passHref>
                <a className="fs-16px white weight-7">PLAY ALL lottery</a>
              </Link>
              <Link href="/" passHref>
                <a className="fs-16px white weight-7">LOTTERY GROUPS</a>
              </Link>
              <Link href="/" passHref>
                <a className="fs-16px white weight-7">Promotions</a>
              </Link>
            </div>
            <div className={styles.links_right}>
              <Link href="/" passHref>
                <a className={`${styles.account_btn} fs-16px white weight-7`}>
                  My Account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
