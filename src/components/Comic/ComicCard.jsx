import { HomeBanner, Card } from "./ComicCard.style";
import homeBanner from "../../assets/home-banner.jpg";
import placeholderImg from "../../assets/placeholder.png";

const ComicCard = ({ title, thumbnail }) => {
  return (
    <>
      <HomeBanner src={homeBanner} alt="home banner" />

      <Card>
        <img
          src={
            thumbnail && thumbnail.path && thumbnail.extension
              ? `${thumbnail.path}.${thumbnail.extension}`
              : placeholderImg
          }
          alt={title}
        />
        <h3>teste</h3>
      </Card>
    </>
  );
};

export default ComicCard;
