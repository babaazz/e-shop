import {
  BackgroundImage,
  DirectoryItemcontainer,
  ContentBody,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemcontainer onClick={clickHandler}>
      <BackgroundImage imgUrl={imageUrl}></BackgroundImage>
      <ContentBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </ContentBody>
    </DirectoryItemcontainer>
  );
};

export default DirectoryItem;
