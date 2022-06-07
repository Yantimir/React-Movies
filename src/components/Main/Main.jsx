import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { Movies } from "../Movies/Movies";
import { Preloader } from "../Preloader/Preloader";

export const Main = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://www.omdbapi.com/?apikey=28dc1872&s=matrix")
            .then(res => res.json())
            .then(dataMovies => setMovies(dataMovies.Search))

    }, []);

    return (
        <main className="main__container content">
            <Search/>
            {
                movies?.length
                    ? <Movies movies={movies} />
                    : <Preloader />
            }

        </main>
    )
}
