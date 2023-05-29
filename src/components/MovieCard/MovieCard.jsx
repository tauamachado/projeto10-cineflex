import { MovieContainer, MovieImage } from "./styledComponents.js"

export default function MovieCard({ poster }) {
    return (
        <MovieContainer>
            <MovieImage src={poster} alt="poster" />
        </MovieContainer>
    )
}

