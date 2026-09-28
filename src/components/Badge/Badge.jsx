import clsx from "clsx";
import styles from "./Badge.module.scss";

export function Badge({ status = "success", children }) {
  return (
    <span
      className={clsx(styles.badge, {
        [styles.success]: status === "success",
        [styles.warning]: status === "warning",
        [styles.error]: status === "error",
      })}
    >
      {children}
    </span>
  );
}
