import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PageContainer, ListContainer } from "./styledComponents";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import { BASE_URL } from "../../constants/urls.js";

export default function HomePage() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  // Tetei de algumas maneiras implementar react-loading aqui e falhei miseravelmente...
  if (movies === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <PageContainer>
      <p>Selecione o filme</p>
      <ListContainer>
        {movies.map((m) => (
          <Link data-test="movie" key={m.id} to={`/sessoes/${m.id}`}>
            <MovieCard poster={m.posterURL} />
          </Link>
        ))}
      </ListContainer>
    </PageContainer>
  );
}
