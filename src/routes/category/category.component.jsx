import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import {
  categorySelector,
  isLoadingSelector,
} from "../../store/actions/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelector);
  const isLoading = useSelector(isLoadingSelector);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      <h1 className="title">{category.toUpperCase()}</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
