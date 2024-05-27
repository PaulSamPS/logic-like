"use client";

import styles from "./sidebar.module.scss";
import { useCallback, useMemo } from "react";
import { useAppContext } from "@/shared/context";
import { useKeyboardNavigation } from "./use-keyboard-navigation";
import clsx from "clsx";

const NAV_ITEMS = [
  { id: 0, name: "Все темы" },
  { id: 1, name: "Логика и мышление" },
  { id: 2, name: "Загадки" },
  { id: 3, name: "Головоломки" },
  { id: 4, name: "Окружающий мир" },
  { id: 5, name: "Страны и столицы" },
];

export const Sidebar = () => {
  const { setSelectedNavState, selectedNav } = useAppContext();
  const { setKeyboardNavIndex, handleKeyDown } = useKeyboardNavigation({
    navItems: NAV_ITEMS,
    itemsLength: NAV_ITEMS.length,
    setSelectedNavState,
  });

  const handleClick = useCallback(
    (name: string, index: number) => {
      setSelectedNavState(name);
      setKeyboardNavIndex(index);
    },
    [setKeyboardNavIndex, setSelectedNavState],
  );

  const renderedItems = useMemo(
    () =>
      NAV_ITEMS.map(({ id, name }, index) => (
        <span
          key={id}
          className={clsx(styles.item, {
            [styles.active]: selectedNav === name,
          })}
          onClick={() => handleClick(name, index)}
          onKeyDown={(e) => handleKeyDown(e, name, index)}
          aria-current={selectedNav === name ? "page" : undefined}
          aria-label={name}
          role="link"
          tabIndex={0}
        >
          {name}
        </span>
      )),
    [handleClick, handleKeyDown, selectedNav],
  );

  return (
    <nav className={styles.wrapper} aria-label="Навигация по боковой панели">
      {renderedItems}
    </nav>
  );
};
