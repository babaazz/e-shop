import { createSelector } from "reselect";

const selectCategoriesSlice = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const categorySelector = createSelector(
  [selectCategories],
  (categoriesArray) =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
