import { Movie } from "../Movie/Movie";

export const Movies= ({ movies }) => {

    return <div className="movies">
        {
            movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie} />
            ))
        }
    </div>;
}
