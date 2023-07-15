//
// NotFoundPage
//  404 page
//

// components
import Nav from "@/components/nav";
import Footer from "@/components/footer";
// styles
import styles from "./not-found.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.info}>
        <h2>404 Not Found</h2>
        <p>there's nothing here :(</p>
      </div>
      <Footer />
    </div>
  );
}