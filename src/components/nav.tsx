//
// Nav
//  site nav bar
//

// components
// import Link from "next/link";
// styles
import styles from "./nav.module.scss";
import utilStyles from "@/styles/util.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="/">mack<span className={utilStyles.txtSecondary}>k.net</span></a>
      <a className={styles.navLink} href="https://github.com/mackrusing" target="_blank" rel="noreferrer noopener">github</a>
      <a className={`${styles.navLink} ${styles.disabled} ${utilStyles.txtSecondary}`}>blog</a>
    </nav>
  );
}
