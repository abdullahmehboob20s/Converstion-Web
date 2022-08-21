import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "scss/layout/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <img src="images/stars.png" className={styles.stars} alt="" />

      <div className="container-wrapper-2">
        <header className="mb-35px">
          <div className={styles.left}>
            <Link href="/">
              <a target="_blank" className={styles.whatsappIcon}>
                <FaWhatsapp />
              </a>
            </Link>
            <div>
              <h2 className="fs-16px black weight-5 mb-5px">
                Live chat by WhatsApp
              </h2>
              <p className="fs-12px weight-4 black opacity-0_8">
                Customer Service
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <Link href="/">
              <a target="_blank">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank">
                <FaTwitter />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank">
                <FaFacebookMessenger />
              </a>
            </Link>
          </div>
        </header>

        <main>
          <div>
            <h2 className="fs-16px black weight-5 mb-15px">USEFUL LINKS</h2>

            <div>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Lottery Results & Winners
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Lottery Promotions
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  About Us
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Contact Us
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Terms & Conditions
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Security
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px"></a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Acceptable Use Policy
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-4 mb-5px">
                  Website Use Policy
                </a>
              </Link>
              <Link href="/">
                <a className="block w-fit fs-16px black weight-7 mb-5px">
                  Affiliate program
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="fs-16px black weight-5 mb-15px">SMARTWINNERS</h2>

            <div>
              <p className="fs-12px weight-4 black lh-1_6 mb-10px">
                The trade name SmartWinners and all content on this website is a
                copyright of SmartWinners Limited. All rights reserved. We are
                an independent lottery ticket purchasing service. We are not
                affiliated with nor are we endorsed by any State sanctioned
                lottery organization. We make no claims on our site to be such.{" "}
              </p>
              <p className="fs-12px weight-4 black lh-1_8 mb-5px">
                Our registered business address is Unit 6158, PO Box 6945,
                London, W1A 6US, United Kingdom.
              </p>
            </div>
          </div>
          <div>
            <h2 className="fs-16px black weight-5 mb-15px">PAYMENT METHODS</h2>

            <div>
              <div className={`${styles.paymentMethods} mb-30px`}>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/visa.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img
                      src="images/mastercard.png"
                      alt=""
                      className="w-full"
                    />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/maestro.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/diners.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/skrill.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/bitcoin.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/q.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/triangles.png" alt="" className="w-full" />
                  </a>
                </Link>
                <Link href="/">
                  <a target="_blank">
                    <img src="images/litecoin.png" alt="" className="w-full" />
                  </a>
                </Link>
              </div>

              <div>
                <h2 className="fs-16px black weight-5 mb-15px">
                  SECURITY & TRUST
                </h2>
                <div className={styles.security}>
                  <img src="images/nov.png" alt="" />
                  <img src="images/secure.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Footer;
