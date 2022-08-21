import Link from "next/link";
import React, { useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import { BiChevronDown } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoMenu, IoPerson } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isSidebarShow, setSidebarShow] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarShow(false));

  return (
    <nav>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <button
                className={styles.hamburger}
                onClick={() => setSidebarShow((val) => !val)}
              >
                <IoMenu />
              </button>
              <img src="images/logo.png" className={styles.logo} alt="" />
              <button className={styles.account}>
                <IoPerson />
              </button>
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

          <div
            className={`${styles.bottom} ${
              isSidebarShow ? styles.active : null
            }`}
            ref={sidebarRef}
          >
            <img src="images/logo.png" className={styles.sidebarLogo} alt="" />

            <button
              className={styles.close_icon}
              onClick={() => setSidebarShow((val) => !val)}
            >
              <IoIosClose />
            </button>

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

              <div className={styles.mobileLinks}>
                <div className={styles.languageDropdown}>
                  <button className={`${styles.dropdownBtn} pointer`}>
                    <img src="images/country-icon-1.png" alt="" />
                    <p className="fs-14px blcak weight-4">English</p>
                    <span>
                      <BiChevronDown color="black" />
                    </span>
                  </button>
                </div>
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
              </div>
            </div>
          </div>

          <div className={`black-screen ${isSidebarShow ? "show" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
