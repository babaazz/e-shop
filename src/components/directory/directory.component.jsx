import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <div className="main-container">
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};

export default Directory;
