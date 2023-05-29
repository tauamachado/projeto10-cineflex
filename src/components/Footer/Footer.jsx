import { FooterContainer, PosterContainer, TitleContainer, Poster } from "./styledComponents.js";

export default function Footer({ poster, movieTitle, weekday, time }) {
  return (
    <FooterContainer>
      <PosterContainer data-test="footer">
        <Poster src={poster} alt="poster" />
      </PosterContainer>
      <TitleContainer>
        <p>{movieTitle}</p>
        {weekday && time && <p>{weekday} - {time}</p>}
      </TitleContainer>
    </FooterContainer>
  );
}
