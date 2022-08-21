import React from "react";
import styles from "scss/components/Button.module.scss";

function Button({ title, className, children, bgVariant = 0 }) {
  const bgs = ["#F7D300"];

  return (
    <button
      className={`${styles.button} ${className} fs-14px black weight-5 pointer`}
      style={{ backgroundColor: bgs[bgVariant] }}
    >
      {title ? title : null}
      {children ? children : null}
    </button>
  );
}

export default Button;
