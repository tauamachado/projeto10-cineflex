import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieContainer from "./MovieContainer";



export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://mock-api.driven.com.br/api/v8/cineflex/movies"
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <PageContainer>
      <p>Selecione o filme</p>
      <ListContainer>
        {movies.map((movie) => (
          <MovieContainer key={movie.id} image={movie.posterURL} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;

const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
