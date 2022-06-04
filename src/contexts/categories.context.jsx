import { createContext, useState, useEffect } from "react";
import { getCategoriesAndProducts } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap };
  useEffect(() => {
    const getCategoriesAndData = async () => {
      const categoriesData = await getCategoriesAndProducts();
      setCategoriesMap(categoriesData);
    };
    getCategoriesAndData();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
