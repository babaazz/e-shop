import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "../../components/category-preview/category-preview.component";
import "./collection-preview.styles.scss";

const CollectionPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="collection-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoriesPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CollectionPreview;
