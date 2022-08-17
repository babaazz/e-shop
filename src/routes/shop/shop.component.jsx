import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndProducts } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/actions/categories/categoriesActions.js";

import CollectionPreview from "../collection-preview/collection-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesAndData = async () => {
      const categoriesData = await getCategoriesAndProducts();
      dispatch(setCategoriesMap(categoriesData));
    };
    getCategoriesAndData();
  }, []);
  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
