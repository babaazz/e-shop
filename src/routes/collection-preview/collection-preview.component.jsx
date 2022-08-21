import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/category-preview/category-preview.component";
import { categorySelector } from "../../store/actions/categories/categories.selector";
import "./collection-preview.styles.scss";

const CollectionPreview = () => {
  const categoriesMap = useSelector(categorySelector);
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
