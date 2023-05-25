import PropTypes from "prop-types";
import styled from "styled-components";

export default function MovieContainer({ image }) {
  return (
    <Container>
      <img src={image} alt="poster" />
    </Container>
  );
}

MovieContainer.propTypes = {
  image: PropTypes.string.isRequired,
};

const Container = styled.div`
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
