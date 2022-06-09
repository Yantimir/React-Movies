import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { Movie } from "../Movie/Movie";

export const Movies = () => {

    const { movies } = useContext(AppContext);

    return <div className="movies">
        {
            movies?.length 
            ? movies?.map((movie) => (<Movie key={movie?.imdbID} {...movie} />)) 
            : <h4>Nothing found</h4>
        }
    </div>;
}
