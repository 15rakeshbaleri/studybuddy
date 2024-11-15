import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div
      className={`container vh-100 d-flex justify-content-center align-items-center ${styles.footerBackground}`}
    >
      <div className={`card w-75 ${styles.card}`}>
        <div className="row g-0">
       
          <div className={`col-md-6 ${styles.leftSection}`}>
            <LeftSection />
          </div>
          <div className="col-md-6 p-5">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
