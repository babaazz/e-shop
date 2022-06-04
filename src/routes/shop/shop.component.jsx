import { Routes, Route } from "react-router-dom";
import CollectionPreview from "../collection-preview/collection-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
