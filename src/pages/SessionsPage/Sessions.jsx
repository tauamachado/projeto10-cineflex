import React from 'react';
import styled from 'styled-components';

export default function Sessions({ session }) {
  const { weekday, date, showtimes } = session;

  return (
    <SessionContainer>
      <SessionInfo>
        <p>{weekday} - {date}</p>
      </SessionInfo>
      <ButtonsContainer>
        {showtimes.map(showtime => (
          <button key={showtime.id}>{showtime.name}</button>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}

const SessionContainer = styled.div`
  margin-top: 12px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #293845;
    margin-top: 23px;
  }
`;

const SessionInfo = styled.div`
  display: flex;
`;

const ButtonsContainer = styled.div`
  margin-top: 22px;
  display: flex;

  button {
    font-family: 'Roboto', sans-serif;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
  }
`;
