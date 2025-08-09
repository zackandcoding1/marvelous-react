import { Card } from "./ComicCard.style";
import placeholderImg from "../../assets/placeholder.png";

const ComicCard = ({ title, thumbnail }) => {
  const hasThumb = thumbnail?.path && thumbnail?.extension;
  const src = hasThumb ? `${thumbnail.path}.${thumbnail.extension}` : placeholderImg;

  return (
    <>
      <Card>
        <img src={src} alt={title}/>
        <h3>{title}</h3>
      </Card>
    </>
  );
};

export default ComicCard;
