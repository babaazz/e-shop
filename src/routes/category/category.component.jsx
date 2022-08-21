import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { categorySelector } from "../../store/actions/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelector);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
