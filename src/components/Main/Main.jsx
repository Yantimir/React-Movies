import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { Movies } from "../Movies/Movies";
import { Preloader } from "../Preloader/Preloader";

export const Main = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setIsLoading(!isLoading);
        fetch("http://www.omdbapi.com/?apikey=28dc1872&s=matrix")
            .then(res => res.json())
            .then(dataMovies => setMovies(dataMovies.Search))
            .catch((err) => console.error(err))
            .finally(() => {
                setIsLoading(isLoading);
            });
        // eslint-disable-next-line
    }, []);

    const handleSearchQuery = (inputValue) => {
        setSearchQuery(inputValue);
    }

    const searchMovies = () => {
        const data = searchQuery;
        fetch(`http://www.omdbapi.com/?apikey=28dc1872&s=${data}`)
            .then(res => res.json())
            .then(dataMovies => setMovies(dataMovies.Search))
            .catch((err)=> console.error(err))
    }

    return (
        <main className="main__container content">
            <Search 
                handleSearchQuery={handleSearchQuery} 
                searchMovies={searchMovies}
            />
            {
                movies?.length
                    ? <Movies movies={movies} />
                    : <Preloader />
            }
        </main>
    )
}
