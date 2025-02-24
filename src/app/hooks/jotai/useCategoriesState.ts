import { atom } from "jotai";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const categoriesState = atom<string[]>([
  "React.js",
  "Vue.js",
  "Angular",
]);

export const useCategoriesState = () => {
  const [state, setState] = useAtom(categoriesState);

  const pushCategories = useCallback(
    (category: string) => {
      setState((prev) => [...prev, category]);
    },
    [setState]
  );

  const removeCategory = useCallback(
    (category: string) => {
      setState((prev) => prev.filter((c) => c !== category));
    },
    [setState]
  );

  return {
    categories: state,
    setCategories: setState,
    pushCategories,
    removeCategory,
  };
};
