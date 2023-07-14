//
// Footer
//  site footer
//

// styles
import styles from "./footer.module.scss";
// components
import Icon from "@/components/icon";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>made with <Icon fill>favorite</Icon> by Mack Rusing</p>
    </footer>
  );
}