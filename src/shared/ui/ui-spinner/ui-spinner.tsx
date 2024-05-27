import React, { FC } from "react";
import cx from "clsx";
import { IconSpinner } from "./assets";
import styles from "./ui-spinner.module.scss";

export interface SpinnerProps {
  position?: "absolute" | "relative" | "fixed";
  color?: string;
  bg?: "transparent" | "black";
  ariaLabel?: string;
}

export const UiSpinner: FC<SpinnerProps> = ({
  position = "absolute",
  color,
  bg = "black",
  ariaLabel = "Загружается...",
  ...restProps
}) => {
  const spinnerClassName = cx(
    styles.spinner,
    styles[bg],
    {
      fixed: styles.fixed,
      absolute: styles.absolute,
      relative: styles.relative,
    }[position],
  );

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={spinnerClassName}
      style={{ color }}
      {...restProps}
    >
      <IconSpinner aria-hidden="true" className={styles.self} />
    </span>
  );
};
