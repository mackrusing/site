//
// Article
//  main page content
//

// styles
import styles from "./article.module.scss";

interface ArticleProps {
  children: React.ReactNode;
}

export default function Article({ children }: ArticleProps) {
  return (
    <article className={styles.article}>
      {children}
    </article>
  );
}