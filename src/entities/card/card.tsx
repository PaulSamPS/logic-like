import React, { memo } from "react";
import Image from "next/image";
import styles from "./card.module.scss";

interface CardProps {
  image: string;
  name: string;
  bgColor: string;
  ariaLabel?: string;
}

export const Card = memo(({ image, name, bgColor, ariaLabel }: CardProps) => {
  return (
    <div className={styles.container} aria-label={ariaLabel} role={"listitem"}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64`}
            style={{ backgroundColor: `${bgColor}`, objectFit: "contain" }}
          />
        </div>
        <div className={styles.bottom}>{name}</div>
      </div>
    </div>
  );
});

Card.displayName = "Card";
