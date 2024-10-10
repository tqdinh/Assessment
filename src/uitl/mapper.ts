import MovieDetailDto from "data/data_sources/MovieDetailDTO";
import MovieDTO from "data/data_sources/MovieDTO";
import Movie from "domain/Movie";
import MovieDetail from "domain/MovieDetail";
export function mapToMovie(movieDTO: MovieDTO): Movie {

    return new Movie(
        movieDTO.tilte,
        movieDTO.year,
        movieDTO.imdbId,
        movieDTO.rank,
        movieDTO.actors,
        movieDTO.imdbUrl,
        movieDTO.imgPoster,
        movieDTO.photoWidth,
        movieDTO.photoHeight
    );
}
export function mapToListOfDto(rawMovies: any[]): MovieDTO[] {
    return rawMovies.map(movie => new MovieDTO(
        movie["#TITLE"] || "No tiltle",                   // title
        movie["#YEAR"] || 1900,                    // year
        movie["#IMDB_ID"] || null,                 // imdbId
        movie["#RANK"] ?? -1,                    // rank
        movie["#ACTORS"] ? movie["#ACTORS"].split(",") : [],  // actors (assume comma-separated string)
        movie["#IMDB_URL"],                // imdbUrl
        movie["#IMG_POSTER"] || "",              // imgPoster
        movie["photo_width"] ?? -1,              // photoWidth
        movie["photo_height"] ?? -1              // photoHeight
    ));
}

export function mapToMovieDetailDto(rawData: any): MovieDetailDto {
    const mappedActors = rawData["actor"].map((actor: { name: any; url: any; }) => ({
        name: actor.name,
    }));
    const aggregateRating = rawData["aggregateRating"]

    const duration = (rawData["duration"]).toString().replace('PT', '')
        .replace('H', 'h')
        .replace('M', 'm');

    return new MovieDetailDto(rawData["name"], rawData["image"], mappedActors, rawData["description"], rawData["genre"], aggregateRating["ratingCount"], aggregateRating["ratingValue"], rawData["datePublished"], duration)

}

export function mapToMovieDetail(dto: MovieDetailDto): MovieDetail {
    return new MovieDetail(dto.title, dto.poster, dto.actors, dto.description, dto.genre, dto.ratingCount, dto.ratingValue, dto.datePublished, dto.duration)
}
