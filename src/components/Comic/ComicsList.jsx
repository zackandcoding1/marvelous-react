import { useEffect, useState } from "react";
import { marvelApi } from "../../services/marvelApi";
import ComicCard from "./ComicCard";
import { Grid } from "./ComicsList.style";

const ComicsList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function fetchComics() {
      try {
        const response = await marvelApi.get("/comics", {
          params: { limit: 12 },
        });
        setComics(reponse.data.data.results);
      } catch (error) {
        console.error("Erro ao buscar quadrinhos:", error);
      }
    }
    fetchComics();
  }, []);

  return (
    <>
      <ComicCard />
      <Grid>
        {comics.map((comic) => (
          <ComicCard
            key={comic.id}
            title={comic.title}
            thumbnail={comic.thumbnail}
          />
        ))}
      </Grid>
    </>
  );
};

export default ComicsList;
