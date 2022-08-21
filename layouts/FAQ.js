import Accordion from "components/Accordion";
import React from "react";
import styles from "scss/layout/FAQ.module.scss";

function FAQ() {
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <h1 className="black fs-24px weight-5 uppercase mb-30px">
          FREQUENTLY ASKED QUESTION (F.A.Q.)
        </h1>

        <div className={styles.faqs}>
          <Accordion question="Can I play the lottery online?">
            <p className="fs-16px black weight-5 lh-1_6 opacity-0_6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolor. Inventore maiores natus totam temporibus explicabo facilis
              obcaecati optio omnis iure praesentium! Voluptates, fugiat!
              Repellat animi minima quae nostrum incidunt.
            </p>
          </Accordion>
          <Accordion question="How will I get my wins?">
            <p className="fs-16px black weight-5 lh-1_6 opacity-0_6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolor. Inventore maiores natus totam temporibus explicabo facilis
              obcaecati optio omnis iure praesentium! Voluptates, fugiat!
              Repellat animi minima quae nostrum incidunt.
            </p>
          </Accordion>
          <Accordion question="Is it safe to play lottery online?">
            <p className="fs-16px black weight-5 lh-1_6 opacity-0_6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              dolor. Inventore maiores natus totam temporibus explicabo facilis
              obcaecati optio omnis iure praesentium! Voluptates, fugiat!
              Repellat animi minima quae nostrum incidunt.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
