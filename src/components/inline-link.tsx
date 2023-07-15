//
// InlineLink
//  link and symbol
//

// styles
import styles from "./inline-link.module.scss";
// components
import Link from "next/link";
import Icon from "@/components/icon";

interface InlineLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function InlineLink({ children, href }: InlineLinkProps) {
  return (
    <Link className={styles.link} href={href} target="_blank" rel="noreferrer noopener">{children}<Icon bold>arrow_forward</Icon></Link>
  );
}
