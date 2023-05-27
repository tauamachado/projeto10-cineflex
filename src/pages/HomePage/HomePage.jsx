import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import styled from "styled-components";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://mock-api.driven.com.br/api/v8/cineflex/movies"
      );
      setMovies(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <PageContainer>
      <p>Selecione o filme</p>
      <ListContainer>
        {isLoading ? (
          <LoadingContainer>
            <ReactLoading type="spinningBubbles" color="#C3CFD9" height={100} width={100} />
          </LoadingContainer>
        ) : (
          movies.map((movie) => (
            <Link key={movie.id} to={`/sessoes/${movie.id}`}>
              <MovieContainer>
                <div>
                  <img src={movie.posterURL} alt={movie.title} />
                </div>
              </MovieContainer>
            </Link>
          ))
        )}
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

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001A;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  img {
    width: 130px;
    height: 190px;
  }
`;

const LoadingContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
