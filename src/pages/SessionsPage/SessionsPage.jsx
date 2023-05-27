import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idFilme } = useParams();

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );
        setSessions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, [idFilme]);

  return (
    <PageContainer>
      {isLoading ? (
        <LoadingContainer>
          <ReactLoading type="spinningBubbles" color="#C3CFD9" height={100} width={100} />
        </LoadingContainer>
      ) : (
        <>
          <Heading>Selecione o horário</Heading>

          {sessions.days?.map((session) => (
            <SessionContainer key={session.date}>
              <div>{session.weekday} - {session.date}</div>
              <ButtonsContainer>
                {session.showtimes.map((showtime) => (
                  <div key={showtime.id}>
                    <Link to={`/assentos/${showtime.id}`}>
                      <button>{showtime.name}</button>
                    </Link>
                  </div>
                ))}
              </ButtonsContainer>
            </SessionContainer>
          ))}

          <FooterContainer>
            <div>
              <img src={sessions.posterURL} alt={sessions.title} />
            </div>
            <div>
              <p>{sessions.title}</p>
            </div>
          </FooterContainer>
        </>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;

  div {
    margin-top: 20px;
  }
`;

const Heading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #293845;
  text-align: center;
`;

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;

  button {
    margin-right: 20px;
    font-family: 'Roboto', sans-serif;
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;

    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      text-align: left;

      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;

const LoadingContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
