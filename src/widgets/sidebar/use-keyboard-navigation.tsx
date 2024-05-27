import { useCallback, useState, KeyboardEvent, useEffect } from "react";

type NavItems = {
  id: number;
  name: string;
};

type UseKeyboardNavigationProps = {
  itemsLength: number;
  navItems: NavItems[];
  setSelectedNavState: (value: string) => void;
};

export const useKeyboardNavigation = ({
  itemsLength,
  navItems,
  setSelectedNavState,
}: UseKeyboardNavigationProps) => {
  const [keyboardNavIndex, setKeyboardNavIndex] = useState<number>(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, name: string, index: number) => {
      switch (event.key) {
        case "Enter":
        case " ":
          setSelectedNavState(name);
          setKeyboardNavIndex(index);
          break;
        case "ArrowUp":
          setKeyboardNavIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : itemsLength - 1,
          );
          break;
        case "ArrowDown":
          setKeyboardNavIndex((prevIndex) =>
            prevIndex < itemsLength - 1 ? prevIndex + 1 : 0,
          );
          break;
        default:
          break;
      }
    },
    [setSelectedNavState, itemsLength],
  );
  useEffect(() => {
    if (setSelectedNavState) {
      setSelectedNavState(navItems[keyboardNavIndex].name);
    }
  }, [keyboardNavIndex, navItems, setSelectedNavState]);

  return { handleKeyDown, setKeyboardNavIndex };
};
