//
// HomePage
//  site home
//

// components
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Article from "@/components/article";
// content
import HomeContent from "@/content/home.mdx";
// styles
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Article><HomeContent /></Article>
      <Footer />
    </div>
  );
}
