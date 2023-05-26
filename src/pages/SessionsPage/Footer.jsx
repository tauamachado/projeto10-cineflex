import styled from "styled-components"

export default function Footer() {
  return (
    <ContainerFooter>
      <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="poster" />
      <p>Zack Snyder Justice League</p>
    </ContainerFooter>
  )
}

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  background-color: #DFE6ED;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #9EADBA;
  img {
    margin-left: 10px;
    width: 48px;
    height: 72px;
    border: 8px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #293845;
    margin-left: 14px;
  }
}
`;
