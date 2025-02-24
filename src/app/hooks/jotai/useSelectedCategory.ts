import { atom } from "jotai";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const selectedCategoryState = atom<string[]>([]);

export const useSelectedCategoryState = () => {
  const [state, setState] = useAtom(selectedCategoryState);

  const pushSelectedCategory = useCallback(
    (category: string) => {
      setState((prev) => [...prev, category]);
    },
    [setState]
  );

  const removeSelectedCategory = useCallback(
    (category: string) => {
      setState((prev) => prev.filter((c) => c !== category));
    },
    [setState]
  );

  return {
    selectedCategories: state,
    setSelectedCategories: setState,
    pushSelectedCategory,
    removeSelectedCategory,
  };
};
