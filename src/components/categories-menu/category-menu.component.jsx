import CategoryItem from "../category-item/category-item.component";
import "./category-menu.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
