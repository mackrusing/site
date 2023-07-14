//
// Icon
//  google material symbols icons
//

import styles from "./icon.module.scss";

interface IconProps {
  children: React.ReactNode;
  fill?: boolean;
}

export default function Icon({ children, fill }: IconProps) {
  if (fill) {
    return (<span className={`${styles.icon} ${styles.fill}`}>{children}</span>);
  } else {
    return (<span className={`${styles.icon}`}>{children}</span>);
  }
}