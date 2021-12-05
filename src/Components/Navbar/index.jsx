import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbarLink}>Home</Link>
      <Link to="/contact" className={styles.navbarLink}>Contant Page</Link>
      <Link to="/about-us" className={styles.navbarLink}>About Page</Link>
      <Link to="/services" className={styles.navbarLink}>Service Page</Link>
      <Link to="/login" className={styles.navbarLink}>Login Page</Link>
    </div>
  );
}

export default Navbar;