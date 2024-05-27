"use client";

import { IItems } from "@/shared/types";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createStrictContext, useStrictContext } from "@/shared/lib";

interface IAppContext {
  selectedNav: string;
  items: IItems[];
  filteredItems: IItems[];
  setSelectedNavState: (selectedNav: string) => void;
  setItemsState: (items: IItems[]) => void;
}

const AppContext = createStrictContext<IAppContext>();

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState<string>("Все темы");
  const [items, setItems] = useState<IItems[]>([]);
  const [filteredItems, setFilteredItems] = useState<IItems[]>([]);

  useEffect(() => {
    setFilteredItems(
      selectedNav === "Все темы"
        ? items
        : items.filter((item) => item.tags.includes(selectedNav)),
    );
  }, [selectedNav, items]);

  const setSelectedNavState = useCallback((nav: string) => {
    setSelectedNav(nav);
  }, []);

  const setItemsState = useCallback((newItems: IItems[]) => {
    setItems(newItems);
  }, []);

  const value = useMemo(
    () => ({
      selectedNav,
      items,
      filteredItems,
      setSelectedNavState,
      setItemsState,
    }),
    [selectedNav, items, filteredItems, setSelectedNavState, setItemsState],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useStrictContext(AppContext);
};
