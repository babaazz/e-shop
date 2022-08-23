import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/actions/categories/categoriesActions";

import CollectionPreview from "../collection-preview/collection-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesAndData = () => {
      dispatch(fetchCategoriesAsync());
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
