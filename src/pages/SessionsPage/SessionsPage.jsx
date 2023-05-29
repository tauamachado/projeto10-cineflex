import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PageContainer, ListContainer } from "./styledComponents.js";
import SessionCard from "../../components/SessionCard/SessionCard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { BASE_URL } from "../../constants/urls.js";

export default function SessionsPage() {
  const { idFilme } = useParams();
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/${idFilme}/showtimes`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response.data));
  }, [idFilme]);

  if (movie === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer>
      <div>Selecione o horário</div>
      <ListContainer>
        {movie.days.map((s) => (
          <SessionCard data-test="movie-day" key={s.id} session={s} />
        ))}
      </ListContainer>
      <Footer data-test="footer" movieTitle={movie.title} poster={movie.posterURL} />
    </PageContainer>
  );
}
