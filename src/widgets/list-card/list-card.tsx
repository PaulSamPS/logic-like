"use client";

import { useEffect, useMemo } from "react";
import { IItems } from "@/shared/types";
import styles from "./list-card.module.scss";
import { Card } from "@/entities/card";
import { useAppContext } from "@/shared/context";

type ListCardProps = {
  items: IItems[];
};

const ListCard = ({ items }: ListCardProps) => {
  const { filteredItems, setItemsState } = useAppContext();

  useEffect(() => {
    setItemsState(items);
  }, [items, setItemsState]);

  const renderedItems = useMemo(
    () =>
      filteredItems.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          bgColor={item.bgColor}
          ariaLabel={`Карточка ${item.name}`}
        />
      )),
    [filteredItems],
  );

  return (
    <div className={styles.list} role="list" aria-label="Список карточек">
      {renderedItems}
    </div>
  );
};

ListCard.displayName = "ListCard";

export default ListCard;
